/*
// synurl
async function sus() {
  var dataRaw = '';
  await fetch('https://synurl.vip/synurl-script', {
    method: 'GET',
  }).then(res => res.text()).then(data => {
    dataRaw = data;
  });

  const dataMatch = JSON.parse(dataRaw.match(/\[\{\"id":.*\}\]/g)[0])[0];

  var url = `https://synurl.vip/load_traffic?&r=https://www.google.com/&w=${dataMatch.link_url}&t=60&ti=${dataMatch.id}`;

  var xhttp = new XMLHttpRequest();
  var xhttp2 = new XMLHttpRequest();
  xhttp.open('GET', 'https://synurl.vip/cd?&t=60', false);
  xhttp.send();

  setTimeout(() => {
    xhttp.open('GET', url, false);
    xhttp.send();
  }, 60000);
};

sus();
*/

/*
// ggoklink
async function sus() {
  var dataRaw = '';
  await fetch('https://ggoklink.com/synurl-script', {
    method: 'GET',
  }).then(res => res.text()).then(data => {
    dataRaw = data;
  });

  const dataMatch = JSON.parse(dataRaw.match(/\[\{\"id":.*\}\]/g)[0])[0];

  var url = `https://ggoklink.com/load_traffic?&r=https://www.google.com/&w=${dataMatch.link_url}&t=60&ti=${dataMatch.id}`;

  var xhttp = new XMLHttpRequest();
  var xhttp2 = new XMLHttpRequest();
  xhttp.open('GET', 'https://ggoklink.com/cd?&t=60', false);
  xhttp.send();

  setTimeout(() => {
    xhttp.open('GET', url, false);
    xhttp.send();
  }, 60000);
};

sus();
*/

/*
// mneylink
async function sus() {
  var dataRaw = '';
  await fetch('https://mneylink.com/synurl-script', {
    method: 'GET',
  }).then(res => res.text()).then(data => {
    dataRaw = data;
  });

  const dataMatch = JSON.parse(dataRaw.match(/\[\{\"id":.*\}\]/g)[0])[0];

  var url = `https://mneylink.com/load_traffic?&r=https://www.google.com/&w=${dataMatch.link_url}&t=60&ti=${dataMatch.id}`;

  var xhttp = new XMLHttpRequest();
  var xhttp2 = new XMLHttpRequest();
  xhttp.open('GET', 'https://mneylink.com/cd?&t=60', false);
  xhttp.send();

  setTimeout(() => {
    xhttp.open('GET', url, false);
    xhttp.send();
  }, 60000);
};

sus();
*/

/*
// menydirec
async function sus() {
  var dataRaw = '';
  await fetch('https://menydirec.com/synurl-script', {
    method: 'GET',
  }).then(res => res.text()).then(data => {
    dataRaw = data;
  });

  const dataMatch = JSON.parse(dataRaw.match(/\[\{\"id":.*\}\]/g)[0])[0];

  var url = `https://menydirec.com/load_traffic?&r=https://www.google.com/&w=${dataMatch.link_url}&t=60&ti=${dataMatch.id}`;

  var xhttp = new XMLHttpRequest();
  var xhttp2 = new XMLHttpRequest();
  xhttp.open('GET', 'https://menydirec.com/cd?&t=60', false);
  xhttp.send();

  setTimeout(() => {
    xhttp.open('GET', url, false);
    xhttp.send();
  }, 60000);
};

sus();
*/

