# -*- coding: utf-8 -*-
"""가상 현장 생성 (CLAUDE.md §5.1).

LH 아파트 건설현장 1개 공구를 100×60m 로 모사한다. BIM 을 쓰지 않고 직육면체
조합으로 만든다. 난수를 쓰지 않으므로 몇 번을 돌려도 같은 현장이 나온다.

골조는 **진행 중인 상태**다 — 코어 벽체 + 슬래브 + 외곽 비계.
위험 가중치는 자체 산정하지 않는다(§5.1). LH·국토안전관리원 지수를 입력으로 받는
구조로 두고, MVP 에서는 `config.RISK_WEIGHTS` 의 하드코딩 값을 쓴다.
"""
from pathlib import Path
import sys
from dataclasses import dataclass, field

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import config


@dataclass(frozen=True)
class Box:
    """축정렬 직육면체. 광선투사의 차폐물이 된다.

    `coverage` 는 이 부피가 시선을 막는 비율이다.
      1.0  벽체·슬래브·적재물처럼 속이 찬 것
      <1.0 비계처럼 수직 부재의 격자라 사이로 보이는 것

    비계를 속 찬 벽으로 두면 현장 안이 통째로 안 보인다(완전 차폐 57% 로 실측).
    실제 비계는 지주·띠장 사이가 비어 있고, 그 부분 가림은 실험의 `o` 축이
    바로 다루는 대상이다. 이진 차폐가 아니라 점유율로 넘긴다.
    """
    x1: float; y1: float; z1: float
    x2: float; y2: float; z2: float
    kind: str = "solid"
    coverage: float = 1.0


@dataclass(frozen=True)
class Zone:
    """위험구역. 평면상 사각형이며 그 안의 복셀에 가중치를 준다."""
    name: str
    x1: float; y1: float; x2: float; y2: float
    weight: int

    def contains(self, x: float, y: float) -> bool:
        return self.x1 <= x <= self.x2 and self.y1 <= y <= self.y2


@dataclass(frozen=True)
class Camera:
    cid: str
    x: float; y: float; z: float
    mount: str          # boundary_pole / core_top / tower_crane


@dataclass
class Site:
    width: float
    depth: float
    solids: list = field(default_factory=list)
    zones: list = field(default_factory=list)
    cameras: list = field(default_factory=list)
    voxels: list = field(default_factory=list)


# ── 골조 ──────────────────────────────────────────────────────────────────

def _solids(scaffold_coverage: float = None) -> list:
    """코어 벽체 + 슬래브 + 외곽 비계. 전부 직육면체 조합이다."""
    if scaffold_coverage is None:
        scaffold_coverage = config.SCAFFOLD_COVERAGE
    s = []
    # 코어 2개 — 엘리베이터·계단 코어. 시공 중이라 높이 12m
    for cx in (30.0, 70.0):
        s.append(Box(cx - 6, 22.0, 0.0, cx + 6, 38.0, 12.0, "core"))

    # 슬래브 — 층마다 판 하나. 두께 0.3m. config.SLAB_LEVELS_M 과 짝을 이룬다.
    # 지상(0.0)은 지면이므로 판을 두지 않는다.
    for top in config.SLAB_LEVELS_M[1:]:
        s.append(Box(18.0, 14.0, top - 0.3, 82.0, 46.0, top, "slab"))

    # 외곽 비계 — 건물 둘레를 두께 1.2m 로 감싼다. 수직 부재가 가림원이다
    # 점유율은 config.SCAFFOLD_COVERAGE. 지주·띠장이 시야의 얼마를 막는지는
    # 비계 사양에 달렸고 공개 통계가 없어 잠정값이며, 민감도 스윕 대상이다.
    ox1, oy1, ox2, oy2 = 16.0, 12.0, 84.0, 48.0
    t = 1.2
    SC = scaffold_coverage
    s.append(Box(ox1, oy1, 0.0, ox2, oy1 + t, 14.0, "scaffold", SC))
    s.append(Box(ox1, oy2 - t, 0.0, ox2, oy2, 14.0, "scaffold", SC))
    s.append(Box(ox1, oy1, 0.0, ox1 + t, oy2, 14.0, "scaffold", SC))
    s.append(Box(ox2 - t, oy1, 0.0, ox2, oy2, 14.0, "scaffold", SC))

    # 자재 야적 적재물 — 시야를 막는 낮은 덩어리
    s.append(Box(6.0, 6.0, 0.0, 14.0, 18.0, 2.5, "stack"))
    s.append(Box(88.0, 42.0, 0.0, 96.0, 54.0, 2.5, "stack"))
    return s


# ── 위험구역 ──────────────────────────────────────────────────────────────

def _zones() -> list:
    """§5.1 이 지정한 5종. 가중치는 config 에서 가져온다 — 여기서 만들지 않는다."""
    w = config.RISK_WEIGHTS
    return [
        Zone("gangform_workface", 16.0, 12.0, 84.0, 16.0, w["gangform_workface"]),
        Zone("gangform_workface", 16.0, 44.0, 84.0, 48.0, w["gangform_workface"]),
        Zone("opening_perimeter", 24.0, 20.0, 36.0, 40.0, w["opening_perimeter"]),
        Zone("opening_perimeter", 64.0, 20.0, 76.0, 40.0, w["opening_perimeter"]),
        Zone("lift_landing", 46.0, 22.0, 54.0, 30.0, w["lift_landing"]),
        Zone("tower_crane_radius", 40.0, 8.0, 60.0, 52.0, w["tower_crane_radius"]),
        Zone("material_yard", 4.0, 4.0, 16.0, 20.0, w["material_yard"]),
        Zone("material_yard", 86.0, 40.0, 98.0, 56.0, w["material_yard"]),
    ]


