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

DETECTOR_WEIGHTS = "yolov8n.pt"          # 사전학습 가중치. 로컬 CUDA 세팅 금지(§0.1-3)

RHO_LEVELS_PX = [48, 32, 24, 16, 12]     # 머리 bbox 짧은 변 유효 픽셀
THETA_LEVELS_DEG = [0, 15, 30, 45, 60]   # 부감각
OCC_LEVELS_PCT = [0, 15, 30, 45, 60]     # 가림률
N_CONDITIONS = len(RHO_LEVELS_PX) * len(THETA_LEVELS_DEG) * len(OCC_LEVELS_PCT)  # 125

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

WORK_PLANE_Z_MIN_M = 0.5  # 작업면 높이대만 복셀화
WORK_PLANE_Z_MAX_M = 2.0

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
