"use strict";

//Игорь да, это Ваш код, но немного изменённый под мой html который мы писали на уроках А.Кадочникова
//Изначально писал всё своё, но получилось оч. криво(в плане читабельности) и гораздо больше строк, в общем выкладывать на фоне этого стыдно
//у меня не подключены библиотеки которые использовали Вы типа bootstrap и всё что для него нужно, стили ставил свои
//попутный вопрос если можно: у нас будет урок на котором мы сможем припилить базу sql с ценами, именами и IDшниками?
//ибо хардкодить цены и прочее в html это беда

let basketBtns = document.querySelectorAll(".jsAddToBasket");
//берем все кнопки "В корзину" и слушаем клики по ним
basketBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    let id = event.srcElement.dataset.id;
    let price = event.srcElement.dataset.price;
    let name = event.srcElement.dataset.name;
    basket.addProduct({ id: id, price: price, name: name });
  });
});

let basket = {
  products: {},

  /**
   * Метод добавляет продукт в корзину.
   * @param {{ id: string, price: string, name: string }} product
   */
  addProduct(product) {
    this.addProductToObject(product);
    this.renderProductInBasket(product);
    this.renderTotalSum();
    this.addRemoveBtnsListeners();
  },
  /**
   * Метод добавляет продукт в объект с продуктами.
   * @param {{ id: string, price: string, name: string }} product
   */
  addProductToObject(product) {
    if (this.products[product.id] == undefined) {
      this.products[product.id] = {
        price: product.price,
        name: product.name,
        count: 1,
      };
    } else {
      this.products[product.id].count++;
    }
  },
  /**
   * Метод отрисовывает продукт в корзине, если там такой уже есть просто
   * увеличивает счетчик на 1.
   * @param {{ id: string, price: string, name: string }} product
   * @returns
   */
  renderProductInBasket(product) {
    let productExist = document.querySelector(
      `.productCount[data-id="${product.id}"]`
    );
    if (productExist) {
      productExist.textContent++;
      return;
    }
    let productRow = `
            <tr>
                <th class="productRowStyle" scope="row">${product.id}</th>
                <td class="productRowStyle">${product.name}</td>
                <td class="productRowStyle productPriceTd">${product.price}</td>
                <td class="productRowStyle productCount" data-id="${product.id}">1</td>
                <td class="productRowStyle productRemoveBtn" data-id="${product.id}"></td>
            </tr>
        `;
    let tbody = document.querySelector("tbody");
    tbody.insertAdjacentHTML("beforeend", productRow);
  },

  /**
   * Метод отображает общую сумму заказа в корзине.
   */
  renderTotalSum() {
    document.querySelector(".total").textContent = this.getTotalSum();
  },
  /**
   * Метод считает стоимость всех продуктов в корзине.
   * @returns {number}
   */
  getTotalSum() {
    let sum = 0;
    for (let key in this.products) {
      sum += this.products[key].price * this.products[key].count;
    }
    return sum;
  },
  /**
   * Добавляем слушателей события клика по кнопкам удалить.
   */
  addRemoveBtnsListeners() {
    let btns = document.querySelectorAll(".productRemoveBtn");
    for (let i = 0; i < btns.length; i++) {
      //важно указать именно this.removeProductListener, чтобы это была одна и та же
      //функция, а не несколько одинаковых.
      btns[i].addEventListener("click", this.removeProductListener);
    }
  },

  /**
   * Обработчик события клика по кнопке удаления товара.
   * @param {MouseEvent} event
   */
  removeProductListener(event) {
    //console.log(this); this будет указывать на кнопку, а не на объект basket
    //здесь мы используем basket вместо this, потому что контекст вызова не имеет
    //этих методов и нам надо явно обратиться к нашему объекту корзины
    basket.removeProduct(event);
    basket.renderTotalSum();
  },
  /**
   * Метод удаляет продукт из объекта продуктов, а также из корзины на странице.
   * @param {MouseEvent} event
   */
  removeProduct(event) {
    let id = event.srcElement.dataset.id;
    this.removeProductFromObject(id);
    this.removeProductFromBasket(id);
  },
  /**
   * Метод удаляет продукт из объекта с продуктами.
   * @param {string} id
   */
  removeProductFromObject(id) {
    if (this.products[id].count == 1) {
      delete this.products[id];
    } else {
      this.products[id].count--;
    }
  },
  /**
   * Метод удаляет товар из корзины. Если количество больше 1, то просто уменьшает его.
   * @param {string} id
   */
  removeProductFromBasket(id) {
    let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
    if (countTd.textContent == 1) {
      countTd.parentNode.remove();
    } else {
      countTd.textContent--;
    }
  },
};
