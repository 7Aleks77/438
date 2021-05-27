let number = prompt("Введите число:"); //возвращает тип string или null

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
} 