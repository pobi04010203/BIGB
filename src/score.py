# -*- coding: utf-8 -*-
"""100점 만점 배치 점수 (2026-08-22).

**왜 단일 커버리지 %로는 부족한가.** "현장의 90%를 본다"는 문장은 어디를 보고
어디를 놓쳤는지를 지운다. 넓은 저위험 구역을 잘 덮으면 갱폼 작업면을 통째로
놓치고도 90%가 나온다. `schedule.py` 의 치명 구역 게이트와 항목별 최솟값
종합(ADDENDUM-01 §5.3)이 막으려 한 것이 그것이며, 점수도 같은 원리로 짠다.

**구조.**

    구역마다  배점    = 100 × w / Σw          가중치에 비례. **면적과 무관하다**
              요구    = required(w)            가중치가 높을수록 더 많이 요구
              달성률  = min(1, 커버리지 / 요구)
              획득    = 배점 × 달성률
    총점 = Σ 획득

**배점을 복셀 수가 아니라 가중치로 나눈 이유.** 면적에 비례시키면 넓은 구역이
점수를 지배한다. 타워크레인 반경은 12,320 복셀이고 리프트 승강구는 896 인데,
후자를 놓치는 것이 8배 덜 나쁘지 않다. 위험은 넓이가 아니라 종류로 배점한다.

**요구를 넘겨도 더 주지 않는다.** 달성률에 min(1, ·) 이 걸린다. 갱폼을 99%에서
100%로 올린 것으로 굴착면 33%를 벌충하지 못하게 한다. 안전기준은 초과 달성으로
상쇄되는 것이 아니다.

**치명 구역 게이트.** 가중치 `CRITICAL_WEIGHT` 이상인 구역이 요구에 못 미치면
총점과 무관하게 등급 상한을 씌운다. 점수가 아무리 높아도 '조건부' 위로
내려간다. `schedule.py` 와 같은 규칙이다.

**한계.** 배점표(가중치 비례)와 요구곡선(70~99% 선형)은 **우리가 정한 것이며
근거가 없다.** LH 가 등급별 요구를 게시하면 `required_for` 를 갈아 끼운다.
`docs/reference/커버리지_기준_조사.md` 에 조사 결과를 적어두었다.
"""
from pathlib import Path
import re
import sys

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config
from schedule import required_for, CRITICAL_WEIGHT

# 구역에 속하지 않는 배경 복셀의 가중치. config.RISK_WEIGHT_DEFAULT 와 같다.
BACKGROUND_LABEL = "배경(구역 밖)"

# 등급 경계. 총점이 이 이상이면 그 등급이다.
GRADES = [(90, "A"), (80, "B"), (70, "C"), (60, "D"), (0, "E")]

# 치명 구역이 미달일 때 씌우는 등급 상한
CRITICAL_GRADE_CAP = "C"


def _grade(total: float) -> str:
    for cut, g in GRADES:
        if total >= cut:
            return g
    return GRADES[-1][1]


def zone_index(site) -> dict:
    """구역 이름 → (라벨, 가중치, 복셀 인덱스 배열). 배경도 한 칸 차지한다."""
    live = [i for i, v in enumerate(site.voxels) if v.get("occupiable", True)]
    # 한 구역이 여러 층에 걸치면 Zone 이 층마다 하나씩 있다. 라벨의 "(EL 4.3m)"
    # 을 떼어 층을 합친 이름으로 보여준다 — 채점은 이름 단위로 하기 때문이다.
    meta = {}
    for z in site.zones:
        base = re.sub(r"\s*\(EL [^)]*\)\s*$", "", z.label)
        if z.name in meta:
            lbl, w, n = meta[z.name]
            meta[z.name] = (base, max(w, z.weight), n + 1)
        else:
            meta[z.name] = (base, z.weight, 1)
    meta = {k: (f"{lbl} ({n}개 층)" if n > 1 else lbl, w)
            for k, (lbl, w, n) in meta.items()}
    out, bg = {}, []
    for i in live:
        names = site.voxels[i]["zones"]
        if not names:
            bg.append(i)
            continue
        for n in names:
            out.setdefault(n, []).append(i)
    rows = {n: (meta[n][0], meta[n][1], np.array(idx, dtype=int))
            for n, idx in out.items() if n in meta}
    if bg:
        rows["_background"] = (BACKGROUND_LABEL, config.RISK_WEIGHT_DEFAULT,
                               np.array(bg, dtype=int))
    return rows


