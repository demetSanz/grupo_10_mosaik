const express = require('express'); //requerimos express
const router = express.Router();
const brandController = require('../controllers/brandController.js');


router.get('/', brandController.index);


module.exports = router; 