"use strict";

const allBtnDetails = document.getElementsByClassName("product__btnDetails");
for (let i = 0; i < allBtnDetails.length; i++) {
  allBtnDetails[i].addEventListener("click", getCard, false);
}

function getCard(e) {
  const parentBtn = e.currentTarget.parentNode;
  const productCard = {
    mainBlock: parentBtn,
    img: parentBtn.querySelector("img"),
    name: parentBtn.getElementsByClassName("product__name"),
    details: parentBtn.getElementsByClassName("product__details"),
    btnDetails: parentBtn.getElementsByClassName("product__btnDetails"),
  };
  console.dir(productCard); //это я для себя, для отладки и поиска методов

  const btnDetailsContent = productCard.btnDetails[0].innerText;
  if (btnDetailsContent === "Подробнее") {
    show(productCard);
  } else if (btnDetailsContent === "Отмена") {
    hide(productCard);
  }
}

function show(card) {
  card.img.style.display = "none";
  card.details[0].style.display = "block";
  card.btnDetails[0].innerText = "Отмена";
}

function hide(card) {
  card.img.style.display = "block";
  card.details[0].style.display = "none";
  card.btnDetails[0].innerText = "Подробнее";
}

//первая реализация была вообще наоборот: сначала сборка productCard
//и потом его целиком добавлять в html, но получилось с костылями.
//Пока собирал возник вопрос: что лучше редактировать из js заранее созданные
//блоки в html или создать эти блоки в js и добавить их целиком?
//Лучше в плане поддержки и скорости загрузки...
//Вообще как делают в продакшене, больше упор на html или на js?
//(Заранее спасибо)
