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
            // name: req.body.name,
   			// price:req.body.price,
            // size: req.body.size,
			// category: req.body.category,
			// description: req.body.description,

            // 1_ no podemos hacer editar el producto
            //2_ al crear trae solo el id y los demas campos no
        }

        productsBD.push(newProduct);
        
		// let newProductJson = JSON.stringify(productsBD, null, 4);
		// fs.writeFileSync(path.resolve(__dirname, '../data/productsDataBase.json'),newProductJson);

        writeJson('productsDataBase.json',productsBD);
		
		res.redirect('/products');
    },
    destroy:  (req,res)=> {
            

        let idProduct = req.params.id;

        let newList = productsBD.filter(product =>product.id != idProduct);

        // let newListJson = JSON.stringify(newList, null, 4);
        // fs.writeFileSync(path.resolve(__dirname,'../data/productsDataBase.json'), newListJson);

        writeJson('productsDataBase.json',newList);

        res.redirect("/products");
       
        
    }

    
    
};

module.exports = productsController;

