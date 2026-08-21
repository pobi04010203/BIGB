# -*- coding: utf-8 -*-
"""커버리지 진단과 처방 (2026-08-19 교수 지시).

**진단** — 주어진 CCTV 계획서가 현장을 얼마나 덮는가. LH 기준을 넘는가.
**처방** — 못 넘으면 어떻게 해야 넘는가.

  1) 같은 대수로 재배치하면 몇 %인가
  2) 목표에 필요한 최소 대수는 몇 대이고 어디에 다는가
  3) 후보를 다 써도 목표에 못 미치면 **그 사실을 명시한다**

커버리지를 두 가지로 낸다. 분모가 다르면 완전히 다른 숫자가 나오므로 하나만
쓰지 않는다.

  공간 커버리지   임계를 넘는 복셀 수 / 전체 복셀 수      — 이해하기 쉽다
  위험가중 (WDR)  Σw·P_total / Σw                        — 안전 논리가 선다

탐욕 선택은 P 행렬(카메라 × 복셀) 위에서 numpy 로 돈다. 복셀이 2천 개를 넘어
파이썬 반복으로는 커버리지-대수 곡선을 뽑을 수 없다. 결과는 종전 구현과 같다.
"""
from pathlib import Path
import sys
# 콘솔 인코딩이 cp949 인 환경에서 출력을 파일로 리디렉션하면, 문자열에 cp949 로
# 표현 못 하는 문자(U+2212 마이너스, U+2014 em dash 등)가 하나만 있어도
# UnicodeEncodeError 로 죽는다. **계산을 다 끝내고 마지막 print 에서 죽는다** —
# 실제로 두 번 겪었다. 문자를 하나씩 쫓는 대신 출력단에서 막는다.
# encoding 은 그대로 두어 한글 콘솔 표시를 유지하고 errors 만 바꾼다.
try:
    sys.stdout.reconfigure(errors="replace")
    sys.stderr.reconfigure(errors="replace")
except (AttributeError, ValueError):
    pass

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config


def build_matrix(site, pairs: dict, curve, cam_ids: list = None) -> tuple:
    """P[카메라, 복셀] 행렬과 가중치 벡터를 만든다."""
    cams = cam_ids if cam_ids is not None else [c.cid for c in site.cameras]
    vox = [v["id"] for v in site.voxels]
    # 사람이 못 가는 허공은 가중치 0 — 분모에서 빠진다. 시각화는 별개로 전부 그린다.
    w = np.array([v["w"] if v.get("occupiable", True) else 0.0
                  for v in site.voxels], dtype=float)
    P = np.zeros((len(cams), len(vox)), dtype=float)
    for i, cid in enumerate(cams):
        for j, vid in enumerate(vox):
            geo = pairs.get((cid, vid))
            if geo is not None:
                P[i, j] = curve.p_detect(geo)
    return cams, P, w


def p_total(P: np.ndarray, idx) -> np.ndarray:
    """선택된 카메라들의 결합 검출확률. 중첩은 이득이다."""
    if len(idx) == 0:
        return np.zeros(P.shape[1])
    return 1.0 - np.prod(1.0 - P[list(idx)], axis=0)


def metrics(pt: np.ndarray, w: np.ndarray, threshold: float = None,
            site=None, zidx: dict = None) -> dict:
    """분모는 사람이 있을 수 있는 복셀(w > 0)뿐이다.

    `site`(또는 미리 만든 `zidx`)를 주면 **100점 만점 점수**를 함께 낸다.
    `score` 는 0~1 로 정규화한 값이라 다른 지표와 같은 눈금에서 비교되고,
    `score_100` 이 화면에 쓰는 값이다. 구역별 분해는 `score_detail` 이다.
    """
    thr = config.P_DETECT_THRESHOLD if threshold is None else threshold
    live = w > 0
    ok = (pt >= thr) & live
    n = int(live.sum())
    extra = {}
    if site is not None or zidx is not None:
        import score as score_mod
        s = score_mod.evaluate(site, pt, thr, zidx)
        extra = {"score": round(s["total"] / 100.0, 4),
                 "score_100": s["total"], "grade": s["grade"],
                 # 치명 구역 미달은 곡선을 따라가며 봐야 하므로 상세를 버려도
                 # 이 목록만은 남긴다. 목표 충족 판정이 여기에 걸린다.
                 "critical_failures": s["critical_failures"],
                 "score_detail": s}
    return {
        **extra,
        "spatial_coverage": round(float(ok.sum() / n), 4) if n else None,
        "WDR": round(float((w * pt).sum() / w.sum()), 4),
        "risk_coverage": round(float(w[ok].sum() / w.sum()), 4),
        "covered_voxels": int(ok.sum()),
        "fail_voxels": int((live & ~ok).sum()),
        "denominator_voxels": n,
    }


