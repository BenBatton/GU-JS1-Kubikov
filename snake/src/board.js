"use strict";

class Board {
  constructor() {
    this.boardEl = document.getElementById("game");
  }

  init(settings, snake) {
    this.settings = settings;
    this.snake = snake;
  }

  //TODO
  renderBoard() {
    this.boardEl.innerHTML = "";
    for (let row = 0; row < this.settings.rowsCount; row++) {
      let tr = document.createElement("tr");
      this.boardEl.appendChild(tr);

      for (let col = 0; col < this.settings.colsCount; col++) {
        let td = document.createElement("td");
        tr.appendChild(td);
      }
    }
  }

  renderSnake() {
    const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
    snakeBodyElems.forEach(function (tdEl) {
      tdEl.classList.add("snakeBody");
    });
  }
  getSnakeBodyElems(bodyCoords) {
    if (bodyCoords.length > 0) {
      let bodyElems = [];
      for (let value of bodyCoords) {
        let elem = this.getCellEl(value.x, value.y);
        bodyElems.push(elem);
      }
      return bodyElems;
    }
  }

  getCellEl(x, y) {
    return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
  }
  //TODO
  renderFood(coords) {
    const foodCell = this.getCellEl(coords.x, coords.y);
    foodCell.classList.add("food");
  }

  clearBoard() {
    const tdElems = document.querySelectorAll("td");
    tdElems.forEach(function (td) {
      td.className = "";
    });
  }

  isTouchOfFood() {
    return this.boardEl.querySelector(".food").classList.contains("snakeBody");
  }

  isTouchTail() {
    return this.boardEl.getElementById("game").classList.contains("snakeBody");
  }
}
