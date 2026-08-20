# -*- coding: utf-8 -*-
"""시간대별 위험구역과 구역 감점 (2026-08-20).

**무엇을 하는가.** 위험구역은 하루 내내 같지 않다. 갱폼을 인양하는 시간대에는
작업면과 개구부가 위험하고, 자재를 반입하는 시간대에는 크레인 반경과 야적장이
위험하다. 고정된 카메라 배치가 **그때그때 열려 있는 위험구역을 보고 있는지**를
시간대별로 판정한다.

**선행연구와의 관계.**

  Zhang·Teizer·Pradhananga·Eastman, *Automation in Construction* 29 (2013)
  "BIM and Safety: Automatic Safety Checking of Construction Models and Schedules"
    → 공정·일정에서 위험구역을 **도출**한다. 4D 안전계획의 정통 방식이다.
      우리는 그 발상을 입력으로 받아 쓴다. 도출은 우리 일이 아니다.

  2025.10 ScienceDirect, "Exact optimization of surveillance camera placement in
  dynamic construction sites" (MILP · 공정별 이설비용 · risk-based priority)
    → **카메라를 옮기는 설계**다. 우리는 옮기지 않는다. 고정 배치를 두고
      **시간대별로 진단**하며, 커버리지를 기하가 아니라 실측 검출확률로 잰다.
      축이 달라 중복되지 않는다. `CLAUDE.md` §6 의 4D 제외 방침은 유지된다.

**감점 로직.** 평균으로 상쇄되지 않게 만드는 것이 요점이다.

  1) 구역마다 **요구 커버리지**가 다르다. 위험가중치가 높을수록 더 많이 요구한다.
  2) 요구에 못 미치면 **가중치 × 미달폭** 에 비례해 감점한다. 같은 10%p 미달도
     가중치 5 구역이 가중치 2 구역보다 2.5배 아프다.
  3) **치명 구역(가중치 5)이 요건 미달이면 전체를 미달로 확정한다.** 다른 구역이
     아무리 좋아도 뒤집지 못한다. 안전기준은 평균으로 면제되지 않는다.

3)이 핵심이다. 이것이 없으면 넓은 저위험 구역을 잘 덮어 치명 구역 실패를 가릴 수
있다. 탐지 항목을 최솟값으로 종합한 것(ADDENDUM-01 §5.3)과 같은 이유다.
"""
from pathlib import Path
import json
import sys

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config

SCHEDULE = config.ROOT / "data" / "schedule.json"

# 위험가중치별 요구 커버리지. 위험한 곳일수록 더 많이 요구한다.
# **잠정값이다.** LH 가 구역별 기준을 게시하면 이 표를 교체한다.
REQUIRED_BY_WEIGHT = {5: 0.95, 4: 0.90, 3: 0.85, 2: 0.80, 1: 0.70}

# 감점 계수. 미달폭 1.0(=100%p) 에 가중치 1 이면 이만큼 깎는다.
PENALTY_K = 1.0

# 이 가중치 이상인 구역이 요건 미달이면 전체를 미달로 확정한다.
CRITICAL_WEIGHT = 5


def load(path: Path = None) -> dict:
    path = Path(path or SCHEDULE)
    if not path.exists():
        raise FileNotFoundError(f"{path} 가 없다.")
    return json.loads(path.read_text(encoding="utf-8"))


def window_weights(site, window: dict) -> np.ndarray:
    """이 시간대의 복셀 가중치 벡터.

    활성 구역만 가중치를 낸다. 꺼진 구역은 배경값(1)으로 떨어진다 — 0 이 아니다.
    사람이 있을 수 있는 자리는 시간대와 무관하게 감시 대상이기 때문이다.
    사람이 못 가는 허공은 그대로 0 이다.
    """
    active = set(window["active_zones"])
    override = window.get("weight_override", {})
    base = config.RISK_WEIGHTS
    out = np.zeros(len(site.voxels), dtype=float)
    for i, v in enumerate(site.voxels):
        if not v.get("occupiable", True):
            continue
        w = config.RISK_WEIGHT_DEFAULT
        for name in v["zones"]:
            if name in active:
                w = max(w, override.get(name, base[name]))
        out[i] = w
    return out