def evaluate(site, pt: np.ndarray, threshold: float = None,
             zidx: dict = None) -> dict:
    """배치 하나를 100점 만점으로 채점한다.

    `pt` 는 복셀별 P_total. `zidx` 를 넘기면 구역 인덱스를 다시 만들지 않는다
    (곡선을 따라 수십 번 부를 때 필요하다).
    """
    thr = config.P_DETECT_THRESHOLD if threshold is None else threshold
    zidx = zone_index(site) if zidx is None else zidx

    wsum = sum(w for _, w, _ in zidx.values())
    rows, total = [], 0.0
    for name, (label, w, idx) in zidx.items():
        alloc = 100.0 * w / wsum
        cov = float((pt[idx] >= thr).mean())
        req = required_for(w)
        rate = min(1.0, cov / req) if req > 0 else 1.0
        got = alloc * rate
        total += got
        rows.append({
            "zone": name, "label": label, "weight": w,
            "voxels": int(idx.size),
            "allocated": round(alloc, 2),
            "coverage": round(cov, 4),
            "required": req,
            "attainment": round(rate, 4),
            "earned": round(got, 2),
            "shortfall": round(max(0.0, req - cov), 4),
            "meets": bool(cov >= req),
            "critical_fail": bool(w >= CRITICAL_WEIGHT and cov < req),
        })

    rows.sort(key=lambda r: (-r["weight"], r["zone"]))
    total = round(total, 2)
    critical = [r["zone"] for r in rows if r["critical_fail"]]
    grade = _grade(total)
    capped = bool(critical and grade < CRITICAL_GRADE_CAP)  # 문자 비교: A<B<C
    if capped:
        grade = CRITICAL_GRADE_CAP

    return {
        "total": total,
        "grade": grade,
        "grade_capped_by_critical": capped,
        "critical_failures": critical,
        "rows": rows,
        "lost": round(100.0 - total, 2),
        "biggest_loss": max(rows, key=lambda r: r["allocated"] - r["earned"])["zone"]
                        if rows else None,
        "rule": {
            "allocation": "배점 = 100 × 가중치 / Σ가중치. 면적과 무관하다",
            "attainment": "달성률 = min(1, 커버리지 / 요구). 초과 달성은 더 주지 않는다",
            "required_by_weight": {w: required_for(w) for w in range(1, 11)},
            "critical_weight": CRITICAL_WEIGHT,
            "critical_grade_cap": CRITICAL_GRADE_CAP,
            "grades": [{"min": c, "grade": g} for c, g in GRADES],
            "basis": "배점표와 요구곡선은 우리가 정한 것이며 게시된 근거가 없다. "
                     "docs/reference/커버리지_기준_조사.md",
        },
    }


def main():
    import site_model, geometry, detect_model, prescribe
    site = site_model.build()
    pairs, _ = geometry.all_pairs(site)
    curve = detect_model.load()
    cams, P, w = prescribe.build_matrix(site, pairs, curve)
    idx = [cams.index(c.cid) for c in site.cameras if c.mount == "boundary_pole"][:8]
    s = evaluate(site, prescribe.p_total(P, idx))
    print(f"총점 {s['total']:.1f} / 100   등급 {s['grade']}"
          f"{'  (치명 구역 미달로 상한)' if s['grade_capped_by_critical'] else ''}\n")
    print(f"  {'구역':<22}{'가중':>4}{'배점':>7}{'커버':>8}{'요구':>7}{'달성':>7}{'획득':>7}")
    for r in s["rows"]:
        flag = " ✕" if r["critical_fail"] else ("" if r["meets"] else " △")
        print(f"  {r['label']:<22}{r['weight']:>4}{r['allocated']:>7.1f}"
              f"{r['coverage']:>8.1%}{r['required']:>7.0%}{r['attainment']:>7.0%}"
              f"{r['earned']:>7.1f}{flag}")
    print(f"\n  잃은 점수 {s['lost']:.1f} · 최대 손실 구역 {s['biggest_loss']}")


if __name__ == "__main__":
    main()
