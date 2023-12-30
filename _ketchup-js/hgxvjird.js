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
  /*for (let rem = 0; rem < 10; rem++){
    if (rem != id) {
      bloc[rem].style.background = '##6C76DD';
    }
  };*/
};