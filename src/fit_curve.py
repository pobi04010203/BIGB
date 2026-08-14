# -*- coding: utf-8 -*-
"""분리형 곱셈 모델 피팅 (CLAUDE.md §4.5).

    P(ρ, θ, o) = f(ρ) · g(θ) · h(o)

  f(ρ) = 로지스틱  L / (1 + exp(-k(ρ - x0)))
  g(θ) = 1 에서 시작하는 단조 감소. 2차 또는 지수 중 R² 가 높은 쪽
  h(o) = 지수 감쇠  exp(-λ·o)

상호작용항은 넣지 않는다. 1차 근사임을 제안서에 명시하는 것이 방어 전략이다(§4.5).

각 축은 다른 두 축을 기준값(ρ=48, θ=0, o=0)에 고정한 단면으로 먼저 피팅하고,
전체 125점에 대해 R² 를 계산해 검증한다.

g 와 h 는 기준점에서 1 이 되도록 정규화한다. 그래야 전체 크기를 f 가 지고
곱이 기준 조건에서 실측값과 맞는다.

가림은 목표값이 아니라 **실측 가림률**로 피팅한다. 정수 픽셀 양자화 때문에
목표와 어긋나는데, 어긋난 쪽이 실제로 이미지에 걸린 값이다.
"""
from pathlib import Path
import csv
import json
import sys

import numpy as np
from scipy.optimize import curve_fit

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config

TARGET = "recall_nohat"          # 주 지표 (§4.4)
BASE_RHO, BASE_THETA, BASE_OCC = 48.0, 0.0, 0.0


def r2(y: np.ndarray, yhat: np.ndarray) -> float:
    ss_res = float(np.sum((y - yhat) ** 2))
    ss_tot = float(np.sum((y - np.mean(y)) ** 2))
    return 1.0 - ss_res / ss_tot if ss_tot > 0 else float("nan")


# ── 모델 형태 ─────────────────────────────────────────────────────────────

def f_logistic(x, L, k, x0):
    return L / (1.0 + np.exp(-k * (x - x0)))


def g_quadratic(x, a, b):
    return 1.0 + a * x + b * x * x


def g_exponential(x, lam):
    return np.exp(-lam * x)


def h_exp_decay(x, lam):
    return np.exp(-lam * x)


def load_rows() -> list[dict]:
    with config.GRID_RESULTS_CSV.open(encoding="utf-8") as f:
        rows = [r for r in csv.DictReader(f) if r[TARGET] not in ("", "None")]
    for r in rows:
        r["rho"] = float(r["rho_px"])
        r["theta"] = float(r["theta_deg"])
        r["occ"] = float(r["occ_pct_actual"]) / 100.0     # 실측 가림률
        r["y"] = float(r[TARGET])
    return rows


