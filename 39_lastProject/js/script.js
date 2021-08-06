class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return this.happiness = this.happiness + 1;
	}
	hasRest() {
		return this.happiness = this.happiness + 1;
	}
	hasMoney() {
		return this.happiness = this.happiness + 1;
	}
	isSunny() {
		const APIKey = 'ed41bdd2f66cf5d745c3e52938a48f99';
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid='+APIKey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		let celsium = (DATA.main.temp - 273.15);
			
		if(xhr.status != 200){
   			 console.log(xhr.status + ' ' + xhr.statusText);
		}else if(celsium > 15){
			return this.happiness = this.happiness + 1;
		}else{
			return this.happiness;
		}

	}
}



const form = document.forms[0];
console.log(form);
form.addEventListener('submit', function (e){
	e.preventDefault();

	let name2 = document.forms[0].name.value;

	let person = new Person(name2);
	console.log(person);
	let cat = document.forms[0].cat.value;
	console.log(cat);
	let rest = document.forms[0].rest.value;
	console.log(rest);
	let money = document.forms[0].money.value;
	console.log(money);

	const insertName = document.querySelector('.personName');
	const insertIcon = document.querySelector('.icon');

	if(cat =='yes'){
		person.hasCat();
	}else{
		console.log();
	}

	if(rest == 'yes'){
		person.hasRest();
	}else{
		console.log();
	}

	if(money == 'yes'){
		person.hasMoney();
	}else{
		console.log();
	}

	person.isSunny();

	insertName.innerHTML = name2 + ':';

	if (person.happiness == 4){
		insertIcon.innerHTML = '😁';
	}else if(person.happiness >=2){
		insertIcon.innerHTML = '😐';
	}else{
		insertIcon.innerHTML = '☹️';
	}
})
