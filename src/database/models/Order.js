module.exports = (sequelize, dataTypes) =>{
    let alias = "Order";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        date_order: {
            type: dataTypes.DATE(),
            allowNull:true,
        },

        total_amount: {
            type: dataTypes.INTEGER(11),
            allowNull:false,
           
        },

        delivery_address: {
            type: dataTypes.STRING(45),
            allowNull:false,

        },

        delivery_notes: {
            type: dataTypes.STRING(45),
            allowNull:true,

        },
        
        user_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
        },
        
      

        status_id: {
            type: dataTypes.INTEGER(11),
            allowNull:false,
        },

       

    };

    let config = {
        tableName : "orders",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Order = sequelize.define (alias,cols,config);

    Order.associate = function(models){
        
             

        Order.belongsTo(models.Status, {
            as: "status",
            foreignKey: "status_id"
        }),
        
        Order.belongsTo(models.User,{
            as:"users",
            foreignKey:"user_id"
    })

    //    Order.belongsToMany(models.Product, {
    //        as: "products",
    //        through:"orders_Products",
    //        foreignKey:"products_id",
    //         otherKey:"order_id"
    //     })

    }
    return Order;
}
/*Falta hacer relaciones de Products(brands, category)*/