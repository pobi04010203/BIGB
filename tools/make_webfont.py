# -*- coding: utf-8 -*-
"""`mockup/fonts.css` 를 만든다 — 화면이 실제로 쓰는 글자만 잘라 base64 로 심는다.

**왜 이렇게 하나.** CLAUDE.md §7 Phase 4 가 목업에 "외부 의존 0" 을 요구하고
`file://` 로도 열려야 한다. CDN `<link>` 를 쓰면 둘 다 깨진다. 그렇다고 시스템
폰트만 쓰면 맑은 고딕에 묶인다. 그래서 필요한 글자만 잘라 파일 안에 넣는다.

**글자 집합은 소스에서 뽑는다.** 손으로 적으면 문구를 고칠 때마다 빠진 글자가
생기고, 빠진 글자는 대체 폰트로 떨어져 한 글자만 튄다. `mockup/` 의 소스와
`data.json` 이 실제로 렌더하는 값(구역명·원인·카메라 id 등)을 전부 훑는다.
**화면 문구를 새로 쓰면 이 스크립트를 다시 돌릴 것.**

  python tools/make_webfont.py            mockup/fonts.css 갱신
  python tools/make_webfont.py --check    글자 집합만 세고 쓰지 않는다

── 두 벌을 쓴다 ─────────────────────────────────────────────────────────
  Wanted Sans    한글·라틴 본문과 표제.
                 Medium(500) 이 있는 것이 이 화면에 중요하다 — 11~12px 한글을
                 400 으로 두면 회색 위에서 획이 사라진다.
  IBM Plex Mono  **숫자 전용.** 이 화면의 주인공이 수치라 숫자에 고정폭을 준다.
                 표의 자릿수가 맞고, KPI 가 자기 서체를 갖는다. 한글은 이 벌에
                 없으므로 스택에서 Wanted Sans 로 떨어진다 — 의도한 것이다.

── 라이선스 ─────────────────────────────────────────────────────────────
  Wanted Sans    Copyright (c) 2023 Wanted Lab, Inc.  SIL OFL 1.1
  IBM Plex Mono  Copyright (c) 2017 IBM Corp.         SIL OFL 1.1
둘 다 임베드·재배포가 허용되며 고지를 함께 싣는 것이 조건이다. 생성되는
fonts.css 머리에 고지가 들어간다.
"""
from pathlib import Path
import argparse
import base64
import io
import json
import os
import sys

try:
    sys.stdout.reconfigure(errors="replace")
    sys.stderr.reconfigure(errors="replace")
except (AttributeError, ValueError):
    pass

try:
    from fontTools import subset
    from fontTools.ttLib import TTFont
except ImportError:
    sys.exit("fontTools 가 필요하다:  python -m pip install fonttools brotli")

ROOT = Path(__file__).resolve().parent.parent
MOCKUP = ROOT / "mockup"
OUT = MOCKUP / "fonts.css"

# 원본은 리포에 커밋하지 않는다(둘 합쳐 6 MB). 없으면 받는 법을 알려주고 멈춘다.
SRC_DIR = Path(os.environ.get("RESPACE_FONTSRC", ROOT / "build" / "fontsrc"))

UI_FAMILY = "Wanted Sans"
NUM_FAMILY = "IBM Plex Mono"
FACES = [
    (UI_FAMILY, 400, "WantedSans-Regular.otf",  "ui"),
    (UI_FAMILY, 500, "WantedSans-Medium.otf",   "ui"),
    (UI_FAMILY, 600, "WantedSans-SemiBold.otf", "ui"),
    (UI_FAMILY, 700, "WantedSans-Bold.otf",     "ui"),
    (NUM_FAMILY, 400, "IBMPlexMono-Regular.ttf",  "num"),
    (NUM_FAMILY, 600, "IBMPlexMono-SemiBold.ttf", "num"),
]
SOURCES = {
    "WantedSans-*.otf":
        "https://github.com/wanteddev/wanted-sans/releases/latest  →  "
        "WantedSans-x.y.z.zip 의 otf/ (Std 판은 한글이 없다)",
    "IBMPlexMono-*.ttf":
        "https://github.com/IBM/plex/tree/master/packages/plex-mono/fonts/complete/ttf",
}

# 숫자 벌은 한글을 싣지 않는다. 라틴·숫자·기호만.
NUM_EXTRA = "×÷−–—→←↔≥≤≈±²³·%‰°ΔΣΠρθλμσ…“”‘’"


def used_chars() -> set:
    """mockup 소스와 data.json 이 렌더하는 문자 전부."""
    chars = set(map(chr, range(0x20, 0x7F)))          # ASCII 는 통째로
    chars |= set(NUM_EXTRA)

    for p in sorted(MOCKUP.glob("*")):
        if p.suffix.lower() in (".html", ".js", ".css") and p.name != "fonts.css":
            if p.name == "data.js":
                continue                               # data.json 쪽에서 본다
            chars |= set(p.read_text(encoding="utf-8"))

    # data.json — 값 문자열만 본다. 키는 화면에 안 나오는 것이 대부분이지만
    # 구분 없이 넣어도 몇 글자 차이라 통째로 훑는다.
    dj = MOCKUP / "data.json"
    if dj.exists():
        def walk(o):
            if isinstance(o, str):
                chars.update(o)
            elif isinstance(o, dict):
                for k, v in o.items():
                    chars.update(k); walk(v)
            elif isinstance(o, list):
                for v in o:
                    walk(v)
        walk(json.loads(dj.read_text(encoding="utf-8")))

    # 제어문자·대체문자는 뺀다
    return {c for c in chars if c.isprintable() and c != "�"}


