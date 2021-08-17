
const express = require('express');
const router = express.Router();
const productController = require('../../controllers/API/controllerProduct');



/* DETALLE PRODUCTOS API*/

router.get ('/apiview', productController.detailApi)

/* BUSCAR PRODUCTO API */

    router.get ('/apiview/search', productController.searchApi)

/* MOSTRAR PRODUCTO API*/

    router.get ('/apiview/:id', productController.showApi)

/* CREAR PRODUCTO API*/

    router.post('/apiview',productController.storeApi);

/* BORRAR PRODUCTO API*/

    router.delete('/apiview/:id',productController.deleteApi);


module.exports = router;