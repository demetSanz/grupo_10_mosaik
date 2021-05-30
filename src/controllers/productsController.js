const path = require('path');
const fs = require('fs');

// requerir base de datos desde fs
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productsBD = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productsController={
    index: function (req, res){
        let categoria = productsBD.filter(
            producto => producto.category == req.query.categoria
        );
        res.render('products', {categoria});
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

