const path = require('path');
const fs = require('fs');

let mainController = {
    index:  function(req, res) {
        res.render('index')
    },
 

}

// requerir base de datos desde fs
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productsBD = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = mainController;