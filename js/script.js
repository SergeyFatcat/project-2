function a() {
	let userNumber = +prompt("Введите число");
	if (isNaN(userNumber)) {
		alert("Упс, кажется Вы ошиблись");
	} else if (userNumber % 2 === 0) {
		alert("Число четное");
	} else {
		alert("Число нечетное");
	}
};


function b() {
	let userData;
	switch (typeof userData) {
		case 'number':
			alert("Вы ввели число");
			break;
		case 'string':
			alert("Вы ввели строку");
			break;
		case 'boolean':
			alert("Вы ввели булево значение");
			break;
		default:
			alert("Данные не определены" + " " + typeof userData);
	}
}

function c() {
	let str;
	let strToArr = str.split("");
	let strToArrRev = strToArr.reverse();
	let strRev = strToArrRev.join("");
	console.log(strRev)
}

function d() {
	let num = Math.random();
	let num100 = num * 100;
	ranNam = Math.floor(num100);
	console.log(ranNam);
}


function e() {
	let arr;
	arr = [1, "a", 2, "b", 3, "c"];
	console.log("Длина массива " + arr.length);
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function f() {
	let arr;
	let result
	arr = [1, "a", 2, "b", 3, "c"];
	sortArr = arr.sort();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			result = "Yes";
			return result;
		} else {
			result = "No";
			return result;
		}
	}
}

function g() {
	let arr = [0, 0, 0, 1, 3, 5, 7, 2, 4, 6, 8, 10];
	let n0 = 0;
	let n1 = 0;
	let n2 = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			n0++
		} else if (arr[i] % 2 === 1) {
			n1++
		} else if (arr[i] !== 0 && arr[i] % 2 === 0) {
			n2++
		}
	}
	console.log(`Четных элементов ${n2}, нечетных элементов ${n1}, нулей ${n0}`)
}

function i() {
	let map;
	map = new Map([

		["apple", "green"],

		["strawberry", "red"],

		["blueberry", "blue"]

	]);
	for (let k of map.keys()) {
		console.log(`ключь ${k} значение ${map.get('k')}`)
	}

}

function j(num) {
	let mesage;
	if (num > 1000) {
		mesage = "Данные не верны";
		return mesage;
	} else if (num === 0) {
		mesage = "Число равно нулю"
	}
	else if (Math.floor(num) !== num) {
		mesage = "Число дробное";
	} else if (Math.floor(num) === num) {
		mesage = "Число простое";
	}
	console.log(mesage);
}


function k(num) {
	let mesage;
	if (num > 1000) {
		mesage = "Данные не верны";
		return mesage;
	} else if (num === 0) {
		mesage = "Число равно нулю";
		return mesage;
	} else if (num === 1) {
		mesage = "Число равно еденице";
		return mesage;
	} else if (num === 2) {
		mesage = "Число простое";
		return mesage;
	} else {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				mesage = " Число не является простым";
				return mesage;
			} else {
				mesage = "Число простое";
			}
		}
	}
	return mesage;
}

function l(a) {
	return function (b) {
		let sum = a + b;
		console.log(sum);
	}
}