def greedy_order(P: np.ndarray, w: np.ndarray, budget: int = None,
                 fixed: list = None) -> list:
    """위험가중 기대검출량 Σw·P_total 을 최대로 올리는 순서로 카메라를 고른다.

    **목적함수와 판정 잣대는 다르다.** 여기서 올리는 것은 기대값(WDR)이고
    판정은 임계를 넘는 복셀 비율(risk_coverage)로 한다. 기대값 목적함수는
    submodular 라 탐욕해가 최적해의 (1-1/e) 이상을 보장하지만, 임계 지표는
    그 보장이 없다. 임계를 직접 목적함수로 쓰면 보장을 잃으므로 이대로 둔다.

    `fixed` 가 주어지면 그 카메라들을 이미 설치된 것으로 두고 **추가분만** 고른다.
    증설 처방이 이 경로를 쓴다.

    동점은 인덱스 순으로 끊는다 — 난수 없음.
    """
    n = P.shape[0]
    chosen = list(fixed or [])
    limit = n if budget is None else min(budget, n)
    miss = np.prod(1.0 - P[chosen], axis=0) if chosen else np.ones(P.shape[1])
    while len(chosen) < limit:
        best_i, best_gain = -1, -1.0
        for i in range(n):
            if i in chosen:
                continue
            gain = float((w * miss * P[i]).sum())
            if gain > best_gain:
                best_i, best_gain = i, gain
        if best_i < 0 or best_gain <= 0:
            break
        chosen.append(best_i)
        miss = miss * (1.0 - P[best_i])
    return chosen


def coverage_curve(P: np.ndarray, w: np.ndarray, order: list,
                   threshold: float = None, site=None, zidx: dict = None,
                   keep_detail: bool = False) -> list:
    """대수를 1대씩 늘려가며 커버리지를 기록한다. 처방의 근거가 된다.

    `site`/`zidx` 를 주면 점수도 함께 기록해 **점수를 목표로 한 처방**이
    가능해진다. 구역별 분해는 곡선 길이만큼 불어나므로 기본으로 버린다.
    """
    out = []
    for k in range(1, len(order) + 1):
        m = metrics(p_total(P, order[:k]), w, threshold, site, zidx)
        m["n_cameras"] = k
        if not keep_detail:
            m.pop("score_detail", None)
        out.append(m)
    return out


def meets(row: dict, metric: str, target: float,
          require_no_critical: bool = True) -> bool:
    """이 지점이 목표를 충족하는가.

    **점수만으로 판정하지 않는다.** 치명 구역(가중치 CRITICAL_WEIGHT 이상)이
    하나라도 요구에 못 미치면 점수와 무관하게 미충족이다. 실제로 8대 재배치가
    95.6점을 내면서 갱폼·단부·개구부를 미달로 남긴 적이 있다. 그것을 "충족"
    이라 부르면 이 도구가 하려던 말을 스스로 뒤집는다.

    `critical_failures` 가 없는 지표(risk_coverage 등)에는 게이트가 걸리지
    않는다 — 그 지표는 구역을 보지 않기 때문이다.
    """
    if row.get(metric) is None or row[metric] < target:
        return False
    if require_no_critical and row.get("critical_failures"):
        return False
    return True


def first_meeting_at(curve: list, metric: str, target: float,
                     require_no_critical: bool = True):
    """이 곡선에서 목표를 처음 충족하는 지점. 못 넘으면 None."""
    for row in curve:
        if meets(row, metric, target, require_no_critical):
            return row
    return None


def diagnose(site, pairs, curve, plan_idx: list, cams: list, P, w,
             target: float = None, metric: str = None,
             threshold: float = None) -> dict:
    """계획서 하나를 진단하고 처방을 낸다.

    `metric` 기본값은 config.LH_TARGET_METRIC 이다. 잣대를 코드에 박아두면
    목표(%)와 재는 자가 어긋나 처방문이 다른 숫자를 말하게 된다.
    """
    target = config.LH_COVERAGE_TARGET if target is None else target
    metric = config.LH_TARGET_METRIC if metric is None else metric

    # 구역 인덱스는 한 번만 만든다. 곡선을 따라 수십 번 채점하기 때문이다.
    import score as score_mod
    zidx = score_mod.zone_index(site)

    current = metrics(p_total(P, plan_idx), w, threshold, site, zidx)
    current["n_cameras"] = len(plan_idx)

    # ① 같은 대수 재배치
    re_order = greedy_order(P, w, budget=len(plan_idx))
    realloc = metrics(p_total(P, re_order), w, threshold, site, zidx)
    realloc["n_cameras"] = len(re_order)
    realloc["camera_ids"] = [cams[i] for i in re_order]

    # ② 기존 배치를 두고 증설
    add_order = greedy_order(P, w, fixed=plan_idx)
    add_curve = coverage_curve(P, w, add_order, threshold, site, zidx)

    # ③ 전 후보 재배치 상한
    full_order = greedy_order(P, w)
    full_curve = coverage_curve(P, w, full_order, threshold, site, zidx)
    ceiling = full_curve[-1]

    add_hit = first_meeting_at(add_curve, metric, target)
    re_hit = first_meeting_at(full_curve, metric, target)

    # ── 임계 스윕 ────────────────────────────────────────────────────
    # **커버리지 비율 기준은 어디에도 없다** (docs/reference/커버리지_기준_조사.md).
    # 0.90 은 우리가 제안한 값이므로 확정값처럼 쓰지 않는다. 네 임계 전부에서
    # 무엇이 필요한지 함께 실어, 판정이 어느 임계에서 뒤집히는지 보이게 한다.
    sweep = []
    for tgt in config.LH_COVERAGE_TARGET_SWEEP:
        a = first_meeting_at(add_curve, metric, tgt)
        r = first_meeting_at(full_curve, metric, tgt)
        sweep.append({
            "target": tgt,
            "passes_current": meets(current, metric, tgt),
            "passes_realloc": meets(realloc, metric, tgt),
            "add_cameras_needed": (a["n_cameras"] - len(plan_idx)) if a else None,
            "realloc_cameras_needed": r["n_cameras"] if r else None,
            "reachable": meets(ceiling, metric, tgt),
            "is_default": tgt == target,
        })

    return {
        "target": target,
        "target_metric": metric,
        "target_source": config.LH_COVERAGE_TARGET_SOURCE,
        "target_sweep": sweep,
        "target_note": "커버리지 비율 기준은 어느 법령·고시·지침에도 없다. "
                       "0.90 은 우리가 제안한 값이며 확정값이 아니다. "
                       "docs/reference/커버리지_기준_조사.md",
        "threshold": config.P_DETECT_THRESHOLD if threshold is None else threshold,
        "current": current,
        "passes": meets(current, metric, target),
        "critical_failures": current.get("critical_failures", []),
        "reallocated_same_count": realloc,
        "ceiling": {**ceiling, "camera_ids": [cams[i] for i in full_order]},
        "add_curve": add_curve,
        "full_curve": full_curve,
        "prescription": _prescribe(cams, plan_idx, current, realloc, add_order,
                                   add_hit, re_hit, ceiling, target, metric),
    }


