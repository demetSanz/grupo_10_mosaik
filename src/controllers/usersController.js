const path = require('path');
const { validationResult } = require ('express-validator');



let usersController ={

    login: function (req, res) {
        return res.render('login');
    } , 

    processLogin: function (req, res){
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('login', { 
                errors: resultValidation.mapped(),
                oldData: req.body
             });
        };

        return res.render ('profile')
    },

    register: function (req, res) {
        return res.render('register');
    },

    processRegister: function (req, res) {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('register', { 
                errors: resultValidation.mapped(),
                oldData: req.body
             });
        };

        return res.send ('Ok, todas las validaciones pasadas correctamente sin errores')

        
    },

    profile: function(req,res){
        return res.render('profile');
    }

}

module.exports = usersController;