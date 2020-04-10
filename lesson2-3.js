let a = -5,
  b = 10;
if ((a >= 0) & (b >= 0)) {
  console.log(a - b);
} else if ((a < 0) & (b < 0)) {
  console.log(a * b);
} else if ((a < 0) & (b >= 0) || (a >= 0) & (b < 0)) {
  console.log(a + b);
}
