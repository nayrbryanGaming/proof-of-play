@echo off
color 0a
cls
echo ===============================================================================
echo   FINAL DOMAIN ASSIGNMENT: PROOFOFPLAY.VERCEL.APP
echo ===============================================================================
echo.
echo   [INFO] Forcing deployment to project "proofofplay".
echo   [INFO] This will secure the URL: https://proofofplay.vercel.app
echo.
echo   PLEASE WAIT...
cd app
call npx vercel deploy out --prod --name proofofplay --yes
echo.
echo   DONE. CHECK THE URL ABOVE.
pause
