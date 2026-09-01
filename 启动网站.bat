@echo off
chcp 65001 >nul
cd /d "%~dp0dist"

echo ========================================
echo    张书晨个人作品集
echo ========================================
echo.
echo 正在启动服务器...
echo 浏览器将自动打开: http://localhost:5173
echo.
echo 关闭此窗口即可停止服务器
echo ========================================
echo.

start "" "http://localhost:5173"
python -m http.server 5173
