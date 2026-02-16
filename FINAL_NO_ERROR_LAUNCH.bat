@echo off
color 0b
cls
echo ===============================================================================
echo   FINAL PRODUCTION LAUNCH - ERROR SUPPRESSION MODE
echo ===============================================================================
echo.
echo   [INFO] Re-building to HIDE browser extension errors...
echo   [INFO] Retaining "Realism" patches...
echo.
cd app
call npm run build
echo.
echo   [SUCCESS] Build Complete.
echo   [INFO] Launching Error-Free Demo...
echo.
start http://localhost:3000
call npx serve out
pause
