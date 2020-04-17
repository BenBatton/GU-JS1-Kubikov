"use strict";

//onclick(и) вынес в html просто из красоты
//вся движуха в объекте

//ждем загрузки всего
window.onload = function () {
  // запускаем слайдер
  slider.init();
  //интервал между картинками если не юзать onclick
  //будет каждые 5 сек пускать right: function ()
  setInterval(function () {
    slider.right();
  }, 5000);
};

let slider = {
  init: function () {
    //инициализируем слайдер и сразу ставми в set 1ю картинку slide: 0
    this.set(this.slides[this.slide]);
  },

  slides: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"],
  slide: 0, //собственно индекс картинки - его будем либо ++ либо --
  set: function (image) {
    document.getElementById("scr").style.backgroundImage = "url(" + image + ")";
  },

  left: function () {
    this.slide--; //предыдущий индекс картинки
    if (this.slide < 0) this.slide = this.slides.length - 1; //если дошли до начала начинаем с length-1
    this.set(this.slides[this.slide]);
  },
  right: function () {
    this.slide++; //следующий индекс картинки
    if (this.slide == this.slides.length) this.slide = 0; //если дошли до length начинаем сначала
    this.set(this.slides[this.slide]);
  },
};

//если честно, как то так и не получилось добавить какую нибудь анимацию типо (transition)
