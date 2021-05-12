const path = require('path');

let mainController = {
    index:  function(req, res) {
        res.render('index')
    },

    login:function(req, res) {
        res.render('login');
    } ,

    register: function(req, res) {
        res.render('register');
    },

    carrito: function(req, res) {
        res.render('carrito');
    },

    detalle_de_producto : function(req, res) {
        res.render('detalle-de-producto')
    }
}


module.exports = mainController;