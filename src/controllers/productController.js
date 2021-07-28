const db = require("../database/models");
const fs = require("fs");
const path = require("path");


const productController ={

    cart: function(req,res){
        res.render('cart');
    },
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
        
        let imageUpload

        if(!req.file){
            imageUpload = 'noImage.jpg'
        } else {
            imageUpload = req.file.filename
        }
      
        db.Product.create({                                    
                name: req.body.name,
                price: req.body.price,
                image: imageUpload,
                stock: req.body.stock,
                brand: req.body.brand,
                category_id: req.body.category_id, 
                size_id:req.body.size_id               
     
             })
             
        .then(()=>
            {res.redirect ("/product/detail")}
            )
   
     },

    destroy:function(req,res){

        db.Product.findByPk(req.params.id,{include:[{association: 'category'}, {association: 'sizes'}]})
        .then((producto)=>{
            
            if(producto.image != 'noImage.jpg'){
            // Usamos try para poder verificar que la ruta funcione correctamente para la eliminación del archivo de imagen del producto
            try { 
                // Elimina la imagen y luego continúa la secuencia para borrar el producto de la db con destroy()
                fs.unlinkSync(path.resolve(__dirname+'../../../public/images/products')+'/'+producto.image)
            }
            catch(e){
                console.log(e)
            }
        }
        })
        .catch(e=>{
            console.log(e)
        })  

        db.Product.destroy({   
            include:[{association: 'category'}, {association: 'sizes'}],
            where:{id : req.params.id}  
        })
        .then(()=>
            {res.redirect ("/product/detail")}
            )
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

        db.Product.findByPk(
            req.params.id,
            {include:
                [
                    {association: 'category'}, 
                    {association: 'sizes'}
                ]
            })

        .then(product =>
            {
                let imageUpload

                if(!req.file || !product.image){
                    imageUpload = 'noImage.jpg'
                } else {
                    imageUpload = req.file.filename
                }
                
                db.Product.update(
                {                                    
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    image: imageUpload,
                    stock: req.body.stock,
                    brand: req.body.brand,
                    category_id: req.body.category_id, 
                    size_id:req.body.size_id               
                },
                {
                    where: {id : req.params.id}
                })
                .then(()=>
                {res.redirect ("/product/detail/"+req.params.id)}
                )
       
        })
      
        
   
     }
    }

module.exports = productController ;