const db = require('../database/models');

const bcrypt = require('bcryptjs');

let userController={
    register: function(req,res){

        db.Role.findAll()
            .then (function (roles){
                return res.render ("register", {roles:roles})
            })
      
          
         },
        
       
     processRegister: function (req,res){

        db.User.create({                                    
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                password: req.body.password,
                file: req.body.file,
                roles_id: req.body.roles_id,                
     
             });

             
             res.redirect ("/users/login")
   
     },

     login: function (req,res){
         return res.render ("login")
     },

     processLogin: function (req, res) {

        let userToLogin = db.User.findOne({
            where: {
                email: req.body.email
            }
        
        }).then ((userToLogin) => {
            if (userToLogin) {
                let passwordUser = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (passwordUser) {
                    delete userToLogin.password;
    
                    req.session.userLogged = userToLogin;
    
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
    
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este Email',
                    }
                }
            })
        })
        
    },
    
    detail: (req,res)=>{

        db.User.findAll()
          .then(users=>
            res.render('listadoUsers',{users})
        )},


    profile:(req,res)=>{

        let id= req.params.id;

        db.User.findByPk(id, {
            include:[{association:"roles"}]
         })
          .then(user=>
               res.render('profile',{user:user}))
        .catch(error=>console.log(error))
        
    
    },
    logout: (req,res)=>{
        
    }
}



module.exports = userController;

