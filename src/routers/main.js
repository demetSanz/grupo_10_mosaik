const express = require('express') //requerimos express
const router = express.Router();
const mainController = require('../controllers/mainController.js');
// Navegacion (utilizamos res.render() y este buscará en la carpeta de views las distintas vistas
router.get('/',mainController.index);

router.get('/login', mainController.login);

router.get('/register',mainController.register );

router.get('/carrito',mainController.carrito);

router.get('/detalle-de-producto',mainController.detalle_de_producto);

router.get('/adm-edit',mainController.adm_edit);

router.get('/adm-create',mainController.adm_create);


module.exports = router;