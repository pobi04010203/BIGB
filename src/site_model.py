# -*- coding: utf-8 -*-
"""가상 현장 생성 (CLAUDE.md §5.1).

LH 아파트 건설현장 1개 공구를 100×60m 로 모사한다. BIM 을 쓰지 않고 직육면체
조합으로 만든다. 난수를 쓰지 않으므로 몇 번을 돌려도 같은 현장이 나온다.

골조는 **진행 중인 상태**다 — 코어 벽체 + 슬래브 + 외곽 비계.
위험 가중치는 자체 산정하지 않는다(§5.1). LH·국토안전관리원 지수를 입력으로 받는
구조로 두고, 실제 값은 `data/zones.json` 에서 읽는다.
"""
from pathlib import Path
import json
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
    """위험구역. **사용자 입력이다** — `data/zones.json` 에서 온다.

    우리는 위험을 판단하지 않는다. 어디가 위험한지는 현장이 정하고, 그 정보는
    안전관리계획서에 이미 있다. 자동 도출은 4D BIM 안전계획 연구가 확립했으며
    그 출력을 이 형식으로 받으면 된다.

    사각형과 다각형을 받는다. z 범위는 선택이며, 타설처럼 특정 층에서만
    일어나는 작업을 자를 때 쓴다.
    """
    name: str
    label: str
    weight: int
    hazard: str
    kind: str                      # rect | poly
    areas: tuple                   # rect: (x1,y1,x2,y2) / poly: ((x,y), ...)
    z_min: float = float("-inf")
    z_max: float = float("inf")

    def contains(self, x: float, y: float, z: float = None) -> bool:
        if z is not None and not (self.z_min <= z <= self.z_max):
            return False
        for a in self.areas:
            if self.kind == "rect":
                if a[0] <= x <= a[2] and a[1] <= y <= a[3]:
                    return True
            elif _point_in_poly(x, y, a):
                return True
        return False


def _point_in_poly(x: float, y: float, pts) -> bool:
    """레이 캐스팅. 다각형 구역을 받기 위한 것이다."""
    inside = False
    n = len(pts)
    for i in range(n):
        x1, y1 = pts[i]
        x2, y2 = pts[(i + 1) % n]
        if (y1 > y) != (y2 > y):
            xi = (x2 - x1) * (y - y1) / (y2 - y1) + x1
            if x < xi:
                inside = not inside
    return inside


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

ZONES_JSON = config.ROOT / "data" / "zones.json"


def _zones(path: Path = None) -> list:
    """`data/zones.json` 에서 읽는다. 코드에 좌표를 박지 않는다.

    파일이 없으면 위험구역 없이(전부 가중치 1) 진행한다 — 멈추지 않는다.
    위험구역은 있으면 좋은 정보지 필수 입력이 아니다.
    """
    path = Path(path or ZONES_JSON)
    if not path.exists():
        return []
    doc = json.loads(path.read_text(encoding="utf-8"))
    out = []
    for z in doc["zones"]:
        kind = z.get("kind", "rect")
        areas = tuple(tuple(a) if kind == "rect" else tuple(map(tuple, a))
                      for a in z["areas"])
        out.append(Zone(
            name=z["name"], label=z.get("label", z["name"]),
            weight=int(z["weight"]), hazard=z.get("hazard", ""),
            kind=kind, areas=areas,
            z_min=float(z.get("z_min", float("-inf"))),
            z_max=float(z.get("z_max", float("inf"))),
        ))
    return out


def zone_weights(zones: list = None) -> dict:
    """이름 → 가중치. schedule 이 시간대별 가중치를 만들 때 쓴다."""
    return {z.name: z.weight for z in (zones if zones is not None else _zones())}


# ── 카메라 후보 ───────────────────────────────────────────────────────────

