const db = require('../database/models/index');



let userController={

    crear: function(req,res){
      
       res.render ("creacionUsers")
          
        },
       
      
    storage: function (req,res){
            db.User.create({
               
               name: req.body.name,
                
               
    
            });
            res.redirect ("/user/crear")
  
    }
      
};

module.exports = userController;