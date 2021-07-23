const express = require('express'); //requerimos express
const router = express.Router();
const userController = require ('../controllers/userController');

//Formulario de Registro
router.get('/show',userController.show);

//Procesar el registro
router.post('/show',userController.showRegister);


//Formulario de login
router.get('/entrar',userController.entrar);

//Procesar el login
router.post('/entrar',userController.entrarLogin);

//listar user
router.get('/carlos',userController.carlos);


//profile

router.get('/:id',userController.nahuel)


module.exports = router; 