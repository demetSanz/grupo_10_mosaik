const path = require('path');

let productsController={
    index: function (req, res){
        if(req.query.categoria == 'pisos'){
            res.render('pisos')
        }
        res.render('products');
    },

    cart: function(req, res) {
        res.render('cart');
    },
 
    detail : function(req, res) {
        res.render('detail');
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

