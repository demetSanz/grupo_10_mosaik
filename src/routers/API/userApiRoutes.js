const express = require('express');
const router = express.Router();
const userController = require('../../controllers/API/controllerUser');



/* DETALLE USER API*/

router.get ('/apiview', userController.detailApi)

/* BUSCAR USER API */

    router.get ('/apiview/search', userController.searchApi)

/* MOSTRAR USER API*/

    router.get ('/apiview/:id', userController.showApi)

/* CREAR USER API*/

    router.post('/apiview',userController.storeApi);

/* BORRAR USER API*/

    router.delete('/apiview/:id',userController.deleteApi);


module.exports = router;