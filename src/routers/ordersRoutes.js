const express = require('express');
const router = express.Router();
const ordersController = require ("../controllers/ordersController")

router.get("/crear", ordersController.crear);

router.post("/crear", ordersController.guardado);

//Lectura

router.get ("/", ordersController.listado)

// Detalle

router.get ("/:id", ordersController.detalle)

//Actualizacion

router.get ("/editar/:id", ordersController.editar)

router.post ("/editar/:id", ordersController.actualizar)

//Borrar

router.post ("/borrar/:id", ordersController.borrar)




module.exports = router;
