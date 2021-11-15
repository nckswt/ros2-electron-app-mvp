const {
  app, BrowserWindow, screen, protocol,
// eslint-disable-next-line import/no-extraneous-dependencies
} = require('electron');
const path = require('path');
const url = require('url');

const DEVELOPMENT_WINDOW_WIDTH = 1280;
const DEVELOPMENT_WINDOW_HEIGHT = 720;

app.allowRendererProcessReuse = false;
app.disableHardwareAcceleration();

let mainWindow;

let dev = false;
if (process.env.NODE_ENV === 'development') {
  dev = true;
}

function createWindow() {
  const Size = screen.getPrimaryDisplay().size;
  if (dev) {
    const factor = screen.getPrimaryDisplay().scaleFactor;
    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: DEVELOPMENT_WINDOW_WIDTH / factor, // width of the window (/ factor)
      height: DEVELOPMENT_WINDOW_HEIGHT / factor, // height of the window (/ factor)
      show: false, // don't show until window is ready
      frame: false, // created a window that has no toolbars
      webPreferences: {
        // reseting zoomFactor to default. may not be required for every setup locally
        zoomFactor: 1.0,
        nodeIntegration: true,
        contextIsolation: false,
        webSecurity: false,
      },
    });
  } else {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: Size.width, // width of the window
      height: Size.height, // height of the window
      show: false, // don't show until window is ready
      frame: false, // created a window that has no toolbars
      fullscreen: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        webSecurity: false,
      },
    });
  }

  let indexPath;
  // Determine the correct index.html file
  // (created by webpack) to load in dev and production
  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true,
    });
  } else {
    indexPath = `file://${path.join(__dirname, './index.html')}`;
  }
  mainWindow.loadURL(indexPath);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    if (dev) {
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.webContents.setFrameRate(30);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
