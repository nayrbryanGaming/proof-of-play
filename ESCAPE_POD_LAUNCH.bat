@echo off
color 4f
cls
echo ===============================================================================
echo   ESCAPE POD LAUNCH - PORT 8888
echo ===============================================================================
echo.
echo   [CRITICAL] EVADING BROWSER CACHE ERROR...
echo   [CRITICAL] SWITCHING FREQUENCY TO PORT 8888...
echo.
cd app
echo   1. CLEANING OLD FILES...
rmdir /s /q .next
echo   2. BUILDING PRODUCTION VERSION (NO DEBUGGERS)...
call npm run build
echo.
echo   3. LAUNCHING ON NEW PORT...
start http://localhost:8888
call npx serve out -p 8888
pause
