"""Pretendard 를 사용자 폰트 폴더에 설치한다 (관리자 권한 불필요).

    python tools/install_fonts.py

폰트 파일을 리포에 커밋하지 않는 대신 이 스크립트로 재현한다.
라이선스는 SIL Open Font License 1.1 ― 재배포·임베딩 모두 허용된다.

주의: 배포되는 zip 이 두 종류다.
  Pretendard-x.y.z.zip      전체판. 한글 포함 (약 46 MB) ← 이걸 써야 한다
  PretendardStd-x.y.z.zip   라틴 서브셋. 한글이 0자다 (약 7 MB)
"""
import io
import json
import os
import shutil
import sys
import urllib.request
import winreg
import zipfile
from pathlib import Path

API = "https://api.github.com/repos/orioncactus/pretendard/releases/latest"
WEIGHTS = ["Regular", "SemiBold", "Bold"]
USER_FONTS = Path(os.environ["LOCALAPPDATA"]) / "Microsoft" / "Windows" / "Fonts"
REG_KEY = r"Software\Microsoft\Windows NT\CurrentVersion\Fonts"


def latest_full_zip_url() -> tuple[str, str]:
    with urllib.request.urlopen(API, timeout=60) as r:
        rel = json.load(r)
    for a in rel["assets"]:
        name = a["name"]
        # 'Pretendard-1.3.9.zip' 만 고른다. Std/JP/GOV 는 제외
        if name.startswith("Pretendard-") and name.endswith(".zip"):
            return a["browser_download_url"], rel["tag_name"]
    raise SystemExit("전체판 zip 을 찾지 못했다: " + ", ".join(a["name"] for a in rel["assets"]))


def main() -> int:
    url, tag = latest_full_zip_url()
    print(f"Pretendard {tag} 내려받는 중 … (약 46 MB)")
    with urllib.request.urlopen(url, timeout=600) as r:
        blob = r.read()

    z = zipfile.ZipFile(io.BytesIO(blob))
    USER_FONTS.mkdir(parents=True, exist_ok=True)
    key = winreg.CreateKey(winreg.HKEY_CURRENT_USER, REG_KEY)

    installed = []
    for w in WEIGHTS:
        hits = [n for n in z.namelist()
                if n.endswith(f"Pretendard-{w}.otf") and "/static/" in n
                and "alternative" not in n]
        if not hits:
            print(f"  건너뜀: {w} (zip 에 없음)")
            continue
        dst = USER_FONTS / f"Pretendard-{w}.otf"
        with z.open(hits[0]) as src, dst.open("wb") as out:
            shutil.copyfileobj(src, out)
        reg_name = "Pretendard (OpenType)" if w == "Regular" else f"Pretendard {w} (OpenType)"
        winreg.SetValueEx(key, reg_name, 0, winreg.REG_SZ, str(dst))
        installed.append(reg_name)
        print(f"  설치: {reg_name}")
    winreg.CloseKey(key)

    if not installed:
        return 1
    print("\n완료. 이미 열려 있던 PowerPoint·LibreOffice 는 다시 시작해야 폰트를 인식한다.")
    return 0


if __name__ == "__main__":
    if os.name != "nt":
        raise SystemExit("이 스크립트는 Windows 전용이다")
    sys.exit(main())
