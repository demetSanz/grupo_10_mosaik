// const path = require('path');
// const db = require("../database/models");


// function userAccces (req,res,next){
    
//     db.User.findAll({include:[{association: 'roles'}]})           
//     .then(users=>{
//                     let adm = users.filter(user =>{
//                         user.roles_id == 1
//                     })
//                     if(){
//                         return res.send("No puede entrar")
//                     }
                
//                 next()
//             })
// }



// module.exports = userAccces;