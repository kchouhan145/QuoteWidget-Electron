const {app, BrowserWindow} = require('electron');
const path  = require('path')


let win;

function createWindow(){
    win = new BrowserWindow({
        height: 150,
        width: 500,
        frame: false,
        backgroundColor: '#B0E0E6',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Enable dragging by setting -webkit-app-region: drag in CSS
    win.once('ready-to-show', () => {
        win.webContents.insertCSS('body { -webkit-app-region: drag; }');
    });
 
    win.loadFile(path.join(__dirname,'index.html'));
}

app.whenReady().then(createWindow)