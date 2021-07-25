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
                return res.render('creacionProducto',{category,sizes})

            }
        )
    },
       
   nicolas: function (req,res){
      
        db.Product.create({                                    
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: req.file.filename,
                stock: req.body.stock,
                brand: req.body.brand,
                category_id: req.body.category_id, 
                size_id:req.body.size_id               
     
             });
            
            res.redirect ("/product/pedro")
   
     },

     luis:function(req,res){

        db.Product.destroy({   
            where:{
                id:req.params.id            
            }
            
        })

        res.send("borrado")

     },
     /*******metodo para listar y mostrar todos los productos*** */
     detail: (req,res)=>{

       db.Product.findAll({include:[{association: 'category'}, {association: 'sizes'}]})
 
         .then(products=>{
             console.log(products + "HOLAAA");
           
           res.render('listadoProductosSQL',{products:products})
         } )      
        .catch(error=>console.log(error));
              
    },

    view: (req,res)=>{

       db.Product.findByPk(req.params.id,{include:[{association: 'category'}, {association: 'sizes'}]})
        
          .then(product=>{
             console.log(product);
                 res.render('detalleSQL',{product:product})
          } )      
         .catch(error=>console.log(error));
               
     }

        

     
}

module.exports =productController ;