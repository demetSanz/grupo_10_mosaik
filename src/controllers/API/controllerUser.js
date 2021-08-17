const db = require("../../database/models");
const path = require("path");
const { Op } = require("sequelize");



const userControllerApi ={


/******************************SON LOS METODOS DE PRODUCTS***************** */
    /**LISTADO API**/

    detailApi: (req,res)=>{
        db.USer
            .findAll({include:[{association: 'category'}, {association: 'sizes'}]})
            .then(products=>{
            return  res.status(200).json({
                total: products.length,
                data: products,
                status: 200
            })
                
        })      
        .catch(error=>console.log(error));
            
    },

    showApi: (req, res) =>{
        db.Product
            .findByPk(req.params.id,{include:[{association: 'category'}, {association: 'sizes'}]})
            .then(product=>{
            return  res.status(200).json({
                data: product,
                status: 200
            })
        })
        .catch(error=>console.log(error))

    },

    storeApi: (req, res) =>{
        db.Product
            .create(req.body,{include:[{association: 'category'}, {association: 'sizes'}]})
            .then(product=>{
            return  res.status(200).json({
                data: product,
                status: 200,
                created: 'ok'
            })
        })
        .catch(error=>console.log(error))

    },

    deleteApi: (req, res) =>{
        db.Product
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
        db.Product.findAll(
            {include:[
                {association: 'category'}, 
                {association: 'sizes'}
            ],
            where:{name : {[Op.like]: '%' + req.query.search + '%'}} , 
        })
            .then(products=>{
                if(products.length > 0){
                    return  res.status(200).json({products}
                    )}

                return res.status(200).json('No existe el producto')
            })
                    
        .catch(error=>console.log(error));
            
    }

     /**-------------------------------------------------------------- */

    }

module.exports = userControllerApi ;