# -*- coding: utf-8 -*-
"""탐욕 배치 최적화 2종 (CLAUDE.md §5.4).

**두 번 돌린다. 이게 논증 구조의 전부다.**

  A. 기하 커버리지  Σ w(v) · 1[가시]        기존 방식
  B. 검출확률       Σ w(v) · P_total(v)     제안 방식

둘 다 탐욕으로 8대를 순차 선택하고, **두 배치를 모두 B 의 자(P_detect)로 재측정**해
WDR 을 비교한다. 기존 기준으로 잘 설계한 배치도 실제 검출률은 낮다는 것이 증명
대상이다.

목적함수 B 는 submodular 이다 — 카메라를 더할수록 한계 이득이 줄고 절대 음이
되지 않는다(P_total = 1 − Π(1−P) 의 성질). 따라서 **탐욕해가 최적해의
(1 − 1/e) ≈ 63% 이상을 보장**한다. 제안서에 인용되는 성질이다.

난수를 쓰지 않는다. 동점이면 카메라 ID 사전순으로 끊어 같은 입력이면 같은 배치가
나온다.
"""
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config
import aggregate


def greedy(site, pairs: dict, curve, objective: str, budget: int,
           min_rho_px: float = None) -> list:
    """objective: 'geometric' | 'probabilistic'.

    **P 행렬 위에서 numpy 로 돈다.** 복셀이 8만 개를 넘어 파이썬 반복으로는
    후보 하나를 평가하는 데만 초 단위가 걸린다. 결과는 종전과 같다.

    min_rho_px 는 기하 목적함수의 DORI 최소 픽셀밀도다 (기본 config 값).
    확률 목적함수는 곡선이 이미 측정 범위를 다루므로 영향받지 않는다.
    """
    import numpy as np
    import prescribe

    cams, P, w = _matrix(site, pairs, curve, objective, min_rho_px)
    n = P.shape[0]
    chosen: list[int] = []
    if objective == "geometric":
        # 가시 여부의 논리합 — 확률 결합이 아니다
        covered = np.zeros(P.shape[1], dtype=bool)
        for _ in range(min(budget, n)):
            best_i, best_gain = -1, 0.0
            for i in range(n):
                if i in chosen:
                    continue
                gain = float(w[(~covered) & (P[i] > 0)].sum())
                if gain > best_gain:
                    best_i, best_gain = i, gain
            if best_i < 0:
                break
            chosen.append(best_i)
            covered |= (P[best_i] > 0)
    else:
        miss = np.ones(P.shape[1])
        for _ in range(min(budget, n)):
            best_i, best_gain = -1, 0.0
            for i in range(n):
                if i in chosen:
                    continue
                gain = float((w * miss * P[i]).sum())
                if gain > best_gain:
                    best_i, best_gain = i, gain
            if best_i < 0:
                break
            chosen.append(best_i)
            miss = miss * (1.0 - P[best_i])
    return [cams[i] for i in chosen]


def _matrix(site, pairs, curve, objective: str, min_rho_px: float = None):
    """목적함수에 맞는 행렬. 기하는 가시 여부(0/1), 확률은 검출확률이다."""
    import numpy as np
    import prescribe

    if objective != "geometric":
        return prescribe.build_matrix(site, pairs, curve)

    if min_rho_px is None:
        min_rho_px = config.GEOMETRIC_MIN_RHO_PX
    cams = [c.cid for c in site.cameras]
    w = np.array([v["w"] if v.get("occupiable", True) else 0.0
                  for v in site.voxels], dtype=float)
    P = np.zeros((len(cams), len(site.voxels)))
    for i, cid in enumerate(cams):
        for j, v in enumerate(site.voxels):
            g = pairs.get((cid, v["id"]))
            if g and g.get("visible") and g.get("rho_px", 0.0) >= min_rho_px:
                P[i, j] = 1.0
    return cams, P, w


def run(site, pairs: dict, curve, budget: int = None,
        min_rho_px: float = None, assumed_curve=None) -> dict:
    """세 배치를 만든다 (ADDENDUM-01 §5.4).

      geometric  기하 커버리지 기준          — 기존 방식
      assumed    **문헌의 가정 곡선** 기준    — 기존 확률 커버리지 방식
      empirical  실측 곡선 기준              — 제안 방식

    **셋 다 실측 곡선(`curve`)의 자로 재측정한다.** 가정 곡선은 설계에만 쓰고
    채점에는 쓰지 않는다. 그래야 "가정으로 설계하면 실제로 어디까지 가는가"가
    같은 눈금 위에서 읽힌다.

    `assumed_curve` 가 없으면 종전처럼 두 배치만 낸다.
    """
    budget = budget or config.CAMERA_BUDGET
    out = {}

    out["geometric"] = aggregate.evaluate(
        site, greedy(site, pairs, curve, "geometric", budget, min_rho_px),
        pairs, curve)

    if assumed_curve is not None:
        # 설계는 가정 곡선으로, 채점은 실측 곡선으로
        cams = greedy(site, pairs, assumed_curve, "probabilistic", budget, min_rho_px)
        out["assumed"] = aggregate.evaluate(site, cams, pairs, curve)

    out["empirical"] = aggregate.evaluate(
        site, greedy(site, pairs, curve, "probabilistic", budget, min_rho_px),
        pairs, curve)
    return out
