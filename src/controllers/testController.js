const db = require('../database/models/index');



let testController={
    crear: function(req,res){
      
        res.render ("creacionUsers")
           
         },
        
       
     storage: function (req,res){
             db.User.create({
                
                name: req.body.name,
                

                
     
             });
             res.redirect ("/test")
   
     }
       
 };


module.exports = testController;