/*
//menydirec, ggoklink, mneylink, synurl

const tagPre = document.getElementsByTagName('pre')[0];
const preJob = JSON.parse(tagPre.innerHTML.match(/\[\{\"id":.*\}\]/g)[0]);

function sus(job) {
  var xhttp = new XMLHttpRequest();
  var xhttp2 = new XMLHttpRequest();
  //var url = `https://ggoklink.com/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=60&ti=${job.id}`;
  //var url = `https://mneylink.com/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=64&ti=${job.id}`;
  //var url = `https://mneydirec.com/load_traffic?&id=${job.id}&tt=61`;

  switch (location.host) {
    case 'ggoklink.com':
      var url = `https://ggoklink.com/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=60&ti=${job.id}`;
      console.log(`var xhttp = new XMLHttpRequest();
      xhttp.open('GET', 'https://mneylink.vip/cd?&t=60', false);
      xhttp.send();

      setTimeout(() => {
        xhttp2.open('GET', '${url}', false);
        xhttp2.send();
      }, 60000)`);
      break;

    case 'mneylink.vip':
      var url = `https://mneylink.vip/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=60&ti=${job.id}`;
      console.log(`var xhttp = new XMLHttpRequest();
      xhttp.open('GET', 'https://mneylink.vip/cd?&t=60', false);
      xhttp.send();

      setTimeout(() => {
        xhttp2.open('GET', '${url}', false);
        xhttp2.send();
      }, 60000)`);
      break;

    case 'synurl.vip':
      var url = `https://synurl.vip/load_traffic?&r=https://www.google.com/&w=${job.link_url}&t=60&ti=${job.id}`;
      console.log(`var xhttp = new XMLHttpRequest();
      xhttp.open('GET', 'https://synurl.vip/cd?&t=60', false);
      xhttp.send();

      setTimeout(() => {
        xhttp2.open('GET', '${url}', false);
        xhttp2.send();
      }, 60000)`);
      break;

    case 'mneydirec.com':
      var url = `https://mneydirec.com/load_traffic?&id=${job.id}&tt=61`;
      xhttp.open('GET', url, false);
      xhttp.send();
      let lol = JSON.parse(xhttp.response);
      for (var i = 0; i < 10; i++) {
        console.log(i, job.link_url == undefined ? 'https:://' + job.keyword + '/' : job.link_url, lol.data.html);
      };
      break;

    default:
      console.log('%cError_Error_Error', 'font-size: 30px; background: -webkit-linear-gradient(45deg, hotpink 5%, purple 35%, #00ff95 99%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight:500;');
      break;
  };
};

preJob.forEach(job => {
  sus(job);
});
*/

/*
function mdirec() {
  var xhttp = new XMLHttpRequest();

  var url = 'https://mneydirec.com/load_traffic?&id=0&tt=60'

  xhttp.open('GET', url, false);
  xhttp.send();
  let lol = JSON.parse(xhttp.response);
  for (var i = 0; i < 10; i++) console.log(i, lol.data.html);
  document.getElementById('code').value = lol.data.html
  return 'Hello'
};

mdirec();
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

/*
//bitly
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

/*
//directbitly
const urls = 'https://' + document.getElementsByClassName('text-strong')[0].innerText;

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

/*
//owlytop
function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));
  async function lol(code) {
   var o = await fetch("https://apiclient.owly.top/api/gen-code/ping", {
     method: "OPTIONS",
     cache: "no-cache",
     headers: { rid: code }
   });
    return o;
  };
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
    const e = await fetch("https://apiclient.owly.top/api/gen-code/get-code", {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json", rid: code },
      body: JSON.stringify(info)
    });
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

/*
//directowlytop
function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));
  async function lol(code) {
   var o = await fetch("https://directapiclient.owly.top/api/gen-code/ping", {
     method: "OPTIONS",
     cache: "no-cache",
     headers: { rid: code }
   });
    return o;
  };
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
    const e = await fetch("https://directapiclient.owly.top/api/gen-code/get-code", {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json", rid: code },
      body: JSON.stringify(info)
    });
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

/*
//manylink
function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));
  async function lol(code) {
   var o = await fetch('https://apiclient.manylink.vip/api/gen-code/ping', { method: "OPTIONS", cache: "no-cache", headers: { rid: code } });
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
    const e = await fetch("https://apiclient.manylink.vip/api/gen-code/get-code", { method: "POST", cache: "no-cache", headers: { "Content-Type": "application/json", rid: code }, body: JSON.stringify(info) });
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

/*
// web1S
async function sus() {
  let getSrc = document.getElementsByTagName('script');
  let srcLen = getSrc.length,
    code = '',
    token = '';

  // https://web1s.com/site-u-v5.js?id=XhQVGSlNxS
  for (let i = 0; i < srcLen; i++) {
    if ((getSrc[i].src != '') && (getSrc[i].src.match(/v5\.js\?id=.{0,10}/g) != null)) {
      const sauce = getSrc[i].src;
      code = sauce.match(/v5\.js\?id=.{0,10}/g)[0].split('=')[1];
      break;
    };
  };

  await fetch('https://web1s.com/step', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `code=${code}&token=`
  }).then(res => res.json()).then(data => {
    token = data.token;
  });

  await fetch('https://web1s.com/countdown', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `code=${code}&token=${token}`
  }).then(res => res.json()).then(data => {
    const countdown = data.timer;
    setTimeout(() => {
      callResult();
    }, countdown * 1e3)
  });

  function callResult() {
    fetch('https://web1s.com/continue', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: `code=${code}&token=${token}`
    }).then(res => res.json()).then(data => {
      for (var f = 0; f < 10; f++) {
        console.log(f, data.code);
      };
    });
  };
  return 0;
};

sus();
*/

