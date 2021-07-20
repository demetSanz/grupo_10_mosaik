const db = require("../database/models");


const productController ={

    pedro:function (req,res){
        
        let categories = db.Category.findAll()
        let sizes = db.Size.findAll()

        Promise
        .all([categories, sizes])
        .then(
            function(responses){
                let category = responses[0];
                let sizes = responses[1];
                // console.log('**********COMPLETE RESULTS****************');
                // console.log(category[0].name); 
                // console.log(sizes[0].name); 
                return res.render('creacionProducto',{category,sizes})

            }
        )
    }
}

module.exports =productController ;