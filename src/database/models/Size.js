module.exports = (sequelize, dataTypes) =>{
    let alias = "Size";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

       name: {
            type: dataTypes.STRING(45),
            allowNull:false
        }
       
    };

    let config = {
        tableName : "sizes",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Size = sequelize.define (alias,cols,config);

   Size.associate = function(models){
        
        Size.hasMany(models.Product, {
            as: "products",
            foreignKey: "size_id"
        })
       
    }

    return Size;
}