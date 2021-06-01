const path = require('path');
const fs = require('fs');

// requerir base de datos desde fs
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productsBD = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8',null, 4));

const lastId = () => {
    let ultimo = 0;
    productsBD.forEach(product => {
        if (ultimo < product.id) {
            ultimo = product.id;
        };
    });
 return ultimo;
};


let productsController={
    index: function (req, res){
        if(!req.query.categoria) {
            let productos = productsBD;
            let categoriasTipos = ['pisos', 'griferia', 'sanitarios'];
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
        res.render('detail',{product});
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
				// product.price = req.body.price;
                // product.size = req.body.size;
				// product.category= req.body.category;
				// product.description= req.body.description;
			}
		});
		
		let newListJson = JSON.stringify(productsBD, null, 4);
		fs.writeFileSync(path.resolve(__dirname,'../data/productsDataBase.json'), newListJson);
		
		let product =productsBD.find(product => product.id == idProduct)
		res.render('detail',{product});
    },

    create: function(req, res) {
        res.render('create'); 
    },

    store: function(req,res){
        console.log(req.body);
        let newProduct ={
            id: lastId() +1,
             ...req.body
            // name: req.body.name,
   			// price:req.body.price,
            // size: req.body.size,
			// category: req.body.category,
			// description: req.body.description,

            // 1_ no podemos hacer editar el producto
            //2_ al crear trae solo el id y los demas campos no
        }

        productsBD.push(newProduct);
        
		let newProductJson = JSON.stringify(productsBD, null, 4);
		fs.writeFileSync(path.resolve(__dirname, '../data/productsDataBase.json'),newProductJson);
		
		res.redirect('/products');
    }
};

module.exports = productsController;

