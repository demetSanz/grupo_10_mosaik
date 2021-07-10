module.exports = (sequelize, dataTypes) =>{
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
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

        // remeber_token: {
        //     type: dataTypes.STRING(100),
        // },
        // createdAt: {
        //     type: dataTypes.DATE
        // },
        // updatedAt: {
        //     type: dataTypes.DATE
        // }

    };
    let config = {
        tableName : "products",
        timestamps : true // añade las filas "created at" y "updated at". Si la tabla no tiene estas lineas, va a fallar sequelize
        
    }
    
    const Product = sequelize.define (alias,cols,config);

    P

    return Product;


}