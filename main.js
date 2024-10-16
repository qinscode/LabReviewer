const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 880,
    titleBarStyle: 'hiddenInset', // 使用 macOS 原生的隐藏标题栏样式
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true // 启用远程模块
    },
  });

  win.loadFile('index.html');

  win.on('close', (event) => {
    app.quit();
  });
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
