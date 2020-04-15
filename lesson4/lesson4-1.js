"use strict";
//Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
//мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//- единицы (в свойстве units)
//- десятки (в свойстве tens)
//- сотни (в свойстве hundereds)

function digitsNumber(num) {
  if (!Number.isInteger(num) || num < 0 || num > 999) {
    console.log("необходимо число от 0 до 999");
    return {};
  } else {
    return {
      units: num % 10,
      tens: Math.floor((num / 10) % 10),
      hundereds: Math.floor(num / 100),
    };
  }
}
console.log(digitsNumber(345));
console.log(digitsNumber(45));
console.log(digitsNumber(5));
