const div = document.querySelector('div');

for(let i = 0; i<100000; i++) {
	if (i % 6 == 0) {
		const newValue = document.body.innerHTML + ' ' + i;
			document.body.innerHTML = newValue;
	}
}