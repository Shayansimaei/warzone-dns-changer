window.$ = require("jquery");
const dns_changer = require('node_dns_changer');
var DisabledColor = "#EAF6F6";
var EnabledColor = "#EB1D36";
const changeDns = async(dns, name) => {
    let res;
    dns_changer.setDNSservers({
        DNSservers: dns,
        mkBackup: true,
        DNSbackupName: name
    }).then(async(response) => {
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

async function makeApp() {
    let i = 1;
    dnsServers.forEach(x => {
        $("#main-list").append(
            `
        <li>
        <section class="for-select">
        <h5>${x.name}</h5>
        <div class="dns-container">
        <p>${x.servers[0]}</p>
        <p>${x.servers[1]}</p>
        </div>
        </section>
        </li>
        `
        );
    })
    for (let index = 0; index < ($("#main-list li").length - 1); index++) {
        $("#main-list .for-select").eq(index).on("click", async(e) => {
            console.log(index);
            $("#main-list li").removeClass("selected")
            await changeDns(dnsServers[index].servers, [index].name);
            let target = e.target;
            $(target).parents("li").addClass("selected")

        })



    }
}
makeApp();