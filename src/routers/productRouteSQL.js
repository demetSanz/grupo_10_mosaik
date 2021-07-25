const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');
const multer = require('multer');
const uploadProducts =require("../middleware/multerProducts");



//Formulario de Registro
//router.get('/',productController.index);



 /*** CREATE ONE PRODUCT ***/ 
    router.get('/pedro',productController.pedro);
    router.post('/',productController.nicolas);

/*** DELETE ONE PRODUCT***/ 
    router.post('/borrar/:id', productController.luis);


/*** VISTA DE PRODUCTOS */
   router.get('/listadoProductosSQL',uploadProducts.single('image-product'),productController.carlos)
    
module.exports = router;