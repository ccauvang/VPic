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
const regex = /warp=.*/, ip = /ip=.*/;
let status = null;

async function fet() {

  await fetch('https://www.cloudflare.com/cdn-cgi/trace').then(r => r.text()).then(text => {

    if (text.match(regex)[0] == 'warp=on') {
      lines[0].innerHTML = `YOUR IP ADDRESS HEHE I CATCH YOU ${text.match(ip)[0]} ${text.match(regex)[0]}`
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
      updateState()
    }, 5 * 1e3)
    //battery.addEventListener('chargingchange', updateState());
    //console.log(status, battery.level * 100);
  });
};
fet()

let ran = 0
const max = 1996
let fooL, fooR = 0;
const contn = document.getElementById('container');

const getFoo = JSON.parse(sessionStorage.getItem('foo'));
let songs = [];

if (getFoo == null) {
  for (let num = 0; num < max + 1; num++) {
    songs.push(num);
  }
  //let songs = [...Array(1997).keys()];
  let i = songs.length - 1;
  for (; i >= 0; i--) {
    const j = Math.trunc(Math.random() * i);
    //console.log(songs, i, j);
      [songs[i], songs[j]] = [songs[j], songs[i]];
  };
  sessionStorage.setItem('foo', JSON.stringify(songs));
  console.log('%csetLocalStorage', 'font-size: 30px; background: -webkit-linear-gradient(45deg, hotpink 5%, purple 35%, #00ff95 99%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight:700;');
};
contn.style.backgroundImage = `url(river.gif)`;


let vibeL = () => {
  status = true

  function puss() {
    fooR = 1;
    if (fooL == 1) {
      ran >= max ? ran = 0 : ran++

      fooL = 0
    };
    console.log(ran, 'L');
    contn.style.backgroundImage = `url(image/lon${getFoo == null ? ran : getFoo[ran]}.jpg)`;
    //console.log(getFoo == null ? ran : getFoo[ran]);
    ran >= max ? ran = 0 : ran++

  };

  if (status == true) {
    puss();
  }
  if (status == false && contn.style.backgroundImage.slice(5, -2) != 'river.gif') {
    contn.style.backgroundImage = `url(river.gif)`;
  }
};

let vibeR = () => {
  status = true

  function puss() {
    fooL = 1;
    if (fooR == 1) {
      ran < 1 ? ran = max : ran--
      fooR = 0
    };
    ran < 1 ? ran = max : ran--
    console.log(ran, 'R');
    contn.style.backgroundImage = `url(image/lon${getFoo == null ? ran : getFoo[ran]}.jpg)`;
    //console.log(getFoo == null ? ran : getFoo[ran]);
    //console.log(ran, 'R2');
  };

  if (status == true) {
    puss();
  }
  if (status == false && contn.style.backgroundImage.slice(5, -2) != 'river.gif') {
    contn.style.backgroundImage = `url(river.gif)`;
  }
};

//console.log(JSON.parse(localStorage.getItem('foo')));

/*caches.open("v2").then((cache) => {
  cache.add('image/lon0.jpg')
  cache.match("/image/lon0.jpg").then(res => {
     console.log(res.headers.keys);
  })
});*/
//console.log(window.caches.delete('v1'));

/*fetch("image/lon0.jpg", {cache: "force-cache"})
  .then(data => console.log(contn.style.backgroundImage = `url(${data.url})`))
  .catch(err => console.log(err));*/

//
//console.log(songs);

let dangerouExit = () => {
  window.location.href = 'http://localhost:7700/lndex.html'
}

document.cookie = ('lol abb')

$(document).ready(function() {
  $('script').remove();
});
console.timeEnd('j');
/*console._log = console.log 
console.log = function (log) { 
  return console._log(`%c ${log}`, 'font-size:0px;'); 
}*/
