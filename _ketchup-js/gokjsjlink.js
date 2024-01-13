//javascript:(function () {  })();
//menydirec, ggoklink, mneylink
/*const tagPre = document.getElementsByTagName('pre')[0];
const preJob = JSON.parse(tagPre.innerHTML.match(/\[\{\'id':.*\}\]/)[0]);

function ltr(job) {
  var xhttp = new XMLHttpRequest();
  //var url = `https://ggoklink.com/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=60&ti=${job.id}`;
  //var url = `https://mneylink.com/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=64&ti=${job.id}`;
  //var url = `https://mneydirec.com/load_traffic?&id=${job.id}&tt=61`;

  switch (location.host) {
    case 'ggoklink.com':
      var url = `https://ggoklink.com/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=60&ti=${job.id}`;
      break;
    case 'mneylink.com':
      var url = `https://mneylink.com/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=64&ti=${job.id}`;
      break;
      
    case 'mneydirec.com':
      var url = `https://mneydirec.com/load_traffic?&id=${job.id}&tt=61`;
      break;
    
    default:
      console.log('%cError_Error_Error', 'font-size: 30px; background: -webkit-linear-gradient(45deg, hotpink 5%, purple 35%, #00ff95 99%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight:500;');
    break;
  };
  
  xhttp.open('GET', url, false);
  xhttp.send();
  let lol = JSON.parse(xhttp.response);
  for (var i = 0; i < 11; i++) console.log(i, job.link_url == undefined ? 'https:://'+job.keyword+'/' : job.link_url, lol.data.html);
  return 'Hello'
};

preJob.forEach(job => {
  //console.log(job.id,job.link_url)
ltr(job);
});*/


/*const mmUrl = 'https://mneydirec.com/mneydirec-script';

function gok() {
  
  var xhttp = new XMLHttpRequest();

  var url = 'https://ggoklink.com/load_traffic?&r=' + 'https://www.google.com/' + '&w=' + 'https://a.gg/' + '&t=' + '' + '&ti=' + '';

  xhttp.open('GET', url, false);
  xhttp.send();
  let lol = JSON.parse(xhttp.response);
  for (var i = 0; i < 10; i++) console.log(i, lol.data.html);
  document.getElementById('code').value = lol.data.html
  return 'Hello'
}
//gok();

function mmey() {
  var xhttp = new XMLHttpRequest();

  var url = 'https://mneylink.com/load_traffic?&r=https://www.google.com/&w=https://a.gg/&t=60&ti=0'

  xhttp.open('GET', url, false);
  xhttp.send();
  let lol = JSON.parse(xhttp.response);
  for (var i = 0; i < 10; i++) console.log(i, lol.data.html);
  document.getElementById('code').value = lol.data.html
  return 'Hello'
}
//mmey();

function mdirec() {
  var xhttp = new XMLHttpRequest();

  var url = 'https://mneydirec.com/load_traffic?&id=0&tt=60'

  xhttp.open('GET', url, false);
  xhttp.send();
  let lol = JSON.parse(xhttp.response);
  for (var i = 0; i < 10; i++) console.log(i, lol.data.html);
  document.getElementById('code').value = lol.data.html
  return 'Hello'
}
//mdirec();
*/


//traffic123
/*
fetch('https://traffic123.net/que?q=status,azauth,q,t,z&filter=connection').then(response => response.json())
  .then(data => fetch_array(data));

function fetch_array(data) {
  if (data.status == !0) {
    var azauth = data.azauth;
    var q = data.q;
    var t = data.t;
    fetch('https://traffic123.net/publisher?azauth=' + azauth + '&q=' + q + '&t=' + t + '&opa=123&z=' + btoa(window.location.href))
      .then(response => response.json())
      .then(data => {
        for (var i = 0; i < 10; i++) console.log(i, location.href, data.password);
      })
  }
};
*/