/*
//trafic123
async function sus() {
  var herf = window.location.herf,
    t, q, azauth;

  await fetch('https://traffic123.net/que?q=status,azauth,q,t,z&filter=connection')
    .then(response => response.json())
    .then(data => {
      azauth = data.azauth;
      q = data.q;
      t = data.t;
    });

  await fetch('https://traffic123.net/publisher?azauth=' + azauth + '&q=' + q + '&t=' + t + '&opa=123&z=' + btoa(herf))
    .then(response => response.json())
    .then(data => {
      var pass = data.password;
      for (var i = 0; i < 10; i++) {
         console.log(i, pass);
      }
    });
    return
};
sus();
*/

/*
//yeumoney
async function sus() {
  let URL_Ref = document.referrer;
  let URL_Org = location.href;
  let randomTime = d.getTime(),
    codeTraffic = '';
  let dataFirst = randomTime + "," + URL_Org + "," + URL_Ref + ",IOS900,hidden," + null;
  let topNutValue = document.getElementById('top_nut_vuatraffic').value;
  let leftNutValue = document.getElementById('lef_nut_vuatraffic').value;
  let prefixCode = '';

  async function fetchFirst(clk) {
    if (clk != null) {
      dataFirst = clk + "," + URL_Org + "," + URL_Ref + ",IOS900,hidden," + null;
    };

    await fetch(`https://traffic-user.net/GET_VUATRAFFIC.php?token=${dataFirst}NO&clk=${clk}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'text/plain'
      },
      body: {
        url_order: URL_Org,
        ref: URL_Ref,
        TOP_NUT: topNutValue,
        LEFT_NUT: leftNutValue,
        NO_NUT: 'NO',
      }
    }).then(res => res.text()).then((data) => {
      codeTraffic = data.match(/localStorage\.codexn\u0020\u003d\u0020\u0027[A-Z0-9]{0,10}/g)[0].split("'")[1];
    });
  };

  async function fetchSecond(clk, boo) {
    await fetch(`https://traffic-user.net/GET_MA.php?codexn=${codeTraffic}&url=${URL_Org}&loai_traffic=${URL_Ref}&clk=${clk}`, {
      method: 'POST',
      headers: {
        'Accept': 'text/plain'
      }
    }).then(res => res.text()).then((data) => {


      if (boo) {
        prefixCode = data.match(/[0-9]{6}/)[0];
        for (var o = 0; o < 10; o++) {
          console.log(o, prefixCode);
        };
      } else {
        prefixCode = data.match(/[0-9]{10}/)[0];
      }

    });
  };

  await fetchFirst(null);
  await fetchSecond(null, false);

  setTimeout(async () => {
    await fetchFirst(prefixCode);
    await fetchSecond(prefixCode, true);
  }, 10 * 1e3);
};
sus();
*/

/*
//8link
function sus() {
  const arrWord = 'qwertyuiopasdfghjklzxcvbnm'.split('');


  var randomCode = '';
  for (let i = 0; i < 6; i++) {
    randomCode += arrWord[Math.floor(Math.random * arrWord.length)]
  };

    fetch("https://8link.io/api/get-code", {
    method: "POST",
    headers: {
      "Accept": "application/json, text/plain, *//*",
"Content-Type": "application/json"
},
body: JSON.stringify({
"fingerprint": randomCode,
"has_clicked_link": null
})

});

fetch("https://8link.io/api/get-code", {
method: "POST",
headers: {
"Accept": "application/json, text/plain, *//*",
"Content-Type": "application/json"
},
body: JSON.stringify({
"fingerprint": randomCode,
"has_clicked_link": true
})

}).then(res => res.json()).then((data) => {
const code = data.code;
for (var f = 0; f < 10; f++) {
console.log(f, code);
};
})

};
sus();
*/

