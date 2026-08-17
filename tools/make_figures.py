"""발표자료용 그림 — 슬라이드에 배치되는 실제 폭으로 만들어 축소되지 않게 한다.

이전 판은 13.5in 로 그려 11in 로 줄여 넣는 바람에 차트 글씨가 본문보다 훨씬 작아졌다.
figsize 를 배치 폭에 맞추고 폰트를 슬라이드 본문(17pt)에 근접시킨다.
"""
import csv
import json
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import font_manager, patches

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "outputs" / "figures"

OUT.mkdir(parents=True, exist_ok=True)

import fonts as F                                   # noqa: E402  (경로 해석 헬퍼)
for _f in (F.regular(), F.bold()):
    font_manager.fontManager.addfont(str(_f))
plt.rcParams.update({
    "font.family": F.FAMILY,
    "axes.unicode_minus": True,      # Pretendard 는 U+2212(마이너스)가 있다
    "font.size": 13,
    "axes.labelsize": 14,
    "xtick.labelsize": 12.5,
    "ytick.labelsize": 12.5,
})

NAVY, BLUE, GRAY, RED, AMBER = "#1F4E79", "#2E75B6", "#8A8A8A", "#C00000", "#E6A700"

cp = json.loads((ROOT / "outputs" / "curve_params.json").read_text(encoding="utf-8"))
cmp_ = json.loads((ROOT / "outputs" / "comparison.json").read_text(encoding="utf-8"))
rows = list(csv.DictReader((ROOT / "outputs" / "grid_results.csv").open(encoding="utf-8")))
for r in rows:
    for k in r:
        r[k] = float(r[k]) if r[k] not in ("", "None") else None
BASE = cp["baseline_P"]


def f_rho(x):
    p = cp["f_rho"]
    return p["L"] / (1 + np.exp(-p["k"] * (x - p["x0"])))


def g_theta(x):
    p = cp["g_theta"]["params"]
    return (1 + np.exp(-p["k"] * p["x0"])) / (1 + np.exp(p["k"] * (x - p["x0"])))


def h_occ(x):
    return np.exp(-cp["h_occ"]["lambda"] * x)


def section(fixed):
    return [r for r in rows if all(abs(r[k] - v) < 1e-6 for k, v in fixed.items())]


def clean(ax, spines=("top", "right")):
    for s in spines:
        ax.spines[s].set_visible(False)
    ax.grid(alpha=0.22, lw=0.6)
    ax.set_axisbelow(True)


# ── 3축 곡선 (슬라이드 배치 폭 11.0 in) ────────────────────────────────────
fig, axes = plt.subplots(1, 3, figsize=(11.0, 3.55))
specs = [
    ("rho_px", {"theta_deg": 0.0, "occ_pct_target": 0.0}, f_rho,
     "화면 속 머리 크기 (픽셀)", "카메라와의 거리", (3.2, 50)),
    ("theta_deg", {"rho_px": 48.0, "occ_pct_target": 0.0}, g_theta,
     "내려다보는 각도 (도)", "내려다보는 각도", (-3, 79)),
    ("occ_pct_target", {"rho_px": 48.0, "theta_deg": 0.0}, h_occ,
     "가려진 정도 (%)", "가려진 정도", (-4, 79)),
]
for ax, (xkey, fixed, fn, xlabel, tag, xlim) in zip(axes, specs):
    pts = section(fixed)
    xs = np.array([p[xkey] for p in pts])
    ys = np.array([p["recall_nohat"] for p in pts]) / BASE
    o = np.argsort(xs); xs, ys = xs[o], ys[o]
    grid = np.linspace(max(xs.min(), 0.1), xs.max(), 300)
    fit = fn(grid / 100.0 if xkey == "occ_pct_target" else grid)
    if xkey == "rho_px":
        fit = fit / BASE
    ax.plot(grid, fit, color=BLUE, lw=2.6, zorder=2)
    ax.scatter(xs, ys, s=46, color=NAVY, zorder=3)
    ax.set_xlabel(xlabel)
    ax.set_ylim(-0.05, 1.12)
    ax.set_xlim(*xlim)
    ax.set_title(tag, fontsize=15, color=NAVY, weight="bold", pad=9)
    clean(ax)
axes[0].set_ylabel("검출률 (조건 없을 때 대비)")
axes[1].set_yticklabels([]); axes[2].set_yticklabels([])

o15 = [p for p in section({"rho_px": 48.0, "theta_deg": 0.0})
       if abs(p["occ_pct_target"] - 15) < 1e-6][0]
