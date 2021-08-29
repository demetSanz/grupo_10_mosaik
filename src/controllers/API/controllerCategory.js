const db = require("../../database/models");
const path = require("path");
const { Op } = require("sequelize");



const productControllerApi ={

    /**LISTADO API**/

 /**** Puntos a terminar  ****/
// Middleware que solo puedan acceder los administradores


    detailApi: (req,res)=>{
        db.Category
            .findAll({
            order : [
                ['id', 'ASC'],
                ],
          
        })
            .then(category=>{
                
                let variableCategory = category.map(category =>{
                return category.dataValues;
                });
                return  res.status(200).json({
                total: variableCategory.length,
                detail:`http://localhost:3003/`,
                data: variableCategory,
                status: 200
            })
            
        })      
        .catch(error=>console.log(error));
        
    }

    /**-------------------------------------------------------------- */

    }

module.exports = productControllerApi ;