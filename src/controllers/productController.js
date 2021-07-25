const db = require("../database/models");


const productController ={

    create:function (req,res){

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
       
   storage: function (req,res){
      
        db.Product.create({                                    
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: req.file.filename,
                stock: req.body.stock,
                brand: req.body.brand,
                category_id: req.body.category_id, 
                size_id:req.body.size_id               
     
             })
             
            res.redirect ("/product/create")
   
     },


    destroy:function(req,res){

        db.Product.destroy({   
            include:[{association: 'category'}, {association: 'sizes'}],
            where:{id : req.params.id}  
        })  
        
        res.redirect ("/product/detail")
     },

     /*******metodo para listar y mostrar todos los productos*** */
    detail: (req,res)=>{

       db.Product.findAll({include:[{association: 'category'}, {association: 'sizes'}]})
 
         .then(products=>{
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
               
     },

     edit: (req,res)=>{

        let categories = db.Category.findAll()
        let sizes = db.Size.findAll()
        let products = db.Product.findByPk(
            req.params.id,
            {include:
                [
                    {association: 'category'}, 
                    {association: 'sizes'}
                ]
            })

        Promise
        .all([categories, sizes, products])
        .then(
            function(responses){
                let category = responses[0];
                let sizes = responses[1];
                let product = responses[2];
                return res.render('editProduct',{category,sizes,product})
            }
        )         
    },

    editPost: function (req,res){
      
        db.Product.update(
            {                                    
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: req.file.filename,
                stock: req.body.stock,
                brand: req.body.brand,
                category_id: req.body.category_id, 
                size_id:req.body.size_id               
            },
            {
                where: {id : req.params.id}
            })
             
            res.redirect("/product/detail/"+req.params.id)
   
     }
}

module.exports = productController ;