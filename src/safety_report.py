# -*- coding: utf-8 -*-
"""스마트 안전보고서 자동 생성 (2026-08-19 교수 지시).

**CCTV 계획서를 넣으면 보고서가 나온다.** 이것이 이 도구의 사용 형태다.

  입력   data/plans/<이름>.json   — 카메라 위치·방위·사양
  출력   outputs/safety_report.json
         outputs/safety_report.html  — 인쇄 가능한 단일 파일

보고서에 담기는 것:

  1. 판정        LH 기준 대비 통과/미달
  2. 커버리지    층별 · 위험구역별. 분모를 밝힌다
  3. 사각지대    어디가 왜 안 보이는가
  4. 처방        재배치 / 증설 대수 / 설치 위치 / 예상 커버리지
  5. 근거        곡선 출처, 검출기, 측정 범위, 한계

수치는 전부 계산 결과이며 이 파일에서 만들지 않는다(§0.1-1).
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
import prescribe
import plan_io

REPORT_JSON = config.OUTPUTS / "safety_report.json"
REPORT_HTML = config.OUTPUTS / "safety_report.html"


def build(plan_path: Path) -> dict:
    site = site_model.build()
    cams_plan, yaws_plan, doc = plan_io.load(plan_path)

    # 후보 전체 + 계획서 카메라. 계획서 카메라는 방위가 이미 정해져 있다.
    known = {c.cid for c in site.cameras}
    extra = [c for c in cams_plan if c.cid not in known]
    all_cams = list(site.cameras) + extra
    pairs, yaws = geometry.all_pairs(site, all_cams, fixed_yaws=yaws_plan)

    curve = detect_model.load()
    cam_ids = [c.cid for c in all_cams]
    cams, P, w = prescribe.build_matrix(site, pairs, curve, cam_ids)
    plan_idx = [cams.index(c.cid) for c in cams_plan]

    d = prescribe.diagnose(site, pairs, curve, plan_idx, cams, P, w)
    m = d["target_metric"]

    # 층별 분해 — 3D 화의 실질 내용이다
    pt = prescribe.p_total(P, plan_idx)
    levels = {}
    for lvl in sorted({v["level"] for v in site.voxels}):
        sel = [i for i, v in enumerate(site.voxels) if v["level"] == lvl]
        ok = [i for i in sel if pt[i] >= d["threshold"]]
        wsum = sum(site.voxels[i]["w"] for i in sel)
        levels[str(lvl)] = {
            "floor_z_m": site.voxels[sel[0]]["floor_z"],
            "voxels": len(sel),
            "spatial_coverage": round(len(ok) / len(sel), 4),
            "risk_coverage": round(
                sum(site.voxels[i]["w"] for i in ok) / wsum, 4) if wsum else None,
        }

    # 위험구역별 분해
    zones = {}
    for zname in sorted({z for v in site.voxels for z in v["zones"]}):
        sel = [i for i, v in enumerate(site.voxels) if zname in v["zones"]]
        ok = [i for i in sel if pt[i] >= d["threshold"]]
        zones[zname] = {"voxels": len(sel),
                        "coverage": round(len(ok) / len(sel), 4),
                        "weight": site.voxels[sel[0]]["w"]}

    blind = sorted(
        [{"voxel_id": site.voxels[i]["id"], "x": site.voxels[i]["x"],
          "y": site.voxels[i]["y"], "level": site.voxels[i]["level"],
          "w": site.voxels[i]["w"], "zones": site.voxels[i]["zones"],
          "P_total": round(float(pt[i]), 4),
          "reason": _worst_reason(cams, plan_idx, site.voxels[i]["id"], pairs, curve)}
         for i in range(len(site.voxels)) if pt[i] < d["threshold"]],
        key=lambda r: (-r["w"], r["P_total"]))

    return {
        "plan": {"path": str(Path(plan_path).relative_to(config.ROOT)),
                 "note": doc.get("_note", ""), "cameras": len(cams_plan)},
        "site": {"width_m": site.width, "depth_m": site.depth,
                 "voxel_m": config.VOXEL_M, "levels": len(levels),
                 "voxels": len(site.voxels)},
        "standard": {"target": d["target"], "metric": m,
                     "source": config.LH_COVERAGE_TARGET_SOURCE,
                     "threshold": d["threshold"],
                     "note": "LH 가 게시한 커버리지 기준은 아직 없다. 이 값은 "
                             "우리가 제안하는 잠정 임계이며 고시값이 아니다"},
        "verdict": {"passes": d["passes"],
                    "value": d["current"][m],
                    "gap": round(d["target"] - d["current"][m], 4)},
        "coverage": {"overall": d["current"], "by_level": levels, "by_zone": zones},
        "blind_spots": blind,
        "prescription": d["prescription"],
        "options": {"reallocate": d["reallocated_same_count"],
                    "ceiling": d["ceiling"], "add_curve": d["add_curve"],
                    "full_curve": d["full_curve"]},
        "basis": {
            "detector": curve.p.get("detector"),
            "detector_weights": curve.p.get("detector_weights"),
            "curve": str(config.CURVE_PARAMS_JSON.relative_to(config.ROOT)),
            "r2_full_grid": curve.p.get("r2_full_grid"),
            "rho_measured_px": curve.p["f_rho"]["measured_range_px"],
            "camera_spec": {"img_w": config.IMG_WIDTH_PX,
                            "img_h": config.IMG_HEIGHT_PX,
                            "hfov_deg": config.HFOV_DEG},
            "limits": [
                "곡선은 SHWD 정지영상의 합성 변형에서 얻었다. 합성 가림(수직 "
                "스트라이프)과 실제 비계 가림의 등가성은 검증되지 않았다",
                "카메라 부각(pitch)은 검사하지 않는다 — 작업면을 덮도록 "
                "조준했다고 본다",
                "비계 점유율은 잠정값이다. 건설현장 실측 가림률 통계가 없다",
                "위험 가중치 1~5 는 상대 순위이며 LH 지수 원자료가 아니다",
            ],
        },
        "status": "ok",
    }


def _worst_reason(cams, idx, vid, pairs, curve) -> str:
    best, best_p = None, -1.0
    for i in idx:
        geo = pairs.get((cams[i], vid))
        if geo is None:
            continue
        p = curve.p_detect(geo)
        if p > best_p:
            best, best_p = geo, p
    return curve.reason(best) if best else "가시 카메라 없음"


def main(plan_path: Path = None) -> Path:
    plan_path = Path(plan_path or config.ROOT / "data/plans/as_planned.json")
    rep = build(plan_path)
    REPORT_JSON.parent.mkdir(parents=True, exist_ok=True)
    REPORT_JSON.write_text(json.dumps(rep, ensure_ascii=False, indent=1),
                           encoding="utf-8")
    import render_report
    render_report.write(rep, REPORT_HTML)

    m = rep["standard"]["metric"]
    print(f"계획서 {rep['plan']['cameras']}대 · 복셀 {rep['site']['voxels']} "
          f"({rep['site']['levels']}개 층)")
    print(f"판정: {rep['coverage']['overall'][m]:.1%} / 목표 "
          f"{rep['standard']['target']:.0%} → "
          f"{'통과' if rep['verdict']['passes'] else '미달'}")
    print(f"처방[{rep['prescription']['verdict']}] {rep['prescription']['text']}")
    print(f"→ {REPORT_JSON}")
    print(f"→ {REPORT_HTML}")
    return REPORT_HTML


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else None)
