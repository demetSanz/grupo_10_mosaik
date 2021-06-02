
const express = require('express'); //requerimos express
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController.js');

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, path.join(__dirname,'../../public/images/products'));
    },
    filename: (req, file, cb) =>{
        const newFileName = 'image-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({storage});

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

 /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/',productsController.detail);

  
router.get('/cart',productsController.cart);

    /*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit',productsController.edit);
router.put('/edit/:id', productsController.update); 

    /*** CREATE ONE PRODUCT ***/ 
router.get('/create',productsController.create);
router.post('/', upload.single('image-product') ,productsController.store);

    /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 

module.exports = router; 