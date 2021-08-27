
const express = require('express');
const router = express.Router();
const productControllerApi = require('../../controllers/API/controllerProduct');



/* DETALLE PRODUCTOS API*/

router.get ('/apiview', productControllerApi.detailApi)

/* BUSCAR PRODUCTO API */

    router.get ('/apiview/search', productControllerApi.searchApi)

/* MOSTRAR PRODUCTO API*/

    router.get ('/apiview/:id', productControllerApi.showApi)

/* CREAR PRODUCTO API*/

    router.post('/apiview',productControllerApi.storeApi);

/* BORRAR PRODUCTO API*/

    router.delete('/apiview/:id',productControllerApi.deleteApi);


module.exports = router;