def _cameras(spacing_m: float = None) -> list:
    """설치 가능한 자리에 후보를 **격자로 깐다** (2026-08-20).

    종전에는 24개를 손으로 찍었다. 그러면 재배치 처방이 그 24곳 안에서만
    나와 *"(37.4m, 22.8m, z 8m) 에 달아라"* 같은 답을 못 한다. 현장에 폴을
    세울 수 있는 자리가 딱 24곳일 리 없으니 실무적으로 약했다.

    연속 최적화(좌표를 실수 변수로 두고 경사하강) 대신 **후보를 촘촘히 까는**
    쪽을 골랐다. 구조를 바꾸지 않고, 탐욕의 (1−1/e) 보장이 그대로 유지되며,
    "후보 안에서 불가능" 판정이 실제 물리적 한계에 가까워진다.

    설치 가능 영역 넷:
      경계 폴    현장 둘레. 높이 6m
      코어 상부  코어 슬래브 위. 높이 13m
      비계       외곽 비계 상단 난간. 높이 8·12m — 실제로 카메라를 다는 자리다
      타워크레인 중앙 마스트 주변. 높이 25m

    간격은 `config.CAMERA_SPACING_M`. 좁힐수록 임의 위치에 가까워지지만
    광선투사가 후보 수에 비례해 늘어난다.
    """
    sp = spacing_m or config.CAMERA_SPACING_M
    W, D = config.SITE_WIDTH_M, config.SITE_DEPTH_M
    cams, seen = [], set()

    def add(x, y, z, mount, tag):
        key = (round(x, 1), round(y, 1), round(z, 1))
        if key in seen:
            return
        seen.add(key)
        cams.append(Camera(f"c_{tag}{len(cams):03d}", x, y, z, mount))

    # ① 경계 폴 — 네 변을 spacing 간격으로
    n_x = max(2, int(round(W / sp)))
    n_y = max(2, int(round(D / sp)))
    for i in range(n_x):
        x = W * (i + 0.5) / n_x
        add(x, 1.0, 6.0, "boundary_pole", "b")
        add(x, D - 1.0, 6.0, "boundary_pole", "b")
    for j in range(n_y):
        y = D * (j + 0.5) / n_y
        add(1.0, y, 6.0, "boundary_pole", "b")
        add(W - 1.0, y, 6.0, "boundary_pole", "b")

    # ② 코어 상부 — 코어 윗면 둘레
    for cx in (30.0, 70.0):
        for dx in (-6.0, 0.0, 6.0):
            for dy in (-8.0, 0.0, 8.0):
                if dx == 0.0 and dy == 0.0:
                    continue
                add(cx + dx, 30.0 + dy, 13.0, "core_top", "k")

    # ③ 비계 상단 난간 — 실제로 카메라를 다는 자리다
    ox1, oy1, ox2, oy2 = 16.0, 12.0, 84.0, 48.0
    for z in (8.0, 12.0):
        for i in range(max(2, int(round((ox2 - ox1) / sp)))):
            x = ox1 + (ox2 - ox1) * (i + 0.5) / max(2, int(round((ox2 - ox1) / sp)))
            add(x, oy1, z, "scaffold_rail", "s")
            add(x, oy2, z, "scaffold_rail", "s")
        for j in range(max(2, int(round((oy2 - oy1) / sp)))):
            y = oy1 + (oy2 - oy1) * (j + 0.5) / max(2, int(round((oy2 - oy1) / sp)))
            add(ox1, y, z, "scaffold_rail", "s")
            add(ox2, y, z, "scaffold_rail", "s")

    # ④ 타워크레인 마스트 주변
    for dx in (-8.0, 0.0, 8.0):
        for dy in (-8.0, 0.0, 8.0):
            if dx == 0.0 and dy == 0.0:
                continue
            add(50.0 + dx, 30.0 + dy, 25.0, "tower_crane", "t")

    return cams


# ── 복셀 ──────────────────────────────────────────────────────────────────

