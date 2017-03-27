var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.Promise =  global.Promise;
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath: './images/Glasses1.jpeg',
    title: 'Sunglasses',
    description: 'Awesome Sunglasses',
    price: 120
    }),
    new Product({
    imagePath: './images/Glasses2.jpeg',
    title: 'Sunglasses2',
    description: 'Awesome Sunglasses2',
    price: 130
    }),
    new Product({
    imagePath: './images/Glasses3.jpeg',
    title: 'Sunglasses3',
    description: 'Awesome Sunglasses3',
    price: 140
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
