class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return this.happiness + 1;
	}
	hasRest() {
		return this.happiness + 1;
	}
	hasMoney() {
		return this.happiness + 1;
	}
	isSunny() {
		if(celsium > 15){
			this.happiness + 1;
			return this.happiness;
		}else{
			return this.happiness;
		}

	}
}

const APIKey = 'ed41bdd2f66cf5d745c3e52938a48f99';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid='+APIKey;
let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
let DATA = JSON.parse(xhr.responseText);
console.log(DATA);
let celsium = (DATA.main.temp - 273.15);

const form = document.forms;
console.log(form);
form.addEventListener('submit', function (e){
	e.preventDefault();

	let name2 = document.forms[0].name.value;

	let person = new Person(name2);
	let cat = document.forms[0].cat.value;
	let rest = document.forms[0].rest.value;
	let money = document.forms[0].money.value;

	const insertName = document.querySelector('.personName');

	if(cat = yes){
		hasCat();
	}else{
		console.log();
	}
	if(rest = yes){
		hasRest();
	}else{
		console.log();
	}
	if(money = yes){
		hasMoney();
	}else{
		console.log();


	}
})