def _occupiable(x: float, y: float, z: float, solids: list) -> bool:
    """이 자리에 사람이 있을 수 있는가.

    CCTV 는 공중도 보지만 **검출 대상은 사람**이다. 부피 전체를 분모로 삼으면
    아무도 못 가는 허공이 커버리지를 희석한다. 그래서 복셀마다 이 판정을 달고
    지표는 여기 해당하는 것만으로 낸다. 시각화는 전부 그린다.

    사람이 있을 수 있는 자리는 둘이다.
      ① 바닥(지면·슬래브) 위 작업 높이대
      ② 비계·갱폼 작업발판 곁 — 건설현장에서 추락 위험이 큰 자리가 여기다
    """
    lo, hi = config.OCCUPIABLE_BAND_M
    for floor_z in config.SLAB_LEVELS_M:
        if floor_z + lo <= z <= floor_z + hi:
            if floor_z == 0.0:
                return True                     # 지면은 현장 전역
            for b in solids:                    # 상부층은 슬래브 위만
                if (b.kind == "slab" and abs(b.z2 - floor_z) < 1e-6
                        and b.x1 <= x <= b.x2 and b.y1 <= y <= b.y2):
                    return True

    d = config.OCCUPIABLE_NEAR_SCAFFOLD_M
    for b in solids:                            # 비계 작업발판 곁
        if b.kind != "scaffold":
            continue
        if (b.x1 - d <= x <= b.x2 + d and b.y1 - d <= y <= b.y2 + d
                and b.z1 <= z <= b.z2):
            return True
    return False


def _level_of(z: float) -> int:
    """이 높이가 몇 층대인가. 2D 모드의 층 선택에 쓴다."""
    lvl = 0
    for i, fz in enumerate(config.SLAB_LEVELS_M):
        if z >= fz:
            lvl = i
    return lvl


def _voxels(solids: list, zones: list) -> list:
    """현장을 복셀로 자른다.

    `config.VOXEL_MODE` 가
      "volume"      부피 전체를 큐브로 (CCTV 는 공중도 본다)
      "work_plane"  층별 작업면만 (가볍다)

    골조 솔리드 안은 사람이 들어갈 수 없으므로 아예 만들지 않는다.
    """
    step = config.VOXEL_M
    nx = int(config.SITE_WIDTH_M / step)
    ny = int(config.SITE_DEPTH_M / step)
    out = []

    if config.VOXEL_MODE == "volume":
        zs = [(k + 0.5) * step for k in range(int(config.VOXEL_Z_MAX_M / step))]
    else:
        zs = [fz + config.WORK_PLANE_OFFSET_M for fz in config.SLAB_LEVELS_M]

    slabs = [b for b in solids if b.kind == "slab"]

    for zi, z in enumerate(zs):
        for j in range(ny):
            for i in range(nx):
                x, y = (i + 0.5) * step, (j + 0.5) * step

                if any(s.x1 <= x <= s.x2 and s.y1 <= y <= s.y2
                       and s.z1 <= z <= s.z2
                       and s.kind in ("core", "slab", "stack")
                       for s in solids):
                    continue                    # 골조 안 — 들어갈 수 없다

                if config.VOXEL_MODE == "volume":
                    occ = _occupiable(x, y, z, solids)
                    lvl = _level_of(z)
                else:
                    if zi > 0:
                        floor_z = config.SLAB_LEVELS_M[zi]
                        if not any(b.x1 <= x <= b.x2 and b.y1 <= y <= b.y2
                                   and abs(b.z2 - floor_z) < 1e-6 for b in slabs):
                            continue
                    occ, lvl = True, zi

                w = config.RISK_WEIGHT_DEFAULT
                names = []
                for zn in zones:
                    if zn.contains(x, y, z):
                        w = max(w, zn.weight)
                        names.append(zn.name)

                out.append({"id": f"v_{len(out):04d}", "x": x, "y": y, "z": z,
                            "level": lvl,
                            "floor_z": config.SLAB_LEVELS_M[
                                min(lvl, len(config.SLAB_LEVELS_M) - 1)],
                            "occupiable": occ, "w": w, "zones": names})
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
    wc = collections.Counter(v["w"] for v in s.voxels if v["occupiable"])
    print(f"현장 {s.width:.0f}×{s.depth:.0f}m · 복셀 {config.VOXEL_M:.0f}m 격자")
    print(f"  솔리드 {len(s.solids)} · 위험구역 {len(s.zones)} · 카메라 후보 {len(s.cameras)}")
    occ = [v for v in s.voxels if v["occupiable"]]
    print(f"  복셀 {len(s.voxels)}개 (골조 내부 제외) · 그중 사람이 있을 수 있는 "
          f"자리 {len(occ)}개 ({len(occ)/len(s.voxels)*100:.1f}%)")
    print("  가중치 분포:", dict(sorted(wc.items())))
    print(f"  가중치 총합 Σw = {sum(v['w'] for v in s.voxels if v['occupiable'])}"
          f"  (occupiable 만)")
