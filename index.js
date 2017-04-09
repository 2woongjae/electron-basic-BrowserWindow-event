const {app, BrowserWindow} = require('electron');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        show: false
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.once('ready-to-show', () => {
        win.show();
        console.log('win ready-to-show');
    });
    win.on('close', () => {
        console.log('win close');
    });
    win.on('closed', () => {
        console.log('win closed');
    });
    win.on('show', () => {
        console.log('win show');
    });
    win.on('hide', () => {
        console.log('win hide');
    });
    win.on('blur', () => {
        console.log('win blur');
    });
    win.on('focus', () => {
        console.log('win focus');
    });
    win.on('move', () => {
        console.log('win move');
    });
    win.on('moved', () => {
        console.log('win moved');
    });
});

app.on('activate', (event, hasVisibleWindows) => {
    if (!hasVisibleWindows) {
        win.show();
    }
});