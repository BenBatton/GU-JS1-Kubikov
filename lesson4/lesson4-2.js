"use strict";
//1.1
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
  this.price = this.price - this.price * 0.25;
};

const prod1 = new Product("shirt", 1000);
prod1.make25PercentDiscount();
console.log(prod1);
//--------------------es6----------------------
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   make25PercentDiscount() {
//     this.price = price - price * 0.25;
//   }
// }
//---------------------------------------------

//1.2

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}
Post.prototype.edit = function (incomingText) {
  this.text = incomingText;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
  this.makeTextHighlighted = function () {
    this.highlighted = true;
  };
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
//--------------------es6----------------------
// class Post {
//   constructor(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
//   }
//   edit(incomingText) {
//     this.text = incomingText;
//   }
// }
// class AttachedPost extends Post {
//   constructor(author, text, date) {
//     super(author, text, date);
//     this.highlighted = false;
//   }
//   makeTextHighlighted() {
//     this.highlighted = true;
//   }
// }

const attPost1 = new AttachedPost("Сеня", "сбрил усы", "25.08");
attPost1.edit("зачем Сеня сбрил усы");
attPost1.makeTextHighlighted();
console.log(attPost1);
