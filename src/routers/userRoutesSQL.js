const express = require('express'); //requerimos express
const router = express.Router();
const path = require('path');
const validations = require('../middleware/validationUser');
const userController = require ('../controllers/userController');
const guestMiddleware = require ('../middleware/guestMiddleware');
const authMiddleware = require ('../middleware/authMiddleware');

const uploadFile = require('../middleware/multerPerfil');

//Formulario de Registro
router.get('/register',guestMiddleware,userController.register);

//Procesar el registro
router.post('/register', uploadFile.single('imagePerfil'), validations,userController.processRegister);


//Formulario de login
router.get('/login',guestMiddleware,userController.login);

//Procesar el login
router.post('/login',userController.processLogin);

//Listar user
router.get('/detail',userController.profile);


//Profile

router.get('/detail/:id',authMiddleware,userController.profile)

//Logout
router.get('/logout', userController.logout);


module.exports = router; 