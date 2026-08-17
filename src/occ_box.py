# -*- coding: utf-8 -*-
"""개체 단위 가림률 산출 — `occ_pct_box` 컬럼을 grid_results.csv 에 붙인다.

**왜 필요한가.** 실험과 현장이 서로 다른 `o` 를 쓰고 있었다.

  실험 (`transforms.apply_occlusion`)  화면 전체 폭 대비 스트라이프가 덮은 비율
  현장 (`geometry.occlusion_ratio`)    복셀에 세운 사람 막대 11점 중 막힌 비율

곡선을 화면 평균으로 피팅해놓고 개체 가림률을 입력하면, 정의가 다른 두 값을
잇게 된다. 실험 쪽을 현장 쪽 정의에 맞춘다 — GT 박스가 스트라이프에 가려진
비율을 인스턴스마다 재고 평균한다.

**추론이 필요 없다.** 값은 (이미지 크기, GT 박스, θ, o) 만으로 결정된다.
검출기를 다시 돌리지 않고 기존 CSV 에 컬럼만 덧붙일 수 있다. ρ 와도 무관하다
— `apply_rho` 는 캔버스와 박스를 보존한다.

사용:
    python src/occ_box.py                 grid_results.csv 에 컬럼 추가
    python src/occ_box.py --divisor 12    다른 스트라이프 주기로 표만 출력
"""
from pathlib import Path
import argparse
import csv
import json
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import config
import transforms as T

TARGET_CLS = "person"        # 주 지표가 recall_nohat 이므로 미착용 인스턴스 기준


def warped_boxes(rec: dict, theta: float) -> list:
    """θ 를 걸었을 때 살아남는 TARGET_CLS 박스들. run_grid 와 같은 규칙이다."""
    boxes = [i["bbox"] for i in rec["instances"]]
    labels = [i["cls"] for i in rec["instances"]]
    if theta <= 0:
        return [b for b, c in zip(boxes, labels) if c == TARGET_CLS]

    w, h = rec["width"], rec["height"]
    m = T.theta_matrix(w, h, theta)
    return [b for i, b in T.warp_boxes(boxes, m, w, h) if labels[i] == TARGET_CLS]


def mean_box_occlusion(records: list, theta: float, occ_pct: float,
                       divisor: int = T.DEFAULT_STRIPE_DIVISOR) -> tuple[float, int]:
    """조건 (θ, o) 에서 인스턴스 평균 가림률과 인스턴스 수."""
    if occ_pct <= 0:
        n = sum(len(warped_boxes(r, theta)) for r in records)
        return 0.0, n

    total, n = 0.0, 0
    for rec in records:
        spans = T.stripe_spans(rec["width"], occ_pct / 100.0, divisor=divisor)
        for b in warped_boxes(rec, theta):
            total += T.box_occlusion(b, spans)
            n += 1
    return (total / n if n else 0.0), n


def table(records: list, divisor: int = T.DEFAULT_STRIPE_DIVISOR) -> dict:
    """(θ, o) → 인스턴스 평균 가림률(%)."""
    out = {}
    for th in config.THETA_LEVELS_DEG:
        for oc in config.OCC_LEVELS_PCT:
            mean, n = mean_box_occlusion(records, th, oc, divisor)
            out[(float(th), float(oc))] = (round(mean * 100, 2), n)
    return out


def main(divisor: int, write: bool) -> None:
    manifest = json.loads(
        (config.DATA_FILTERED / "manifest.json").read_text(encoding="utf-8"))
    records = manifest["images"]
    print(f"이미지 {len(records)}장 · 스트라이프 주기 = 화면 가로 / {divisor}")

    tab = table(records, divisor)

    print(f"\n인스턴스 평균 가림률(%) - 목표 o 대비")
    head = "  θ\\o  " + "".join(f"{o:>9}" for o in config.OCC_LEVELS_PCT)
    print(head)
    for th in config.THETA_LEVELS_DEG:
        row = f"{th:>5}  " + "".join(
            f"{tab[(float(th), float(o))][0]:>9.2f}" for o in config.OCC_LEVELS_PCT)
        print(row)

    n0 = tab[(0.0, float(config.OCC_LEVELS_PCT[-1]))][1]
    print(f"\n(θ=0 에서 인스턴스 {tab[(0.0, 0.0)][1]}개 → "
          f"θ={config.THETA_LEVELS_DEG[-1]} 에서 {n0}개. 워핑으로 화면 밖에 나간 박스는 빠진다)")

    if not write:
        return

    path = config.GRID_RESULTS_CSV
    if not path.exists():
        print(f"\n{path} 가 없다. 먼저 `python src/run_grid.py` 를 돌릴 것.")
        return

    with path.open(encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    missing = 0
    for r in rows:
        key = (float(r["theta_deg"]), float(r["occ_pct_target"]))
        if key in tab:
            r["occ_pct_box"] = tab[key][0]
        else:
            r["occ_pct_box"] = ""
            missing += 1

    fields = list(rows[0].keys())
    with path.open("w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=fields)
        wr.writeheader()
        wr.writerows(rows)
    print(f"\n→ {path} 에 occ_pct_box 추가 ({len(rows)}행"
          f"{f', 미매칭 {missing}행' if missing else ''})")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--divisor", type=int, default=T.DEFAULT_STRIPE_DIVISOR,
                    help="스트라이프 주기 = 화면 가로 / divisor")
    ap.add_argument("--no-write", action="store_true", help="CSV 를 고치지 않고 표만 출력")
    args = ap.parse_args()
    main(args.divisor, write=not args.no_write)
