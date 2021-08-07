const db = require('../database/models');
const { validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

let userController={
    register: function(req,res){

        db.Role.findAll()
            .then (function (roles){
                return res.render ("register", {roles:roles})
            })
            .catch(error=>console.log(error))
    
        },  
    
    processRegister: function (req,res){

        db.User.create({                                    
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                password: bcrypt.hashSync(req.body.password, 10),
                file:req.file.filename,
                roles_id: req.body.roles_id,                
    
            })

        
        .then(()=>
        {res.redirect ("/users/login")}
        )
        .catch(error=>console.log(error))

    },

    login: function (req,res){
        return res.render ("login")
    },

    processLogin: function (req, res) {
        
    db.User.findOne({
            where: {
                email: req.body.email
            }
        
        })
        .then (userToLogin => {
            if (userToLogin) {
                let passwordUser = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (passwordUser) {
    
                    req.session.userLogged = userToLogin

                    //Deberia funcionar para cookie con el if, pero se quita para testeo de login exitoso con sql
                    if(req.body.remember){
                        res.cookie('userEmail',req.body.email,{maxAge:1000*300})
                    }
    
                    return res.redirect('detail/'+ userToLogin.id);
                }
                return res.render('login', {
                    errors: {
                        password: {
                            msg: 'La contraseña no coincide',
                        }
                    }
                })
                .catch(error=>console.log(error))
    
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este Email',
                    }
                }
            })
        })
        
}
    ,
    
    detail: (req,res)=>{

        db.User.findAll()
        .then(users=>
            res.render('listadoUsers',{users})
            .catch(error=>console.log(error))
        )},


    profile:(req,res)=>{

        let id = req.params.id;

        db.User.findByPk(
            id, 
            {include:["roles"]}
            )
        .then(user=>
            res.render('profile',{user}))
        .catch(error=>console.log(error))
        
    
    },
    logout: (req,res)=>{
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/')
    }
}



module.exports = userController;

