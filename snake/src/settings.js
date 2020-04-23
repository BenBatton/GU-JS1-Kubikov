"use strict";

class Settings {
  init(params) {
    let defaultParams = {
      rowsCount: 21,
      colsCount: 21,
      speed: 2,
      winLength: 5,
    };
    Object.assign(defaultParams, params);

    if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
      throw new Error(
        "неверные настройки, размер доски должен быть от 10 до 30"
      );
    }
    this.rowsCount = defaultParams.rowsCount;

    if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
      throw new Error(
        "неверные настройки, размер доски должен быть от 10 до 30"
      );
    }
    this.colsCount = defaultParams.colsCount;

    if (defaultParams.speed < 1 || defaultParams.speed > 10) {
      throw new Error(
        "неверные настройки, значение скорости должно быть от 1 до 10"
      );
    }
    this.speed = defaultParams.speed;

    if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
      throw new Error("неверные настройки, длинна змеи должна быть от 5 до 50");
    }
    this.winLength = defaultParams.winLength;
  }
}
