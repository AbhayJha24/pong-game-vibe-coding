// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 820,
    height: 640,
    resizable: false,
    webPreferences: {
      // we don’t need Node integration in your game
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.removeMenu(); // optional: hide default menu
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

// On macOS it’s common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});