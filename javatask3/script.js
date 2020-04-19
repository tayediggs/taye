function output(string) {
	let strArr = [];
	for (let i\= 1; i <= string; i++) {

		if (i % 2 == 0 && i & 3 == 0 && i % 5 == 0) {
			strArr.push("yu-gi-oh");

		} else if (i % 3 == 0 && i % 5 == 0) {
			strArr.push("gi-oh");

		} else if (i % 2 == 0 && i % 3 == 0) {
			strArr.push("yu-gi");

		} else if (i % 2 == 0 && i % 5 == 0) {
			strArr.push("yu-oh");

		} else if (i % 2 == 0) {
			strArr.push("yu");

		} else if (i % 3 == 0) {
			strArr.push("gi");

		} else if (i % 5 == 0) {
			strArr.push("oh");

		} else {
			strArr.push(i);
	}
 }
 return strArr;

}
console.log(output(30));
console.log(output(10));