/*
//synurl
function sus(){
  var xhttp = new XMLHttpRequest();
  let times = 60;
  var urlGet = `https://synurl.vip/cd?&t=${times}`;
  xhttp.open("GET", urlGet, false);
  xhttp.send();
  console.log(JSON.parse(xhttp.response), 'get');
setTimeout(() => {
  var xhttp2 = new XMLHttpRequest();
  var urlLoad = `https://synurl.vip/load_traffic?&r=&w=${window.location.href}&t=${times}&ti=0`
  xhttp2.open("GET", urlLoad, false);
  xhttp2.send();
  const resData = JSON.parse(xhttp2.response);

  for (let i = 0; i < 10; i++) {
      console.log(resData.data.html, window.location.href,i);
  };
}, times*1e3);
}
sus();
*/

/*
//geturl
function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));
  async function lol(code) {
   var o = await fetch("https://public.geturl.io/api/code/ch", {
     method: "OPTIONS",
     cache: "no-cache",
     headers: { rid: code }
   });
    return o;
  };
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
    const e = await fetch("https://public.geturl.io/api/code/code", {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json", rid: code },
      body: JSON.stringify(info)
    });
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


/* 
//link4m get the session id by hand.
async function sus() {
  function generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); //use high-precision timer if available
    };

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  };

  function hexToString(stirngHex = '') {
    const hexs = stirngHex.match(/(\\x[0-9ABCDEF]{0,4})/g);

    var outputStr = '';
    for (var i = 0; i < hexs.length; ++i) {
      outputStr += String.fromCharCode(parseInt(hexs[i].split('\\x')[1], 16))
    };
    return outputStr;
  };

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  const logs = iframe.contentWindow.console;

  var getSrc = document.getElementsByTagName('script');
  var srcLen = getSrc.length;

  var trashID = '';
  var trashSrc = 'https://s1.what-on.com/';

  // https://s1.what-on.com/widget/service.js?key=HMRYKQQ
  for (var i = 0; i < srcLen; ++i) {
    const matchSource = getSrc[i].src.match(/widget\/(script|service|service\-v2|service\-v3)\.js\?key\=.{0,10}/g);
    if ((getSrc[i].src != '') && (matchSource != null)) {
      trashID = matchSource[0].split('=')[1];
      trashSrc += matchSource[0].split('=')[0] + '=' + trashID;
      break;
    };
  };

  var verHaveQuest = true;

  if (`${trashSrc}`.includes('service.js')) {
    verHaveQuest = false;
  }
  //REPLACE HERE.
  const sessionID = '6966501d5ffb2165e70bc089';
  //traffic_id
  const codeID = '\x32\x66\x33\x62\x38\x66\x35\x66\x37\x33\x38\x63\x39\x37\x31\x30\x37\x64\x31\x36\x39\x65\x34\x63\x30\x63\x62\x61\x32\x35\x62\x34';
  //traffic_key
  const keyL = '\x6D\x69\x74\x4C\x33\x47\x4B\x70';

  const TFKey = keyL || trashID;

  var idStep = '';
  const clientID = generateUUID();

  window.jscd = {
    screen: '1746 x 982',
    browser: 'Chrome',
    browserVersion: '143.0.0.0',
    browserMajorVersion: '143',
    mobile: false,
    os: 'Windows',
    osVersion: 10,
    cookies: true,
    flashVersion: 'no check',
    lang: 'en-US',
    client_id: clientID,
    pathname: window.location.pathname,
    href: window.location.href,
    hostname: window.location.hostname
  };

  async function clientCall(sID, key) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.withCredentials = true;
    xmlhttp.open("POST", "https://s1.what-on.com/widget/client.js", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.onload = function () {
      if (xmlhttp.status === 200) {
        eval(xmlhttp.responseText);
      }
    };
    var params = 'traffic_session=' + sID + '&key=' + key + '&' + jQuery.param(jscd);
    xmlhttp.send(params);
  };

  async function getIDStepOrCode(code, sID, key, quest = true, haveAStep = true,) {

    var url = `https://s1.what-on.com/widget/get${quest == true ? '_quest' : ''}_code.html?code=${code}&traffic_session=${sID}&key=${key}&${jQuery.param(jscd)}`;
    if (haveAStep) {
      url = `https://s1.what-on.com/widget/get${quest == true ? '_quest' : ''}_code.html?id=${idStep}&code=${code}&traffic_session=${sID}&key=${key}&${jQuery.param(jscd)}`;
    }

    var xmlHttp2 = new XMLHttpRequest();
    xmlHttp2.withCredentials = true;
    xmlHttp2.open('GET', url);
    xmlHttp2.onload = async () => {
      if (xmlHttp2.status === 200) {
        const data = JSON.parse(xmlHttp2.responseText);

        if (data['id']) {
          idStep = data.id;
          if (jscd['request']) {
            delete jscd['request'];
          };
          const fetchSrcCode = await fetch(trashSrc, {
            method: 'GET'
          });

          const dataSrc = await fetchSrcCode.text();

          const sessionIDFake = dataSrc.match(/(var\s[a-z0-9]{0,6}\s=\s\')(.{0,24})/g)[0].split(`'`)[1];

          setTimeout(() => {
            if (idStep != '') {
              clientCall(sessionIDFake, key);
              setTimeout(() => {
                getIDStepOrCode(code, sessionIDFake, key, verHaveQuest, true);
              }, 10000);
            };
          }, 3000);

        } else if (data['html']) {
          if (data.html.length == 6) {
            function print(data) {
              for (var o = 10; o > -1; --o) {
                logs.log(o, data);
              };
            };
            print(data);
          };
        };
      };
    };
    xmlHttp2.send();
  }

  clientCall(sessionID, TFKey);
  setTimeout(() => {
    getIDStepOrCode(codeID, sessionID, TFKey, verHaveQuest, false);
  }, 10000);

};
sus();
*/



