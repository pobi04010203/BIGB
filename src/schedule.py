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
     가중치 8 구역이 가중치 3 구역보다 2.7배 아프다.
  3) **치명 구역(가중치 7 이상)이 요건 미달이면 전체를 미달로 확정한다.** 다른
     구역이 아무리 좋아도 뒤집지 못한다. 안전기준은 평균으로 면제되지 않는다.

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

def required_for(weight: int) -> float:
    """가중치 → 요구 커버리지. 위험할수록 더 많이 요구한다.

    1 → 70% 에서 10 → 99% 까지 선형으로 올린다. **잠정값이다.**
    LH 가 구역별 기준을 게시하면 이 함수를 교체한다.
    """
    w = max(1, min(10, int(weight)))
    return round(0.70 + (0.99 - 0.70) * (w - 1) / 9, 3)


REQUIRED_BY_WEIGHT = {w: required_for(w) for w in range(1, 11)}

# 감점 계수. 정규화한 가중평균 미달폭에 곱한다.
#
# **정규화하는 이유.** 종전에는 감점을 Σ(k·w·미달폭) 으로 그냥 합산했다. 가중치가
# 최대 10 이라 구역 둘만 크게 미달해도 감점이 1.0 을 넘고, 점수가 0 에서 잘려
# 시간대끼리 구별되지 않았다(W1·W3·W5 가 모두 0.000). 판정은 맞지만 크기를
# 읽을 수 없다.
#
# 그래서 **활성 구역 가중치 합으로 나눈다** — 감점이 "가중평균 미달폭"이 되어
# [0, 1] 에 들어가고 커버리지와 같은 눈금에서 읽힌다.
#
# 평균으로 상쇄될 걱정은 없다. 상쇄를 막는 것은 감점의 크기가 아니라 **치명 구역
# 게이트**다(아래 CRITICAL_WEIGHT). 게이트가 그 일을 하므로 감점은 크기를
# 나타내는 데만 쓴다.
PENALTY_K = 1.0

# 이 가중치 이상인 구역이 요건 미달이면 전체를 미달로 확정한다.
CRITICAL_WEIGHT = 7   # 이 이상이면 치명 구역


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
    # 가중치의 출처는 data/zones.json 이다. config 가 아니다.
    base = {z.name: z.weight for z in site.zones}
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
        w = override.get(name, {z.name: z.weight for z in site.zones}.get(name, 1))
        cov = float(sum(1 for i in idx if pt[i] >= thr) / len(idx))
        req = required_for(w)
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

    # 가중평균 미달폭. 분모는 활성 구역의 가중치 합이다
    wsum = sum(z["weight"] for z in zones)
    penalty_raw = sum(z["penalty"] for z in zones)
    penalty = round(penalty_raw / wsum, 4) if wsum else 0.0
    critical = [z["zone"] for z in zones if z["critical_fail"]]
    base = m[config.LH_TARGET_METRIC]
    scored = max(0.0, base - penalty)

    return {
        "window": {k: window[k] for k in ("id", "label", "from", "to")},
        "active_zones": window["active_zones"],
        "metrics": m,
        "zones": zones,
        "penalty_total": round(penalty, 4),
        "penalty_raw": round(penalty_raw, 4),
        "penalty_note": "감점 = Σ(k·가중치·미달폭) / Σ가중치. 가중평균 미달폭이라 "
                        "[0,1] 이며 커버리지와 같은 눈금이다",
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
            "note": f"감점 = Σ(k × 가중치 × 미달폭) / Σ가중치 — 활성 구역 가중치로 정규화한 "
                    f"가중평균 미달폭이다. 가중치 {CRITICAL_WEIGHT} 이상 구역이 미달이면 "
                    "점수와 무관하게 전체 미달로 확정한다. 상쇄를 막는 것은 감점 크기가 "
                    "아니라 이 게이트다",
        },
    }
