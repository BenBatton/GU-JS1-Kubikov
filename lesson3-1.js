"use strict";
//С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно
for (let index = 0; index <= 10; index++) {
  if (index % 2 == 0) {
    console.log(index + " - четное число");
  } else {
    console.log(index + " - нечетное число");
  }
}