/* 
//funlink.io
async function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));

  var o = await fetch("https://public.funlink.io/api/code/ch", {
    method: 'OPTIONS',
    cache: "no-cache",
    headers: { rid: randomcode }
  });

  const cod = v(o.headers.get('Time'));

  let clientInfo = {
    a_dmm: "'Bố bê chym địt cả lò nhà mày nhé, định bypass site của bố à' _ dev said",
    scrren: "1746 × 982",
    brower_name: "Not A(Brand",
    brower_version: "24",
    os_name: "Windows",
    os_version: "10.0",
    href: window.location.href,
    user_agent: navigator.userAgent,
    hostname: "https://" + window.location.hostname,
    code: `${cod}`,
    code_version: (((cod + 4) * 3) - 10).toString()
  };

  const contenKey = btoa(unescape(encodeURIComponent(JSON.stringify(clientInfo))));
  setTimeout(() => {

    fetch(`https://public.funlink.io/api/code/browser-challenge.js?rid=${randomcode}&t=${Date.now()}`, {
      method: "GET",
      cache: "no-cache",
    }).then(res => res.text())
      .then(async (code) => {
        new Function(code)();
        await new Promise(resolve => setTimeout(resolve, 4000));
        await fetch("https://public.funlink.io/api/code/code", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            "Content-Key": contenKey,
            rid: randomcode
          },
          body: JSON.stringify(clientInfo)
        }).then(res => res.json()).then((data) => {
          for (var nAn = 0; nAn < 10; nAn++) {
            console.log(nAn, location.hostname, data.code);
          };
        })
      })
      .catch(err => console.error("Error:", err));
  }, o.headers.get('Cd') * 1e3);
};
sus();
*/


