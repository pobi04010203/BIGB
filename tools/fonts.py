"""폰트 파일 경로 해석 + 글리프 검사.

Windows 는 폰트가 두 곳에 깔린다:
  - 시스템 전체: C:\\Windows\\Fonts          (관리자 권한 필요)
  - 사용자 전용: %LOCALAPPDATA%\\Microsoft\\Windows\\Fonts   (권한 불필요)
Pretendard 는 후자에 설치했으므로 두 곳을 모두 본다.
"""
import os
from pathlib import Path

DIRS = [
    Path(os.environ.get("LOCALAPPDATA", "")) / "Microsoft" / "Windows" / "Fonts",
    Path(os.environ.get("WINDIR", r"C:\Windows")) / "Fonts",
]

# 슬라이드·그림에 쓰는 폰트. (PowerPoint 에 넣을 이름, 파일명 후보)
FAMILY = "Pretendard"
FILES = {
    "regular": ["Pretendard-Regular.otf"],
    "bold": ["Pretendard-Bold.otf"],
}


def find(candidates) -> Path:
    for d in DIRS:
        for name in candidates:
            p = d / name
            if p.exists():
                return p
    raise SystemExit(
        f"폰트를 찾을 수 없다: {candidates}\n"
        f"찾아본 곳: {[str(d) for d in DIRS]}\n"
        f"Pretendard 는 https://github.com/orioncactus/pretendard/releases 에서 받아 설치한다.")


def regular() -> Path:
    return find(FILES["regular"])


def bold() -> Path:
    return find(FILES["bold"])


def assert_glyphs(texts, where=""):
    """쓰인 문자가 폰트에 다 있는지 확인하고, 없으면 예외를 던진다.

    한글 폰트는 대시·수학기호에 구멍이 많다. 없는 문자는 두부(빈 사각형)로 나간다.
    Pretendard 는 14,336자로 구멍이 없지만, 폰트를 바꿀 때 다시 터질 수 있어 남겨둔다.
    """
    from fontTools.ttLib import TTFont

    cmaps = {}
    for label, path in (("Regular", regular()), ("Bold", bold())):
        cm = set()
        for st in TTFont(str(path), fontNumber=0, lazy=True)["cmap"].tables:
            cm |= set(st.cmap)
        cmaps[label] = cm

    used = set()
    for t in texts:
        used |= set(t)

    bad = []
    for ch in sorted(used):
        if ord(ch) < 0x20 or ch.isspace():
            continue
        for label, cm in cmaps.items():
            if ord(ch) not in cm:
                bad.append(f"U+{ord(ch):04X} {ch!r} ({label})")
    if bad:
        raise SystemExit(f"{where} 폰트에 없는 글자: " + " · ".join(sorted(set(bad))))
