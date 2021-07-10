module.exports = (sequelize, dataTypes) =>{
    let alias = "Orders";
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
        province_id: {
            type: dataTypes.INTEGER(11),
            allowNull:false,

        },
        status_id: {
            type: dataTypes.INTEGER(11),
            allowNull:false,

        },
        delivery_types_id: {
            type: dataTypes.INTEGER(11),
            allowNull:true,

        }

    };
    let config = {
        tableName : "orders",
        timestamps : true // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
        
    }
    
    const Orders = sequelize.define (alias,cols,config);

    Orders.associate = function(models){
        
        Orders.belongsTo(models.Brand, {
            as: "delivery",
            foreignKey: "delivery_types_id"
        }),
        Orders.belongsTo(models.Category, {
            as: "province",
            foreignKey: "province_id"

        }),
        Orders.belongsTo(models.Brand, {
            as: "status",
            foreignKey: "status_id"
        }),
        Orders.belongsTo(models.Brand, {
            as: "users",
            foreignKey: "user_id"
        })
       
    }

    return Orders;


   


}
/* considerar cambiar  price a double y description a text*/