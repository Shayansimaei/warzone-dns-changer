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
        if (!application.isQuiting) {
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
var DisabledColor = "";
var EnabledColor = "";
const changeDns = (dns, name) => {
    let res;
    dns_changer.setDNSservers({
        DNSservers: dns,
        mkBackup: true,
        DNSbackupName: name
    }).then((response) => {
        res = response;
    });
    return res;
}
let dnsServers = [{
    servers: ["178.22.122.100", "185.51.200.2"],
    name: "شکن"
}, {
    servers: ["78.157.42.100", "78.157.42.101"],
    name: "الکترو"
}, {
    servers: ["185.55.226.26", "185.55.225.25"],
    name: "بگذر"
}, {
    servers: ["208.67.222.222", "208.67.220.220"],
    name: "opendns.com"
}, {
    servers: ["129.250.35.250", "129.250.35.251"],
    name: "NTT America, Inc."
}, {
    servers: ["9.9.9.9", "149.112.112.112"],
    name: "Quad9"
}, {
    servers: ["64.6.64.6", "64.6.65.6"],
    name: "UltraDNS"
}, {
    servers: ["8.8.8.8", "8.8.4.4"],
    name: "Google"
}, {
    servers: ["1.1.1.1", "1.0.0.1"],
    name: "Cloudflare"
}]

function makeApp() {
    dnsServers.forEach(x => {
        $("#mainList").append(
            `
            <li>
            <h5>${x.name}</h5>
            <div class="dns-container">
            <i>${x.servers[1]}</i>
            <i>${x.servers[2]}</i>
            </div>
            </li>
            `
        );
        $("#mainList").on("click", (e) => {
            $("#mainList li").css("color", DisabledColor);
            changeDns(x.servers, x.name);
            let target = e.target;
            $(target.style).css("color", EnabledColor);
        })

    })



}