const { app, BrowserWindow } = require('electron');
const path = require('path');
const ipc = require('electron').ipcRenderer
const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }

    });

    win.resizable = false;
    win.on('minimize', function(event) {
        event.preventDefault();
        win.hide();
    });

    win.on('close', function(event) {
        if (!win.isQuiting) {
            event.preventDefault();
            win.hide();
        }

        return false;
    });
    win.loadFile('index.html');
    win.webContents.on('did-finish-load', () => {

    });
};

app.whenReady().then(async() => {
    await createWindow();

})