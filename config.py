# -*- coding: utf-8 -*-
"""전역 상수와 폴백 스위치.

값의 출처는 CLAUDE.md 다. 절에 없는 수치를 여기서 새로 만들지 않는다.
경로는 전부 pathlib.Path 로 다룬다 (CLAUDE.md §0.1-4, Windows 환경).
"""
from pathlib import Path
import math

# ── 경로 ──────────────────────────────────────────────────────────────────
ROOT = Path(__file__).resolve().parent

DATA_RAW = ROOT / "data" / "raw"
DATA_FILTERED = ROOT / "data" / "filtered"
OUTPUTS = ROOT / "outputs"
SMOKE_SAMPLES = OUTPUTS / "smoke_samples"
MOCKUP = ROOT / "mockup"

GRID_RESULTS_CSV = OUTPUTS / "grid_results.csv"
CURVE_PARAMS_JSON = OUTPUTS / "curve_params.json"
SITE_EVAL_JSON = OUTPUTS / "site_eval.json"
COMPARISON_JSON = OUTPUTS / "comparison.json"


# ── 폴백 스위치 (CLAUDE.md §7 D+7 분기점) ──────────────────────────────────
# False 로 내리면 optimize.py 를 실행하지 않고 단일 배치 진단만 산출한다.
# 전환은 사용자 승인을 받은 뒤에만 한다.
ENABLE_OPTIMIZATION = True

# 곡선 피팅 통과 기준 (§7 Phase 2 Acceptance)
R2_ACCEPTANCE = 0.80


# ── §4 실험 격자 ──────────────────────────────────────────────────────────
# §10 의 Phase 0 지시는 §5.1·§5.2 만 열거하지만, Phase 1 의 transforms.py 가
# 이 값들을 그대로 쓴다. 모듈에 숫자를 박지 않으려고 여기에 함께 둔다.

# 검출기. 교수 지시(2026-08-19)로 **YOLO 최신 계열**을 기준으로 올린다.
# 사전학습 가중치에서 출발해 SHWD 로 파인튜닝한다. 로컬 CUDA 세팅 금지(§0.1-3).
DETECTOR_ARCH = "yolo26s"                       # 최신 세대. 크기만 바꾸면 된다 (n/s/m/l/x)
DETECTOR_WEIGHTS = f"{DETECTOR_ARCH}.pt"        # 출발점 (사전학습)
DETECTOR_RUN_NAME = f"shwd_{DETECTOR_ARCH}"     # runs/detect/<이 이름>/
DETECTOR_BEST = (ROOT / "runs" / "detect" / DETECTOR_RUN_NAME / "weights" / "best.pt")

# ρ 는 §4.2 원안이 [48,32,24,16,12] 였으나 8·6·4 를 덧붙였다(2026-08-14 승인).
# 이유: §5.2 의 4K·HFOV 90° 에서 ρ = 480/d 이므로 ρ=12px 가 d=40m 다. 현장이
# 100×60m 라 복셀-카메라 쌍 대부분이 40m 를 넘는데, 그 구간을 측정 없이 로지스틱
# 외삽으로 채우면 WDR 이 통째로 부풀려진다. 실측으로 덮는다.
RHO_LEVELS_PX = [48, 32, 24, 16, 12, 8, 6, 4]   # 머리 bbox 짧은 변 유효 픽셀
THETA_LEVELS_DEG = [0, 15, 30, 45, 60, 75]   # 부감각
OCC_LEVELS_PCT = [0, 15, 30, 45, 60, 75]     # 가림률
N_CONDITIONS = len(RHO_LEVELS_PX) * len(THETA_LEVELS_DEG) * len(OCC_LEVELS_PCT)  # 288

