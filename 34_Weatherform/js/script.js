const form = document.forms[0];

form.addEventListener('submit', function (e) {

	e.preventDefault();

	let city = document.forms[0].elements.weather.value;

	const APIKey = 'ed41bdd2f66cf5d745c3e52938a48f99';

	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();
	
	let DATA = JSON.parse(xhr.responseText);

	console.log(DATA);

	const insert = document.querySelector('.total');

	if(xhr.status != 200){
   	 console.log(xhr.status + ' ' + xhr.statusText);
	}else{
    	insert.innerHTML = ' ' + (DATA.main.temp - 273,5);
	}
})
