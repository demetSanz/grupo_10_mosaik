const path = require('path');
const db = require("../database/models")


let mainController = {
    index:  function(req, res) {
        res.render('index')
    },
    // search: (req,res) => {

    //     db.product.findAll()

    //     let product = db.Product;
    //     let querySearch = req.query.search;
    //     let productSearch =[];
    //     for(let i =0; i < product.length; i++){
    //         if(product[i].name.includes(querySearch)){
    //             productSearch.push(product[i]);
    //         }
    //     }
    //     res.render("search",{"products":productSearch});
    // }

}

module.exports = mainController;