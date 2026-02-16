@echo off
color 0b
cls
echo ===============================================================================
echo   FORCE DOMAIN: PROOFOFPLAY.VERCEL.APP
echo ===============================================================================
echo.
echo   [INFO] Attempting to map deployment to "proofofplay.vercel.app".
echo   [INSTRUCTION] If asked to confirm, type Y and hit Enter.
echo   [INSTRUCTION] If asked to select a scope, select your team.
echo.
echo   EXECUTING...
cd app
call npx vercel alias set out-topaz-one.vercel.app proofofplay.vercel.app
echo.
echo   IF SUCCESSFUL, OPEN: https://proofofplay.vercel.app
pause
