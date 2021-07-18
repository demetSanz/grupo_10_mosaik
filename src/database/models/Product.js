module.exports = (sequelize, dataTypes) =>{
    let alias = "Product";
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
        },

        price: {
            type: dataTypes.INTEGER(11),
            allowNull:false,
           
        },
       

        description:{
            type: dataTypes.STRING(150),
        },

        image:{
            type: dataTypes.STRING(255),
        },

        stock:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
        },

        brand_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
        },

        category_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
        },

        size_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
        }

    };

    let config = {
        tableName : "products",
        timestamps : false // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
    }
    
    const Product = sequelize.define (alias,cols,config);

    Product.associate = function(models){
        
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        }),

        
        Product.belongsToMany(models.Order, {
            as: "orders",
            through:"orders_Products",
             foreignKey: "products_id",
             otherKey:"order_id"
          })

    }
    return Product;
}
/* considerar cambiar  price a double y description a text*/