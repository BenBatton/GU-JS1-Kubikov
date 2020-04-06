"use strict";
// Нарисовать горку с помощью console.log(используя цикл for)

for (let i = 1; i < 20; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
}
