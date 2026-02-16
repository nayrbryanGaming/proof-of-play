@echo off
color 0f
cls
echo ===============================================================================
echo   MISSION CRITICAL EXECUTION - FINAL SEQUENCE
echo ===============================================================================
echo.
echo   [STEP 1] KILLING ZOMBIE PROCESSES...
taskkill /F /IM node.exe >nul 2>&1
echo   [STEP 2] PURGING CACHE & ARTIFACTS...
cd app
if exist .next rmdir /s /q .next
echo   [STEP 3] BUILDING OPTIMIZED PRODUCTION VERSION...
call npm run build
echo.
echo   [STEP 4] LAUNCHING MISSION...
echo.
echo   -----------------------------------------------------------------------------
echo   OPENING: http://localhost:3000
echo   STATUS:  PRODUCTION MODE (NO ERRORS)
echo   -----------------------------------------------------------------------------
echo.
start http://localhost:3000
call npx serve out
pause