//bitly
/*
function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));
  async function lol(code) {
   var o = await fetch("https://apiclient.blitly.io/api/gen-code/ping", { method: "OPTIONS", cache: "no-cache", headers: { rid: code } });
    return o;
  }
  lol(randomcode);

  var width, height, f, l, g, b = "";
  screen.width && (b += (width = screen.width ? screen.width : "") + " x " + (height = screen.height ? screen.height : ""));
  var u = navigator.appVersion,
    p = navigator.userAgent,
    w = navigator.appName,
    h = "" + parseFloat(navigator.appVersion),
    m = parseInt(navigator.appVersion, 10); - 1 != (l = p.indexOf("Opera")) && (w = "Opera", h = p.substring(l + 6), -1 != (l = p.indexOf("Version")) && (h = p.substring(l + 8))), -1 != (l = p.indexOf("OPR")) ? (w = "Opera", h = p.substring(l + 4)) : -1 != (l = p.indexOf("MSIE")) ? (w = "Microsoft Internet Explorer", h = p.substring(l + 5)) : -1 != (l = p.indexOf("Chrome")) ? (w = "Chrome", h = p.substring(l + 7)) : -1 != (l = p.indexOf("Safari")) ? (w = "Safari", h = p.substring(l + 7), -1 != (l = p.indexOf("Version")) && (h = p.substring(l + 8))) : -1 != (l = p.indexOf("Firefox")) ? (w = "Firefox", h = p.substring(l + 8)) : -1 != p.indexOf("Trident/") ? (w = "Microsoft Internet Explorer", h = p.substring(p.indexOf("rv:") + 3)) : (f = p.lastIndexOf(" ") + 1) < (l = p.lastIndexOf("/")) && (w = p.substring(f, l), h = p.substring(l + 1), w.toLowerCase() == w.toUpperCase() && (w = navigator.appName)), -1 != (g = h.indexOf(";")) && (h = h.substring(0, g)), -1 != (g = h.indexOf(" ")) && (h = h.substring(0, g)), -1 != (g = h.indexOf(")")) && (h = h.substring(0, g)), isNaN(m = parseInt("" + h, 10)) && (h = "" + parseFloat(navigator.appVersion), m = parseInt(navigator.appVersion, 10));
  var v = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(u),
    x = !!navigator.cookieEnabled;
  void 0 !== navigator.cookieEnabled || x || (document.cookie = "testcookie", x = -1 != document.cookie.indexOf("testcookie"));
  var W = "-",
    O = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Windows Vista", r: /Windows NT 6.0/ }, { s: "Windows Server 2003", r: /Windows NT 5.2/ }, { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ }, { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ }, { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ }, { s: "Windows 98", r: /(Windows 98|Win98)/ }, { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ }, { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: "Windows CE", r: /Windows CE/ }, { s: "Windows 3.11", r: /Win16/ }, { s: "Android", r: /Android/ }, { s: "Open BSD", r: /OpenBSD/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Linux", r: /(Linux|X11)/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: "QNX", r: /QNX/ }, { s: "UNIX", r: /UNIX/ }, { s: "BeOS", r: /BeOS/ }, { s: "OS/2", r: /OS\/2/ }, { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }];
  for (var S in O) {
    var huh = O[S];
    if (huh.r.test(p)) {
      W = huh.s;
      break
    }
  }
  var y = "-";
  switch (/Windows/.test(W) && (y = /Windows (.*)/.exec(W)[1], W = "Windows"), W) {
    case "Mac OS X":
      y = /Mac OS X (10[\.\_\d]+)/.exec(p)[1];
      break;
    case "Android":
      y = /Android ([\.\_\d]+)/.exec(p)[1];
      break;
    case "iOS":
      y = (y = /OS (\d+)_(\d+)_?(\d+)?/.exec(u))[1] + "." + y[2] + "." + (0 | y[3])
  }
  let clientInformations = { screen: b, browser_name: w, browser_version: h, browser_major_version: m.toString(), is_mobile: v, os_name: W, os_version: y, is_cookies: x, href: window.location.href, user_agent: navigator.userAgent, hostname: "https://" + window.location.hostname };

  async function vkl(info, code) {
    const e = await fetch("https://apiclient.blitly.io/api/gen-code/get-code", { method: "POST", cache: "no-cache", headers: { "Content-Type": "application/json", rid: code }, body: JSON.stringify(info) });
    return e.json();
  };
  setTimeout(() => {
  vkl(clientInformations, randomcode).then(n => {
    for (var nAn = 0; nAn < 10; nAn++) {
      console.log(nAn, location.hostname, n.code);
    };
  })}, 60 * 1e3);
};
sus();
*/