/* 
//toplinks.io
async function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));

  var o = await fetch("https://pub.toplinks.io/dest/p", {
    method: 'GET',
    cache: "no-cache",
    headers: { Rid: randomcode }
  });

  const cod = v(o.headers.get('Time'));

  let clientInfo = {
    a_dmm: "'Bố bê chym địt cả lò nhà mày nhé, định bypass site của bố à' _ dev said",
    scrren: "1746 × 982",
    brower_name: "Chromium",
    brower_version: "143",
    os_name: "Windows",
    os_version: "10.0",
    href: window.location.href,
    user_agent: navigator.userAgent,
    hostname: "https://" + window.location.hostname,
    code: `${cod}`,
    code_version: (((cod + 4) * 3) - 10).toString()
  };

  const contenKey = btoa(unescape(encodeURIComponent(JSON.stringify(clientInfo))));

  setTimeout(() => {

    fetch(`https://pub.toplinks.io/dest/browser-challenge.js?rid=${randomcode}&t=${Date.now()}`, {
      method: "GET",
      cache: "no-cache",
    }).then(res => res.text())
      .then(async (code) => {
        new Function(code)();
        await new Promise(resolve => setTimeout(resolve, 4000));
        await fetch("https://pub.toplinks.io/dest/o", {
          method: "GET",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            "Content-Key": contenKey,
            Rid: randomcode
          }
        }).then(res => res.json()).then((data) => {
          for (var nAn = 0; nAn < 10; nAn++) {
            console.log(nAn, location.hostname, data.code);
          };
        })
      })
      .catch(err => console.error("Error:", err));
  }, o.headers.get('Cd') * 1e3);
};
sus();
 */


/* 
//dr.funlink.io
async function sus() {
  var randomcode = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)));

  var o = await fetch("https://public-dr.funlink.io/api/code/ch", {
    method: 'OPTIONS',
    cache: "no-cache",
    headers: { rid: randomcode }
  });

  const cod = v(o.headers.get('Time'));

  let clientInfo = {
    a_dmm: "'Bố bê chym địt cả lò nhà mày nhé, định bypass site của bố à' _ dev said",
    scrren: "1746 × 982",
    brower_name: "Not A(Brand",
    brower_version: "24",
    os_name: "Windows",
    os_version: "10.0",
    href: window.location.href,
    user_agent: navigator.userAgent,
    hostname: "https://" + window.location.hostname,
    code: `${cod}`,
    code_version: (((cod + 4) * 3) - 10).toString()
  };

  const contenKey = btoa(unescape(encodeURIComponent(JSON.stringify(clientInfo))));
  setTimeout(() => {

    fetch(`https://public-dr.funlink.io/api/code/browser-challenge.js?rid=${randomcode}&t=${Date.now()}`, {
      method: "GET",
      cache: "no-cache",
    }).then(res => res.text())
      .then(async (code) => {
        new Function(code)();
        await new Promise(resolve => setTimeout(resolve, 4000));
        await fetch("https://public-dr.funlink.io/api/code/code", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            "Content-Key": contenKey,
            rid: randomcode
          },
          body: JSON.stringify(clientInfo)
        }).then(res => res.json()).then((data) => {
          for (var nAn = 0; nAn < 10; nAn++) {
            console.log(nAn, location.hostname, data.code);
          };
        })
      })
      .catch(err => console.error("Error:", err));
  }, o.headers.get('Cd') * 1e3);
};
sus();
*/

/* 
//taplayma.com
async function sus() {
  function getCodeFromScripts() {
    const scripts = document.querySelectorAll('script[src*="taplayma.com"]');
    for (const s of scripts) {
      const id = new URL(s.src).searchParams.get("id");
      if (id) return id;
    }
    return null;
  }
  try {
    // step
    const res1 = await fetch("https://api.taplayma.com/step", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `code=${getCodeFromScripts()}&token=`
    });
    if (!res1.ok) throw new Error(`step failed: ${res1.status}`);
    const data = await res1.json();
    console.log(data);

    await new Promise(r => setTimeout(r, 3000));

    // countdown
    const res2 = await fetch("https://api.taplayma.com/countdown", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `code=${getCodeFromScripts()}&token=${data.token}`
    });
    if (!res2.ok) throw new Error(`countdown failed: ${res2.status}`);
    const data2 = await res2.json();
    console.log(data2);

    await new Promise(r => setTimeout(r, data2.timer * 1000));

    // continue (back to XHR)
    const dataSend = `code=${getCodeFromScripts()}&token=${data.token}`;
    const xhr3 = new XMLHttpRequest();
    xhr3.open("POST", "https://api.taplayma.com/continue", true);
    xhr3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr3.onreadystatechange = function () {
      if (xhr3.readyState === XMLHttpRequest.DONE) {
        if (xhr3.status === 200) {
          var dataCode = JSON.parse(xhr3.responseText);
          for (var i = 0; i < 10; ++i) {
            console.log(window.location.hostname, dataCode.code, i);
          }
        } else {
          console.error("Request failed:", xhr3.status);
        }
      }
    };

    xhr3.send(dataSend);

  } catch (err) {
    console.error(err);
  }
}

sus();
*/

