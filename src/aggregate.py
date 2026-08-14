# -*- coding: utf-8 -*-
"""다중 카메라 결합과 위험가중 집계 (CLAUDE.md §5.3).

    P_total(v) = 1 − Π_c (1 − P(v, c))
    WDR        = Σ_v w(v) · P_total(v) / Σ_v w(v)

**중첩은 이득이다.** 각 0.6 인 두 대가 합쳐 0.84 가 된다. 기존 연구는 처리·저장
부담을 이유로 중첩 최소화를 목표로 삼지만, 확률 모델에서는 고위험 구역의 최적해가
정반대로 나온다. 이 반전이 제안서의 핵심 그림이므로 **중첩을 페널티로 다루는 코드를
절대 넣지 않는다** (§5.3).
"""
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config


def p_total(voxel_id: str, cam_ids, pairs: dict, curve) -> float:
    """복셀 하나가 선택된 카메라들에게 잡힐 확률."""
    miss = 1.0
    for cid in cam_ids:
        geo = pairs.get((cid, voxel_id))
        if geo is None:
            continue
        miss *= (1.0 - curve.p_detect(geo))
    return 1.0 - miss


def evaluate(site, cam_ids, pairs: dict, curve) -> dict:
    """배치 하나를 평가한다. WDR 과 미달구역을 낸다."""
    num = den = 0.0
    per_voxel = {}
    fails = []
    for v in site.voxels:
        pt = p_total(v["id"], cam_ids, pairs, curve)
        per_voxel[v["id"]] = pt
        num += v["w"] * pt
        den += v["w"]
        if pt < config.P_DETECT_THRESHOLD:
            # 가장 좋은 카메라의 사유를 대표로 붙인다
            best, best_p = None, -1.0
            for cid in cam_ids:
                geo = pairs.get((cid, v["id"]))
                if geo is None:
                    continue
                p = curve.p_detect(geo)
                if p > best_p:
                    best, best_p = geo, p
            fails.append({
                "voxel_id": v["id"], "x": v["x"], "y": v["y"], "w": v["w"],
                "zones": v["zones"], "P_total": round(pt, 4),
                "reason": curve.reason(best) if best else "가시 카메라 없음",
            })
    return {
        "camera_ids": list(cam_ids),
        "WDR": round(num / den, 4) if den else None,
        "fail_voxel_count": len(fails),
        "per_voxel": per_voxel,
        "fail_zones": fails,
    }


def coverage_score(site, cam_ids, pairs: dict) -> float:
    """기하 커버리지 Σ w(v)·1[가시] — 기존 방식의 목적함수 (§5.4 A)."""
    total = 0.0
    for v in site.voxels:
        if any(pairs.get((cid, v["id"]), {}).get("visible") for cid in cam_ids):
            total += v["w"]
    return total
