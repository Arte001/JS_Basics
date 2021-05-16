let person = {
	name : "Артем",
	surname : "Мироненко",
	age : 27,
	teacher : false,
	sayHello : function() { 
		return 'Hello' + this.name;
	}
}

console.log(person.name);

person.canCode = true;

console.log(person['surname']);