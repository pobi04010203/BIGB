# -*- coding: utf-8 -*-
"""SHWD 필터링 (CLAUDE.md §4.1) — 기준 조건을 만족하는 이미지를 고른다.

VOC2028 어노테이션을 읽어 아래를 만족하는 이미지 목록을 만든다.

  1. 머리 bbox 짧은 변 >= MIN_HEAD_PX (40px)  ... §4.1 명시
  2. 이미지 대표 머리크기 >= 48px             ... 아래 참조
  3. **test 분할에 속할 것**                  ... 아래 참조
  4. 목표 500장, 두 클래스가 고루 섞이도록

조건 3 도 §4.1 에 없다. 넣은 이유:
  검출기를 SHWD 로 파인튜닝하기로 했으므로(§4.3 변경), 학습에 쓴 이미지로 곡선을
  재면 ρ·θ·o 의 효과가 아니라 **암기 여부**를 재게 된다. 실험셋을 공식 test 분할
  (1,517장)로 가두어 누수를 끊는다. 제한해도 후보가 1,009장이라 500장에 여유가 있다.

조건 2 는 §4.1 에 없다. 넣은 이유:
  ρ 축의 기준 조건이 48px 인데(§4.2) `apply_rho` 는 **다운샘플만** 한다.
  대표 머리크기가 42px 인 이미지에 ρ=48 을 걸면 아무 변형도 일어나지 않아
  "48px 조건"이라는 라벨이 실제와 어긋난다. §4.1 이 40px 필터의 목적을
  *"기준 조건(고해상도)을 확보하기 위함"* 이라고 밝히므로, 그 목적에 맞춰
  기준 조건이 실제로 도달 가능한 이미지만 남긴다.

난수를 쓰지 않는다. 파일명 정렬 순서로만 고르므로 몇 번을 돌려도 같은 500장이다.

출력은 이미지 복사본이 아니라 `data/filtered/manifest.json` 이다.
1GB 를 복제하지 않으려는 것이고, 뒤 단계는 원본 경로를 그대로 읽으면 된다.
"""
from pathlib import Path
import json
import statistics
import sys
import xml.etree.ElementTree as ET

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config

VOC_ROOT = config.DATA_RAW / "VOC2028"
ANNOTATIONS = VOC_ROOT / "Annotations"
IMAGES = VOC_ROOT / "JPEGImages"
SPLITS = VOC_ROOT / "ImageSets" / "Main"
MANIFEST = config.DATA_FILTERED / "manifest.json"

EVAL_SPLIT = "test"              # 학습 누수를 끊는다. 위 조건 3 참조

CLASSES = ("hat", "person")      # hat=착용, person=미착용(§4.1)
REF_HEAD_PX = 48.0               # ρ 기준 조건. config.RHO_LEVELS_PX[0] 과 같아야 한다


def parse_annotation(xml_path: Path, min_head_px: float) -> dict | None:
    """어노테이션 1개를 읽어 기준 통과 인스턴스만 남긴다."""
    root = ET.parse(xml_path).getroot()
    size = root.find("size")
    kept, every = [], []
    for obj in root.findall("object"):
        name = (obj.findtext("name") or "").strip()
        if name not in CLASSES:
            continue                      # 'dog' 3건 등 잡라벨 제외
        b = obj.find("bndbox")
        x1, y1 = float(b.findtext("xmin")), float(b.findtext("ymin"))
        x2, y2 = float(b.findtext("xmax")), float(b.findtext("ymax"))
        inst = {"cls": name, "bbox": [x1, y1, x2, y2],
                "short_px": round(min(x2 - x1, y2 - y1), 1)}
        # 크기와 무관하게 전부 담는다. FP 집계에 쓴다 — 아래 참조
        every.append(inst)
        if min(x2 - x1, y2 - y1) >= min_head_px:
            kept.append(inst)
    if not kept:
        return None
    return {
        "stem": xml_path.stem,
        "image": str((IMAGES / f"{xml_path.stem}.jpg").relative_to(config.ROOT)),
        "width": int(size.findtext("width")),
        "height": int(size.findtext("height")),
        "instances": kept,
        # 40px 미만까지 포함한 전량. 검출기가 작은 머리를 맞게 찾아낸 것을
        # FP 로 잘못 세지 않으려고 둔다 (run_grid.py 의 FP 집계용).
        "all_instances": every,
        "ref_head_px": round(statistics.median(k["short_px"] for k in kept), 1),
        "n_hat": sum(1 for k in kept if k["cls"] == "hat"),
        "n_person": sum(1 for k in kept if k["cls"] == "person"),
    }


def select(records: list[dict], target: int) -> list[dict]:
    """두 클래스가 고루 들어가도록 target 장을 고른다. 난수 없음."""
    both = [r for r in records if r["n_hat"] and r["n_person"]]
    hat_only = [r for r in records if r["n_hat"] and not r["n_person"]]
    per_only = [r for r in records if r["n_person"] and not r["n_hat"]]

    chosen = both[:target]
    i = j = 0
    # 남은 자리는 hat-only 와 person-only 를 번갈아 채운다
    while len(chosen) < target and (i < len(hat_only) or j < len(per_only)):
        if i < len(hat_only):
            chosen.append(hat_only[i]); i += 1
        if len(chosen) < target and j < len(per_only):
            chosen.append(per_only[j]); j += 1
    return chosen


def main(min_head_px: float = config.MIN_HEAD_PX,
         target: int = config.TARGET_IMAGES) -> dict:
    if not ANNOTATIONS.is_dir():
        raise FileNotFoundError(
            f"어노테이션이 없다: {ANNOTATIONS}\n"
            "SHWD 를 data/raw/VOC2028/ 아래에 풀어야 한다."
        )

    split_file = SPLITS / f"{EVAL_SPLIT}.txt"
    if not split_file.exists():
        raise FileNotFoundError(f"분할 파일이 없다: {split_file}")
    stems = sorted(split_file.read_text().split())

    def collect(min_px: float) -> list[dict]:
        out = []
        for stem in stems:
            xml_path = ANNOTATIONS / f"{stem}.xml"
            if not xml_path.exists():
                continue
            rec = parse_annotation(xml_path, min_px)
            if rec and rec["ref_head_px"] >= REF_HEAD_PX:
                out.append(rec)
        return out

    records = collect(min_head_px)

    relaxed = False
    if len(records) < target:
        # §4.1: 부족하면 30px 로 완화하되 PROGRESS.md 에 기록한다
        relaxed = True
        records = collect(config.MIN_HEAD_PX_RELAXED)

    chosen = select(records, target)
    manifest = {
        "source": "SHWD / VOC2028",
        "split": EVAL_SPLIT,
        "split_reason": "파인튜닝 학습셋과 겹치지 않게 test 분할로 제한했다",
        "min_head_px": config.MIN_HEAD_PX_RELAXED if relaxed else min_head_px,
        "relaxed_to_30px": relaxed,
        "ref_head_px_min": REF_HEAD_PX,
        "n_candidates": len(records),
        "n_selected": len(chosen),
        "n_hat": sum(r["n_hat"] for r in chosen),
        "n_person": sum(r["n_person"] for r in chosen),
        "selection": "파일명 정렬 순서. 난수 없음",
        "images": chosen,
    }
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=1),
                        encoding="utf-8")
    return manifest


if __name__ == "__main__":
    m = main()
    print(f"후보 {m['n_candidates']}장 → 선정 {m['n_selected']}장")
    print(f"  hat {m['n_hat']} · person {m['n_person']}")
    print(f"  40px 완화 여부: {m['relaxed_to_30px']}")
    print(f"  → {MANIFEST}")
