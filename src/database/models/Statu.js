module.exports = (sequelize, dataTypes) =>{
    let alias = "status";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        title: {
            type: dataTypes.STRING(25),
            allowNull:false
        },

        description:{
            type: dataTypes.TEXT,
        }
       
    };

    let config = {
        tableName : "status",
        timestamps : true // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Statu = sequelize.define (alias,cols,config);

    Statu.associate = function(models){
        
        Statu.hasMany(models.User, {
            as: "order",

            foreignKey: "id"
        })
       
    }

    return Statu;
}