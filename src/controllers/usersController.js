const path = require('path');
const { validationResult } = require ('express-validator');

const {readJson,writeJson,lastId} = require('./helpers');
const UserBD = readJson('usersDataBase.json');


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
        }else{
            let newUser ={
                id: lastId(UserBD) +1,
                 ...req.body,
                //  image: req.file.filename
            }
    
            UserBD.push(newUser);
    
            writeJson('usersDataBase.json',UserBD);
            
        }  
        res.redirect('/user/profile');
    },

    profile: function(req,res){
        return res.render('profile');
    }
   
    
    //     res.redirect(`/user/profile`);
    // },

    // profile: function(req,res){
    //     // let idUser = req.params.id;
    //     // console.log(idUser);
	// 	// let user =UserBD.find(user => user.id == idUser)

    //     return res.render('/profile');
    // }
   
}

module.exports = usersController;