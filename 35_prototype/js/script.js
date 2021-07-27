let animal = {
	canEat: true,
	hasParens: true,
}


let Cow = {
	givesMilk: true,
	__proto__: animal,
}

console.log(Cow.givesMilk);
console.log(Cow.canEat);

for(key in Cow) {
	console.log(key)
}