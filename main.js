const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 1020,
    titleBarStyle: 'hiddenInset', // 使用 macOS 原生的隐藏标题栏样式
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true // 启用远程模块
    },
  });

  win.loadFile('index.html');

  // 移除这个事件监听器，因为在 macOS 中我们不希望在关闭窗口时退出应用
  // win.on('close', (event) => {
  //   app.quit();
  // });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