/* 
//nhapma.com
async function sus() {
  function getCodeFromScripts() {
    const scripts = document.querySelectorAll('script[src*="nhapma.com"]');
    for (const s of scripts) {
      const id = new URL(s.src).searchParams.get("id");
      if (id) return id;
    }
    return null;
  }
  try {
    // step
    const res1 = await fetch("https://service.nhapma.com/step", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `code=${getCodeFromScripts()}&token=`
    });
    if (!res1.ok) throw new Error(`step failed: ${res1.status}`);
    const data = await res1.json();
    console.log(data);

    await new Promise(r => setTimeout(r, 3000));

    // countdown
    const res2 = await fetch("https://service.nhapma.com/countdown", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `code=${getCodeFromScripts()}&token=${data.token}`
    });
    if (!res2.ok) throw new Error(`countdown failed: ${res2.status}`);
    const data2 = await res2.json();
    console.log(data2);

    await new Promise(r => setTimeout(r, data2.timer * 1000));

    // continue (back to XHR)
    const dataSend = `code=${getCodeFromScripts()}&token=${data.token}`;
    const xhr3 = new XMLHttpRequest();
    xhr3.open("POST", "https://service.nhapma.com/continue", true);
    xhr3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr3.onreadystatechange = function () {
      if (xhr3.readyState === XMLHttpRequest.DONE) {
        if (xhr3.status === 200) {
          var dataCode = JSON.parse(xhr3.responseText);
          for (var i = 0; i < 10; ++i) {
            console.log(window.location.hostname, dataCode.code, i);
          }
        } else {
          console.error("Request failed:", xhr3.status);
        }
      }
    };

    xhr3.send(dataSend);

  } catch (err) {
    console.error(err);
  }
}

sus();
*/

