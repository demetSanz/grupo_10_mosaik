const db = require('../database/models');



let userController={
    show: function(req,res){

        db.Role.findAll()
            .then (function (roles){
                return res.render ("creacionUsers", {roles:roles})
            })
      
          
         },
        
       
     showRegister: function (req,res){

        db.User.create({                                    
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                password: req.body.password,
                file: req.body.file,
                roles_id: req.body.roles_id,                
     
             });

             
             res.redirect ("/user/login")
   
     },

     entrar: function (req,res){
         return res.render ("login")
     },

     entrarLogin: function (req, res) {

        let userToLogin = db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then ((userToLogin) => {

                return res.send ('exitoso')
        })
    },
    
    enumerar: (req,res)=>{

        db.User.findAll()
          .then(users=>
                 res.render('listadoUsers',{users})
         )        
 
 
      },


    perfil:(req,res)=>{

        

        let id= req.params.id;

        db.User.findByPk(id, {
            include:[{association:"roles"}]
         })
          .then(user=>
               res.render('profile',{user:user}))
        .catch(error=>console.log(error))
        
    
    }
}



module.exports = userController;

