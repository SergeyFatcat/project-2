let userNumber = +prompt("Введите число");
if (isNaN(userNumber)) {
	alert("Упс, кажется Вы ошиблись");
} else if (userNumber % 2 === 0) {
	alert("Число четное");
} else {
	alert("Число нечетное");
}


let userData = {};
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