
const express = require('express') //requerimos express
const router = express.Router();

const productsController = require('../controllers/productsController.js');


router.get('/', productsController.index)

router.get('/detail',productsController.detail);

router.get('/cart',productsController.cart);

router.get('/edit',productsController.edit);

router.get('/create',productsController.create);

module.exports = router; 