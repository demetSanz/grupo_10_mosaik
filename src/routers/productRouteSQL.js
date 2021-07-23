const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');



//Formulario de Registro
//router.get('/',productController.index);



 /*** CREATE ONE PRODUCT ***/ 
    router.get('/pedro',productController.pedro);
    router.post('/',productController.nicolas);

/*** DELETE ONE PRODUCT***/ 
    router.post('/borrar/:id', productController.luis);


/*** VISTA DE PRODUCTOS */
 
    
module.exports = router;