const db = require("../database/models");


const productController ={

    pedro:function (req,res){
            db.Category.findAll()
                .then(function(category){
                 return res.render('creacionProducto',{category});
                })
           db.Size.findAll()
                .then(function(sizes){
                   return res.render('creacionProducto',{sizes})
            })
    }


}



module.exports =productController ;