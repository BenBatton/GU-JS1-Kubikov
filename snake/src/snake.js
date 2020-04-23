"use strict";

class Snake {
  constructor() {
    this.possibleDirections = ["down", "up", "left", "right"];
    this.UP_DIRECTION = "up";
    this.DOWN_DIRECTION = "down";
    this.RIGHT_DIRECTION = "right";
    this.LEFT_DIRECTION = "left";
    this.body = [
      {
        x: 11,
        y: 11,
      },
    ];
    this.direction = this.DOWN_DIRECTION;
  }
  init(board) {
    this.board = board;
  }

  performStep() {
    let currentHeadCoords = this.body[0];
    let newHeadCoords = {
      x: currentHeadCoords.x,
      y: currentHeadCoords.y,
    };

    switch (this.direction) {
      case "down":
        if (newHeadCoords.y >= 21) {
          newHeadCoords.y = 1;

          break;
        } else {
          newHeadCoords.y++;
          break;
        }
      case "up":
        if (newHeadCoords.y <= 1) {
          newHeadCoords.y = 21;
          break;
        } else {
          newHeadCoords.y--;
          break;
        }
      case "left":
        if (newHeadCoords.x <= 1) {
          newHeadCoords.x = 21;
          break;
        } else {
          newHeadCoords.x--;
          break;
        }
      case "right":
        if (newHeadCoords.x >= 21) {
          newHeadCoords.x = 1;
          break;
        } else {
          newHeadCoords.x++;
          break;
        }
    }

    let cell = this.board.getCellEl(newHeadCoords.x, newHeadCoords.y);
    if (cell.classList.contains("snakeBody")) {
      return true;
    } else {
      this.body.unshift(newHeadCoords);
      this.body.pop();
      return false;
    }
  }

  changeDirection(newDirection) {
    if (!this.possibleDirections.includes(newDirection)) {
      throw new Error("не та кнопка! жмите стрелки!");
    }
    if (this.isPassedOppositeDirection(newDirection)) {
      return;
    }
    this.direction = newDirection;
  }

  isPassedOppositeDirection(newDirection) {
    if (this.direction == "down" && newDirection == "up") {
      return true;
    }
    if (this.direction == "up" && newDirection == "down") {
      return true;
    }
    if (this.direction == "left" && newDirection == "right") {
      return true;
    }
    if (this.direction == "right" && newDirection == "left") {
      return true;
    }
    return false;
  }

  increaseBody() {
    let bodyLastCell = this.body[this.body.length - 1];
    let newBodyLastCell = {
      x: bodyLastCell.x,
      y: bodyLastCell.y,
    };
    this.body.push(newBodyLastCell);
  }
}
