//console.log(fetching)

/*function work(time, column, hist) {

  for (let i = 0; i < condi; i++) {
    function gen() {
      rand = Math.floor(Math.random() * wordlength);
      rand2 = Math.floor(Math.random() * 19);
     let word = words[rand];
      lines[rand2].innerHTML = hist + ' ' + word;
      hist += ' ' + word;
      if (i == 39) {
        //hist = '';
        i = 0
        i++
      }
      console.log(i)
    }
    setTimeout(gen, i * time);
  }

}
work(100, 3, '');*/
//Object.keys(lines).forEach(lol => {
/*setInterval(() => {
  work(100, 3, '');
}, 10000);*/
//});
/*

//https://api.bigdatacloud.net/data/reverse-geocode-client
//https://qrtag.net/api/qr_4.png?url=https://www.qrtag.net

/*fetch(`https://api.github.com/users/tobycm`)
.then(req => req.json()).then(data => {
  document.getElementById('container').style.backgroundImage = `url(${data.avatar_url})`;
  console.log(data.avatar_url);
})*/
//document.getElementById('blog-btnL').innerHTML = ' ';
//document.getElementById('blog-btnR').innerHTML = ' ';
console.time('j');

const lines = document.getElementsByClassName('lines');
const warpRegex = /warp=.*/,
      ipRegex = /ip=.*/;
let status = null;

async function fet() {

  await fetch('https://www.cloudflare.com/cdn-cgi/trace').then(r => r.text()).then(text => {
    const resIp = text.match(ipRegex)[0];
    const resWarp = text.match(warpRegex)[0];
    if (resWarp == 'warp=on') {
      lines[0].innerHTML = `YOUR IP ADDRESS ${resIp} ${resWarp}`
      //lines[0].onclick = function() {puss()};
      status = true;
    } else {
      lines[0].innerHTML = `internet=on`
      //lines[0].onclick = function() {org()};
      status = false;
    }

  });

  navigator.getBattery().then(battery => {
    function updateState() {
      const charg = battery.charging;
      if (charg) {
        document.getElementById('light').style.fill = 'green';
        console.log(1);
        status = true
      } else {
        console.log(2);
        document.getElementById('light').style.fill = 'red';
        status = false
      }
    }
    updateState();
    setInterval(() => {
      updateState();
    }, 5 * 1e3);
    //battery.addEventListener('chargingchange', updateState());
    //console.log(status, battery.level * 100);
  });
};
fet()

let ran = 0;
const max = 15;
let fooL, fooR = 0;
const contn = document.getElementById('container');
console.time('l');

const getFoo = JSON.parse(sessionStorage.getItem('foo'));

//const getFoo = JSON.parse(localStorage.getItem('foo'));
let songs = [];

if (getFoo == null) {
  for (let num = 0; num < max + 1; num++) {
    songs.push(num);
  };

  //let songs = [...Array(1997).keys()];
  let i = songs.length - 1;
  for (; i >= 0; i--) {
    const j = Math.trunc(Math.random() * i);
    [songs[i], songs[j]] = [songs[j], songs[i]];
  };
  //localStorage.setItem('foo', JSON.stringify(songs));
  sessionStorage.setItem('foo', JSON.stringify(songs));
  //console.log('%csetLocalStorage', 'font-size: 30px; background: -webkit-linear-gradient(45deg, hotpink 5%, purple 35%, #00ff95 99%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight:500;');
};
console.timeEnd('l');

function setImage(value) {
  contn.style.backgroundImage = `url(image/pic${getFoo == null ? songs[value] : getFoo[value]}.png)`;
  //document.querySelector('title').textContent = `${getFoo[value]}`;
};

const rerollImage = (side) => {

  if (side == 'L') {
    //console.log(side);
    status = true;

    if (status == true) {
      fooR = 1;
      if (fooL == 1) {
        ran >= max ? ran = 0 : ran++
        fooL = 0
      };
      console.log(ran, 'L');
      setImage(ran);
      ran >= max ? ran = 0 : ran++
    }
    if (status == false && contn.style.backgroundImage.slice(8, -2) != 'river.png') {
      contn.style.backgroundImage = `url(river.png)`;
    };
  } else {
    //console.log(side);
    status = true;

    if (status == true) {
      fooL = 1;
      if (fooR == 1) {
        ran < 1 ? ran = max : ran--
        fooR = 0
      };
      ran < 1 ? ran = max : ran--
      console.log(ran, 'R');
      setImage(ran);
    }
    if (status == false && contn.style.backgroundImage.slice(8, -2) != 'river.png') {
      contn.style.backgroundImage = `url(river.png)`;
    }
  };
};

const getInputNun = document.getElementsByClassName('int')[0];

let subm = () => {
  if (getInputNun.value != '' && !isNaN(getInputNun.value) && (getInputNun.value < max +1) && (getInputNun.value > -1)) {
    setImage(getInputNun.value);
    ran = getInputNun.value
    getInputNun.value = '';
  } else {
    //rerollImage('R');
    getInputNun.value = '';
    getInputNun.setCustomValidity("Hello");
  }
}; 

//console.log(JSON.parse(localStorage.getItem('foo')));

/*caches.open("v2").then((cache) => {
  cache.add('image/pic0.jpg')
  cache.match("/image/pic0.jpg").then(res => {
     console.log(res.headers.keys);
  })
});*/
//console.log(window.caches.delete('v1'));

/*fetch("image/pic0.jpg", {cache: "force-cache"})
  .then(data => console.log(contn.style.backgroundImage = `url(${data.url})`))
  .catch(err => console.log(err));*/

//
//console.log(songs);

let dangerouExit = (n) => {
  if (contn.style.backgroundImage.slice(8, -2) != 'river.png') {
    console.log(contn.style.backgroundImage.slice(8, -2));
      contn.style.backgroundImage = `url(../river.png)`;
      //contn.style.filter = 'brightness(0)'
      console.log(n);
  };
  //window.location.href = 'http://localhost:7700/lndex.html'
};

//document.cookie = ('lol abb')

$(document).ready(function() {
  $('script').remove();
});

console.timeEnd('j');
/*console._log = console.log 
console.log = function (log) { 
  return console._log(`%c ${log}`, 'font-size:0px;'); 
}*/