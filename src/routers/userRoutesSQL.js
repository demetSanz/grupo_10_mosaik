const express = require('express'); //requerimos express
const router = express.Router();
const userController = require ('../controllers/userController');

//Formulario de Registro
router.get('/register',userController.register);

//Procesar el registro
router.post('/register',userController.processRegister);


//Formulario de login
router.get('/login',userController.login);

//Procesar el login
router.post('/login',userController.processLogin);

//listar user
router.get('/detail',userController.detail);


//profile

router.get('/detail/:id',userController.profile)


module.exports = router; 