# -*- coding: utf-8 -*-
"""복셀-카메라 기하 (CLAUDE.md §5.2).

각 (복셀, 카메라) 쌍에 대해 ρ · θ · o 를 낸다.

  ρ = f_px · H_head / d
  θ = degrees(asin((z_cam − z_voxel) / d))
  o = 복셀에 세운 높이 1.7m 수직 막대의 11개 샘플점 중 골조에 막히는 비율

전부 막히면 visible=False, P=0 이다.

**스펙이 비워둔 것 — 카메라 지향 방향.**
§5.2 는 HFOV 90° 를 f_px 산출에만 쓰고 카메라가 어디를 보는지 정하지 않았다.
방향을 안 정하면 전방위 카메라가 되어 커버리지가 과대 산출된다.

처음에는 전 카메라가 현장 중심을 본다고 두었는데, 그러면 **중심 근처의 코어 상부·
타워크레인 카메라가 서로를 쳐다보게 되어** 쓸모없어진다. 실제로 최적화가 경계 폴만
8대 고르는 결과가 나왔다. 설치자는 볼 곳을 향해 돌리므로 이는 모델의 결함이다.

지금은 **카메라마다 방위(yaw)를 따로 고른다** — 15° 간격 24방위 중 자기 위험가중
가시량을 최대로 만드는 쪽. 위치와 무관하게 결정되고 난수가 없으므로 §5.4 의 최적화
전에 한 번만 계산한다. 부각(pitch)은 스펙에 없어 작업면을 덮도록 조준했다고 보고
수직 화각은 검사하지 않는다. 둘 다 제안서에 한계로 적는다.
"""
from pathlib import Path
import math
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config

HALF_HFOV_DEG = config.HFOV_DEG / 2.0
YAW_STEP_DEG = 15                      # 24방위. 난수 없이 전수 탐색한다


def _ray_hits_box(p0, p1, box) -> bool:
    """선분 p0→p1 이 축정렬 상자를 지나는가. 슬랩 방식."""
    t_min, t_max = 0.0, 1.0
    for i, (lo, hi) in enumerate(((box.x1, box.x2), (box.y1, box.y2), (box.z1, box.z2))):
        o, d = p0[i], p1[i] - p0[i]
        if abs(d) < 1e-12:
            if o < lo or o > hi:
                return False
            continue
        t1, t2 = (lo - o) / d, (hi - o) / d
        if t1 > t2:
            t1, t2 = t2, t1
        t_min, t_max = max(t_min, t1), min(t_max, t2)
        if t_min > t_max:
            return False
    return True


def occlusion_ratio(vx: float, vy: float, cam, solids: list) -> float:
    """복셀에 세운 사람 막대가 얼마나 가려지는가 (§5.2)."""
    n = config.OCCLUSION_SAMPLE_POINTS
    top = config.OCCLUSION_BAR_HEIGHT_M
    cam_p = (cam.x, cam.y, cam.z)
    total = 0.0
    for i in range(n):
        z = top * i / (n - 1)
        p0 = (vx, vy, z)
        # 여러 겹을 지나면 가장 많이 막는 것을 쓴다. 곱으로 누적하면 비계 두 겹만
        # 지나도 사실상 불투명이 되어 실제보다 어둡게 잡힌다.
        hit = [s.coverage for s in solids if _ray_hits_box(p0, cam_p, s)]
        total += max(hit) if hit else 0.0
    return total / n


def bearing_deg(cam, vx: float, vy: float) -> float:
    """카메라에서 복셀로 향하는 방위각(도). 0=+x, 반시계."""
    return math.degrees(math.atan2(vy - cam.y, vx - cam.x)) % 360.0


def in_fov(bearing: float, yaw: float) -> bool:
    """방위각이 yaw 를 중심으로 한 수평 화각 안에 드는가."""
    diff = abs((bearing - yaw + 180.0) % 360.0 - 180.0)
    return diff <= HALF_HFOV_DEG


