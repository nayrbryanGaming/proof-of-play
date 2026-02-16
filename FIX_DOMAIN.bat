@echo off
color 0e
cls
echo ===============================================================================
echo   ASSIGNING URL: https://proofofplay.vercel.app/
echo ===============================================================================
echo.
echo   [INFO] Moving existing deployment to target domain...
echo.
cd app
call npx vercel alias set out-topaz-one.vercel.app proofofplay.vercel.app --yes
pause
