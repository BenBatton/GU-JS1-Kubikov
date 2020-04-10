function sum(a, b) {
  return a + b;
}
function diff(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  if (b != 0) {
    return a / b;
  } else {
    return "на 0 делить нельзя!";
  }
}
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "sum":
      return sum(arg1, arg2);
      break;
    case "diff":
      return diff(arg1, arg2);
      break;
    case "mult":
      return mult(arg1, arg2);
      break;
    case "div":
      return div(arg1, arg2);
      break;
    default:
      return "не задан тип операции, либо не указаны все аргументы";
      break;
  }
}

console.log(mathOperation(10, "sum"));
console.log(mathOperation(5, 10, "sum"));
console.log(mathOperation(5, 10, "diff"));
console.log(mathOperation(5, 10, "mult"));
console.log(mathOperation(5, 10, "div"));
console.log(mathOperation(5, 0, "div"));
console.log(mathOperation(5, 10));
