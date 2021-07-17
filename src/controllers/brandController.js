const path = require('path');
const fs = require('fs');

const {readJson,writeJson ,lastId} = require('./helpers');
const db = require('../database/models/index');



let brandController={
    index:  function(req, res) {
            db.Brand.findAll()
                .then (function(Brand){
                    return res.send ({Brand})
                })
            // res.send('hola')
    },
};

module.exports = brandController;

