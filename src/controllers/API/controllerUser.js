const db = require("../../database/models");
const path = require("path");
const { Op } = require("sequelize");



const userControllerApi ={


/******************************SON LOS METODOS DE USERS***************** */
    /**LISTADO API**/

    detailApi: (req,res)=>{
        db.User
            .findAll({include:[{association: 'roles'}]})           
            .then(users=>{

                let variableUsers = users.map(user =>{
                    delete user.dataValues.password;
                    delete user.dataValues.roles;
                    delete user.dataValues.roles_id;
                    user.file =`http://localhost:3003/images/imagesPerfil/${user.dataValues.file}`;
                    return user.dataValues;
                });
                console.log(variableUsers);
            return  res.status(200).json({
                total: variableUsers.length,
                detail:`http://localhost:3003/nosotros`,
                data: variableUsers,
                status: 200
            })
            
        })      
        .catch(error=>console.log(error));
            
    },

    showApi: (req, res) =>{
        db.User
            .findByPk(req.params.id,{include:[{association: 'roles'}]})
            .then(user=>{
                delete user.dataValues.password;
                delete user.dataValues.roles;
                delete user.dataValues.roles_id;
                user.file =`http://localhost:3003/images/imagesPerfil/${user.dataValues.file}`;
            return  res.status(200).json({
                detial:`http://localhost:3003/users/detail/${req.params.id}`,
                data: user,
                status: 200
            })
        })
        .catch(error=>console.log(error))

    },

    storeApi: (req, res) =>{
        db.User
            .create(req.body,{include:[{association: 'roles'}]})
            .then(user=>{
            
            return  res.status(200).json({
                data: user,
                status: 200,
                created: 'ok'
            })
        })
        .catch(error=>console.log(error))

    },

    deleteApi: (req, res) =>{
        db.User
            .destroy ({
                where: {
                    id: req.params.id
                }
            })
            .then(response=>{
                return res.status(200).json(response)
            })
            .catch(error=>console.log(error))
    },

    searchApi: (req, res) =>{
        db.User.findAll(
            {include:[
                {association: 'roles'}
            ],
            where:{name : {[Op.like]: '%' + req.query.search + '%'}} , 
        })
            .then(users=>{
                if(users.length > 0){
                    return  res.status(200).json({users}
                    )}

                return res.status(200).json('No existe el usuario')
            })
            
        .catch(error=>console.log(error));
        
    }

    /**-------------------------------------------------------------- */

    }

module.exports = userControllerApi ;