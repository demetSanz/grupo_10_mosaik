const express = require('express'); //requerimos express
const router = express.Router();
const path  = require ('path');
const { body } = require ('express-validator');// Requerimos Express Validator para realizar las validaciones de registro
const usersController = require('../controllers/usersController.js');

const validations = require('../middleware/validationUser');


// -------------------
// -- RUTAS USUARIO -- 
// -------------------

//Formulario de login
router.get('/login', usersController.login);

//Procesar el login
router.post ('/login', validations, usersController.processLogin);

// Formulario de registro
router.get('/register', usersController.register);

//Procesar el registro
router.post('/register', validations, usersController.processRegister);

// Perfil de usuario (agregar el /:userId una vez se complete el perfil)
router.get('/profile', usersController.profile);

//Eliminar perfil
//router.post('/delete',userController.destroy);

module.exports = router; 