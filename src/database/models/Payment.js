module.exports = (sequelize, dataTypes) =>{
    let alias = "Payment";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        payment: {
            type: dataTypes.STRING(45),
            allowNull:false
        }
    };
    
    let config = {
        tableName : "payment",
        timestamps : true // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Payment = sequelize.define (alias,cols,config);

    Payment.associate = function(models){
        
        Payment.hasMany(models.User, {
            as: "users",
            foreignKey: "payment_id"
        })
    }
    return Payment;
}