# θ·o 에 75 수준을 덧붙였다 (2026-08-15). ρ 를 8·6·4 로 넓힌 것과 같은 이유다.
# ρ 만 measured_range 밖을 막고 θ·o 는 외삽을 그대로 답하고 있었다.
#   - geometry.theta_deg 는 타워크레인(z=25m)에서 근거리 복셀에 θ>60° 를 만든다
#   - geometry.occlusion_ratio 는 0~1 연속값인데 실측 상한은 0.62 였다
# 한 축에만 외삽 금지를 적용한 비대칭은 나머지 방어논리까지 의심받게 한다.

# 실측으로 덮은 범위. 곡선을 이 밖으로 외삽하지 않는다.
RHO_MEASURED_MIN_PX = min(RHO_LEVELS_PX)
THETA_MEASURED_MAX_DEG = max(THETA_LEVELS_DEG)
OCC_MEASURED_MAX_PCT = max(OCC_LEVELS_PCT)

# 방위각 φ 는 제외한다 (§4.2, §6). 축을 추가하지 말 것.

MIN_HEAD_PX = 40          # 데이터 필터 기준
MIN_HEAD_PX_RELAXED = 30  # 500장에 미달할 때만 완화하고 PROGRESS.md 에 기록(§4.1)
TARGET_IMAGES = 500

IOU_THR = 0.5
CONF_THR = 0.25

# 가림 마스킹은 랜덤 사각형이 아니라 수직 스트라이프다(§4.2).
OCCLUSION_PATTERN = "vertical_stripe"
OCCLUSION_COLOR_BGR = (128, 128, 128)    # 무채색 고정

# 스모크 테스트 9조건 (§7 Phase 1)
SMOKE_RHO_PX = [48, 24, 12]
SMOKE_THETA_DEG = [0]
SMOKE_OCC_PCT = [0, 30, 60]

# VLM 대조는 ρ축 5수준 × θ=0 × o=0, 총 5조건만(§4.3)
VLM_RHO_PX = list(RHO_LEVELS_PX)
VLM_THETA_DEG = 0
VLM_OCC_PCT = 0


# ── §5.1 가상 현장 ────────────────────────────────────────────────────────
SITE_WIDTH_M = 100        # LH 아파트 건설현장 1개 공구 모사
SITE_DEPTH_M = 60
VOXEL_M = 2               # 복셀 격자

WORK_PLANE_Z_MIN_M = 0.5  # 작업면 높이대
WORK_PLANE_Z_MAX_M = 2.0

# 3D 화 (2026-08-19 교수 지시). 사람은 공중에 뜨지 않는다 — 층마다 놓인
# **작업면** 위에 선다. 그래서 건물 부피를 균등 복셀로 채우지 않고 슬래브
# 상단마다 작업면을 하나씩 얹는다. 이것이 물리적으로 맞고 계산도 아낀다.
#
# 슬래브 레벨 (구조체 상단 z). site_model._solids 의 슬래브와 짝을 이룬다.
SLAB_LEVELS_M = [0.0, 4.3, 8.3]          # 지상 + 2개 층
WORK_PLANE_OFFSET_M = 1.25                # 바닥에서 사람 머리 높이대 중앙까지

# ── 복셀화 방식 (2026-08-19) ───────────────────────────────────────────────
# "volume"      현장 부피 전체를 큐브로 자른다. CCTV 는 바닥만이 아니라 공중도
#               본다. 3D 시각화가 이쪽이라야 커버리지가 부피로 읽힌다.
# "work_plane"  층별 작업면만. 계산은 가볍지만 공중을 못 그린다.
#
# **부피로 자르되 지표는 부피 전체로 재지 않는다.** 검출 대상이 사람이라
# z=12m 허공에는 검출할 것이 없다. 각 복셀에 `occupiable`(사람이 있을 수
# 있는가)을 달고 커버리지는 그것만으로 계산한다. 시각화는 전부 그린다.
VOXEL_MODE = "volume"
VOXEL_Z_MAX_M = 14.0                      # 비계 상단까지

