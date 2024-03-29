const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width:320,
      height:350,
      hideMenuBar: true,
      titleBarOverlay: true,
      resizable: false,
      icon: 'app/resources/colourful-logo.png',
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