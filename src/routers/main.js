const express = require('express') //requerimos express
const router = express.Router();
const mainController = require('../controllers/mainController.js');
// Navegacion (utilizamos res.render() y este buscará en la carpeta de views las distintas vistas
router.get('/',mainController.index);

router.get('/login.ejs', mainController.login);

router.get('/register.ejs',mainController.register );

router.get('/carrito.ejs',mainController.carrito);

router.get('/detalle-de-producto.ejs',mainController.detalle_de_producto);


module.exports = router;