axes[2].annotate(f"15% → {o15['recall_nohat']/BASE*100:.0f}%", xy=(15, o15["recall_nohat"] / BASE),
                 xytext=(31, 0.80), fontsize=14.5, color=RED, weight="bold",
                 arrowprops=dict(arrowstyle="->", color=RED, lw=2.0))
r12 = [p for p in section({"theta_deg": 0.0, "occ_pct_target": 0.0})
       if abs(p["rho_px"] - 12) < 1e-6][0]
axes[0].annotate(f"12픽셀 = 40 m 거리\n{r12['recall_nohat']/BASE*100:.0f}%",
                 xy=(12, r12["recall_nohat"] / BASE),
                 xytext=(15.5, 0.34), fontsize=14, color=NAVY,
                 arrowprops=dict(arrowstyle="->", color=NAVY, lw=1.8))
fig.tight_layout(w_pad=1.6)
fig.savefig(OUT / "fig_curves.png", dpi=220, facecolor="white")
plt.close(fig)

# ── 배치 비교 (배치 폭 7.5 in) ─────────────────────────────────────────────
geo, pro = cmp_["geometric"], cmp_["probabilistic"]
fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.5, 3.5))

b = a1.bar(["기존 기준", "제안 기준"], [geo["WDR"] * 100, pro["WDR"] * 100],
           color=[GRAY, BLUE], width=0.5)
a1.set_ylabel("위험가중 검출률 (%)")
a1.set_ylim(0, 88)
for bb, v in zip(b, [geo["WDR"], pro["WDR"]]):
    a1.text(bb.get_x() + bb.get_width() / 2, v * 100 + 2.4, f"{v*100:.1f}%",
            ha="center", fontsize=17, weight="bold", color=NAVY)
clean(a1); a1.grid(axis="x", alpha=0)

b2 = a2.bar(["기존 기준", "제안 기준"],
            [geo["fail_voxel_count"], pro["fail_voxel_count"]], color=[GRAY, RED], width=0.5)
a2.set_ylabel("사각지대 (칸)")
a2.set_ylim(0, 440)
for bb, v in zip(b2, [geo["fail_voxel_count"], pro["fail_voxel_count"]]):
    a2.text(bb.get_x() + bb.get_width() / 2, v + 12, f"{v}", ha="center",
            fontsize=17, weight="bold", color=NAVY)
a2.annotate("", xy=(1, pro["fail_voxel_count"] + 34), xytext=(1, geo["fail_voxel_count"] - 10),
            arrowprops=dict(arrowstyle="-|>", color=RED, lw=2.6))
a2.text(1.10, (geo["fail_voxel_count"] + pro["fail_voxel_count"]) / 2, "절반",
        fontsize=15, color=RED, weight="bold", va="center")
clean(a2); a2.grid(axis="x", alpha=0)
fig.tight_layout(w_pad=2.2)
fig.savefig(OUT / "fig_result.png", dpi=220, facecolor="white")
plt.close(fig)

# ── 파이프라인 (배치 폭 11.6 in) ───────────────────────────────────────────
fig, ax = plt.subplots(figsize=(11.6, 1.95))
ax.set_xlim(0, 11.6); ax.set_ylim(0, 1.95); ax.axis("off")
steps = [("가상 현장", "복셀 1,500칸"), ("광선투사", "36,000쌍"),
         ("검출확률", "P = f·g·h"), ("다중 결합", "겹치면 상승"),
         ("위험가중", "WDR"), ("배치 최적화", "탐욕 8대")]
w, h, gap = 1.62, 1.05, 0.28
x = 0.16
for i, (head, body) in enumerate(steps):
    face = "#EBF3FA" if i < 5 else "#FFF6DE"
    edge = BLUE if i < 5 else AMBER
    ax.add_patch(patches.FancyBboxPatch((x, 0.5), w, h,
                                        boxstyle="round,pad=0.03,rounding_size=0.07",
                                        facecolor=face, edgecolor=edge, lw=1.7))
    ax.text(x + w / 2, 1.26, head, ha="center", va="center", fontsize=14,
            weight="bold", color=NAVY)
    ax.text(x + w / 2, 0.86, body, ha="center", va="center", fontsize=12, color="#444444")
    if i < len(steps) - 1:
        ax.annotate("", xy=(x + w + gap - 0.03, 1.02), xytext=(x + w + 0.03, 1.02),
                    arrowprops=dict(arrowstyle="-|>", color=GRAY, lw=1.9))
    x += w + gap
fig.tight_layout(pad=0.1)
fig.savefig(OUT / "fig_pipeline.png", dpi=220, facecolor="white")
plt.close(fig)

print("saved:", sorted(p.name for p in OUT.glob("*.png")))
