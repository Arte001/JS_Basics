const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const icon = document.querySelector('.closePopup');

button.addEventListener('click', function(){
	popup.style.display = 'flex';
})

icon.addEventListener('click', function(){
	popup.style.display = 'none';
})
const burger = document.querySelector('.openMenu');
const close = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

close.addEventListener('click', function(){
	menu.style.left = '-50vw';
})
burger.addEventListener('click', function(){
	menu.style.left = 0;
})
