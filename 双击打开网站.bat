@echo off
cd /d "%~dp0dist"
echo 正在启动张书晨个人作品集...
echo.
echo 网站地址: http://localhost:5173
echo.
echo 浏览器将自动打开，关闭此窗口即停止运行
echo.
start http://localhost:5173
python -m http.server 5173