# ── 카메라 후보 ───────────────────────────────────────────────────────────

def _cameras() -> list:
    """24개 (§5.1). 경계 폴 16 + 코어 상부 4 + 타워크레인 4."""
    cams = []
    W, D = config.SITE_WIDTH_M, config.SITE_DEPTH_M

    # 경계 폴 16개 — 높이 6m. 네 변에 균등 배치
    for i in range(5):
        x = W * (i + 0.5) / 5
        cams.append(Camera(f"c_b{len(cams):02d}", x, 1.0, 6.0, "boundary_pole"))
        cams.append(Camera(f"c_b{len(cams):02d}", x, D - 1.0, 6.0, "boundary_pole"))
    for j in range(3):
        y = D * (j + 0.5) / 3
        cams.append(Camera(f"c_b{len(cams):02d}", 1.0, y, 6.0, "boundary_pole"))
        cams.append(Camera(f"c_b{len(cams):02d}", W - 1.0, y, 6.0, "boundary_pole"))

    # 코어 상부 4개 — 높이 13m. 코어 두 개의 대각 모서리
    for cx in (30.0, 70.0):
        for cy in (22.0, 38.0):
            cams.append(Camera(f"c_k{len(cams):02d}", cx, cy, 13.0, "core_top"))

    # 타워크레인 4개 — 높이 25m. 현장 중앙 마스트 주변
    for dx, dy in ((-8.0, -8.0), (8.0, -8.0), (-8.0, 8.0), (8.0, 8.0)):
        cams.append(Camera(f"c_t{len(cams):02d}", 50.0 + dx, 30.0 + dy, 25.0, "tower_crane"))

    assert len(cams) == config.CAMERA_CANDIDATE_COUNT, len(cams)
    return cams


# ── 복셀 ──────────────────────────────────────────────────────────────────

def _voxels(solids: list, zones: list) -> list:
    """층별 작업면을 2m 격자로 나눈다 (3D).

    사람은 공중에 뜨지 않는다. 슬래브 상단마다 작업면을 하나씩 얹고 그 위의
    머리 높이대만 복셀로 만든다. 건물 부피를 균등 복셀로 채우는 것보다
    물리적으로 맞고 계산도 아낀다.

    지상층(z=0)은 현장 전역이지만 상부층은 **슬래브가 깔린 범위**만 바닥이
    있다. 슬래브 밖은 허공이므로 복셀을 두지 않는다.

    골조 솔리드 안에 들어간 복셀은 사람이 설 자리가 아니므로 제외한다.
    """
    step = config.VOXEL_M
    out = []
    ny = int(config.SITE_DEPTH_M / step)
    nx = int(config.SITE_WIDTH_M / step)

    slabs = [b for b in solids if b.kind == "slab"]

    for lvl, floor_z in enumerate(config.SLAB_LEVELS_M):
        z = floor_z + config.WORK_PLANE_OFFSET_M
        for j in range(ny):
            for i in range(nx):
                x = (i + 0.5) * step
                y = (j + 0.5) * step
                if lvl > 0:
                    # 상부층은 슬래브가 받쳐주는 자리에만 바닥이 있다
                    on_slab = any(b.x1 <= x <= b.x2 and b.y1 <= y <= b.y2
                                  and abs(b.z2 - floor_z) < 1e-6 for b in slabs)
                    if not on_slab:
                        continue
                if any(s.x1 <= x <= s.x2 and s.y1 <= y <= s.y2 and s.z1 <= z <= s.z2
                       for s in solids):
                    continue                  # 골조 안 — 사람이 설 자리가 아니다
                w = config.RISK_WEIGHT_DEFAULT
                names = []
                for zn in zones:
                    if zn.contains(x, y):
                        w = max(w, zn.weight)  # 겹치면 높은 쪽
                        names.append(zn.name)
                out.append({"id": f"v_{len(out):04d}", "x": x, "y": y, "z": z,
                            "level": lvl, "floor_z": floor_z,
                            "w": w, "zones": names})
    return out


def build(scaffold_coverage: float = None) -> Site:
    solids = _solids(scaffold_coverage)
    zones = _zones()
    return Site(
        width=config.SITE_WIDTH_M,
        depth=config.SITE_DEPTH_M,
        solids=solids,
        zones=zones,
        cameras=_cameras(),
        voxels=_voxels(solids, zones),
    )


if __name__ == "__main__":
    s = build()
    import collections
    wc = collections.Counter(v["w"] for v in s.voxels)
    print(f"현장 {s.width:.0f}×{s.depth:.0f}m · 복셀 {config.VOXEL_M:.0f}m 격자")
    print(f"  솔리드 {len(s.solids)} · 위험구역 {len(s.zones)} · 카메라 후보 {len(s.cameras)}")
    print(f"  복셀 {len(s.voxels)}개 (골조 내부 제외)")
    print("  가중치 분포:", dict(sorted(wc.items())))
    print(f"  가중치 총합 Σw = {sum(v['w'] for v in s.voxels)}")
