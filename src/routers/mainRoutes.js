const express = require('express') //requerimos express
const router = express.Router();
const mainController = require('../controllers/mainController.js');



// Navegacion (utilizamos res.render() y este buscarĂ¡ en la carpeta de views las distintas vistas

router.get('/',mainController.index);

//buscar los productos en el search
router.get("/search", mainController.search);

// Nosotros

router.get ("/nosotros", mainController.aboutUs)


module.exports = router; 