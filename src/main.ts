import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow(): void {
  const win = new BrowserWindow({
    width: 800,
    height: 880,
    titleBarStyle: 'hiddenInset', // 使用 macOS 原生的隐藏标题栏样式
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      sandbox: false // Electron 33+ 默认启用沙箱，如果需要使用 Node.js API，需要禁用它
    },
  });

  win.loadFile(path.join(__dirname, '../index.html'));

  win.on('close', () => {
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
