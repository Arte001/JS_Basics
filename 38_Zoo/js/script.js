class Tiger {
	constructor(name) {
		this.name = name;
	}
	feedCat() {
		return 'Purrrrrr '+this.name;
	}
}

class angryTiger extends Tiger {
	throwDart() {
		return 'ZzZzzZzZz '+this.name;
	}
}

const Rocky = new Tiger('Rocky')
console.log(Rocky)
console.log(Rocky.feedCat())

const Jonny = new angryTiger ('Jonny')
console.log(Jonny.throwDart());