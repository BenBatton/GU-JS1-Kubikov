"use strict";

class Menu {
  constructor() {
    this.startBtnEl = document.getElementById("startBtn");
    this.pauseBtnEl = document.getElementById("pauseBtn");
  }

  addButtonsClickListeners(startHandler, pauseHandler) {
    this.startBtnEl.addEventListener("click", startHandler);
    this.pauseBtnEl.addEventListener("click", pauseHandler);
    
  }
}
