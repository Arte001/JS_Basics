const button = document.querySelector('.button');
const par = document.querySelector('.popup');

let status = 'none';

button.addEventListener('click', function(){
  if (state == 'none'){
    par.style.display = 'flex';
    state = 'flex';
  	} else {
    par.style.display = 'none';
    state = 'none';
  }
})