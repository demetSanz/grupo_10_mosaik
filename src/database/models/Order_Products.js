module.exports = (sequelize, dataTypes) =>{
    let alias = "Detail";
    let cols = {
        
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        quantity: {
            type: dataTypes.INTEGER,
        },

        order_id: {
            type: dataTypes.INTEGER,
        },

        products_id:{
            type: dataTypes.INTEGER,
        }
       
    };

    let config = {
        tableName : "detail",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Detail = sequelize.define (alias,cols,config);

    Detail.associate = function(models){
        
         Detail.hasMany(models.Order, {
            as: "orders",
            foreignKey: "order_id"
        }),

        Detail.hasMany(models.Product, {
            as: "products",
            foreignKey: "products_id"
        })
       
    }

    return Detail;
}