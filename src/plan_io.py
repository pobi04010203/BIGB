# -*- coding: utf-8 -*-
"""CCTV 계획서 입출력 (2026-08-19 교수 지시).

**입력은 CCTV 계획서다.** 설계도면 위에 카메라가 어디에서 · 어디를 · 어떤 각도로
보는지가 적힌 것. 그것을 받아 커버리지를 진단하고 스마트 안전보고서를 낸다.

실물 계획서 포맷(DWG / PDF / 엑셀)이 확인되지 않아, 그 안의 값을 담는 **JSON
계약**을 먼저 정의한다. 어떤 포맷이든 이 계약으로 옮기면 엔진이 받는다.
도면에서 좌표를 뽑는 어댑터는 포맷이 정해지면 이 앞단에 붙인다.

카메라 하나에 필요한 것:

  id            계획서상 기기 번호
  x, y, z       설치 위치 (m). z 는 지면 기준 높이
  yaw_deg       수평 방위 (0=+x, 반시계). "어디를 보는가"
  hfov_deg      수평 화각. 없으면 config 기본값
  img_w, img_h  센서 해상도. 없으면 config 기본값

pitch(부각)는 받지 않는다 — 작업면을 덮도록 조준했다고 본다(§5.2 한계).
"""
from pathlib import Path
import json
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config
import site_model

PLANS = config.ROOT / "data" / "plans"


def load(path: Path) -> tuple[list, dict]:
    """계획서 → (Camera 목록, 카메라별 yaw). site_model.Camera 를 그대로 쓴다."""
    doc = json.loads(Path(path).read_text(encoding="utf-8"))
    cams, yaws, specs = [], {}, {}
    for c in doc["cameras"]:
        cid = str(c["id"])
        cams.append(site_model.Camera(cid, float(c["x"]), float(c["y"]),
                                      float(c["z"]), c.get("mount", "plan")))
        yaws[cid] = float(c["yaw_deg"])
        specs[cid] = {
            "hfov_deg": float(c.get("hfov_deg", config.HFOV_DEG)),
            "img_w": int(c.get("img_w", config.IMG_WIDTH_PX)),
            "img_h": int(c.get("img_h", config.IMG_HEIGHT_PX)),
        }
    doc["_specs"] = specs
    return cams, yaws, doc


def save_sample(path: Path, site, yaws: dict, cam_ids: list, note: str) -> Path:
    """현장 후보에서 고른 배치를 계획서 형식으로 떨군다. 샘플·역출력용."""
    by_id = {c.cid: c for c in site.cameras}
    doc = {
        "_about": "CCTV 계획서 (BIGB 입력 계약)",
        "_note": note,
        "site": {"width_m": site.width, "depth_m": site.depth},
        "cameras": [
            {"id": cid, "x": by_id[cid].x, "y": by_id[cid].y, "z": by_id[cid].z,
             "yaw_deg": yaws[cid], "hfov_deg": config.HFOV_DEG,
             "img_w": config.IMG_WIDTH_PX, "img_h": config.IMG_HEIGHT_PX,
             "mount": by_id[cid].mount}
            for cid in cam_ids
        ],
    }
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(doc, ensure_ascii=False, indent=1), encoding="utf-8")
    return path
