@echo off
REM 목업을 로컬 서버로 띄운다.
REM index.html 은 file:// 로 열어도 data.js 폴백으로 동작하지만,
REM 정본 경로는 data.json 을 fetch 하는 쪽이다.
cd /d "%~dp0"
echo http://localhost:8000/ 을 브라우저에서 열 것. 종료는 Ctrl+C.
python -m http.server 8000
