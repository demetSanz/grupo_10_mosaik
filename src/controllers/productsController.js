const path = require('path');

let productsController={
    cart: function(req, res) {
        res.render('cart');
    },
 
    products : function(req, res) {
        res.render('products');
    }
};

module.exports = productsController;

