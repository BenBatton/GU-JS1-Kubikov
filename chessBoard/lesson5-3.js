// "use strict";
const config = {
  rows: [8, 7, 6, 5, 4, 3, 2, 1],
  cols: ["a", "b", "c", "d", "e", "f", "g", "h"],
};

function draw() {
  let block;
  let col;
  let num;
  let flag = true;

  const colSymbol = document.querySelector(".colSymbol");
  for (let i = 0; i < config.rows.length; i++) {
    col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `${i + 1}`;
    colSymbol.appendChild(col);
  }

  const rowNum = document.querySelector(".rowNum");
  for (let i = 0; i < config.rows.length; i++) {
    num = document.createElement("div");
    num.className = "row";
    num.innerHTML = `${config.cols[i]}`;
    rowNum.appendChild(num);
  }

  const main = document.querySelector(".main");
  const figures = {
    //увы не смог найти одну картинку сразу со всеми фигурами
    0: [
      "img/bR.png",
      "img/bN.png",
      "img/bB.png",
      "img/bQ.png",
      "img/bK.png",
      "img/bB.png",
      "img/bN.png",
      "img/bR.png",
    ],
    1: [
      "img/bP.png",
      "img/bP.png",
      "img/bP.png",
      "img/bP.png",
      "img/bP.png",
      "img/bP.png",
      "img/bP.png",
      "img/bP.png",
    ],
    6: [
      "img/wP.png",
      "img/wP.png",
      "img/wP.png",
      "img/wP.png",
      "img/wP.png",
      "img/wP.png",
      "img/wP.png",
      "img/wP.png",
    ],
    7: [
      "img/wR.png",
      "img/wN.png",
      "img/wB.png",
      "img/wQ.png",
      "img/wK.png",
      "img/wB.png",
      "img/wN.png",
      "img/wR.png",
    ],
  };

  for (let i = 0; i < config.rows.length; i++) {
    for (let j = 0; j < config.cols.length; j++) {
      if (j == 0) {
        flag = !flag;
      }
      block = document.createElement("div");
      if (flag) {
        block.className = "block black";
      } else {
        block.className = "block white";
      }

      if (figures[i] !== undefined && figures[i][j] !== undefined) {
        let imgName = figures[i][j];
        block.style.backgroundImage = `url(${figures[i][j]})`;
      }

      main.appendChild(block);
      flag = !flag;
    }
  }
}

draw();