def subset_woff2(path: Path, chars: set) -> bytes:
    f = TTFont(str(path), lazy=True)
    opt = subset.Options(layout_features="*", notdef_outline=True, desubroutinize=True)
    opt.flavor = "woff2"
    s = subset.Subsetter(options=opt)
    s.populate(text="".join(sorted(chars)))
    s.subset(f)
    buf = io.BytesIO()
    f.flavor = "woff2"
    f.save(buf)
    f.close()
    return buf.getvalue()


HEADER = """/* 페이지에 실제로 쓰는 글자만 남긴 서브셋을 base64 로 심는다.
 *
 * **이 파일은 손으로 고치지 않는다.** `python tools/make_webfont.py` 가 만든다.
 * 화면 문구를 새로 쓰면 다시 돌릴 것 — 서브셋에 없는 글자는 대체 폰트로
 * 떨어져 그 한 글자만 튄다.
 *
 * 왜 심는가 — CLAUDE.md §7 Phase 4 가 "외부 의존 0" 을 요구하고 file:// 로도
 * 열려야 한다. CDN <link> 를 쓰면 둘 다 깨진다.
 *
 * 두 벌을 쓴다.
 *   Wanted Sans    한글·라틴 본문과 표제. Medium(500) 이 있어 11~12px 한글이
 *                  회색 배경에서 사라지지 않는다
 *   IBM Plex Mono  **숫자 전용.** 이 화면의 주인공이 수치다. 고정폭이라 표의
 *                  자릿수가 맞는다. 한글이 없는 벌이라 한글은 스택에서
 *                  Wanted Sans 로 떨어진다 — 의도한 것이다
 *
{stats} *
 * ── 라이선스 ────────────────────────────────────────────────────────────
 * Wanted Sans    Copyright (c) 2023 Wanted Lab, Inc.
 *                (https://github.com/wanteddev/wanted-sans)
 * IBM Plex Mono  Copyright (c) 2017 IBM Corp. (https://github.com/IBM/plex)
 * 둘 다 SIL Open Font License 1.1 로 배포된다. 임베드·재배포가 허용되며 이
 * 고지를 함께 싣는 것이 조건이다. 전문: https://scripts.sil.org/OFL
 */
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="글자 집합만 세고 쓰지 않는다")
    args = ap.parse_args()

    chars = used_chars()
    hangul = sum(1 for c in chars if "가" <= c <= "힣")
    print(f"글자 {len(chars)}자 (한글 완성형 {hangul}자)")
    if args.check:
        return 0

    missing = [n for _, _, n, _ in FACES if not (SRC_DIR / n).exists()]
    if missing:
        print(f"\n원본 폰트가 없다: {SRC_DIR}")
        for n in missing:
            print(f"  - {n}")
        print("\n받는 곳:")
        for k, v in SOURCES.items():
            print(f"  {k}\n      {v}")
        print(f"\n받아서 {SRC_DIR} 에 두고 다시 돌릴 것 "
              f"(환경변수 RESPACE_FONTSRC 로 경로를 바꿀 수 있다).")
        return 1

    num_chars = {c for c in chars if not ("가" <= c <= "힣"
                                          or "㄰" <= c <= "㆏")}
    blocks, stats = [], []
    for fam, weight, fname, kind in FACES:
        use = chars if kind == "ui" else num_chars
        data = subset_woff2(SRC_DIR / fname, use)
        b64 = base64.b64encode(data).decode()
        raw = (SRC_DIR / fname).stat().st_size
        stats.append(f" *   {fname:<26} {raw:>9,} → {len(data):>7,} bytes")
        print(f"  {fam} {weight:<4} {fname:<26} {len(data):>7,} bytes")
        blocks.append(
            f'@font-face{{\n'
            f'  font-family:"{fam}";\n'
            f'  font-style:normal;\n'
            f'  font-weight:{weight};\n'
            f'  font-display:swap;\n'
            f'  src:url(data:font/woff2;base64,{b64}) format("woff2");\n'
            f'}}'
        )

    total = sum(len(b) for b in blocks)
    stats.append(f" *   {'합계 (base64 전)':<26} {'':>9}   "
                 f"{sum(len(base64.b64decode(b.split('base64,')[1].split(')')[0])) for b in blocks):>7,} bytes")
    css = HEADER.format(stats="\n".join(stats) + "\n") + "\n" + "\n".join(blocks) + "\n"
    OUT.write_text(css, encoding="utf-8")
    print(f"\n→ {OUT}  ({OUT.stat().st_size:,} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
