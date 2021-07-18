const express = require('express'); //requerimos express
const router = express.Router();
const userController = require('../controllers/userController.js');


router.get('/crear', userController.crear);


router.post('/crear', userController.storage);


module.exports = router; 