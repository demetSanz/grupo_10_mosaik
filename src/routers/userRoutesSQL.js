const express = require('express'); //requerimos express
const router = express.Router();
const userController = require ('../controllers/userController');


router.get('/register',userController.register);


router.post('/register',userController.processRegister);


module.exports = router; 