const path = require('path');
const fs = require('fs');

const {readJson,writeJson ,lastId} =require('./helpers');
const productsBD = readJson('productsDataBase.json');



let productsController={
    index: function (req, res){
        if(!req.query.categoria) {
            let productos = productsBD;
            let categoriasTipos = ['pisos', 'griferias', 'sanitarios'];
            res.render('products', {productos, categoriasTipos});  
        } else {
            let productos = productsBD.filter(
                products => products.category == req.query.categoria
            );
            let categoriasTipos = [req.query.categoria];
            res.render('products', {productos, categoriasTipos});  
        }
    },

    cart: function(req, res) {
        res.render('cart');
    },
 
    detail : function(req, res) {
        let idProduct = req.params.id;
		let product =productsBD.find(product => product.id == idProduct)
        res.render('detail',{product,productsBD});
    },
    edit: function(req, res) {
     
        let idProduct = req.params.id;
		let productToEdit =productsBD.find(product => product.id == idProduct);

		res.render('edit',{productToEdit});
    },

    update:function(req,res){
        let idProduct = req.params.id;
      
		productsBD.forEach(product=>{
			 if(product.id ==  idProduct){
				product.name = req.body.name;
			 	product.price = req.body.price;
                product.marca = req.body.marca,
                product.size = req.body.size;
				product.category= req.body.category;
				product.description= req.body.description;
                product.image = req.file.filename
        
			 }
		});
				 
        
        writeJson('productsDataBase.json',productsBD);
               
       


		 let product =productsBD.find(product => product.id == idProduct)
		 res.render('detail',{product});
    },

    create: function(req, res) {
        res.render('create'); 
    },

    store: function(req,res){
        let newProduct ={
            id: lastId(productsBD) +1,
             ...req.body,
             image: req.file.filename
        }

        productsBD.push(newProduct);
        

        writeJson('productsDataBase.json',productsBD);
        
		
		res.redirect('/products');
    },
    destroy:  (req,res)=> {
            

        let idProduct = req.params.id;

        let newList = productsBD.filter(product =>product.id != idProduct);

        

        writeJson('productsDataBase.json',newList);

        res.redirect("/products");
       
        
    }

    
    
};



