const path = require('path');

let mainController = {
    index:  function(req, res) {
        res.render('index')
    },

    adm_edit: function(req, res) {
        res.render('adm-edit', {
            nombre: "parque cerezo",
            marca: "cortinez",
            descripcion: "metro por caja 1.47",
            categoria: "pisos",
            precio: 245,
            medidas: "20x120" ,
        });
    },

    adm_create: function(req, res) {
        res.render('adm-create'); 
    },

}


module.exports = mainController;