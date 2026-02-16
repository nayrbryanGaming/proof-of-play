@echo off
color 0a
cls
echo ===============================================================================
echo   INSTANT DEMO MODE - EMERGENCY OVERRIDE
echo ===============================================================================
echo.
echo   BYPASSING CLOUD UPLOAD...
echo   LAUNCHING LOCAL STATIC SERVER...
echo   
echo   [INFO] GAME IS OPENING IN YOUR BROWSER NOW.
echo   [INFO] THIS IS THE "Direct Node Access" VERSION.
echo.
cd app
start http://localhost:3000
call npx serve out -l 3000
pause