def zone_scores(site, pt: np.ndarray, window: dict,
                threshold: float = None) -> list:
    """이 시간대에 열려 있는 구역별 커버리지와 감점."""
    thr = config.P_DETECT_THRESHOLD if threshold is None else threshold
    active = set(window["active_zones"])
    override = window.get("weight_override", {})
    rows = []
    for name in sorted(active):
        idx = [i for i, v in enumerate(site.voxels)
               if name in v["zones"] and v.get("occupiable", True)]
        if not idx:
            continue
        w = override.get(name, config.RISK_WEIGHTS[name])
        cov = float(sum(1 for i in idx if pt[i] >= thr) / len(idx))
        req = REQUIRED_BY_WEIGHT.get(w, 0.70)
        short = max(0.0, req - cov)
        rows.append({
            "zone": name, "weight": w, "voxels": len(idx),
            "coverage": round(cov, 4), "required": req,
            "shortfall": round(short, 4),
            "penalty": round(PENALTY_K * w * short, 4),
            "meets": bool(short <= 0),
            "critical_fail": bool(w >= CRITICAL_WEIGHT and short > 0),
        })
    return rows


def evaluate_window(site, P, plan_idx, window: dict, threshold: float = None) -> dict:
    """시간대 하나를 진단한다."""
    import prescribe
    w = window_weights(site, window)
    pt = prescribe.p_total(P, plan_idx)
    m = prescribe.metrics(pt, w, threshold)
    zones = zone_scores(site, pt, window, threshold)

    penalty = sum(z["penalty"] for z in zones)
    critical = [z["zone"] for z in zones if z["critical_fail"]]
    base = m[config.LH_TARGET_METRIC]
    scored = max(0.0, base - penalty)

    return {
        "window": {k: window[k] for k in ("id", "label", "from", "to")},
        "active_zones": window["active_zones"],
        "metrics": m,
        "zones": zones,
        "penalty_total": round(penalty, 4),
        "base_score": round(base, 4),
        "scored": round(scored, 4),
        "critical_failures": critical,
        # 치명 구역이 하나라도 미달이면 점수와 무관하게 미달이다
        "passes": bool(not critical and scored >= config.LH_COVERAGE_TARGET),
        "verdict": ("치명 구역 미달" if critical
                    else ("충족" if scored >= config.LH_COVERAGE_TARGET else "미달")),
    }


def evaluate_all(site, P, plan_idx, sched: dict = None,
                 threshold: float = None) -> dict:
    """하루 전체. **종합은 최악의 시간대로 대표한다.**

    평균을 쓰면 위험한 시간대의 실패가 한가한 시간대에 가려진다.
    """
    sched = sched or load()
    rows = [evaluate_window(site, P, plan_idx, w, threshold)
            for w in sched["windows"]]
    worst = min(rows, key=lambda r: r["scored"])
    crit = sorted({z for r in rows for z in r["critical_failures"]})
    return {
        "basis": sched.get("_basis", ""),
        "windows": rows,
        "worst_window": worst["window"]["id"],
        "worst_scored": worst["scored"],
        "critical_failures": crit,
        "passes": bool(all(r["passes"] for r in rows)),
        "aggregate": "min",
        "aggregate_note": "시간대 종합은 최악값이다. 평균을 쓰면 위험 시간대의 "
                          "실패가 한가한 시간대에 가려진다",
        "penalty_rule": {
            "required_by_weight": REQUIRED_BY_WEIGHT,
            "penalty_k": PENALTY_K,
            "critical_weight": CRITICAL_WEIGHT,
            "note": "감점 = k × 가중치 × 미달폭. 가중치 5 구역이 미달이면 "
                    "점수와 무관하게 전체 미달로 확정한다",
        },
    }
