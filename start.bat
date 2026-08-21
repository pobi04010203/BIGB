@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title AI CCTV 배치 적정성 평가

REM =====================================================================
REM  UI 실행 - 프로젝트 최상단에서 이것 하나만 누르면 된다.
REM
REM    1) 평가 결과(mockup\data.json)가 입력보다 오래됐는지 검사한다
REM    2) 낡았으면 다시 계산할지 물어본다
REM    3) mockup\start.bat 에 넘긴다 - 로컬 서버를 띄우고 브라우저를 연다
REM
REM  외부 요청은 0 건이다. 인터넷도 설치도 필요 없다.
REM =====================================================================

if not exist "mockup\index.html" goto :nomockup

set "PY="
where python >nul 2>&1
if not errorlevel 1 set "PY=python"
if not defined PY where py >nul 2>&1
if not defined PY if not errorlevel 1 set "PY=py"

REM 파이썬이 없으면 검사도 계산도 못 한다. 있는 결과로 연다.
if not defined PY goto :launch

echo.
"%PY%" tools\check_stale.py
if errorlevel 2 goto :missing
if errorlevel 1 goto :stale
echo   평가 결과가 최신입니다.
goto :launch

:missing
echo.
echo   결과 파일이 없어 지금 계산합니다.
goto :compute

:stale
echo.
echo   [경고] 결과가 입력보다 오래됐습니다. 화면이 옛 수치를 보여줍니다.
echo.
choice /c YN /n /m "  지금 다시 계산할까요?  Y=계산  N=그냥 열기 : "
if errorlevel 2 goto :launch

:compute
echo.
echo   계산 중입니다. 복셀이 3만 개가 넘어 몇 분 걸립니다. 창을 닫지 마세요.
echo.
"%PY%" srceport.py
if errorlevel 1 goto :failed
goto :launch

:failed
echo.
echo   [오류] 계산에 실패했습니다. 위 메시지를 확인하세요.
echo          옛 결과로 화면을 열려면 아무 키나 누르세요.
pause >nul
goto :launch

:launch
if defined AICCTV_NO_LAUNCH goto :dryrun
call "mockup\start.bat"
exit /b 0

:dryrun
echo   [시험] AICCTV_NO_LAUNCH 가 설정되어 브라우저를 열지 않습니다.
exit /b 0

:nomockup
echo [오류] mockup\index.html 이 없습니다.
echo        start.bat 은 프로젝트 최상단에서 실행해야 합니다.
echo        현재 위치: %CD%
pause
exit /b 1
