let result1 = 10 + 10 + "10";
console.log(result1);
// 1. первое число складываем со вторым
// 2. сумму первых двух конкатенируем со строкой "10"
// 3. присваиваем полученное 2010 в result1
// 4. с помощью console.log выводим result1 в консолю

let result2 = 10 + "10" + 10;
console.log(result2);
// 1. первое число конкатенируем со вторым т.к. второе строка
// 2. результат первых двух конкатенируем с 10 так как результат первых двух строка
// 3. присваиваем полученное 101010 в result2
// 4. с помощью console.log выводим result2 в консолю

let result3 = 10 + 10 + +"10";
console.log(result3);
// 1. первое число складываем со вторым
// 2. третий элемент с помощью унарного плюса
// явно приводим в число, сумму первых двух складываем с 10
// 3. присваиваем полученное 30 в result3
// 4. с помощью console.log выводим result3 в консолю

let result4 = 10 / -"";
console.log(result4);
// 1. пустая строка после явного приведения становится числом 0
// 2. в результате получаем Infinity
// 3. т.к. перед вторым элементом стоит минус соответственно - Infinity
// и присваиваем полученное - Infinity в result4
// 4. с помощью console.log выводим result4 в консолю

let result5 = 10 / +"2,5";
console.log(result5);
// 1. мы не можем привести строку в число с плавающе точкой
// 2. в результате попытки приведения получаем not a number
// 3. присваеваем NaN в result5
// 4. с помощью console.log выводим result5 в консолю
