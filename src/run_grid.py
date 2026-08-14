# -*- coding: utf-8 -*-
"""격자 조건별 추론 (CLAUDE.md §4.2 ~ §4.4).

조건 하나 = (ρ, θ, o) 한 점. 각 조건에서 실험셋 전체를 돌려 아래를 잰다.

  recall_hat · recall_nohat(주 지표) · conf_mean · conf_std · n_gt · n_tp · n_fp

IoU 0.5, confidence 0.25 고정(§4.4).

**θ 를 걸면 GT 박스도 같은 호모그래피로 옮긴다.** 이미지만 워핑하고 GT 를 그대로
두면 위치가 어긋나 recall 이 통째로 0 에 가까워진다. ρ 와 o 는 캔버스를 보존하고
박스를 움직이지 않으므로 변환이 필요 없다.

사용:
    python src/run_grid.py --smoke     9조건 (§7 Phase 1)
    python src/run_grid.py             125조건 (§7 Phase 2)
"""
from pathlib import Path
import argparse
import csv
import json
import statistics
import sys
import warnings

warnings.filterwarnings("ignore")
sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import config
import transforms as T

MANIFEST = config.DATA_FILTERED / "manifest.json"
WEIGHTS = config.ROOT / "runs" / "detect" / "shwd_yolov8n" / "weights" / "best.pt"

CLASSES = ("hat", "person")


def iou(a, b) -> float:
    x1, y1 = max(a[0], b[0]), max(a[1], b[1])
    x2, y2 = min(a[2], b[2]), min(a[3], b[3])
    if x2 <= x1 or y2 <= y1:
        return 0.0
    inter = (x2 - x1) * (y2 - y1)
    ua = (a[2] - a[0]) * (a[3] - a[1]) + (b[2] - b[0]) * (b[3] - b[1]) - inter
    return inter / ua if ua > 0 else 0.0


def match(gt: list, det: list) -> tuple[int, int, list]:
    """GT 하나에 검출 하나를 그리디로 짝짓는다. 반환 (tp, fp, 매칭된 conf 목록)."""
    used = set()
    tp = 0
    confs = []
    for g_cls, g_box in gt:
        best_i, best_v = -1, config.IOU_THR
        for i, (d_cls, d_box, d_conf) in enumerate(det):
            if i in used or d_cls != g_cls:
                continue
            v = iou(g_box, d_box)
            if v >= best_v:
                best_i, best_v = i, v
        if best_i >= 0:
            used.add(best_i)
            tp += 1
            confs.append(det[best_i][2])
    return tp, len(det) - len(used), confs


def run_condition(model, records: list, rho: float, theta: float, occ: float) -> dict:
    per_cls_gt = {c: 0 for c in CLASSES}
    per_cls_tp = {c: 0 for c in CLASSES}
    n_fp = 0
    confs: list[float] = []
    occ_actuals: list[float] = []

    names = model.names
    for rec in records:
        img = T.imread(Path(config.ROOT / rec["image"]))
        h, w = img.shape[:2]

        boxes = [i["bbox"] for i in rec["instances"]]
        labels = [i["cls"] for i in rec["instances"]]

        out = T.apply_rho(img, rec["ref_head_px"], rho)
        if theta > 0:
            m = T.theta_matrix(w, h, theta)
            kept = T.warp_boxes(boxes, m, w, h)
            gt = [(labels[i], b) for i, b in kept]
            out = T.apply_theta(out, theta)
        else:
            gt = list(zip(labels, boxes))
        out, occ_actual = T.apply_occlusion(out, occ / 100.0)
        occ_actuals.append(occ_actual)

        if not gt:
            continue

        r = model.predict(out, conf=config.CONF_THR, device=0, verbose=False)[0]
        det = [(names[int(c)], b.tolist(), float(cf))
               for c, b, cf in zip(r.boxes.cls, r.boxes.xyxy, r.boxes.conf)]

        tp, fp, cf = match(gt, det)
        n_fp += fp
        confs.extend(cf)
        for g_cls, _ in gt:
            per_cls_gt[g_cls] += 1
        # 클래스별 tp 는 매칭을 클래스별로 다시 세어 얻는다
        for c in CLASSES:
            g_c = [(gc, gb) for gc, gb in gt if gc == c]
            d_c = [d for d in det if d[0] == c]
            if g_c:
                t, _, _ = match(g_c, d_c)
                per_cls_tp[c] += t

    n_gt = sum(per_cls_gt.values())
    n_tp = sum(per_cls_tp.values())
    return {
        "rho_px": rho,
        "theta_deg": theta,
        "occ_pct_target": occ,
        "occ_pct_actual": round(statistics.mean(occ_actuals) * 100, 2) if occ_actuals else 0.0,
        "recall_hat": round(per_cls_tp["hat"] / per_cls_gt["hat"], 4) if per_cls_gt["hat"] else None,
        "recall_nohat": round(per_cls_tp["person"] / per_cls_gt["person"], 4) if per_cls_gt["person"] else None,
        "conf_mean": round(statistics.mean(confs), 4) if confs else None,
        "conf_std": round(statistics.pstdev(confs), 4) if len(confs) > 1 else None,
        "n_gt": n_gt,
        "n_tp": n_tp,
        "n_fp": n_fp,
        "n_gt_hat": per_cls_gt["hat"],
        "n_gt_person": per_cls_gt["person"],
    }


def main(smoke: bool, limit: int | None) -> Path:
    from ultralytics import YOLO

    if not WEIGHTS.exists():
        raise FileNotFoundError(
            f"파인튜닝 가중치가 없다: {WEIGHTS}\n"
            "먼저 `python src/train_detector.py` 를 돌릴 것."
        )
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    records = manifest["images"][:limit] if limit else manifest["images"]

    if smoke:
        grid = [(r, t, o) for r in config.SMOKE_RHO_PX
                for t in config.SMOKE_THETA_DEG for o in config.SMOKE_OCC_PCT]
        out_csv = config.OUTPUTS / "smoke_results.csv"
    else:
        grid = [(r, t, o) for r in config.RHO_LEVELS_PX
                for t in config.THETA_LEVELS_DEG for o in config.OCC_LEVELS_PCT]
        out_csv = config.GRID_RESULTS_CSV

    model = YOLO(str(WEIGHTS))
    rows = []
    for i, (r, t, o) in enumerate(grid, 1):
        row = run_condition(model, records, r, t, o)
        rows.append(row)
        print(f"[{i}/{len(grid)}] ρ={r:>2} θ={t:>2} o={o:>2}  "
              f"recall_nohat {row['recall_nohat']}  recall_hat {row['recall_hat']}")

    out_csv.parent.mkdir(parents=True, exist_ok=True)
    with out_csv.open("w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        wr.writeheader()
        wr.writerows(rows)
    print(f"→ {out_csv}  ({len(rows)}조건 · 이미지 {len(records)}장)")
    return out_csv


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--smoke", action="store_true", help="9조건만 (§7 Phase 1)")
    ap.add_argument("--limit", type=int, default=None, help="이미지 수 제한 (디버그용)")
    args = ap.parse_args()
    main(args.smoke, args.limit)
