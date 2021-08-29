const db = require("../../database/models");
const path = require("path");
const { Op } = require("sequelize");



const productControllerApi ={

    /**LISTADO API**/

 /**** Puntos a terminar  ****/
// Middleware que solo puedan acceder los administradores


    detailApi: (req,res)=>{
        db.Product
            .findAll({include:[{association: 'category'}, {association: 'sizes'}],
            order : [
                ['id', 'ASC'],
                ],
          
        })
            .then(products=>{
                
                let arrayPisos =  products.filter(product =>{
                return  product.dataValues.category_id ==  1;
                });

                let arrayGriferias =  products.filter(product =>{
                return  product.dataValues.category_id ==  2;
                });

                let arraySanitarios =  products.filter(product =>{
                return  product.dataValues.category_id ==  3;
                });

                let variableProduct = products.map(product =>{
                
                delete product.dataValues.category_id,
                delete product.dataValues.size_id,
                product.image =`http://localhost:3003/images/products/${product.dataValues.image}`;
                return product.dataValues;
                });
                return  res.status(200).json({
                total: variableProduct.length,
                detail:`http://localhost:3003/product/detail`,
                countByCategory: `Pisos  ${arrayPisos.length}  , Griferias   ${arrayGriferias.length} , Sanitarios ${arraySanitarios.length}`,
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
                detail:`http://localhost:3003/product/detail/${req.params.id}`,
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