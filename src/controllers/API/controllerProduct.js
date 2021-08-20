const db = require("../../database/models");
const path = require("path");
const { Op } = require("sequelize");



const productControllerApi ={

    /**LISTADO API**/

 /**** Puntos a terminar  ****/
// Middleware que solo puedan acceder los administradores
// un array que obtenga el total por cada categoria y size
// url para obtener detalles de los productos y user, llevar a la vista


    detailApi: (req,res)=>{
        db.Product
            .findAll({include:[{association: 'category'}, {association: 'sizes'}]})
            .then(products=>{
                let variableProduct = products.map(product =>{
                
                delete product.dataValues.category_id,
                delete product.dataValues.size_id,
                product.image =`http://localhost:3003/images/products/${product.dataValues.image}`;
                return product.dataValues;
                });
            return  res.status(200).json({
                total: variableProduct.length,
                countByCategory: "pisos 2 , sanitarios 4, griferias 5" ,
                data: variableProduct,
                status: 200
            })
            
        })      
        .catch(error=>console.log(error));
        
    },

    showApi: (req, res) =>{
        db.Product
            .findByPk(req.params.id,{include:[{association: 'category'}, {association: 'sizes'}]})
            .then(product=>{
                delete product.dataValues.category_id
                delete product.dataValues.size_id
                product.image =`http://localhost:3003/images/products/${product.dataValues.image}`;
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

module.exports = productControllerApi ;