/* 
//seotrieuview
async function sus(type = 2) {

  let getSrc = document.getElementsByTagName('script');
  let srcLen = getSrc.length;
  let linkSrc = 'https://seotrieuview.com/js/script/script-direct.js?v=';
  if (type == 2) {
    for (let i = 0; i < srcLen; i++) {
      if ((getSrc[i].src != '') && (getSrc[i].src.match(/\/js\/script\/script\-direct\.js\?v=[0-9]{0,20}/g) != null)) {
        const sauce = getSrc[i].src;
        linkSrc += sauce.match(/\/js\/script\/script\-direct\.js\?v=[0-9]{0,20}/g)[0].split('=')[1];
        break;
      };
    };
  } else {
    linkSrc = 'https://seotrieuview.com/js/script/script-google-search.js?v='
    for (let i = 0; i < srcLen; i++) {
      if ((getSrc[i].src != '') && (getSrc[i].src.match(/\/js\/script\/script\-gooogle\-search\.js\?v=[0-9]{0,20}/g) != null)) {
        const sauce = getSrc[i].src;
        linkSrc += sauce.match(/\/js\/script\/script\-gooogle\-search\.js\?v=[0-9]{0,20}/g)[0].split('=')[1];
        break;
      };
    };
  };

  function encodeXORBase64(input) {
    if (typeof input !== 'string') {
      input = String(input);
    };
    const encryptionKey = "seotrieuview_cookie"; // Deobfuscated key
    let xoredChars = input.split('').map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ encryptionKey.charCodeAt(i % encryptionKey.length))
    ).join('');
    return btoa(xoredChars);
  };

  function decodeXORBase64(input) {
    if (typeof input !== 'string') {
      input = String(input);
    };

    const key = 'seotrieuview_cookie';
    const decoded = atob(input).split('').map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ).join('');
    return decoded;
  };

  function getStrydClearanceCookie(trashCode = '', time) {
    // const currentTimeTrash = new Date().getTime();
    let dataToEncode = `time=${time};&paramTypeScript=direct;&referrer=${document.location.origin};&scriptSrcDocument=${trashCode}`;

    if (type == 1) {
      dataToEncode = `time=${time};&paramTypeScript=google-search;&referrer=${document.location.origin};&scriptSrcDocument=${trashCode}&type=google-search`;
    }

    let encodedValue = encodeXORBase64(dataToEncode);
    return `${encodeURIComponent(encodedValue)}`;
  };

  function getSourceCodexdCookie(codex = '', trashInput = '') {

    const trasCodex = decodeXORBase64(decodeURIComponent(trashInput));

    let encodedValue = encodeXORBase64(`${trasCodex};&codex=${codex}`);
    return `${encodeURIComponent(encodedValue)}`;
  };

  let dataSend = {
    referrer: window.location.origin,
    url: window.location.href
  };

  const currentTime = new Date().getTime();

  const cookieTrashCL = getStrydClearanceCookie(linkSrc, currentTime);

  const fetchClickEvent1 = await fetch('https://seotrieuview.com/api/tracking-page/click-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Web-Cookie': cookieTrashCL,
      'Web-Time': encodeXORBase64(currentTime),
      'Web-Traffic': type
    },
    body: JSON.stringify(dataSend),
  });

  const lol1 = await fetchClickEvent1.json();
  const countdown1 = await lol1.countdown;
  setTimeout(async () => {
    const fetchApi = await fetch('https://seotrieuview.com/api/tracking-page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Web-Cookie': cookieTrashCL,
        'Web-Time': encodeXORBase64(currentTime + 60_000),
        'Web-Traffic': type
      },
      body: JSON.stringify(dataSend),
    })
    if (!fetchApi.ok) {
      throw Error('Lỗi khi gọi API!');
    }
    const data = await fetchApi.json();

    const codex = await data.codex;
    console.log(codex);

    const currentTime2 = new Date().getTime();

    const fetchClickEvent2 = await fetch('https://seotrieuview.com/api/tracking-page/click-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Web-Cookie': getSourceCodexdCookie(codex, cookieTrashCL),
        'Web-Time': encodeXORBase64(currentTime2),
        'Web-Device': encodeXORBase64(codex),
        'Web-Info': encodeXORBase64(codex + '-source=seotrieuview'),
        'Web-Traffic': type
      },
      body: JSON.stringify(dataSend),
    });

    const lol2 = await fetchClickEvent2.json()
    const countdown2 = lol2.countdown;
    dataSend['codex'] = codex;
    setTimeout(async () => {

      const getPass = await fetch('https://seotrieuview.com/api/tracking-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Web-Cookie': getSourceCodexdCookie(codex, cookieTrashCL),
          'Web-Time': encodeXORBase64(new Date().getTime()),
          'Web-Device': encodeXORBase64(codex),
          'Web-Info': encodeXORBase64(codex + '-source=seotrieuview'),
          'Web-Traffic': type
        },
        body: JSON.stringify(dataSend),
      });
      const dataPass = await getPass.json();

      for (let i = 0; i < 10; ++i) {
        console.log(i, dataPass.password);
      }
    }, countdown2 * 1e3);
  }, countdown1 * 1e3 - 50_000 + 3000);

};
sus(1);
*/



/*
// link1m.net
function sus() {
  const domain = "link1m.net";
  fetch("https://" + domain + "/publisher?referral=" + encodeURIComponent(`${window.location.href}`))
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < 10; ++i) {
      console.log(`${i}        ${data.code_0986059161}`);
      };
    });
};
sus();
*/

/* 
function devToll() {
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.append(script);
  script.onload = function () { eruda.init(); }
  };
  
  devToll();
  */

/* 
setTimeout((function () {
  axios.post("/action/views", {
    chapter_id,
    _token: csrf_token
  }).then((function (t) {
    var e = t.data.data;
    2 === e.s && Toast.fire({
      icon: "error",
      title: `${e.p} point shop \n ${e.a} point status`
    })
  }
  ))
}
), 3e3); 
*/

let infoSus = ([1e7] + -4e3 + -8e3).replace(/[1408]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 100000).toString(16)))

fetch(`http://localhost:9090/gen-code?id=${Math.floor(Math.random() * 9000)}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    trash: infoSus
  },
  body: encodeURI('https://duma.wibu.lol')
});

//console.log(([1e7] + -1e3 + -4e3 + -8e3 + -1e11 + -3e3 + -6e7 + -5e4 + -9e2).replace(/[0-9]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 100000).toString(16))))let infoSus = ([1e7] + -4e3 + -8e3).replace(/[1408]/g, (n => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 100000).toString(16)))