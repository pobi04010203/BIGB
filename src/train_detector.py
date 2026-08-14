# -*- coding: utf-8 -*-
"""YOLOv8n 을 SHWD 로 파인튜닝한다.

CLAUDE.md §4.3 은 주 모델을 "YOLOv8n 사전학습 가중치"로 적었으나, 그 가중치는
COCO 80클래스라 `hat` · `helmet` · `head` 가 없다. 변형을 걸지 않은 기준 조건에서
recall_nohat 이 0.057 로 실측돼 곡선을 뽑을 수 없었다.
사용자 승인(2026-08-14) 하에 파인튜닝 단계를 추가했다.

학습에는 train/val 만 쓴다. 실험셋이 나온 test 분할은 넣지 않는다 — 넣으면
ρ·θ·o 곡선이 검출 성능이 아니라 암기를 재게 된다.

로컬 CUDA 를 새로 세팅하지 않는다(§0.1-3). 이미 동작하는 것이 있으면 쓰고,
없으면 CPU 로 떨어진다.
"""
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config

YOLO_YAML = config.ROOT / "data" / "yolo" / "shwd.yaml"
RUN_NAME = "shwd_yolov8n"
WEIGHTS_OUT = config.ROOT / "runs" / "detect" / RUN_NAME / "weights" / "best.pt"

EPOCHS = 50
IMGSZ = 640
BATCH = 16
PATIENCE = 15        # 개선이 멈추면 일찍 끝낸다. 남은 일정이 13일이다
SEED = 0             # 재현 가능해야 한다


def main() -> Path:
    import torch
    from ultralytics import YOLO

    if not YOLO_YAML.exists():
        raise FileNotFoundError(
            f"{YOLO_YAML} 가 없다. 먼저 `python src/voc_to_yolo.py` 를 돌릴 것."
        )

    device = 0 if torch.cuda.is_available() else "cpu"
    print(f"device={device}  epochs={EPOCHS}  imgsz={IMGSZ}  batch={BATCH}")

    model = YOLO(config.DETECTOR_WEIGHTS)     # COCO 가중치에서 출발
    model.train(
        data=str(YOLO_YAML),
        epochs=EPOCHS,
        imgsz=IMGSZ,
        batch=BATCH,
        patience=PATIENCE,
        seed=SEED,
        deterministic=True,
        device=device,
        project=str(config.ROOT / "runs" / "detect"),
        name=RUN_NAME,
        exist_ok=True,
        verbose=True,
    )
    print(f"best weights → {WEIGHTS_OUT}")
    return WEIGHTS_OUT


if __name__ == "__main__":
    main()
