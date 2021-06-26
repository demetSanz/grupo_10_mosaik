
const express = require('express'); //requerimos express
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController.js');

const uploadProducts =require("../middleware/multerProducts");

// -------------------
// -- RUTAS PRODUCTOS -- 
// -------------------

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

 /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/',productsController.detail);

  
router.get('/cart',productsController.cart);

    /*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit',productsController.edit);
router.put('/edit/:id', uploadProducts.single('image-product'), productsController.update); 

    /*** CREATE ONE PRODUCT ***/ 
router.get('/create',productsController.create);
router.post('/', uploadProducts.single('image-product') ,productsController.store);

    /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 

module.exports = router; 