def main() -> dict:
    if not config.GRID_RESULTS_CSV.exists():
        raise FileNotFoundError(
            f"{config.GRID_RESULTS_CSV} 가 없다. 먼저 `python src/run_grid.py` 를 돌릴 것."
        )
    rows = load_rows()

    def section(fix: dict) -> list[dict]:
        out = [r for r in rows
               if all(abs(r[k] - v) < 1e-6 for k, v in fix.items())]
        return sorted(out, key=lambda r: (r["rho"], r["theta"], r["occ"]))

    # ── f(ρ) — θ=0, o=0 단면 ──────────────────────────────────────────────
    sec_f = section({"theta": BASE_THETA, "occ": 0.0})
    xf = np.array([r["rho"] for r in sec_f])
    yf = np.array([r["y"] for r in sec_f])
    p_f, _ = curve_fit(f_logistic, xf, yf,
                       p0=[max(yf), 0.2, 15.0], maxfev=200000)
    r2_f = r2(yf, f_logistic(xf, *p_f))
    base = float(f_logistic(BASE_RHO, *p_f))

    # ── g(θ) — ρ=48, o=0 단면. 기준점에서 1 로 정규화 ──────────────────────
    sec_g = section({"rho": BASE_RHO, "occ": 0.0})
    xg = np.array([r["theta"] for r in sec_g])
    yg_raw = np.array([r["y"] for r in sec_g])
    yg = yg_raw / yg_raw[0]
    # §4.5 는 g 를 "1 에서 시작하는 단조 감소" 로 못박는다. 제약 없이 맞추면
    # θ=15 의 실측 융기(0.9592 > 0.9578, +0.0014)를 2차가 5% 로 증폭해 15.4° 에
    # 꼭짓점이 생기고, 최적화가 15° 내리깐 카메라를 정면보다 선호하게 된다.
    # a <= 0 · b <= 0 으로 가둬 [0,90] 구간에서 단조 감소를 보장한다.
    p_gq, _ = curve_fit(g_quadratic, xg, yg, p0=[-1e-3, -1e-5],
                        bounds=([-np.inf, -np.inf], [0.0, 0.0]), maxfev=200000)
    p_ge, _ = curve_fit(g_exponential, xg, yg, p0=[0.005],
                        bounds=([0.0], [np.inf]), maxfev=200000)
    r2_gq, r2_ge = r2(yg, g_quadratic(xg, *p_gq)), r2(yg, g_exponential(xg, *p_ge))
    if r2_gq >= r2_ge:
        g_form, g_params, g_fn, r2_g = "quadratic", {"a": p_gq[0], "b": p_gq[1]}, \
            lambda x: g_quadratic(x, *p_gq), r2_gq
    else:
        g_form, g_params, g_fn, r2_g = "exponential", {"lambda": p_ge[0]}, \
            lambda x: g_exponential(x, *p_ge), r2_ge

    # ── h(o) — ρ=48, θ=0 단면. 기준점에서 1 로 정규화 ──────────────────────
    sec_h = section({"rho": BASE_RHO, "theta": BASE_THETA})
    xh = np.array([r["occ"] for r in sec_h])
    yh_raw = np.array([r["y"] for r in sec_h])
    yh = yh_raw / yh_raw[0]
    p_h, _ = curve_fit(h_exp_decay, xh, yh, p0=[3.0], maxfev=200000)
    r2_h = r2(yh, h_exp_decay(xh, *p_h))

    # ── 전체 125점 검증 ───────────────────────────────────────────────────
    y_all = np.array([r["y"] for r in rows])
    yhat = np.array([
        float(f_logistic(r["rho"], *p_f)) * float(g_fn(r["theta"]))
        * float(h_exp_decay(r["occ"], *p_h))
        for r in rows
    ])
    r2_full = r2(y_all, yhat)

    params = {
        "model": "separable_multiplicative",
        "target": TARGET,
        "detector": "yolov8n",
        "detector_weights": "runs/detect/shwd_yolov8n/weights/best.pt",
        "detector_note": "COCO 사전학습본이 아니라 SHWD train 분할로 파인튜닝한 가중치다",
        "f_rho": {"form": "logistic", "L": float(p_f[0]), "k": float(p_f[1]),
                  "x0": float(p_f[2]), "r2_section": round(r2_f, 4),
                  "measured_range_px": [float(min(xf)), float(max(xf))],
                  "extrapolation": "measured_range 밖으로 외삽하지 않는다. "
                                   "하한 미만은 detect_model.py 가 0 으로 본다"},
        "g_theta": {"form": g_form,
                    "params": {k: float(v) for k, v in g_params.items()},
                    "normalized_at": "theta=0", "r2_section": round(r2_g, 4)},
        "h_occ": {"form": "exp_decay", "lambda": float(p_h[0]),
                  "normalized_at": "occ=0", "input": "occ_pct_actual/100",
                  "r2_section": round(r2_h, 4)},
        "baseline_P": round(base, 4),
        "r2_full_grid": round(r2_full, 4),
        "r2_acceptance": config.R2_ACCEPTANCE,
        "acceptance_passed": bool(r2_full >= config.R2_ACCEPTANCE),
        "n_conditions": len(rows),
        "n_images": None,
        "iou_thr": config.IOU_THR,
        "conf_thr": config.CONF_THR,
        "status": "ok",
        "generated_at": None,
    }
    return params, rows, yhat, y_all


if __name__ == "__main__":
    import datetime
    params, rows, yhat, y_all = main()
    manifest = json.loads((config.DATA_FILTERED / "manifest.json").read_text(encoding="utf-8"))
    params["n_images"] = manifest["n_selected"]
    params["generated_at"] = datetime.datetime.now().isoformat(timespec="seconds")
    config.CURVE_PARAMS_JSON.write_text(
        json.dumps(params, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"f(ρ) 로지스틱  L={params['f_rho']['L']:.4f} k={params['f_rho']['k']:.4f} "
          f"x0={params['f_rho']['x0']:.4f}   단면 R²={params['f_rho']['r2_section']}")
    print(f"g(θ) {params['g_theta']['form']:<12} {params['g_theta']['params']}"
          f"   단면 R²={params['g_theta']['r2_section']}")
    print(f"h(o) 지수감쇠  λ={params['h_occ']['lambda']:.4f}"
          f"                       단면 R²={params['h_occ']['r2_section']}")
    print()
    print(f"전체 {params['n_conditions']}점 R² = {params['r2_full_grid']}   "
          f"(기준 {config.R2_ACCEPTANCE} → {'통과' if params['acceptance_passed'] else '미달'})")
    print(f"→ {config.CURVE_PARAMS_JSON}")
