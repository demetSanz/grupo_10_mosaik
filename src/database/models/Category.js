module.exports = (sequelize, dataTypes) =>{
    let alias = "Category";
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
        tableName : "category",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Category = sequelize.define (alias,cols,config);

    Category.associate = function(models){
        
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        })
       
    }

    return Category;
}