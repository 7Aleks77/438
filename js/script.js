/*let number = prompt("Введите число:"); //возвращает тип string или null

if(!number && typeof number == "object") {
  alert("Вы отменили!!!");
}
else {
  if(number == "") {
    alert("Вы ничего не ввели!!!");
  }
  else {
    isNaN(+number) ? alert("Это не число!") : alert(`Число ${number} в степени 3 = ${number**3}`);
  }
}*/


/***Задача 1***/
/*Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
число и считаете. Результат надо вывести на страницу с помощью alert.*/

/*let kursDollara = 74.8;
let kursEuro = 90.5;
let sumDollars = 0, sumEuro = 0;

let rubles = prompt("Сумма в рублях:");

if(!rubles && typeof rubles == "object") {
  alert("Вы отменили!!!");
}
else {
	if(rubles == "") {
    alert("Вы ничего не ввели!!!");
  }
  else {
		if(isNaN(+rubles)) {
      alert("Это не число!");
    }
    else {
      sumDollars = (rubles/kursDollara).toFixed(2);
      sumEuro = (rubles/kursEuro).toFixed(2);

      alert(`Сумма в долларах = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC`);
    }
  }
}*/

/**** Задача 2 ****/
// Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
// Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь
// вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.

/*let a, b; //стороны трапеции
let h; //высота трапеции
let S; //искомая площадь трапеции

let result = ""; //строка с результатом

a = +prompt("Сторона a:");
b = +prompt("Сторона b:");
h = +prompt("Высота h:");

if (a > 0 && b > 0 && h > 0) {
	S = ((a + b) / 2) * h;
	result = `Площадь трапеции со сторонами a = ${a}, b = ${b}\nи высотой h = ${h} равна ${S}.`
} else {
	result = "Неверные данные!!! Площадь невозможно посчитать!";
}
alert(result);*/

/***Задача 2***/
// Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
// Отобразить размер вклада поочередно на ближайшие 5 лет.
let sum; //сумма вклада
let percent; //годовой процент
let countYears; //кол-во лет
let result; //итоговая строка с выводом
let endWordYears = ""; //строка, содержащая "год(а)", "лет"
sum = Number(prompt("Сумма вклада:"));
percent = Number(prompt("Годовой %:"));
countYears = Number(prompt("Период вклада (лет):"));
for (let i = 1; i <= countYears; i++) {
	sum += sum * percent / 100;

	//1 год, 21 год
	//2, 3, 4 года
	//5,6,7,8,9,10 лет + 11 лет!

	if (i != 11 && i % 10 == 1) {
		endWordYears = "год";
	} else if ((i >= 5 && i <= 20) || (i % 10 >= 5 && i % 10 <= 9) || (i % 10) == 0) {
		endWordYears = "лет";
	} else {
		endWordYears = "года";
	}

	result += `Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}\n`;
	console.log(`Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}`);
}

alert(result);

// инкремент
// i = i + 1;
// i++; //постфиксная запись
// ++i; //префиксная запись

// декремент
// i = i - 1;
// i--; //постфиксная запись
// --i; //префиксная запись

// let x = 10;
// let y, z;
// console.log(x);

// y = x++; //y = 10, x = 11
// z = ++x; //z = 12, x = 12
// console.log(y);
// console.log(z);
// console.log(x);