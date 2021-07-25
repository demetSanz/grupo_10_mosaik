const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');
const multer = require('multer');
const uploadProducts =require("../middleware/multerProducts");



//Formulario de Registro

/*** Buscar por categoria ***/
//router.get('/', productController.index);

/*** Acceso a carrito***/
router.get('/carts',productController.cart);


 /*** CREATE ONE PRODUCT ***/ 
    router.get('/create',productController.create);
    router.post('/',uploadProducts.single('image'),productController.storage);

/*** EDIT ONE PRODUCT ***/ 
    router.get('/edit/:id',productController.edit);
    router.post('/edit/:id',uploadProducts.single('image'),productController.editPost);

/*** DELETE ONE PRODUCT***/ 
    router.post('/borrar/:id', productController.destroy);


/*** VISTA DE PRODUCTOS */
   router.get('/detail',uploadProducts.single('image-product'),productController.detail)

/* DETALLE DE PRODUCTO*/

   router.get('/detail/:id',productController.view)
    
module.exports = router;