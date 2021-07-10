module.exports = (sequelize, dataTypes) =>{
    let alias = "province";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        user_province: {
            type: dataTypes.STRING(45),
            allowNull:false
        }
       
    };

    let config = {
        tableName : "province",
        timestamps : true // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Province = sequelize.define (alias,cols,config);

    Province.associate = function(models){
        
        Province.hasMany(models.User, {
            as: "users",

            foreignKey: "id"
        }),
        
        Province.hasMany(models.Order, {
            as: "orders",

            foreignKey: "id"
        })
    }

    return Province;
}