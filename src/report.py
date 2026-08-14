# -*- coding: utf-8 -*-
"""Phase 3 산출 — site_eval.json · comparison.json · mockup/data.json.

출력 계약은 CLAUDE.md §5.5 다. 계산되지 않은 값은 `null` 로 두고 `status` 로
알린다(§0.1-1). 두 배치 모두 **B 의 자(P_detect)로 재측정**한 값을 싣는다.

`ENABLE_OPTIMIZATION` 이 False 면 폴백 경로다(§7 D+7). optimize 를 돌리지 않고
단일 배치 진단만 낸다.
"""
from pathlib import Path
import json
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config
import site_model
import geometry
import detect_model
import aggregate
import optimize


def build_payload() -> dict:
    site = site_model.build()
    pairs = geometry.all_pairs(site)
    curve = detect_model.load()

    if config.ENABLE_OPTIMIZATION:
        placements = optimize.run(site, pairs, curve)
        mode = "optimization"
    else:
        # 폴백 — 기존 배치 가정 하나만 진단한다 (§7 D+7)
        base = sorted(c.cid for c in site.cameras)[:config.CAMERA_BUDGET]
        placements = {"baseline": aggregate.evaluate(site, base, pairs, curve)}
        mode = "fallback_single_placement"

    voxels = []
    for v in site.voxels:
        row = {"id": v["id"], "x": v["x"], "y": v["y"], "w": v["w"],
               "zones": v["zones"]}
        for key, res in placements.items():
            row[f"P_total_{key}"] = round(res["per_voxel"][v["id"]], 4)
        primary = "probabilistic" if "probabilistic" in placements else list(placements)[0]
        row["pass"] = bool(row[f"P_total_{primary}"] >= config.P_DETECT_THRESHOLD)
        voxels.append(row)

    payload = {
        "site": {"width_m": site.width, "depth_m": site.depth,
                 "voxel_m": config.VOXEL_M},
        "camera_budget": config.CAMERA_BUDGET,
        "threshold": config.P_DETECT_THRESHOLD,
        "mode": mode,
        "cameras": [{"id": c.cid, "x": c.x, "y": c.y, "z": c.z, "mount": c.mount}
                    for c in site.cameras],
        "aim": {"x": geometry.AIM_X, "y": geometry.AIM_Y,
                "hfov_deg": config.HFOV_DEG,
                "note": "§5.2 가 지향을 정하지 않아 전 카메라가 현장 중심을 본다고 두었다"},
        "placements": {
            k: {"camera_ids": v["camera_ids"], "WDR": v["WDR"],
                "fail_voxel_count": v["fail_voxel_count"]}
            for k, v in placements.items()
        },
        "voxels": voxels,
        "fail_zones": (placements.get("probabilistic") or
                       list(placements.values())[0])["fail_zones"],
        "curve": {
            "source": str(config.CURVE_PARAMS_JSON.relative_to(config.ROOT)),
            "rho_measured_px": curve.p["f_rho"]["measured_range_px"],
            "r2_full_grid": curve.p["r2_full_grid"],
        },
        "status": "ok",
    }
    return payload, placements


def main() -> None:
    payload, placements = build_payload()
    config.OUTPUTS.mkdir(parents=True, exist_ok=True)
    config.SITE_EVAL_JSON.write_text(
        json.dumps(payload, ensure_ascii=False, indent=1), encoding="utf-8")

    if "geometric" in placements and "probabilistic" in placements:
        g, p = placements["geometric"], placements["probabilistic"]
        comparison = {
            "measured_with": "probabilistic ruler (P_detect)",
            "note": "두 배치를 같은 자로 쟀다. 기존 기준으로 잘 설계한 배치도 "
                    "실제 검출률은 낮다는 것이 확인 대상이다",
            "geometric": {"camera_ids": g["camera_ids"], "WDR": g["WDR"],
                          "fail_voxel_count": g["fail_voxel_count"]},
            "probabilistic": {"camera_ids": p["camera_ids"], "WDR": p["WDR"],
                              "fail_voxel_count": p["fail_voxel_count"]},
            "delta_WDR": round(p["WDR"] - g["WDR"], 4),
            "delta_fail_voxels": p["fail_voxel_count"] - g["fail_voxel_count"],
            "overlap_camera_count": len(set(g["camera_ids"]) & set(p["camera_ids"])),
            "status": "ok",
        }
        config.COMPARISON_JSON.write_text(
            json.dumps(comparison, ensure_ascii=False, indent=1), encoding="utf-8")

    # 목업은 data.json 을 fetch 로 읽는다 (§7 Phase 4)
    config.MOCKUP.mkdir(parents=True, exist_ok=True)
    (config.MOCKUP / "data.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=1), encoding="utf-8")

    print(f"복셀 {len(payload['voxels'])} · 카메라 예산 {payload['camera_budget']}")
    for k, v in payload["placements"].items():
        print(f"  {k:<15} WDR {v['WDR']:.4f} · 미달 {v['fail_voxel_count']}개 "
              f"· {','.join(v['camera_ids'])}")
    if config.COMPARISON_JSON.exists():
        c = json.loads(config.COMPARISON_JSON.read_text(encoding="utf-8"))
        print(f"  ΔWDR {c['delta_WDR']:+.4f} · 공통 카메라 {c['overlap_camera_count']}대")
    print(f"→ {config.SITE_EVAL_JSON}")
    print(f"→ {config.COMPARISON_JSON}")
    print(f"→ {config.MOCKUP / 'data.json'}")


if __name__ == "__main__":
    main()
