const numberFormat = (num) => {
	num = num + "";
	num = num.split("").reverse();
	let newNum = [];
	for (let i = 0; i < num.length; i++) {
		if (i % 3 == 0 && i != 0) {
			newNum.push(",");
		}
		newNum.push(num[i]);
	}

	return newNum.reverse().join("");
};

export { numberFormat };
