# -*- coding: utf-8 -*-
"""P_detect 곡선 적용 (CLAUDE.md §5, ②단계).

`outputs/curve_params.json` 을 읽어 (ρ, θ, o) → P 로 바꾼다.

**status 가 'ok' 가 아니면 즉시 raise 한다** (§4.6). 실행되지 않은 값을 소비하는
경로를 남기지 않기 위해서다.

**측정 범위 밖으로 외삽하지 않는다.** 실측 ρ 하한 미만은 P=0 으로 본다.
로지스틱을 그대로 늘리면 ρ=5px 에서 0.64 같은 값이 나오는데 근거가 없고,
안전 판정에서 낙관은 위험한 방향이다.
"""
from pathlib import Path
import json
import math
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config


class Curve:
    def __init__(self, params: dict):
        if params.get("status") != "ok":
            raise RuntimeError(
                f"curve_params.json 의 status 가 'ok' 가 아니다: {params.get('status')!r}. "
                "먼저 `python src/fit_curve.py` 를 돌릴 것."
            )
        self.p = params
        f = params["f_rho"]
        self.L, self.k, self.x0 = f["L"], f["k"], f["x0"]
        self.rho_min, self.rho_max = f["measured_range_px"]
        g = params["g_theta"]
        self.g_form, self.g_params = g["form"], g["params"]
        # θ·o 도 ρ 와 같은 규칙을 받는다. 한 축에만 외삽 금지를 걸어두면 나머지
        # 방어논리까지 의심받는다. 범위가 기록돼 있지 않은 옛 파일은 무한대로 둬
        # 종전과 같이 동작시킨다.
        self.theta_min, self.theta_max = g.get("measured_range_deg", [0.0, 90.0])
        h = params["h_occ"]
        self.lam = h["lambda"]
        self.occ_min, self.occ_max = h.get("measured_range", [0.0, 1.0])

        # 측정 범위 밖으로 나간 조회 횟수. 영향의 크기를 숫자로 남긴다.
        self.out_of_range = {"rho": 0, "theta": 0, "occ": 0}

    def f(self, rho: float) -> float:
        if rho < self.rho_min:
            self.out_of_range["rho"] += 1
            return 0.0                     # 측정 범위 밖 — 외삽하지 않는다
        r = min(rho, self.rho_max)         # 위쪽은 포화라 잘라도 무해하다
        return self.L / (1.0 + math.exp(-self.k * (r - self.x0)))

    def g(self, theta: float) -> float:
        """부감각 감쇠. **측정 상한을 넘으면 0 이다.**

        geometry.theta_deg 는 타워크레인(z=25m)에서 근거리 복셀에 상한을 넘는
        각을 만든다. 거기서 곡선을 늘리면 근거 없는 값을 답하게 되고, 안전
        판정에서 낙관은 위험한 방향이다.
        """
        if theta > self.theta_max:
            self.out_of_range["theta"] += 1
            return 0.0
        if self.g_form == "quadratic":
            a, b = self.g_params["a"], self.g_params["b"]
            v = 1.0 + a * theta + b * theta * theta
        elif self.g_form == "logistic":
            k, x0 = self.g_params["k"], self.g_params["x0"]
            v = (1.0 + math.exp(-k * x0)) / (1.0 + math.exp(k * (theta - x0)))
        else:
            v = math.exp(-self.g_params["lambda"] * theta)
        return max(0.0, min(1.0, v))

    def h(self, occ: float) -> float:
        """가림 감쇠. **측정 상한을 넘으면 0 이다.** (g 와 같은 이유)"""
        if occ > self.occ_max:
            self.out_of_range["occ"] += 1
            return 0.0
        return max(0.0, min(1.0, math.exp(-self.lam * occ)))

    def p_detect(self, geo: dict) -> float:
        """기하량 하나 → 검출확률. 안 보이면 0."""
        if not geo.get("visible"):
            return 0.0
        return self.f(geo["rho_px"]) * self.g(geo["theta_deg"]) * self.h(geo["occ_ratio"])

    def reason(self, geo: dict) -> str:
        """왜 낮은가. 미달구역 목록에 붙인다 (§7 Phase 4 화면 2).

        측정 범위 밖은 먼저 걸러낸다. 그래야 out_of_range 집계가 이 함수 호출로
        부풀지 않는다.
        """
        if not geo.get("visible"):
            return geo.get("reason", "비가시")
        if geo["rho_px"] < self.rho_min:
            return "ρ 부족 (측정 범위 밖)"
        if geo["theta_deg"] > self.theta_max:
            return "θ 과다 (측정 범위 밖)"
        if geo["occ_ratio"] > self.occ_max:
            return "가림 과다 (측정 범위 밖)"
        parts = [("ρ 부족", 1 - self.f(geo["rho_px"]) / max(self.L, 1e-9)),
                 ("θ 과다", 1 - self.g(geo["theta_deg"])),
                 ("가림", 1 - self.h(geo["occ_ratio"]))]
        name, deficit = max(parts, key=lambda kv: kv[1])
        # 셋 다 미미하면 부족한 것이 없다. 그때도 max 는 첫 항목을 돌려주므로
        # 결함이 없는 조건에 'ρ 부족' 이 붙는다. 1% 미만은 사유로 보지 않는다.
        return name if deficit > 0.01 else "-"


def load() -> Curve:
    path = config.CURVE_PARAMS_JSON
    if not path.exists():
        raise FileNotFoundError(f"{path} 가 없다. 먼저 `python src/fit_curve.py` 를 돌릴 것.")
    return Curve(json.loads(path.read_text(encoding="utf-8")))


if __name__ == "__main__":
    c = load()
    print(f"측정 ρ 범위 {c.rho_min}~{c.rho_max}px · g={c.g_form} · λ={c.lam:.4f}")
    print(f"{'ρ':>5} {'θ':>5} {'o':>5} | {'P':>7}  사유")
    for rho, th, occ in [(48,0,0.0),(24,15,0.0),(12,30,0.2),(8,45,0.35),(4,60,0.5),(3,0,0.0)]:
        geo = {"visible": True, "rho_px": rho, "theta_deg": th, "occ_ratio": occ}
        print(f"{rho:>5} {th:>5} {occ:>5} | {c.p_detect(geo):>7.4f}  {c.reason(geo)}")
