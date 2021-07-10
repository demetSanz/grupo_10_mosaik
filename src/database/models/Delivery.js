module.exports = (sequelize, dataTypes) =>{
    let alias = "deliverys";
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
        tableName : "deliverys",
        timestamps : true // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Delivery = sequelize.define (alias,cols,config);

    Delivery.associate = function(models){
        
        Delivery.hasMany(models.User, {
            as: "orders",

            foreignKey: "id"
        })
       
    }

    return Delivery;
}