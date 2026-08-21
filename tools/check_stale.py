# -*- coding: utf-8 -*-
"""평가 결과가 입력보다 오래됐는지 검사한다. start.bat 이 쓴다.

종료코드
  0  최신 — 그대로 열어도 된다
  1  낡음 — data\*.json 이나 src\*.py 가 결과보다 나중에 바뀌었다
  2  결과 파일이 없다

**왜 배치가 아니라 여기서 하는가.** 배치에서 여러 줄 PowerShell 을 `^` 로
이어붙이면 한글이 섞인 순간 파서가 깨진다. 어차피 계산에 파이썬이 필요하므로
검사도 파이썬이 한다.
"""
from pathlib import Path
import sys

# 콘솔 코드페이지를 그대로 따른다. 인코딩을 강제하면 cp949 콘솔에
# UTF-8 이 섞여 깨진다. 못 그리는 글자는 대체 문자로 넘긴다.
try:
    sys.stdout.reconfigure(errors="replace")
except Exception:
    pass

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "mockup" / "data.json"

if not OUT.exists():
    print("  평가 결과가 없습니다.")
    sys.exit(2)

srcs = [p for pat in ("data/*.json", "data/plans/*.json", "src/*.py", "config.py")
        for p in ROOT.glob(pat)]
newest = max(srcs, key=lambda p: p.stat().st_mtime, default=None)
if newest is None or newest.stat().st_mtime <= OUT.stat().st_mtime:
    sys.exit(0)

import datetime as dt
fmt = lambda p: dt.datetime.fromtimestamp(p.stat().st_mtime).strftime("%m-%d %H:%M")
print(f"  최신 입력 : {newest.name:<20} {fmt(newest)}")
print(f"  현재 결과 : {'data.json':<20} {fmt(OUT)}")
sys.exit(1)
