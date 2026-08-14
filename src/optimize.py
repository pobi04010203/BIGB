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


def greedy(site, pairs: dict, curve, objective: str, budget: int) -> list:
    """objective: 'geometric' | 'probabilistic'."""
    chosen: list[str] = []
    candidates = sorted(c.cid for c in site.cameras)

    for _ in range(budget):
        best_cid, best_gain = None, None
        base = _score(site, chosen, pairs, curve, objective)
        for cid in candidates:
            if cid in chosen:
                continue
            gain = _score(site, chosen + [cid], pairs, curve, objective) - base
            # 동점은 ID 사전순으로 끊는다 (candidates 가 정렬돼 있으므로 > 만 쓴다)
            if best_gain is None or gain > best_gain:
                best_cid, best_gain = cid, gain
        if best_cid is None:
            break
        chosen.append(best_cid)
    return chosen


def _score(site, cam_ids, pairs, curve, objective: str) -> float:
    if objective == "geometric":
        return aggregate.coverage_score(site, cam_ids, pairs)
    total = 0.0
    for v in site.voxels:
        total += v["w"] * aggregate.p_total(v["id"], cam_ids, pairs, curve)
    return total


def run(site, pairs: dict, curve, budget: int = None) -> dict:
    budget = budget or config.CAMERA_BUDGET
    out = {}
    for key, obj in (("geometric", "geometric"), ("probabilistic", "probabilistic")):
        cams = greedy(site, pairs, curve, obj, budget)
        # 두 배치 모두 **B 의 자**로 잰다 — 이것이 비교의 요점이다
        out[key] = aggregate.evaluate(site, cams, pairs, curve)
    return out