def _prescribe(cams, plan_idx, current, realloc, add_order, add_hit, re_hit,
               ceiling, target, metric) -> dict:
    """사람이 읽을 처방문. 숫자는 전부 위에서 계산된 것이다.

    **점수만 보고 충족이라 하지 않는다.** 치명 구역이 남아 있으면 점수가
    목표를 넘어도 미충족이다 — `meets()` 를 그대로 쓴다.
    """
    cur, tgt = current[metric], target

    labels = {r["zone"]: r["label"]
              for r in (current.get("score_detail") or {}).get("rows", [])}

    def crit(row, lead="치명 구역"):
        c = row.get("critical_failures") or []
        if not c:
            return ""
        names = ", ".join(labels.get(z, z) for z in c)
        head = f"{lead} " if lead else ""
        return f" {head}{len(c)}곳({names})이 요구 커버리지에 못 미친다."

    if meets(current, metric, tgt):
        return {"verdict": "충족",
                "text": f"현 계획서가 목표 {tgt:.0%}를 이미 넘는다 ({cur:.1%})."}

    if cur >= tgt:
        # 점수는 넘겼는데 치명 구역이 남은 경우다. 이것을 충족이라 부르면
        # 이 도구가 하려던 말을 스스로 뒤집는다.
        lines = [f"현 계획서는 {cur:.1%}로 목표 {tgt:.0%}를 넘지만 "
                 f"**치명 구역 미달로 충족이 아니다** —{crit(current, '')}"]
    else:
        lines = [f"현 계획서는 {cur:.1%}로 목표 {tgt:.0%}에 미달한다.{crit(current)}"]

    if meets(realloc, metric, tgt):
        lines.append(f"**대수를 늘릴 필요가 없다.** 같은 {realloc['n_cameras']}대를 "
                     f"재배치하면 {realloc[metric]:.1%}가 된다.")
        return {"verdict": "재배치로 충족", "text": " ".join(lines),
                "add_cameras": 0,
                "reallocate_to": realloc["camera_ids"]}

    lines.append(f"같은 {realloc['n_cameras']}대를 재배치하면 {realloc[metric]:.1%}까지 "
                 f"오르나 아직{crit(realloc, '')}".replace('아직 ', '아직 '))

    if add_hit is None:
        lines.append(f"**후보 위치를 전부 써도 목표에 도달하지 못한다** — "
                     f"{ceiling['n_cameras']}대 전량 투입 시 상한이 "
                     f"{ceiling[metric]:.1%}다.{crit(ceiling)} 후보 위치를 늘리거나 "
                     f"카메라 사양을 올려야 한다.")
        return {"verdict": "후보 내 달성 불가", "text": " ".join(lines),
                "add_cameras": None, "ceiling": ceiling[metric]}

    n_add = add_hit["n_cameras"] - len(plan_idx)
    added = [cams[i] for i in add_order[len(plan_idx):add_hit["n_cameras"]]]
    lines.append(f"**{n_add}대를 증설**해 {', '.join(added)} 위치에 달면 "
                 f"{add_hit[metric]:.1%}가 되어 목표를 넘는다.")
    return {"verdict": "증설 필요", "text": " ".join(lines),
            "add_cameras": n_add, "add_at": added,
            "resulting": add_hit[metric]}
