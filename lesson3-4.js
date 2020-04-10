"use strict";
//Перед вами находится массив с продуктами в интернет-магазине.
//Вам нужно:
//1. Получить все товары, у которых есть фотографии
//2. Отсортируйте товары по цене (от низкой цены к высокой)

const products = [
  { id: 3, price: 127, photos: ["1.jpg", "2.jpg"] },
  { id: 5, price: 499, photos: [] },
  { id: 10, price: 26, photos: ["3.jpg"] },
  { id: 8, price: 78 },
];

const result = products.filter(
  (element) => "photos" in element && element.photos.length > 0
);
//не понял что сортировать - изначальный массив или полученный массив из двух эл-в
//отсортировал полученный (у нас сортировка по числу так что реализация изи)
result.sort(function (el1, el2) {
  return el1.price - el2.price;
});

console.log(result);
