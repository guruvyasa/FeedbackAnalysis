const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadFile('./index.html');
  
    mainWindow.on('closed', function() {
      mainWindow = null;
    });
  });