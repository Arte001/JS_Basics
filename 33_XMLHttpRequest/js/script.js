const APIKey = 'ed41bdd2f66cf5d745c3e52938a48f99';

const city = 'Miami';

const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();
if(xhr.status !=200) {
	console.log(xhr.status + ' ' + xhr.statusText);
} else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
}
