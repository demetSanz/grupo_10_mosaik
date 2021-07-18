const db = require('../database/models/index');



let userController={
    register: function(req,res){
      
        res.render ("creacionUsers")
           
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

             
             res.redirect ("/test")
   
     }
       
 };


module.exports = userController;

