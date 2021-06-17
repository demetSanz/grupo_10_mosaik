const express = require('express'); //requerimos express
const router = express.Router();
const path  = require ('path');
const { body } = require ('express-validator');// Requerimos Express Validator para realizar las validaciones de registro
const usersController = require('../controllers/usersController.js');
const validations = require('../middleware/validationUser');
const guestMiddleware = require ('../middleware/guestMiddleware');
const authMiddleware = require ('../middleware/authMiddleware');

const uploadFile = require('../middleware/multerPerfil');


// -------------------
// -- RUTAS USUARIO -- 
// -------------------

// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

//Procesar el registro
router.post('/register', uploadFile.single('imagePerfil') ,validations, usersController.processRegister);

//Formulario de login
router.get('/login', guestMiddleware, usersController.login);

//Procesar el login
router.post('/login',usersController.processLogin);

// Perfil de usuario
router.get('/profile/', authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);


//Eliminar perfil
//router.post('/delete',userController.destroy);

module.exports = router; 