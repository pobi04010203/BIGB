"""폰트 파일 경로 해석 + 글리프 검사.

Windows 는 폰트가 두 곳에 깔린다:
  - 시스템 전체: C:\\Windows\\Fonts                          (관리자 권한 필요)
  - 사용자 전용: %LOCALAPPDATA%\\Microsoft\\Windows\\Fonts     (권한 불필요)
Pretendard 는 후자에 설치했으므로 두 곳을 모두 본다.

한글 폰트 주의: KoPub 은 굵기마다 **패밀리 이름이 다르다**("KoPubBatang Bold").
bold 플래그를 쓰면 PowerPoint 가 가짜 볼드를 합성하므로 굵기별 패밀리를 직접 지정한다.
"""
import os
from pathlib import Path

import theme as T

DIRS = [
    Path(os.environ.get("LOCALAPPDATA", "")) / "Microsoft" / "Windows" / "Fonts",
    Path(os.environ.get("WINDIR", r"C:\Windows")) / "Fonts",
]

# 본문 산세리프는 Regular/Bold 가 같은 패밀리라 파일이 둘이다
EXTRA = {"Pretendard-Bold": "Pretendard-Bold.otf"}


def find(filename: str) -> Path:
    for d in DIRS:
        p = d / filename
        if p.exists():
            return p
    raise SystemExit(
        f"폰트 파일을 찾을 수 없다: {filename}\n"
        f"찾아본 곳: {[str(d) for d in DIRS]}\n"
        f"Pretendard 는 `python tools/install_fonts.py` 로 설치한다.\n"
        f"KoPub 은 https://www.kopus.org 에서 받는다.")


def all_files() -> list[Path]:
    """테마가 쓰는 모든 폰트 파일. matplotlib 등록·글리프 검사에 쓴다."""
    names = list(T.FONT_FILES.values()) + list(EXTRA.values())
    return [find(n) for n in dict.fromkeys(names)]


def assert_glyphs(texts, where=""):
    """쓰인 문자가 폰트에 다 있는지 확인하고, 없으면 예외를 던진다.

    한글 폰트는 대시·기호에 구멍이 많다. 없는 문자는 두부(빈 사각형)로 나간다.
    폰트를 바꿀 때마다 다시 터지는 자리라 빌드 게이트로 둔다.
    """
    from fontTools.ttLib import TTFont

    cmaps = {}
    for p in all_files():
        cm = set()
        for st in TTFont(str(p), fontNumber=0, lazy=True)["cmap"].tables:
            cm |= set(st.cmap)
        cmaps[p.name] = cm

    used = set()
    for t in texts:
        used |= set(t)

    bad = []
    for ch in sorted(used):
        if ord(ch) < 0x20 or ch.isspace():
            continue
        for name, cm in cmaps.items():
            if ord(ch) not in cm:
                bad.append(f"U+{ord(ch):04X} {ch!r} ({name})")
    if bad:
        raise SystemExit(f"{where} 폰트에 없는 글자: " + " · ".join(sorted(set(bad))))
