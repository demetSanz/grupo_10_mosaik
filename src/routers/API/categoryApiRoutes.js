
const express = require('express');
const router = express.Router();
const categoryControllerApi = require('../../controllers/API/controllerCategory');



/* DETALLE CATEGORIAS API*/

router.get ('/apiview', categoryControllerApi.detailApi)




module.exports = router;