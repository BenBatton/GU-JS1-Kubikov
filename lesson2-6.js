let sum = prompt("Укажите какое количество денег Вы хотите воложить на счёт");
let sumStr = String(sum);

if (sum <= 10 || sum >= 15) {
  switch (sumStr.charAt(sumStr.length - 1)) {
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      console.log(sum + " рублей");
      break;
    case "1":
      console.log(sum + " рубль");
      break;
    case "2":
    case "3":
    case "4":
      console.log(sum + " рубля");
      break;
    default:
      console.log(sum + " рублей");
      break;
  }
} else {
  console.log(sum + " рублей");
}
//неверный падеж будет только если вводить отрицательные числа с -11 до -14
//но тогда это не вклад, а снятие со счета, но в принципе легко можно и это реализовать
