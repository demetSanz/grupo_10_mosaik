const path = require('path');
const fs = require('fs');

const helpers = {
    
    // requerir base de datos desde fs
    readJson: function (archivoJson){ 
    let productsFilePath = fs.readFileSync(path.resolve(__dirname, `../data/${archivoJson}`));
        return JSON.parse(productsFilePath);
    },

    writeJson:(archivoJson,productsFilePath)=>{
        
		fs.writeFileSync(path.resolve(__dirname,`../data/${archivoJson}`),  JSON.stringify(productsFilePath, null, 4));
    },

    lastId:  (archivoJson) => {
        let ultimo = 0;
        archivoJson.forEach(element => {
            if (ultimo < element.id) {
                ultimo = element.id;
            };
        });
    return ultimo;
    }



}