def choose_yaw(cam, voxels: list, solids: list) -> float:
    """이 카메라가 볼 수 있는 위험가중량을 최대로 만드는 방위를 고른다.

    가림·거리는 방위와 무관하므로 화각 판정만 방위별로 다시 한다.
    동점이면 작은 각도로 끊어 재현성을 지킨다.
    """
    seen = []
    for v in voxels:
        occ = occlusion_ratio(v["x"], v["y"], cam, solids)
        if occ >= 1.0:
            continue
        seen.append((bearing_deg(cam, v["x"], v["y"]), v["w"]))

    best_yaw, best_score = 0.0, -1.0
    for i in range(int(360 / YAW_STEP_DEG)):
        yaw = i * YAW_STEP_DEG
        score = sum(w for b, w in seen if in_fov(b, yaw))
        if score > best_score:
            best_yaw, best_score = float(yaw), score
    return best_yaw


def pair(voxel: dict, cam, solids: list, yaw: float) -> dict:
    """복셀-카메라 한 쌍의 기하량."""
    dx, dy, dz = voxel["x"] - cam.x, voxel["y"] - cam.y, voxel["z"] - cam.z
    d = math.sqrt(dx * dx + dy * dy + dz * dz)
    if d < 1e-6:
        return {"voxel_id": voxel["id"], "camera_id": cam.cid, "d_m": 0.0,
                "rho_px": 0.0, "theta_deg": 0.0, "occ_ratio": 1.0, "visible": False}

    if not in_fov(bearing_deg(cam, voxel["x"], voxel["y"]), yaw):
        return {"voxel_id": voxel["id"], "camera_id": cam.cid, "d_m": round(d, 2),
                "rho_px": 0.0, "theta_deg": 0.0, "occ_ratio": 1.0,
                "visible": False, "reason": "화각 밖"}

    occ = occlusion_ratio(voxel["x"], voxel["y"], cam, solids)
    visible = occ < 1.0
    return {
        "voxel_id": voxel["id"],
        "camera_id": cam.cid,
        "d_m": round(d, 2),
        "rho_px": round(config.rho_px(d), 2),
        "theta_deg": round(config.theta_deg(cam.z, voxel["z"], d), 1),
        "occ_ratio": round(occ, 3),
        "visible": visible,
        **({} if visible else {"reason": "완전 차폐"}),
    }


def all_pairs(site) -> tuple[dict, dict]:
    """(camera_id, voxel_id) → 기하량, 그리고 카메라별 방위.

    카메라 선택과 무관하므로 한 번만 계산한다.
    """
    yaws = {c.cid: choose_yaw(c, site.voxels, site.solids) for c in site.cameras}
    out = {}
    for cam in site.cameras:
        for v in site.voxels:
            out[(cam.cid, v["id"])] = pair(v, cam, site.solids, yaws[cam.cid])
    return out, yaws


if __name__ == "__main__":
    import site_model
    import collections
    s = site_model.build()
    pairs, yaws = all_pairs(s)
    vis = [p for p in pairs.values() if p["visible"]]
    print(f"쌍 {len(pairs)} (카메라 {len(s.cameras)} × 복셀 {len(s.voxels)})")
    print("  방위:", {k: int(v) for k, v in list(yaws.items())[:6]}, "...")
    print(f"  가시 {len(vis)} ({len(vis)/len(pairs)*100:.1f}%)")
    reasons = collections.Counter(p.get("reason", "-") for p in pairs.values() if not p["visible"])
    print("  비가시 사유:", dict(reasons))
    if vis:
        ds = sorted(p["d_m"] for p in vis)
        rs = sorted(p["rho_px"] for p in vis)
        n = len(ds)
        print(f"  거리   중앙값 {ds[n//2]:.1f}m · 최소 {ds[0]:.1f} · 최대 {ds[-1]:.1f}")
        print(f"  ρ      중앙값 {rs[n//2]:.1f}px · 최소 {rs[0]:.1f} · 최대 {rs[-1]:.1f}")
        below = sum(1 for r in rs if r < config.RHO_MEASURED_MIN_PX)
        print(f"  ρ < {config.RHO_MEASURED_MIN_PX}px (실측 범위 밖): {below} 쌍 ({below/len(vis)*100:.1f}%)")