# 사람이 있을 수 있는 자리 — 아래 둘 중 하나
#   ① 바닥(지면·슬래브) 위 작업 높이대
#   ② 비계·갱폼 작업발판 옆 (추락 위험이 큰 자리가 여기다)
OCCUPIABLE_BAND_M = (0.0, 2.5)            # 바닥 위 이 높이대
OCCUPIABLE_NEAR_SCAFFOLD_M = 2.0          # 비계에서 이 거리 안

CAMERA_CANDIDATE_COUNT = 24   # 현장 경계 폴 + 코어 상부 + 타워크레인
CAMERA_BUDGET = 8             # 실제 좌표 생성은 Phase 3 의 site.py 담당

# 위험 가중치 w(v).
# 자체 위험도 산정 알고리즘을 만들지 않는다(§5.1). LH·국토안전관리원 위험도 지수를
# 입력으로 받는 구조로 두고, MVP 에서는 아래 하드코딩 값을 쓴다.
# ▶ 아래 1~5 는 상대 순위를 표현한 **잠정값**이며 원자료에서 확인된 수치가 아니다.
#    LH 7대 유형 20개 위험공종 지수를 확보하면 이 표만 교체한다.
RISK_WEIGHT_SOURCE = "hardcoded_provisional"   # 확보 시 "lh_index" 로 교체
RISK_WEIGHTS = {
    "gangform_workface": 5,      # 갱폼 작업면
    "opening_perimeter": 5,      # 개구부 주변
    "lift_landing": 4,           # 리프트 승강구
    "tower_crane_radius": 3,     # 타워크레인 인양반경
    "material_yard": 2,          # 자재 야적장
}
RISK_WEIGHT_DEFAULT = 1          # 위 구역에 속하지 않는 복셀

# 판정 임계. 0.5 는 잠정값이다(§5.3).
P_DETECT_THRESHOLD = 0.5

# ── LH 기준 커버리지 (2026-08-19 교수 지시) ────────────────────────────────
# "AI CCTV 가 전 범위 중 얼마나 커버하는지 진단해 LH 기준을 넘는지 본다."
#
# ▶ **LH 가 게시한 커버리지 기준은 아직 없다.** 현행 가이드라인에는 해상도·화각·
#   픽셀 규정이 0건이고 운용 기준은 "적정하게 유지" 로만 적혀 있다(전수 확인).
#   따라서 아래 0.90 은 **우리가 제안하는 잠정 임계**이며 LH 고시값이 아니다.
#   게시되면 이 값만 바꾸면 된다.
LH_COVERAGE_TARGET = 0.90
LH_COVERAGE_TARGET_SOURCE = "proposed_provisional"   # 게시 시 "lh_published"

# 목표를 재는 잣대. 분모가 다르면 다른 숫자가 나오므로 무엇을 쓰는지 밝힌다.
#   spatial_coverage  임계 넘는 복셀 수 / 전체 복셀 수
#   risk_coverage     임계 넘는 복셀의 가중치 합 / 전체 가중치 합
#   WDR               Σw·P_total / Σw  (임계 없이 기대값)
LH_TARGET_METRIC = "risk_coverage"

# 외곽 비계가 시선을 막는 비율. 지주·띠장 사이가 비어 있어 1.0 이 아니다.
# **근거 없는 자유 파라미터다.** 건설현장 실측 가림률 통계는 공개된 것이 없다(§9).
# WDR 이 가림축에 지배되므로 이 값 하나가 결과를 좌우한다. 민감도 스윕으로
# 결론이 이 값에 얼마나 매달려 있는지 함께 보인다 (src/sensitivity.py).
SCAFFOLD_COVERAGE = 0.35


# ── §5.2 카메라 기하 ──────────────────────────────────────────────────────
IMG_WIDTH_PX = 3840       # 4K
IMG_HEIGHT_PX = 2160
HFOV_DEG = 90.0

