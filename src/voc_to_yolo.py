# -*- coding: utf-8 -*-
"""VOC2028 → YOLO 형식 변환 (파인튜닝 준비).

ultralytics 는 VOC 를 직접 읽지 못한다. `images/` 와 `labels/` 가 짝을 이루는
디렉터리 구조를 요구하므로 그 모양으로 옮긴다.

**train 과 val 만 변환한다. test 는 건드리지 않는다.**
test 분할은 실험셋(`data/filtered/manifest.json`)이 나온 곳이라, 학습에 넣으면
ρ·θ·o 곡선이 검출 성능이 아니라 암기를 재게 된다.

이미지는 복사하지 않고 **하드링크**를 건다. 같은 볼륨의 NTFS 에서 관리자 권한 없이
되고 900MB 를 중복 저장하지 않는다. 실패하면 복사로 떨어진다.
"""
from pathlib import Path
import os
import shutil
import sys
import xml.etree.ElementTree as ET

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config

VOC_ROOT = config.DATA_RAW / "VOC2028"
ANNOTATIONS = VOC_ROOT / "Annotations"
IMAGES = VOC_ROOT / "JPEGImages"
SPLITS = VOC_ROOT / "ImageSets" / "Main"

YOLO_ROOT = config.ROOT / "data" / "yolo"
YAML_PATH = YOLO_ROOT / "shwd.yaml"

CLASS_NAMES = ["hat", "person"]          # 0=착용, 1=미착용
CLASS_ID = {n: i for i, n in enumerate(CLASS_NAMES)}

TRAIN_SPLITS = ("train", "val")          # test 는 제외한다


def link_or_copy(src: Path, dst: Path) -> None:
    if dst.exists():
        return
    try:
        os.link(src, dst)
    except OSError:
        shutil.copy2(src, dst)


def convert_one(stem: str, img_dir: Path, lbl_dir: Path) -> tuple[bool, int]:
    xml_path = ANNOTATIONS / f"{stem}.xml"
    img_path = IMAGES / f"{stem}.jpg"
    if not xml_path.exists() or not img_path.exists():
        return False, 0

    root = ET.parse(xml_path).getroot()
    size = root.find("size")
    W, H = float(size.findtext("width")), float(size.findtext("height"))
    if W <= 0 or H <= 0:
        return False, 0

    lines = []
    for obj in root.findall("object"):
        name = (obj.findtext("name") or "").strip()
        if name not in CLASS_ID:
            continue                     # 'dog' 3건 등 잡라벨 제외
        b = obj.find("bndbox")
        x1, y1 = float(b.findtext("xmin")), float(b.findtext("ymin"))
        x2, y2 = float(b.findtext("xmax")), float(b.findtext("ymax"))
        # 좌표가 이미지 밖으로 나간 어노테이션이 섞여 있어 잘라낸다
        x1, x2 = max(0.0, min(x1, W)), max(0.0, min(x2, W))
        y1, y2 = max(0.0, min(y1, H)), max(0.0, min(y2, H))
        if x2 <= x1 or y2 <= y1:
            continue
        cx, cy = (x1 + x2) / 2 / W, (y1 + y2) / 2 / H
        bw, bh = (x2 - x1) / W, (y2 - y1) / H
        lines.append(f"{CLASS_ID[name]} {cx:.6f} {cy:.6f} {bw:.6f} {bh:.6f}")

    if not lines:
        return False, 0                  # 라벨 없는 이미지는 넣지 않는다

    link_or_copy(img_path, img_dir / f"{stem}.jpg")
    (lbl_dir / f"{stem}.txt").write_text("\n".join(lines), encoding="utf-8")
    return True, len(lines)


def main() -> dict:
    if not ANNOTATIONS.is_dir():
        raise FileNotFoundError(f"어노테이션이 없다: {ANNOTATIONS}")

    stats = {}
    for split in TRAIN_SPLITS:
        img_dir = YOLO_ROOT / "images" / split
        lbl_dir = YOLO_ROOT / "labels" / split
        img_dir.mkdir(parents=True, exist_ok=True)
        lbl_dir.mkdir(parents=True, exist_ok=True)

        stems = sorted((SPLITS / f"{split}.txt").read_text().split())
        n_img = n_box = 0
        for stem in stems:
            ok, n = convert_one(stem, img_dir, lbl_dir)
            if ok:
                n_img += 1
                n_box += n
        stats[split] = {"images": n_img, "boxes": n_box, "listed": len(stems)}

    YAML_PATH.write_text(
        "# SHWD (VOC2028) → YOLO. src/voc_to_yolo.py 가 생성한다.\n"
        "# test 분할은 실험셋이므로 여기 없다.\n"
        f"path: {YOLO_ROOT.as_posix()}\n"
        "train: images/train\n"
        "val: images/val\n"
        "names:\n"
        "  0: hat\n"
        "  1: person\n",
        encoding="utf-8",
    )
    return stats


if __name__ == "__main__":
    s = main()
    for split, v in s.items():
        print(f"{split:6} 이미지 {v['images']}/{v['listed']} · 박스 {v['boxes']}")
    print(f"→ {YAML_PATH}")
