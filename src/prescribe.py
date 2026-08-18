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

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config


def build_matrix(site, pairs: dict, curve, cam_ids: list = None) -> tuple:
    """P[카메라, 복셀] 행렬과 가중치 벡터를 만든다."""
    cams = cam_ids if cam_ids is not None else [c.cid for c in site.cameras]
    vox = [v["id"] for v in site.voxels]
    w = np.array([v["w"] for v in site.voxels], dtype=float)
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


def metrics(pt: np.ndarray, w: np.ndarray, threshold: float = None) -> dict:
    thr = config.P_DETECT_THRESHOLD if threshold is None else threshold
    ok = pt >= thr
    return {
        "spatial_coverage": round(float(ok.mean()), 4),
        "WDR": round(float((w * pt).sum() / w.sum()), 4),
        "risk_coverage": round(float(w[ok].sum() / w.sum()), 4),
        "covered_voxels": int(ok.sum()),
        "fail_voxels": int((~ok).sum()),
    }


def greedy_order(P: np.ndarray, w: np.ndarray, budget: int = None,
                 fixed: list = None) -> list:
    """위험가중 기대검출량 Σw·P_total 을 최대로 올리는 순서로 카메라를 고른다.

    **목적함수와 판정 잣대는 다르다.** 여기서 올리는 것은 기대값(WDR)이고
    판정은 임계를 넘는 복셀 비율(risk_coverage)로 한다. 기대값 목적함수는
    submodular 라 탐욕해가 최적해의 (1−1/e) 이상을 보장하지만, 임계 지표는
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
                   threshold: float = None) -> list:
    """대수를 1대씩 늘려가며 커버리지를 기록한다. 처방의 근거가 된다."""
    out = []
    for k in range(1, len(order) + 1):
        m = metrics(p_total(P, order[:k]), w, threshold)
        m["n_cameras"] = k
        out.append(m)
    return out


def diagnose(site, pairs, curve, plan_idx: list, cams: list, P, w,
             target: float = None, metric: str = None,
             threshold: float = None) -> dict:
    """계획서 하나를 진단하고 처방을 낸다.

    `metric` 기본값은 config.LH_TARGET_METRIC 이다. 잣대를 코드에 박아두면
    목표(%)와 재는 자가 어긋나 처방문이 다른 숫자를 말하게 된다.
    """
    target = config.LH_COVERAGE_TARGET if target is None else target
    metric = config.LH_TARGET_METRIC if metric is None else metric

    current = metrics(p_total(P, plan_idx), w, threshold)
    current["n_cameras"] = len(plan_idx)

    # ① 같은 대수 재배치
    re_order = greedy_order(P, w, budget=len(plan_idx))
    realloc = metrics(p_total(P, re_order), w, threshold)
    realloc["n_cameras"] = len(re_order)
    realloc["camera_ids"] = [cams[i] for i in re_order]

    # ② 기존 배치를 두고 증설
    add_order = greedy_order(P, w, fixed=plan_idx)
    add_curve = coverage_curve(P, w, add_order, threshold)

    # ③ 전 후보 재배치 상한
    full_order = greedy_order(P, w)
    full_curve = coverage_curve(P, w, full_order, threshold)
    ceiling = full_curve[-1]

    def first_meeting(curve):
        for row in curve:
            if row[metric] >= target:
                return row
        return None

    add_hit = first_meeting(add_curve)
    re_hit = first_meeting(full_curve)

    return {
        "target": target,
        "target_metric": metric,
        "threshold": config.P_DETECT_THRESHOLD if threshold is None else threshold,
        "current": current,
        "passes": bool(current[metric] >= target),
        "reallocated_same_count": realloc,
        "ceiling": {**ceiling, "camera_ids": [cams[i] for i in full_order]},
        "add_curve": add_curve,
        "full_curve": full_curve,
        "prescription": _prescribe(cams, plan_idx, current, realloc, add_order,
                                   add_hit, re_hit, ceiling, target, metric),
    }


def _prescribe(cams, plan_idx, current, realloc, add_order, add_hit, re_hit,
               ceiling, target, metric) -> dict:
    """사람이 읽을 처방문. 숫자는 전부 위에서 계산된 것이다."""
    cur, tgt = current[metric], target
    if cur >= tgt:
        return {"verdict": "충족",
                "text": f"현 계획서가 목표 {tgt:.0%}를 이미 넘는다 ({cur:.1%})."}

    lines = [f"현 계획서는 {cur:.1%}로 목표 {tgt:.0%}에 미달한다."]

    if realloc[metric] >= tgt:
        lines.append(f"**대수를 늘릴 필요가 없다.** 같은 {realloc['n_cameras']}대를 "
                     f"재배치하면 {realloc[metric]:.1%}가 된다.")
        return {"verdict": "재배치로 충족", "text": " ".join(lines),
                "add_cameras": 0,
                "reallocate_to": realloc["camera_ids"]}

    lines.append(f"같은 {realloc['n_cameras']}대를 재배치해도 {realloc[metric]:.1%}에 "
                 f"그친다.")

    if add_hit is None:
        lines.append(f"**후보 위치를 전부 써도 목표에 도달하지 못한다** — "
                     f"{ceiling['n_cameras']}대 전량 투입 시 상한이 "
                     f"{ceiling[metric]:.1%}다. 후보 위치를 늘리거나 카메라 사양을 "
                     f"올려야 한다.")
        return {"verdict": "후보 내 달성 불가", "text": " ".join(lines),
                "add_cameras": None, "ceiling": ceiling[metric]}

    n_add = add_hit["n_cameras"] - len(plan_idx)
    added = [cams[i] for i in add_order[len(plan_idx):add_hit["n_cameras"]]]
    lines.append(f"**{n_add}대를 증설**해 {', '.join(added)} 위치에 달면 "
                 f"{add_hit[metric]:.1%}가 되어 목표를 넘는다.")
    return {"verdict": "증설 필요", "text": " ".join(lines),
            "add_cameras": n_add, "add_at": added,
            "resulting": add_hit[metric]}
