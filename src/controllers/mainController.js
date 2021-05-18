const path = require('path');

let mainController = {
    index:  function(req, res) {
        res.render('index')
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
    },

}


module.exports = mainController;