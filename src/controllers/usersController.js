const path = require('path');
const { validationResult } = require ('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

// const {readJson,writeJson,lastId} = require('./helpers');
// const UserBD = readJson('usersDataBase.json');


let usersController ={

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
        }

        let userInDb = User.findByField('email',req.body.email);

        if(userInDb){
            return res.render('register', { 
                errors: {
                    email: {
                        msg: 'Este Email ya esta en uso'
                    }
                },
                oldData: req.body
             });
        }

         let userCreate ={
            ...req.body,
            password:bcrypt.hashSync( req.body.password, 10),
            passwordRe: bcrypt.hashSync( req.body.passwordRe, 10)
        }

        let userCreated = User.create(userCreate);
        res.redirect('/user/login');
    },
    
    login: function (req, res) {
        return res.render('login');
    } , 

    processLogin: function (req, res){
        let userToLogin = User.findByField('email',req.body.email);
        if(userToLogin){
            let passwordUser = bcrypt.compareSync(req.body.password, userToLogin.password);
            if(passwordUser){
                delete userToLogin.password;
                delete userToLogin.passwordRe;
                req.session.userLogged = userToLogin;
                return res.redirect('profile');
            }
            return res.render('login',{
                errors:{
                    password:{
                        msg:'la contrasenia no coincide',
                    }
                }
            })
            
        }
        return res.render('login',{
            errors:{
                email:{
                    msg:'No se encuentra este Email',
                }
            }
        })
    },


    profile: function(req,res){
        return res.render('profile', {
            user: req.session.userLogged
        });
    }
   
}

module.exports = usersController;