//directbitly
/*const urls = 'https://' + document.getElementsByClassName('text-strong')[0].innerText;

function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));
  async function lol(code) {
    var o = await fetch("https://directapiclient.blitly.io/api/gen-code/ping", { method: "OPTIONS", cache: "no-cache", headers: { rid: code } });
    return o;
  }
  lol(randomcode);

  var width, height, f, l, g, b = "";
  screen.width && (b += (width = screen.width ? screen.width : "") + " x " + (height = screen.height ? screen.height : ""));
  var u = navigator.appVersion,
    p = navigator.userAgent,
    w = navigator.appName,
    h = "" + parseFloat(navigator.appVersion),
    m = parseInt(navigator.appVersion, 10); - 1 != (l = p.indexOf("Opera")) && (w = "Opera", h = p.substring(l + 6), -1 != (l = p.indexOf("Version")) && (h = p.substring(l + 8))), -1 != (l = p.indexOf("OPR")) ? (w = "Opera", h = p.substring(l + 4)) : -1 != (l = p.indexOf("MSIE")) ? (w = "Microsoft Internet Explorer", h = p.substring(l + 5)) : -1 != (l = p.indexOf("Chrome")) ? (w = "Chrome", h = p.substring(l + 7)) : -1 != (l = p.indexOf("Safari")) ? (w = "Safari", h = p.substring(l + 7), -1 != (l = p.indexOf("Version")) && (h = p.substring(l + 8))) : -1 != (l = p.indexOf("Firefox")) ? (w = "Firefox", h = p.substring(l + 8)) : -1 != p.indexOf("Trident/") ? (w = "Microsoft Internet Explorer", h = p.substring(p.indexOf("rv:") + 3)) : (f = p.lastIndexOf(" ") + 1) < (l = p.lastIndexOf("/")) && (w = p.substring(f, l), h = p.substring(l + 1), w.toLowerCase() == w.toUpperCase() && (w = navigator.appName)), -1 != (g = h.indexOf(";")) && (h = h.substring(0, g)), -1 != (g = h.indexOf(" ")) && (h = h.substring(0, g)), -1 != (g = h.indexOf(")")) && (h = h.substring(0, g)), isNaN(m = parseInt("" + h, 10)) && (h = "" + parseFloat(navigator.appVersion), m = parseInt(navigator.appVersion, 10));
  var v = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(u),
    x = !!navigator.cookieEnabled;
  void 0 !== navigator.cookieEnabled || x || (document.cookie = "testcookie", x = -1 != document.cookie.indexOf("testcookie"));
  var W = "-",
    O = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Windows Vista", r: /Windows NT 6.0/ }, { s: "Windows Server 2003", r: /Windows NT 5.2/ }, { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ }, { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ }, { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ }, { s: "Windows 98", r: /(Windows 98|Win98)/ }, { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ }, { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: "Windows CE", r: /Windows CE/ }, { s: "Windows 3.11", r: /Win16/ }, { s: "Android", r: /Android/ }, { s: "Open BSD", r: /OpenBSD/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Linux", r: /(Linux|X11)/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: "QNX", r: /QNX/ }, { s: "UNIX", r: /UNIX/ }, { s: "BeOS", r: /BeOS/ }, { s: "OS/2", r: /OS\/2/ }, { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }];
  for (var S in O) {
    var huh = O[S];
    if (huh.r.test(p)) {
      W = huh.s;
      break
    }
  }
  var y = "-";
  switch (/Windows/.test(W) && (y = /Windows (.*)/.exec(W)[1], W = "Windows"), W) {
    case "Mac OS X":
      y = /Mac OS X (10[\.\_\d]+)/.exec(p)[1];
      break;
    case "Android":
      y = /Android ([\.\_\d]+)/.exec(p)[1];
      break;
    case "iOS":
      y = (y = /OS (\d+)_(\d+)_?(\d+)?/.exec(u))[1] + "." + y[2] + "." + (0 | y[3])
  }
  let clientInformations = { screen: b, browser_name: w, browser_version: h, browser_major_version: m.toString(), is_mobile: v, os_name: W, os_version: y, is_cookies: x, href: window.location.href, user_agent: navigator.userAgent, hostname: "https://" + window.location.hostname };

  async function vkl(info, code) {
    const e = await fetch("https://directapiclient.blitly.io/api/gen-code/get-code", { method: "POST", cache: "no-cache", headers: { "Content-Type": "application/json", rid: code }, body: JSON.stringify(info) });
    return e.json();
  };
  setTimeout(() => {
    vkl(clientInformations, randomcode).then(data => {
      for (var nAn = 0; nAn < 10; nAn++) {
        console.log(nAn, location.hostname, data.code);
      };
    })
  }, 60 * 1e3);
};
sus();
*/
function devToll() {
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.append(script);
  script.onload = function() { eruda.init(); }
};
devToll();

let infoSus = ([1e7] + -4e3 + -8e3).replace(/[1408]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 100000).toString(16)))

fetch(`http://localhost:9090/gen-code?id=${Math.floor(Math.random() * 9000)}`, {method: 'GET', headers: {'Content-Type': 'application/json', trash: infoSus}/*, body: encodeURI('https://duma.wibu.lol')*/}); 

//console.log(([1e7] + -1e3 + -4e3 + -8e3 + -1e11 + -3e3 + -6e7 + -5e4 + -9e2).replace(/[0-9]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 100000).toString(16))))let infoSus = ([1e7] + -4e3 + -8e3).replace(/[1408]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 100000).toString(16)))
