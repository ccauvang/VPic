/*function erud() { 
  var script = document.createElement('script'); 
  script.src="https://cdn.jsdelivr.net/npm/eruda"; 
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
  };
};
erud();*/

//console.log(fetching)

/*function work(time, column, hist) {

  for (let i = 0; i < condi; i++) {
    function gen() {
      rand = Math.floor(Math.random() * wordlength);
      rand2 = Math.floor(Math.random() * 19);
     let word = words[rand];
      internetStatus[rand2].innerHTML = hist + ' ' + word;
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
//Object.keys(internetStatus).forEach(lol => {
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

const internetStatus = document.getElementsByClassName('internetStatus');
const warpRegex = /warp=.*/,
  ipRegex = /ip=.*/;
let status = null;

async function fet() {

  await fetch('https://www.cloudflare.com/cdn-cgi/trace').then(r => r.text()).then(text => {
    const resIp = text.match(ipRegex)[0];
    const resWarp = text.match(warpRegex)[0];
    if (resWarp == 'warp=on') {
      internetStatus[0].innerHTML = `YOUR IP ADDRESS ${resIp} ${resWarp}`
      //internetStatus[0].onclick = function() {puss()};
      status = true;
    } else {
      internetStatus[0].innerHTML = `internet=on`
      //internetStatus[0].onclick = function() {org()};
      status = false;
    }

  });

  navigator.getBattery().then(battery => {
    function updateState() {
      const charg = battery.charging;
      if (charg) {
        document.getElementById('light').style.fill = 'green';
        //console.log(1);
        status = true
      } else {
        //console.log(2);
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

let currentImage = 0;
const maxImage = 15;
const minImage = 0;
let sideLeft, sideRight;
const container = document.getElementById('container');
const currentImgDiv = document.getElementsByClassName('currentImage')
//console.time('l');

let imageQueue = [];


if (localStorage.getItem('imageStorage') == null) {
  for (var num = maxImage; num >= 0; num--) {
    imageQueue.unshift(num);
  };
  //console.log(imageQueue);
  //let imageQueue = [...Array(1997).keys()];
  let i = imageQueue.length - 1;
  for (; i >= 0; i--) {
    const j = Math.trunc(Math.random() * i);
    [imageQueue[i], imageQueue[j]] = [imageQueue[j], imageQueue[i]];
  };
  localStorage.setItem('imageStorage', JSON.stringify(imageQueue));
  //sessionStorage.setItem('imageStorage', JSON.stringify(imageQueue));
  //console.log('%csetLocalStorage', 'font-size: 30px; background: -webkit-linear-gradient(45deg, hotpink 5%, purple 35%, #00ff95 99%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight:500;');
};

// imageQueue = JSON.parse(sessionStorage.getItem('imageStorage'));

imageQueue = JSON.parse(localStorage.getItem('imageStorage'));

//console.timeEnd('l');

function setImage(value) {
  currentImgDiv[0].innerHTML = currentImage;

  container.style.backgroundImage = `url(_image/pic${imageQueue == null ? 0 : imageQueue[value]}.png)`;
  //document.querySelector('title').textContent = `${imageQueue[value]}`;
};

const rerollImage = (side) => {

  if (status == false && container.style.backgroundImage.slice(5, -2) != 'river.png') {
    currentImgDiv[0].innerHTML = 'defaul';
    container.style.backgroundImage = `url(river.png)`;
  }

  if (side == 'R') {
    //console.log(side);
    status = true;

    if (status == true) {
      sideLeft = true;

      if (sideRight == true) {
        currentImage >= maxImage ? currentImage = 0 : currentImage++
        sideRight = false
      };

      console.log(currentImage, 'R');
      setImage(currentImage);
      currentImage >= maxImage ? currentImage = 0 : currentImage++
    };

  } else {
    //console.log(side);
    status = true;

    if (status == true) {
      sideRight = true;

      if (sideLeft == true) {
        currentImage <= 0 ? currentImage = maxImage : currentImage--
        sideLeft = false
      };

      currentImage <= 0 ? currentImage = maxImage : currentImage--
      console.log(currentImage, 'L');
      setImage(currentImage);
    };
  };
};

const getInputNum = document.getElementsByClassName('int')[0];

getInputNum.addEventListener('input', () => {
  if (!getInputNum.checkValidity()) {
    getInputNum.value = '';
  };
});

let subm = () => {
  if (getInputNum.value != '' && !isNaN(getInputNum.value) && (getInputNum.value <= maxImage) && (getInputNum.value >= 0)) {
    console.log(currentImage, 'subMit');

    if (Number(getInputNum.value) == maxImage) {
      sideRight = true;
    };
    
    if (Number(getInputNum.value) == minImage) {
      sideLeft == true ? sideLeft = false : null;
    };
    
    currentImage = Number(getInputNum.value);

    setImage(currentImage);
    //setImage(Math.trunc(Number(getInputNum.value)));
    getInputNum.value = '';
  } else {
    //rerollImage('R');
    getInputNum.value = '';
  };
};

//console.log(JSON.parse(localStorage.getItem('imageStorage')));

/*caches.open("v2").then((cache) => {
  cache.add('image/pic0.jpg')
  cache.match("/image/pic0.jpg").then(res => {
     console.log(res.headers.keys);
  })
});*/
//console.log(window.caches.delete('v1'));

/*fetch("image/pic0.jpg", {cache: "force-cache"})
  .then(data => console.log(container.style.backgroundImage = `url(${data.url})`))
  .catch(err => console.log(err));*/

//
//console.log(imageQueue);

let dangerouExit = (n) => {
  if (container.style.backgroundImage.slice(5, -2) != 'river.png') {
    console.log(container.style.backgroundImage.slice(12, -2));
    container.style.backgroundImage = `url(river.png)`;
    //container.style.filter = 'brightness(0)'
    console.log(n);
  };
  //window.location.href = 'http://localhost:7700/lndex.html'
};

//document.cookie = ()

$(document).ready(function() {
  $('script').remove();
});

console.timeEnd('j');


/*console._log = console.log
console.log = function (log) { 
  return console._log(`%c${log}`, 'font-size:0px;');
}*/

/*function init() {
  const windows = window.open(`https://${window.location.hostname}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  var pollTimer = window.setInterval(function() {
    if (windows.closed !== false) { // !== is required for compatibility with Opera
        window.clearInterval(pollTimer);
        init()
    }
}, 200);

}

init()*/
/*setInterval(() => {
fetch('').then(res => res.text()).then(data => {
  document.body.innerHTML = data;
}).catch(err => console.log(err)) }, 5000);*/

/*function durationCountFormat(inputTimeSecond) {
  if (typeof inputTimeSecond != 'number') throw Error('input allowed only number');
  let timeRaw = [];
  const timeYears = Math.floor(inputTimeSecond / 31536e3);
  if (timeYears != Infinity) {
  const timeDays = Math.floor((inputTimeSecond % 31536e3) / 86400);
  const timeHours = Math.floor(((inputTimeSecond % 31536e3) % 86400) / 3600);
  const timeMinutes = Math.floor((((inputTimeSecond % 31536e3) % 86400) % 3600) / 60);
  const timeSeconds = Math.floor((((inputTimeSecond % 31536e3) % 86400) % 3600) % 60);

   timeRaw = [
          [timeYears, 'năm'],
          [timeDays, 'ngày'],
          [timeHours, 'giờ'],
          [timeMinutes, 'phút'],
          [timeSeconds, 'giây'],
        ];
} else {
   timeRaw = [['Infinity WTF ARE YOU OK?', '']];
}

  let outputTimeFormat = '';

  timeRaw.forEach(timePice => {
    if (timePice[0] != 0) {
      outputTimeFormat += ' ' + timePice[0] + ' ' + timePice[1];
    };
  });
  return outputTimeFormat.trim();
};

console.log(durationCountFormat(301));*/
