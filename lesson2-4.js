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

console.log(sum(4, 5));
console.log(diff(4, 5));
console.log(mult(4, 5));
console.log(div(4, 5));
console.log(div(4, 0));
