const Product = require("./Product");

module.exports = (sequelize, dataTypes) =>{
    let alias = "User";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(45),
            
        },

        email: {
            type: dataTypes.STRING(45),
            allowNull:false,
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
            type: dataTypes.INTEGER,
        },

        payment_id: {
            type: dataTypes.INTEGER,
        },

        province_id: {
            type: dataTypes.INTEGER,
        }
          // createdAt: {
        //     type: dataTypes.DATE
        // },
        // updatedAt: {
        //     type: dataTypes.DATE
        // }

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

      User.belongsTo(models.Province, {
            as: "province",
            foreignKey: "province_id"
        }),  

        User.belongsTo(models.Payment, {
            as: "payment",
            foreignKey: "payment_id"
        }),
        
        User.hasMany(models.Order,{
            as:"orders",
            foreignKey:"user_id"
        })
    }

    return User;
}