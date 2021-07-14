module.exports = (sequelize, dataTypes) =>{
    let alias = "Brand";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        brand: {
            type: dataTypes.STRING(45),
            allowNull:false
        }
       
    };

    let config = {
        tableName : "brands",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Brand = sequelize.define (alias,cols,config);

    Brand.associate = function(models){
        
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "brand_id"
        })
       
    }

    return Brand;
}