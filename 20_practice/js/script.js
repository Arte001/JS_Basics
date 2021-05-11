function mathResult(num) {
	let number = num ** (Math.floor(Math.random()*(9-1)+1));
	return Math.abs(number);
}
console.log(mathResult(2))