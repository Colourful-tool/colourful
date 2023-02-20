const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width:300,
      height:420,
      hideMenuBar: true,
      titleBarOverlay: true,
      resizable: false
    })

    win.removeMenu()
  
    win.loadFile('app/src/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })