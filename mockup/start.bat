@echo off
chcp 65001 >nul
setlocal EnableExtensions
cd /d "%~dp0"
title AI CCTV 배치 적정성 평가 - 목업

REM ---------------------------------------------------------------------
REM  이 폴더 하나로 끝난다. 인터넷도, 설치도 필요 없다.
REM
REM  파이썬이 있으면 로컬 서버를 띄운다 - 정본 경로이고 data.json 을 읽는다.
REM  없으면 index.html 을 그대로 연다 - data.js 폴백으로 똑같이 렌더된다.
REM  둘 다 로컬이며 외부 요청은 0 건이다.
REM ---------------------------------------------------------------------

set "PORT=8765"

if not exist "index.html" (
  echo [오류] index.html 이 없습니다. start.bat 을 mockup 폴더 안에서 실행하세요.
  echo        현재 위치: %CD%
  pause
  exit /b 1
)
if not exist "data.js" if not exist "data.json" (
  echo [오류] 평가 결과 파일이 없습니다 ^(data.json / data.js^).
  echo        프로젝트 루트에서 python src\report.py 를 먼저 실행하세요.
  pause
  exit /b 1
)

REM --- 파이썬 찾기 -----------------------------------------------------
set "PY="
where python >nul 2>&1
if not errorlevel 1 set "PY=python"
if not defined PY (
  where py >nul 2>&1
  if not errorlevel 1 set "PY=py"
)

if not defined PY goto :openfile

REM --- 서버 띄우기 -----------------------------------------------------
echo 로컬 서버를 띄웁니다 ... http://localhost:%PORT%/
start "목업 서버 (닫으면 종료)" /min "%PY%" -m http.server %PORT%

REM 뜰 때까지 잠깐 기다렸다가 실제로 듣고 있는지 확인한다.
REM 포트가 이미 쓰이고 있으면 서버가 죽으므로 파일 열기로 물러난다.
set "UP="
powershell -NoProfile -Command "$ok=$false; foreach($i in 1..20){ if(-not $ok){ try{ (New-Object Net.Sockets.TcpClient('127.0.0.1',%PORT%)).Close(); $ok=$true } catch { Start-Sleep -Milliseconds 250 } } }; if($ok){exit 0}else{exit 1}" >nul 2>&1
if not errorlevel 1 set "UP=1"

if not defined UP (
  echo 서버를 띄우지 못했습니다 ^(포트 %PORT% 사용 중일 수 있음^). 파일로 엽니다.
  goto :openfile
)

start "" "http://localhost:%PORT%/index.html"
echo.
echo  브라우저가 열렸습니다.
echo  종료하려면 최소화된 "목업 서버" 창을 닫으세요.
echo.
timeout /t 5 >nul 2>&1
if errorlevel 1 ping -n 5 127.0.0.1 >nul
exit /b 0

REM --- 파이썬 없음: 파일로 직접 --------------------------------------
:openfile
echo 파이썬이 없어 index.html 을 직접 엽니다 ^(data.js 폴백^).
start "" "index.html"
timeout /t 4 >nul 2>&1
if errorlevel 1 ping -n 4 127.0.0.1 >nul
exit /b 0
