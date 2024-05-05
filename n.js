/*function shellSort(arr) {
  var n = arr.length;
  var o = arr
  // Start with a big gap, then reduce the gap
  for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    //console.log(gap, 'gap')
    for (var i = gap; i < n; i++) {
      //console.log(i, 'i')
      // add arr[i] to the elements that have been gap sorted
      var temp = arr[i];
     // console.log(temp, i, 'temp')
      var j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
      // console.log(j, 'j');
        //console.log(arr[j - gap], 'j-gap')
        arr[j] = arr[j - gap];
        //console.log(o)
      }
      // put temp (the original arr[i]) in its correct location
      //console.log(arr[j], temp)
      arr[j] = temp;
      //console.log(o)

    }
  }
  return arr;
}; */

const mergeSortRec = (arr) => {
  //Get the length of the array
  const length = arr.length;
  
  //If reached to the bottom then return the array.
  if(length === 1){
    return arr;
  }
  
  //Get the mid of array
  const mid = Math.floor(length / 2);
  //Left sub array
  const left = arr.slice(0, mid);
  //Right sub array
  const right = arr.slice(mid, length);
  
  //Return the sorted and merged right and left sub array
  return merge(mergeSortRec(left), mergeSortRec(right));
}

const merge = (leftArr, rightArr) => {
  //To merge the both subarrays
  const result = [];
  
  let iL = 0; //To track left sub array
  let iR = 0; //To track right sub array
  
  //Compare the two sub arrays and merge them in the sorted order
  while(iL < leftArr.length && iR < rightArr.length){
    if(leftArr[iL] < rightArr[iR]){
      result.push(leftArr[iL]);
      iL++;
    }else{
      result.push(rightArr[iR]);
      iR++;
    }
  }
  
  //If there are elements in the left sub arrray then add it to the result
  while(iL < leftArr.length){
    result.push(leftArr[iL]);
    iL++;
  }
  
  //If there are elements in the right sub array then add it to the result
  while(iR < rightArr.length){
    result.push(rightArr[iR]);
    iR++;
  }
  
  return result;
};

/*function joc() {
  let arr = [];
  const size = 100000;
  for(var i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size));
  }
  return arr
}; 

const jov = joc();
console.log(jov)

console.time('shellSort')
shellSort(jov);
//joc().sort(function (a, b) { return a - b })
//mergeSortRec(joc())
console.timeEnd('shellSort');

console.time('mergeSort')
mergeSortRec(jov);
console.timeEnd('mergeSort');

console.time('Sort')
joc().sort(function (a, b) { return a - b })
console.timeEnd('Sort');*/
/*const root = 1e6
const n = root
var I = ''
for (var i = 0; i < n; i++) {
  i == 0 ? I += Math.floor(Math.random() * root) : I += (' ' + Math.floor(Math.random() * root))
}
const x = 100//Math.trunc(Math.random() * root);
//console.log(`( ${I} )`, 'X:', x, 'n', n)

//const n = 13
//const I = '4 8 5 8 10 12 6 6 11 0 8 8 0'
//const x = 12

function wee2(n, I, x) {
  I = I.split(' ');
  var a = -1,
    b = -1;
  for (var i = 0; i < n; i++) {
    if (I[i] >= x) {
      a = i + 1
      break
    }
  };

  if (a == -1) return `${a} ${n}`
  for (var j = n - 1; j > 0; j--) {
    if (I[j] < x) {
      b = j + 1
      break
    }
  };

  return `${a} ${b}`
};

console.time('find');
console.log(wee2(n, I, x))
console.timeEnd('find');

function wee1(n, I, x) {
  I = I.split(' ');
  var a = -1,
    b = -1;
  for (var i = n - 1; i > -1; i--) {
    if (I[i] >= x) {
      a = 1 + i;
    }
    if (I[i] < x && b == -1) {
        b = 1 + i;
    };
  }
  return `${a} ${b}`
};

console.time('find1');
//console.log(wee1(n, I, x))
console.timeEnd('find1');

function wee(n, I, x) {
  I = I.split(' ');
  var a = -1,
    b = -1;
  for (var i = n - 1; i > -1; i--) {
    if (I[i] >= x) {
      a = i + 1

    }
    if (I[i] < x && b == -1) {
      b = i + 1
    };
  }
  return `${a} ${b}`
};

console.time('find2');
console.log(wee(n, I, x))
console.timeEnd('find2');*/
function shellSort(arr) {
  var n = arr.length;
  var o = arr
  // Start with a big gap, then reduce the gap
  for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    //console.log(gap, 'gap')
    for (var i = gap; i < n; i++) {
      //console.log(i, 'i')
      // add arr[i] to the elements that have been gap sorted
      var temp = arr[i];
      // console.log(temp, i, 'temp')
      var j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        // console.log(j, 'j');
        //console.log(arr[j - gap], 'j-gap')
        arr[j] = arr[j - gap];
        //console.log(o)
      }
      // put temp (the original arr[i]) in its correct location
      //console.log(arr[j], temp)
      arr[j] = temp;
      //console.log(o)

    }
  }
  return arr;
};

function findMaxHeat(n, Arr) {
  var heatBridSort = shellSort(Arr)
  var heatBrid = []
  var x = true,
    y = n - 1,
    t = 0;
    
  for (var i = n - 1; i > -1; i--) {
    if (heatBrid.length >= n) {
      break
    } else {
      heatBrid.push(heatBridSort[i]);
      t += heatBridSort[i];
    };

    if (heatBrid.length >= n) {
      break
    } else {
      heatBrid.push(heatBridSort[y - i]);
      t += heatBridSort[y - i];
    };
  };
  
  for (var c = 0; c < n; c++) {
    if (heatBrid[c + 1] != undefined) {
      t += Math.max(0, heatBrid[c] - heatBrid[c + 1])
    };
  };
  console.log(t)
}

function finfMaxHeat2(n, Arr) {
  //var heatBridSort = Arr.sort((a,b) => a - b);
  var heatBridSort = shellSort(Arr);
  //var heatBridSort = mergeSortRec(Arr)
  var y = n - 1,
    t = 0,
    z = 0;
  heatBridSort.map(x => z += x);
  for (var i = n - 1; i > -1; i--) {
    if (t >= n) {
      break
    } else {
      z += Math.max(0, heatBridSort[i] - heatBridSort[y - i])
      t += 2;
    };
  };
  console.log(z);
};

const lol = [5, 4, 1, 7, 3]
var n = lol.length

var lo = [];
var s = 1e6//Math.trunc(Math.random() * 1e5)
for (var o = s-1; o > -1; o--) {
  lo.push(Math.trunc(Math.random() * 1e4))
}
//console.time('find');
//findMaxHeat(s, lo);
//console.timeEnd('find');

var datax = `cursor-pointer">
  286478</span>`
    var code = datax.match(/cursor\-pointer\u0022\u003e\u00a\u0020\u0020[0-9]{0,6}/g); 
console.log(code)

const str = '1234567890';
const strSlice = str.slice(-6);
console.log(strSlice)