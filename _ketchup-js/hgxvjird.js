const styleStetting = {
  colorListOld: '#6C76DD',
  colorListNew: '#061402',
  widthBlockInfoOld: '80px',
  widthBlockInfoNew: '100%',
  heightBlockInfoOld: '80px',
  heightBlockInfoNew: '70vh'
};

let bloc = document.getElementsByClassName('bloc');
bloc[0].style.background = styleStetting.colorListNew;
bloc[0].style.height = styleStetting.heightBlockInfoNew;
bloc[0].style.width = styleStetting.widthBlockInfoNew;
let idHistory = 0;
let rule = true;

for (let i = 0; i < 10; i++) {
  let abb = document.getElementById(`${i}`);
  abb.setAttribute('onclick', `subm(${i})`);
}

let subm = (id) => {
  if (id != idHistory) {
    bloc[id].style.background = styleStetting.colorListNew;
    bloc[id].style.height = styleStetting.heightBlockInfoNew;
    bloc[id].style.width = styleStetting.widthBlockInfoNew;
    bloc[idHistory].style.background = styleStetting.colorListOld;
    bloc[idHistory].style.height = styleStetting.heightBlockInfoOld;
    bloc[idHistory].style.width = styleStetting.widthBlockInfoOld;
    idHistory = id
  }
  for (let rem = 0; rem < 10; rem++) {
    if (rem != id) {
      bloc[rem].style.background = '#6C76DD';
    }
  };
};

let text = document.getElementById('text-test');
text.innerText = 'HYPERTENSION';
text.dataset.test = 'HYPERTENSION';

/*let deg = 0;
let joi = setInterval(() => {
  if (deg > 359) deg = 0
  deg += 1
  text.style.filter = `hue-rotate(${deg}deg)`
}, 10)*/

const letterArr = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890'.split('');
const lterLength = letterArr.length;



text.addEventListener('click', function e() {
  let pointer = 0;

  let interviral = setInterval(() => {
    if (pointer > text.innerText.length) clearInterval(interviral);

    var hello = text.innerText.split('').map((t, index) => {
      if (index < pointer) return text.dataset.test[index]
      return letterArr[Math.floor(Math.random() * lterLength)]

    }).join('');

    text.innerText = hello;
    pointer += 1 / 2
  }, 30);

})
/*

const N = 13
const i = '4 8 5 8 10 12 6 6 11 0 8 8 0'
const X = 12

function wee(n, I, x) {
  I = I.split(' ');
  console.log(I.indexOf('8'))
  var a = -1, b = -1;
  for (var i = 0; i < n; i++) {
  if (I[i] >= x) {
      a = I.indexOf(I[i]) + 1
      break
    }
  };
  
  if (a == -1)   return `${a} ${n}`
  for (var j = n - 1; j > 0; j--) {
    if (I[j] < x) {
      b = I.indexOf(I[j]) + 1
      break
    }
  };

  return `${a} ${b}`
}

function wee(n, I, x) {
  I = I.split(' ');
  var a = -1, b = -1;
  for(var i = n -1; i > -1; i--) {
    console.log(i)
    if (I[i] >= x) {
      a = 1+i
    } else if((I[i] < x) && (b == -1)){
      b = 1+i
    };
  }
  return `${a} ${b}`
};

console.time('find');
console.log(wee(N, i, X))
console.timeEnd('find');
*/
/*function processData(input) {
  function fib2(input) {
    if (input == 0)
      return [0n, 1n];
    else {
      const [a, b] = fib2(Math.floor(input / 2));
      const c = a * (b * BigInt(2) - a);
      const d = a * a + b * b;
      if (input % 2 == 0)
        return [c, d];
      else
        return [d, c + d];
    }
  };
     // console.log(Number(`${fib2(input)[0] % 1000000007n}`.split('n')[0]))
     console.log(fib2(input)[0] % 1000000007n)
};*/


function majorNum(input) {
  const inpLength = input.length
  const funObj = {};
  for (var i = 0; i < inpLength; i++) {
    //console.log(i)
    !funObj[input[i]] ? funObj[input[i]] = 1 : funObj[input[i]]++;

    if (funObj[input[i]] > (inpLength / 2)) return input[i]
    /*if (!funObj[i]) {
      funObj[]
    } else {
      
    }*/
  }
};



function majorNum2(input) {
  const inpLength = input.length;
  const inpLengthDiv = inpLength / 2;
  var count = 0;
  var relu;

  for (var i = inpLength - 1; i > -1; i--) {
    if (!count) {
      relu = input[i];
      if (input[i - 1] != relu && input[i - 2] == relu) i -= 2;
    };

    //if (inpLengthDiv == count) return relu;

    if (input[i] == relu) {
      count++
    } else {
      count--
    }
    //console.log(i)
  }
  return relu
};

let a = Array(3e7 + 1),
  counts = 0
for (var z = a.length - 1; z > -1; z--) {
  if ((z % 2) == 0) {
    a[z] = 2;

  } else {
    a[z] = 3;
  }
};

console.time('time')
console.log(majorNum2(a.fill(2,0,500)))
console.timeEnd('time')


/*  console.time('time2')
console.log(fib(4))f
console.timeEnd('time2') */

