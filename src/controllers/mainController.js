const path = require('path');
const fs = require('fs');

// requerir base de datos desde fs
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const productsBD = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let mainController = {
    index:  function(req, res) {
        res.render('index')
    }
    // search: (req,res) => {
    //     let querySearch = req.query.search;
    //     let productSearch =[];
    //     for(let i =0; i < productsBD.length; i++){
    //         if(productsBD[i].name.includes(querySearch)){
    //             productSearch.push(productsBD[i]);
    //         }
    //     }
    //     res.render("search",{"products":productSearch});
    // }

}

module.exports = mainController;