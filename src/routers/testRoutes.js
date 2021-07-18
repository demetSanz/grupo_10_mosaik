const express = require('express'); //requerimos express
const router = express.Router();
const testController = require('../controllers/testController.js');


router.get('/',testController.crear);


router.post('/',testController.storage);


module.exports = router; 