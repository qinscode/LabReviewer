const { app, BrowserWindow } = require('electron');
   const path = require('path');

   function createWindow() {
     const win = new BrowserWindow({
       width: 800,
       height: 1020,
       webPreferences: {
         nodeIntegration: true,
         contextIsolation: false
       },

     });

     win.loadFile('index.html');

     win.on('close', (event) => {
    // 如果不想关闭可以使用 event.preventDefault() 防止默认行为
    app.quit();
  });
   }

   app.on('window-all-closed', () => {
  // 如果不想在所有窗口关闭后退出应用，可以去掉 app.quit() 这行
  // 例如 macOS 的行为通常是窗口关闭应用仍然在运行。
  app.quit();
});


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