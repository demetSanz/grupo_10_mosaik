module.exports = (sequelize, dataTypes) =>{
    let alias = "User";
    let cols = {

        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,

        },

        name: {
            type: dataTypes.STRING(45),
            
        },

        email: {
            type: dataTypes.STRING(45),
            unique: true
        },

        address: {
            type: dataTypes.STRING(45),
        },

        phone:{
            type: dataTypes.STRING(100),
        },

        password: {
            type: dataTypes.STRING(255), 
        },

        file: {
            type: dataTypes.STRING(255),
        },
        
        roles_id: {
            type: dataTypes.INTEGER(11),
            
        }

    };

    let config = {
        tableName : "users",
        timestamps :false// añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const User = sequelize.define (alias,cols,config);

    User.associate = function(models){
        
        User.belongsTo(models.Role, {
            as: "roles",
            foreignKey: "roles_id"
        }),
        
        User.hasMany(models.Order,{
            as:"orders",
            foreignKey:"user_id"
        })
    }

    return User;
}