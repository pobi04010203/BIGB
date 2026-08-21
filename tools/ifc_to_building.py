# -*- coding: utf-8 -*-
"""IFC → `data/building.json` 어댑터.

**계약을 채우는 자리다.** `building.json` 은 "광선을 막는 축정렬 직육면체 목록"
이라는 계약이고, IFC·DWG·현장 실측은 모두 그 계약의 생산자다. 이 파일은 그중
IFC 생산자다.

**무엇을 낼 수 있고 없는지 재봤다** (buildingSMART Duplex Apartment, IFC2x3):

    자동    site               전 부재 AABB 합집합
            storey_levels_m    IfcBuildingStorey.Elevation
            solids (slab)      IfcSlab 형상 → AABB
            openings           IfcRelVoidsElement → 슬래브 관통부

    수동    solids (scaffold)  **설계 BIM 에 없다.** 실측에서 IfcBuildingElementProxy
                               ·IfcTransportElement 가 0 개였다. 가림의 주범인데
                               모델에 없으므로 가설계획에서 따로 받아야 한다
            solids (stack)     자재 적치는 현장 운영이 정한다
            coverage           시선 차단율. IFC 에 그런 개념이 없다
            core 묶기          IFC 는 코어를 벽 여러 장으로 둔다. "이 벽들이
                               코어다" 는 해석이 필요해 자동화하지 않는다

그래서 이 어댑터는 **부분 계약**을 낸다. 사람이 나머지를 채운다. 빈 자리를
지어내지 않는 것이 요점이다 — 없는 비계를 그럴듯하게 만들어 넣으면 가림이
거짓이 되고, 이 도구의 결론이 통째로 흔들린다.

사용:
    python tools/ifc_to_building.py <model.ifc> [-o out.json] [--kind-map slab=slab]
"""
from pathlib import Path
import argparse
import json
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

try:
    import ifcopenshell
    import ifcopenshell.geom
except ImportError:
    sys.exit("ifcopenshell 이 필요하다:  python -m pip install ifcopenshell")

import numpy as np

# IFC 타입 → 우리 kind. 여기 없는 타입은 무시한다.
# **벽은 넣지 않는다** — 코어를 벽 여러 장으로 받으면 직육면체가 수십 개로
# 늘어 광선투사가 느려지고, 정작 필요한 "코어 덩어리" 는 안 나온다.
TYPE_MAP = {"IfcSlab": "slab"}


def _aabb(shape_iter_result):
    v = np.asarray(shape_iter_result.geometry.verts, dtype=float).reshape(-1, 3)
    return v.min(0), v.max(0)


def extract(path: Path, round_to: int = 3) -> dict:
    f = ifcopenshell.open(str(path))
    st = ifcopenshell.geom.settings()
    st.set("use-world-coords", True)

    def aabb(el):
        try:
            return _aabb(ifcopenshell.geom.create_shape(st, el))
        except Exception:
            return None

    r = lambda x: round(float(x), round_to)

    # ── 층 ────────────────────────────────────────────────────────────
    levels = sorted({r(s.Elevation) for s in f.by_type("IfcBuildingStorey")
                     if s.Elevation is not None})

    # ── 부재 → solids ────────────────────────────────────────────────
    solids, skipped = [], {}
    for ifc_type, kind in TYPE_MAP.items():
        for el in f.by_type(ifc_type):
            box = aabb(el)
            if box is None:
                skipped[ifc_type] = skipped.get(ifc_type, 0) + 1
                continue
            lo, hi = box
            item = {
                "kind": kind,
                "box": [r(lo[0]), r(lo[1]), r(lo[2]), r(hi[0]), r(hi[1]), r(hi[2])],
                "ifc": {"type": ifc_type, "guid": el.GlobalId, "name": el.Name or ""},
            }
            # 관통부 — R4 가 여기서 위험구역을 뽑는다
            ops = []
            for rel in (getattr(el, "HasOpenings", None) or []):
                ob = aabb(rel.RelatedOpeningElement)
                if ob is None:
                    continue
                olo, ohi = ob
                ops.append([r(olo[0]), r(olo[1]), r(ohi[0]), r(ohi[1])])
            if ops:
                item["openings"] = ops
                item["openings_source"] = f"IFC: IfcRelVoidsElement ({path.name})"
            solids.append(item)

    # ── 현장 경계 ────────────────────────────────────────────────────
    spans = []
    for t in ("IfcSlab", "IfcWall", "IfcBeam", "IfcColumn", "IfcStair"):
        for el in f.by_type(t):
            b = aabb(el)
            if b:
                spans.append(b)
    if spans:
        lo = np.min([a for a, _ in spans], 0)
        hi = np.max([b for _, b in spans], 0)
        site = {"width_m": r(hi[0] - lo[0]), "depth_m": r(hi[1] - lo[1])}
        origin = [r(lo[0]), r(lo[1])]
    else:
        site, origin = {"width_m": 0, "depth_m": 0}, [0, 0]

    n_open = sum(len(s.get("openings", [])) for s in solids)
    return {
        "_about": f"골조 형상 — IFC 어댑터 산출 ({path.name})",
        "_generated_by": "tools/ifc_to_building.py",
        "_source": {"file": path.name, "schema": f.schema,
                    "origin_offset_m": origin,
                    "note": "좌표는 IFC 월드좌표 그대로다. 현장 원점을 좌하단으로 "
                            "옮기려면 origin_offset_m 만큼 빼라"},
        "_incomplete": {
            "scaffold": "설계 BIM 에 없다. 가설계획에서 받아 직접 넣어라. "
                        "**가림의 주범이라 빠지면 결과가 낙관 쪽으로 크게 틀어진다**",
            "stack": "자재 적치는 현장 운영이 정한다",
            "core": "IFC 는 코어를 벽 여러 장으로 둔다. 덩어리로 묶는 것은 해석이라 "
                    "자동화하지 않았다. 필요하면 kind:core 로 직접 넣어라",
            "coverage": "시선 차단율은 IFC 에 없는 개념이다. 비계는 null 로 두면 "
                        "config.SCAFFOLD_COVERAGE 를 쓴다",
        },
        "_units": "미터. z 는 지면에서 위로",
        "site": site,
        "storey_levels_m": levels,
        "solids": solids,
        "_stats": {"solids": len(solids), "openings": n_open,
                   "storeys": len(levels), "skipped": skipped},
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("ifc", type=Path)
    ap.add_argument("-o", "--out", type=Path, default=None)
    args = ap.parse_args()

    doc = extract(args.ifc)
    s = doc["_stats"]
    print(f"  {args.ifc.name}  schema={doc['_source']['schema']}")
    print(f"   층          {s['storeys']}개  {doc['storey_levels_m']}")
    print(f"   solids      {s['solids']}개 (slab)")
    print(f"   개구부      {s['openings']}개")
    print(f"   현장        {doc['site']['width_m']} x {doc['site']['depth_m']} m")
    if s["skipped"]:
        print(f"   형상 실패   {s['skipped']}")
    print("   ** 비계·적치·coverage 는 자동으로 못 낸다. _incomplete 참조 **")

    if args.out:
        args.out.write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n",
                            encoding="utf-8")
        print(f"  -> {args.out}")
    return doc


if __name__ == "__main__":
    main()
