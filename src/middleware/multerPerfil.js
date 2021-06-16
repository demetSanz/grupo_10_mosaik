//Requiriendo la funcionalidad path que resuelve rutas
const path = require('path');

//Requiriendo la funcionalidad multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname,'../../public/images/imagesPerfil'));
    },
    filename: (req, file, cb) =>{
        const newFileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, newFileName);
    }
});

const uploadFile = multer({storage});


//Exportando al router
module.exports = uploadFile;