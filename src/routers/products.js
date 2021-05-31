
const express = require('express'); //requerimos express
const router = express.Router();

const productsController = require('../controllers/productsController.js');


router.get('/', productsController.index);

router.get('/detail/:id/',productsController.detail);

router.get('/cart',productsController.cart);

router.get('/:id/edit',productsController.edit);
router.put('/edit/:id', productsController.update); 

router.get('/create',productsController.create);
router.post('/',productsController.store);

module.exports = router; 