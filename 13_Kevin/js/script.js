let totalCash = parseInt(prompt('how much you got?'));
let watchesCount = parseInt(prompt ('how much watches you want?'));
let earringsCount = parseInt(prompt ('how much earrings you want?'));
let watchesSum = (parseInt(prompt('how much watches costs?')) * watchesCount);
let earringsSum = (parseInt(prompt('how much earrings costs?')) * earringsCount);
//let result = totalCash >= (watchesSum + earringsSum);//
/*document.write(result)*/

/*function haveEnough() {
	return 'result'
}
console.log(haveEnough());*/
const haveEnough = function (totalCash, watchesSum, earringsSum, watchesCount, earringsCount) {
	totalPrice = watchesSum + earringsSum;
	if (totalCash >= totalPrice) {	
		return 'Enough $$$';
	}
	else {
		return 'Not enough $$$';
	}
}
document.body.innerHTML = haveEnough(totalCash, watchesSum, earringsSum, watchesCount, earringsCount);

