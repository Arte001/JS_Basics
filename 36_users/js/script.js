let Users = {
	hasAccessToProfile: true,
	approved: true,
	sayHi: function() {return 'Привет'}
}

function User(name, email, password) {
	// конструктор 
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
}

const Fedya = new User('Федя', 'fedya@example.com', 'qwerty');
console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password) {
	// конструктор 
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
	this.sayHi = function() {return 'Привет, '+this.name+'! Ты зарегистрирована'}
}

const Alla = new FUser('Alla', 'allla@example.com', 'qwerty');
console.log(Alla);
console.log(Alla.sayHii());