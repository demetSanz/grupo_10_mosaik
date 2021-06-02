const express = require('express'); //requerimos express
const router = express.Router();
const path  = require ('path');
const { body } = require ('express-validator');// Requerimos Express Validator para realizar las validaciones de registro
const usersController = require('../controllers/usersController.js');


//Procesamos las validaciones requeridas para el POST
const validations = [
    // body('email').isEmail().withMessage('Debes ingresar un e-mail válido'),
    body('email')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isEmail().withMessage('Debés escribir un formato de email válido'),
    body('password').notEmpty().withMessage('Escribí una contraseña válida'),
    body('passwordRe').notEmpty().withMessage('Confirmá nuevamente la contraseña'),
    body('birthDate').notEmpty().withMessage('Debés elegir una fecha'),
    body('celular').notEmpty().withMessage('Escribí un número válido'),
];



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
router.post ('/register', validations, usersController.processRegister);

// Perfil de usuario (agregar el /:userId una vez se complete el perfil)
router.get('/profile', usersController.profile);

module.exports = router; 