module.exports = (sequelize, dataTypes) =>{
    let alias = "Status";
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
        timestamps : false// añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Status = sequelize.define (alias,cols,config);

    Status.associate = function(models){
        
        Status.hasMany(models.Order, {
            as: "orders",
            foreignKey: "status_id"
        })
       
    }

    return Status;
}