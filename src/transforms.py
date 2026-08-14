# -*- coding: utf-8 -*-
"""ρ/θ/o 3축 변형 (CLAUDE.md §4.2).

각 함수는 단일 이미지 + 파라미터를 받아 변형 이미지를 돌려준다.
방위각 φ 는 축이 아니다(§4.2, §6). 추가하지 말 것.

변형 순서는 rho -> theta -> occlusion 이다.
가림은 카메라와 피사체 사이의 **전경 부재**를 모사하므로 마지막에 얹는다.
앞에 두면 다운샘플·워핑에 스트라이프가 뭉개져 목표 가림률이 흐트러진다.
"""
from pathlib import Path
import math

import cv2
import numpy as np


# ── ρ 유효 픽셀밀도 ────────────────────────────────────────────────────────

def apply_rho(img: np.ndarray, src_head_px: float, target_head_px: float) -> np.ndarray:
    """머리 bbox 짧은 변이 target_head_px 가 되도록 해상도를 떨어뜨린다.

    다운샘플(INTER_AREA) 후 원본 크기로 업샘플(INTER_LINEAR) 한다(§4.2).
    캔버스 크기를 유지해야 뒤 단계와 지표 계산이 축마다 흔들리지 않는다.

    target >= src 면 원본을 그대로 돌려준다 — 없는 해상도를 만들지 않는다.
    """
    if src_head_px <= 0:
        raise ValueError("src_head_px 는 0보다 커야 한다")
    if target_head_px <= 0:
        raise ValueError("target_head_px 는 0보다 커야 한다")

    scale = target_head_px / src_head_px
    if scale >= 1.0:
        return img.copy()

    h, w = img.shape[:2]
    sw, sh = max(1, int(round(w * scale))), max(1, int(round(h * scale)))
    small = cv2.resize(img, (sw, sh), interpolation=cv2.INTER_AREA)
    return cv2.resize(small, (w, h), interpolation=cv2.INTER_LINEAR)


# ── θ 부감각 ──────────────────────────────────────────────────────────────

def apply_theta(img: np.ndarray, theta_deg: float,
                fill: int = 128) -> np.ndarray:
    """부감각 theta 를 호모그래피 워핑으로 근사한다.

    지면이 theta 만큼 기운 것으로 보고 한 변수 cos(theta) 로 두 효과를 준다.
      - 세로 단축(foreshortening): 높이 H -> H*cos(theta)
      - 원근: 먼 쪽(위) 변의 폭 W -> W*cos(theta)

    theta=0 이면 항등이다. theta 가 커질수록 단조롭게 찌그러진다.

    이것은 3D 시점 변화의 근사이며 한계는 제안서에 선제 기술한다(§9).
    **코드에서 보정하려 하지 말 것.**

    빈 영역은 무채색(fill)으로 채운다. 검정으로 두면 없는 고대비 경계가 생겨
    검출기에 영향을 준다.
    """
    if not (0.0 <= theta_deg < 90.0):
        raise ValueError("theta_deg 는 0 이상 90 미만이어야 한다")
    if theta_deg == 0:
        return img.copy()

    h, w = img.shape[:2]
    c = math.cos(math.radians(theta_deg))
    w_top = w * c
    h_new = h * c

    src = np.float32([[0, 0], [w, 0], [w, h], [0, h]])
    dst = np.float32([
        [(w - w_top) / 2.0, 0],
        [(w + w_top) / 2.0, 0],
        [w, h_new],
        [0, h_new],
    ])
    m = cv2.getPerspectiveTransform(src, dst)
    return cv2.warpPerspective(
        img, m, (w, h),
        flags=cv2.INTER_LINEAR,
        borderMode=cv2.BORDER_CONSTANT,
        borderValue=(fill, fill, fill),
    )


# ── o 가림률 ──────────────────────────────────────────────────────────────

def apply_occlusion(img: np.ndarray, occ_ratio: float,
                    period_px: int | None = None,
                    color=(128, 128, 128)) -> tuple[np.ndarray, float]:
    """수직 스트라이프로 가림을 모사한다 (§4.2).

    랜덤 사각형이 아니라 **수직 스트라이프**여야 한다. 현장의 가림원은
    비계·동바리·거푸집 지주로 대부분 수직 부재다.

    반환값은 (이미지, 실제 가림률) 이다. 정수 픽셀로 떨어뜨리느라 목표와
    미세하게 어긋나므로, 지어낸 값 대신 **실측 비율**을 함께 돌려준다.
    """
    if not (0.0 <= occ_ratio < 1.0):
        raise ValueError("occ_ratio 는 0 이상 1 미만이어야 한다")

    out = img.copy()
    h, w = out.shape[:2]
    if occ_ratio == 0:
        return out, 0.0

    if period_px is None:
        period_px = max(4, int(round(w / 24)))     # 화면 가로에 부재 24개
    stripe_w = int(round(period_px * occ_ratio))
    stripe_w = max(1, min(stripe_w, period_px - 1))  # 완전 차폐 방지

    covered = 0
    for x0 in range(0, w, period_px):
        x1 = min(x0 + stripe_w, w)
        if x1 > x0:
            out[:, x0:x1] = color
            covered += x1 - x0

    return out, covered / w


# ── 조건 1개 적용 ─────────────────────────────────────────────────────────

def apply_condition(img: np.ndarray, src_head_px: float,
                    rho_px: float, theta_deg: float, occ_pct: float,
                    ) -> tuple[np.ndarray, dict]:
    """ρ·θ·o 를 순서대로 적용한다. 격자 1점에 해당한다.

    두 번째 반환값은 실제로 적용된 값이다. 목표값과 다를 수 있으므로
    결과 CSV 에는 이쪽을 기록한다.
    """
    out = apply_rho(img, src_head_px, rho_px)
    out = apply_theta(out, theta_deg)
    out, occ_actual = apply_occlusion(out, occ_pct / 100.0)
    return out, {
        "rho_px_target": rho_px,
        "theta_deg": theta_deg,
        "occ_pct_target": occ_pct,
        "occ_pct_actual": round(occ_actual * 100, 2),
        "src_head_px": src_head_px,
        "rho_applied": rho_px < src_head_px,
    }


def imread(path: Path) -> np.ndarray:
    """한글 경로에서도 읽히는 imread. Windows 환경 대응(§0.1-4)."""
    buf = np.fromfile(str(path), dtype=np.uint8)
    img = cv2.imdecode(buf, cv2.IMREAD_COLOR)
    if img is None:
        raise IOError(f"이미지를 읽지 못했다: {path}")
    return img


def imwrite(path: Path, img: np.ndarray) -> None:
    """한글 경로에서도 써지는 imwrite."""
    ext = path.suffix or ".jpg"
    ok, buf = cv2.imencode(ext, img)
    if not ok:
        raise IOError(f"이미지를 인코딩하지 못했다: {path}")
    path.parent.mkdir(parents=True, exist_ok=True)
    buf.tofile(str(path))
