class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Hello '+this.name;
	}
}

class Female extends User {
	sayHi() {
		return 'Привет, '+this.name+'! ты зарегистрирована';
	}
}

const Man = new User('someone', '123@test.ru', '123456')
console.log(Man)

const Anya = new Female('Anya', '123@test.ru', '123456')
console.log(Anya)