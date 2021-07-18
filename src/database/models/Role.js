module.exports = (sequelize, dataTypes) =>{
    let alias = "Role";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        category: {
            type: dataTypes.STRING(45),
            allowNull:false
        }
       
    };
    
    let config = {
        tableName : "roles",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
        
    }
    
    const Role = sequelize.define (alias,cols,config);

    Role.associate = function(models){
        
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "roles_id"
        })
       
    }

    return Role;
}