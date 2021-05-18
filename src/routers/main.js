const express = require('express') //requerimos express
const router = express.Router();
const mainController = require('../controllers/mainController.js');
const usersController = require('../controllers/usersController.js');
const productsController = require('../controllers/productsController.js');
// Navegacion (utilizamos res.render() y este buscará en la carpeta de views las distintas vistas
router.get('/',mainController.index);

router.get('/login', usersController.login);

router.get('/register',usersController.register);

router.get('/cart',productsController.cart);

router.get('/products',productsController.products);

router.get('/edit',mainController.edit);

router.get('/create',mainController.create);


module.exports = router; 