module.exports = (sequelize, dataTypes) =>{
    let alias = "Delivery";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        type: {
            type: dataTypes.STRING(100),
            allowNull:false
        }
       
    };

    let config = {
        tableName : "delivery",
        timestamps :false// añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Delivery = sequelize.define (alias,cols,config);

    Delivery.associate = function(models){
        
        Delivery.hasMany(models.Order, {
            as: "orders",
            foreignKey: "delivery_types_id"
        })
    }

    return Delivery;

}