module.exports = (sequelize, dataTypes) =>{
    let alias = "Order_Products";
    let cols = {
        
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

       

        order_id: {
            type: dataTypes.INTEGER,
        },

        products_id:{
            type: dataTypes.INTEGER,
        }
       
    };

    let config = {
        tableName : "orders_Products",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Order_Products = sequelize.define (alias,cols,config);

    Order_Products.associate = function(models){
        
        Order_Products.hasMany(models.Order, {
            as: "orders",
            foreignKey: "order_id"
        }),

        Order_Products.hasMany(models.Product, {
            as: "products",
            foreignKey: "products_id"
        })
       
    }

    return Order_Products;
}