const path = require('path');

let productsController={
    
    carrito: function(req, res) {
        res.render('carrito');
    },

    detalle_de_producto : function(req, res) {
        res.render('detalle-de-producto');
    }
};

module.exports = productsController;

