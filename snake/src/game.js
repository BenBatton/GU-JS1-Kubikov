"use strict";

class Game {
  constructor() {
    this.tickIdentif = null;
    this.messageEl = document.getElementById("message");
    this.messageCount = document.getElementById("count");
  }

  init(settings, status, board, snake, menu, food) {
    this.settings = settings;
    this.status = status;
    this.board = board;
    this.snake = snake;
    this.menu = menu;
    this.food = food;
  }
  run() {
    this.menu.addButtonsClickListeners(
      this.start.bind(this),
      this.pause.bind(this)
    );
    document.addEventListener("keydown", this.pressKeyHandler.bind(this));
  }

  start() {
    if (this.status.isPaused()) {
      this.status.setPlaying();
      this.tickIdentif = setInterval(
        this.doTick.bind(this),
        1000 / this.settings.speed
      );
    }
  }

  pause() {
    if (this.status.isPlaying()) {
      this.status.setPaused();
      clearInterval(this.tickIdentif);
    }
  }

  doTick() {
    if (this.isGameLost()) {
      return;
    }
    if (this.isGameWon()) {
      return;
    }

    if (this.board.isTouchOfFood()) {
      this.snake.increaseBody();
      this.setMessageLengthSnake();
      this.food.setNewFood();
    }
    this.board.clearBoard();
    this.food.setFood();
    this.board.renderSnake();
  }

  isGameLost() {
    if (this.snake.performStep()) {
      clearInterval(this.tickIdentif);
      this.setMessage("Увы вы сожрали сами себя!");
      return true;
    }
  }

  isGameWon() {
    if (this.snake.body.length == this.settings.winLength) {
      clearInterval(this.tickIdentif);
      this.setMessage("Поздравляем вы победили!");
      return true;
    }
    return false;
  }

  pressKeyHandler(event) {
    switch (event.key) {
      case "ArrowUp":
        this.snake.changeDirection(this.snake.UP_DIRECTION);
        break;
      case "ArrowDown":
        this.snake.changeDirection(this.snake.DOWN_DIRECTION);
        break;
      case "ArrowLeft":
        this.snake.changeDirection(this.snake.LEFT_DIRECTION);
        break;
      case "ArrowRight":
        this.snake.changeDirection(this.snake.RIGHT_DIRECTION);
        break;
    }
  }

  setMessage(text) {
    this.messageEl.innerText = text;
  }

  setMessageLengthSnake() {
    this.messageCount.innerText = "длинна гадюки: " + this.snake.body.length;
  }
}
