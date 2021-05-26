const path = require('path');

let productsController={
    cart: function(req, res) {
        res.render('cart');
    },
 
    products : function(req, res) {
        res.render('products');
    },
    edit: function(req, res) {
        res.render('edit', {
            nombre: "parque cerezo",
            marca: "cortinez",
            descripcion: "metro por caja 1.47",
            categoria: "pisos",
            precio: 245,
            medidas: "30x45" ,
        });
    },

    create: function(req, res) {
        res.render('create'); 
    }
};

module.exports = productsController;

