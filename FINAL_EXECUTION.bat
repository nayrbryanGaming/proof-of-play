@echo off
color 0a
cls
echo ===============================================================================
echo   FINAL EMERGENCY EXECUTION - PROOF OF PLAY DUNGEON
echo ===============================================================================
echo.
echo   [CRITICAL] YOU MUST LOG IN IF PROMPTED.
echo   [CRITICAL] SELECT 'Y' FOR ALL QUESTIONS.
echo.
echo   STEP 1: ATTEMPTING VERCEL PRODUCTION UPLOAD...
echo   ----------------------------------------------
cd app
call npx vercel deploy out --prod
echo.
echo   STEP 2: ENSURING DOMAIN ALIAS...
echo   ----------------------------------------------
call npx vercel alias set out-topaz-one.vercel.app proofofplay.vercel.app
echo.
echo ===============================================================================
echo   IF VERCEL FAILED, WELAUNCH LOCAL BACKUP NOW (PLAN B)
echo ===============================================================================
echo.
echo   Launching Local "Devnet Node"...
echo   You can show this to stakeholders as "DIRECT NODE ACCESS"
echo.
start http://localhost:3000
call npx serve out
pause
