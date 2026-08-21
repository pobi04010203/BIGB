# -*- coding: utf-8 -*-
"""선행연구 방식의 **해석적 가정 곡선** (ADDENDUM-01 §5.4).

확률적 커버리지 기반 카메라 배치는 시각센서 네트워크 분야에서 확립된 방법론이다.
다만 기존 연구는 감쇠 함수를 **해석적으로 가정**했다 — 거리·각도 멤버십 함수,
지수 감쇠. 실제 검출기의 응답을 측정해 대입한 사례는 확인되지 않았다.

이 모듈은 그 관행을 그대로 재현한다. **여기 있는 값은 전부 문헌 관행에서 온
가정값이며 측정값이 아니다.** 실측 곡선(`detect_model.Curve`)과 나란히 돌려
"가정으로 설계하면 어디까지 가는가"를 그림으로 보이는 것이 목적이다.

세 축의 가정 방식:

  f(ρ)  로지스틱. 50% 지점을 **DORI Recognise 125 PPM** 에 둔다.
        기울기는 DORI 사다리에서 유도한다 — Identification(250 PPM)에서 0.95.
  g(θ)  cos(θ). 지면 단축의 기하학적 가정이다. 문헌의 각도 멤버십 함수가
        대개 이 모양이다.
  h(o)  **이진.** 막히면 0, 아니면 1. 기존 확률 커버리지 문헌은 가림을
        가시선(LOS) 이진으로 다루거나 지형 가시성으로만 처리한다.
        연속 축으로 실측한 사례가 확인되지 않았다(ADDENDUM-01 §5.2).

h(o) 가 이진이라는 점이 실측 곡선과 가장 크게 갈리는 지점이며, 그래서
가정 곡선은 부분 가림 구역에서 낙관적으로 나온다.
"""
from pathlib import Path
import math
import sys
# 콘솔 인코딩이 cp949 인 환경에서 출력을 파일로 리디렉션하면, 문자열에 cp949 로
# 표현 못 하는 문자(U+2212 마이너스, U+2014 em dash 등)가 하나만 있어도
# UnicodeEncodeError 로 죽는다. **계산을 다 끝내고 마지막 print 에서 죽는다** —
# 실제로 두 번 겪었다. 문자를 하나씩 쫓는 대신 출력단에서 막는다.
# encoding 은 그대로 두어 한글 콘솔 표시를 유지하고 errors 만 바꾼다.
try:
    sys.stdout.reconfigure(errors="replace")
    sys.stderr.reconfigure(errors="replace")
except (AttributeError, ValueError):
    pass

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config

# DORI 사다리에서 유도한 두 상수. 측정값이 아니다.
RHO_HALF_PX = config.dori_rho_px("recognition")        # 50% 지점 = 31.25px
RHO_HIGH_PX = config.dori_rho_px("identification")     # 여기서 0.95 = 62.50px
# logistic(ρ_high) = 0.95  →  k·(ρ_high - ρ_half) = ln(19)
K = math.log(19.0) / (RHO_HIGH_PX - RHO_HALF_PX)


class AssumedCurve:
    """`detect_model.Curve` 와 같은 인터페이스. 실측 대신 가정을 쓴다."""

    source = "DORI_recognise_125ppm"
    is_measured = False

    def __init__(self):
        self.rho_half = RHO_HALF_PX
        self.rho_high = RHO_HIGH_PX
        self.k = K
        # 실측 곡선과 달리 측정 범위 개념이 없다 — 가정이므로 어디서나 답한다.
        # 이것 자체가 기존 방식의 성질이며, 비교 대상이 되는 부분이다.
        self.out_of_range = {"rho": 0, "theta": 0, "occ": 0}

    def f(self, rho: float) -> float:
        return 1.0 / (1.0 + math.exp(-self.k * (rho - self.rho_half)))

    def g(self, theta: float) -> float:
        return max(0.0, math.cos(math.radians(min(theta, 90.0))))

    def h(self, occ: float) -> float:
        """이진 가시선. 완전 차폐만 0 이고 부분 가림은 무시한다."""
        return 0.0 if occ >= 1.0 else 1.0

    def p_detect(self, geo: dict) -> float:
        if not geo.get("visible"):
            return 0.0
        return (self.f(geo["rho_px"]) * self.g(geo["theta_deg"])
                * self.h(geo["occ_ratio"]))

    def reason(self, geo: dict) -> str:
        if not geo.get("visible"):
            return geo.get("reason", "비가시")
        parts = [("ρ 부족", 1 - self.f(geo["rho_px"])),
                 ("θ 과다", 1 - self.g(geo["theta_deg"]))]
        name, deficit = max(parts, key=lambda kv: kv[1])
        return name if deficit > 0.01 else "-"

    def describe(self) -> dict:
        return {
            "curve_source": self.source,
            "is_measured": self.is_measured,
            "f_rho": {"form": "logistic", "half_at_px": round(self.rho_half, 2),
                      "k": round(self.k, 6),
                      "derived_from": "IEC 62676-4 DORI recognise 125 PPM · "
                                      "identification 250 PPM 에서 0.95"},
            "g_theta": {"form": "cos", "note": "지면 단축의 기하학적 가정"},
            "h_occ": {"form": "binary_los",
                      "note": "막히면 0, 아니면 1. 부분 가림을 반영하지 않는다"},
            "warning": "전부 문헌 관행에서 온 가정값이며 측정값이 아니다",
        }


def load() -> AssumedCurve:
    return AssumedCurve()


if __name__ == "__main__":
    import detect_model
    a, e = load(), detect_model.load()
    print(f"가정 곡선 - 50% at {a.rho_half:.2f}px · k={a.k:.4f}")
    print(f"\n{'ρ':>5} {'θ':>5} {'o':>6} | {'가정':>7} {'실측':>7}  차이")
    for rho, th, occ in [(48, 0, 0.0), (31.25, 0, 0.0), (16, 15, 0.0),
                         (12, 30, 0.3), (8, 45, 0.5), (6, 60, 0.7)]:
        geo = {"visible": True, "rho_px": rho, "theta_deg": th, "occ_ratio": occ}
        pa, pe = a.p_detect(geo), e.p_detect(geo)
        print(f"{rho:>5} {th:>5} {occ:>6} | {pa:>7.4f} {pe:>7.4f}  {pa-pe:+.4f}")
