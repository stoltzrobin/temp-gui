const { app, BrowserWindow } = require('electron')
const path = require("path");

function createWindow() {
    // Create the browser window.     
    win = new BrowserWindow({ width: 800, height: 600 })

    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    //win.loadURL('http://localhost:3000/');
}
app.whenReady().then(createWindow)
