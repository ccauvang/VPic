let int = document.getElementsByClassName('int')[0];

let subm = () => {
  if (int.value.toLowerCase()  == 1) {
    console.log('sub');
    int.value = '';
  } else {
    console.log('siuuuuuuu');
    int.value = '';
    int.setCustomValidity("You gotta fill this out, yo!");
  }
};