H_HEAD_M = 0.25           # 머리 실제 크기 — ρ 환산에 쓴다

# f_px = (W_img / 2) / tan(HFOV / 2)
FOCAL_PX = (IMG_WIDTH_PX / 2) / math.tan(math.radians(HFOV_DEG) / 2)

# 가림률 o: 복셀 위치에 높이 1.7m 수직 막대를 세우고 11개 샘플점에서 광선을 쏜다.
OCCLUSION_BAR_HEIGHT_M = 1.7
OCCLUSION_SAMPLE_POINTS = 11


# ── 기하 기준선의 최소 픽셀밀도 (IEC 62676-4 DORI) ─────────────────────────
# §5.4 A 의 기하 커버리지를 "화각 안 + 완전차폐 아님" 으로만 세면, 116m 떨어진
# 복셀도 커버로 잡혀 기존 방식을 실제보다 못하게 모델링하게 된다. 실무 설계도구
# (JVSG·Axis Site Designer)는 IEC 62676-4 의 DORI 최소 픽셀밀도를 지킨다.
# 기준선을 그 수준으로 올려야 비교가 성립한다.
#
# DORI 는 장면 미터당 픽셀(PPM)로 규정된다. 머리 H_HEAD_M 기준 환산은
#   ρ[px] = PPM × H_HEAD_M       (역으로 PPM = ρ / H_HEAD_M = 4ρ)
# DORI 는 인간 관찰자 기준이며 AI 검출기에 대해 검증된 바 없다. 여기서는
# **기존 방식의 기준선**을 세우는 용도로만 쓴다. 제안서에 이 한계를 명시한다.
DORI_PPM = {
    "detection": 25.0,        # ρ  6.25px
    "observation": 62.5,      # ρ 15.63px
    "recognition": 125.0,     # ρ 31.25px
    "identification": 250.0,  # ρ 62.50px
}
# 기하 기준선이 지킬 등급. **기존 방식에 가장 유리한 등급을 고른다.**
# 네 등급을 전수 실행해 확률 배치와의 격차(ΔWDR)를 재보면 observation 에서
# 가장 작다 — 즉 기존 방식이 가장 잘 나오는 기준선이다. 우리에게 불리한 쪽을
# 기본값으로 두어야 "기준선을 약하게 잡고 이겼다"는 비판을 받지 않는다.
#
#   임계 없음  ΔWDR +0.0964 | detection +0.0693
#   observation +0.0316 (최소) | recognition +0.0420
#
# recognition 이 observation 보다 나쁜 것은 오류가 아니다. 임계를 올리면 만족
# 가능한 복셀이 급감해(통과 쌍 28.4% → 6.1%) 탐욕이 오히려 나빠진다.
# 임계 방식 자체의 구조적 결함이며 제안서 소재다.
GEOMETRIC_DORI_LEVEL = "observation"


def dori_rho_px(level: str = None) -> float:
    """DORI 등급의 최소 픽셀밀도를 머리 bbox 픽셀로 환산한다."""
    return DORI_PPM[level or GEOMETRIC_DORI_LEVEL] * H_HEAD_M


GEOMETRIC_MIN_RHO_PX = dori_rho_px()


def rho_px(distance_m: float) -> float:
    """카메라-복셀 거리에서 머리 유효 픽셀밀도를 낸다 (§5.2)."""
    if distance_m <= 0:
        raise ValueError("distance_m 은 0보다 커야 한다")
    return FOCAL_PX * H_HEAD_M / distance_m


def theta_deg(z_cam_m: float, z_voxel_m: float, distance_m: float) -> float:
    """부감각을 낸다 (§5.2)."""
    if distance_m <= 0:
        raise ValueError("distance_m 은 0보다 커야 한다")
    ratio = (z_cam_m - z_voxel_m) / distance_m
    ratio = max(-1.0, min(1.0, ratio))
    return math.degrees(math.asin(ratio))
