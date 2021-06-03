//Requiriendo la funcionalidad path que resuelve rutas
const path = require('path');

//Requiriendo la funcionalidad multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, path.join(__dirname,'../../public/images/products'));
    },
    filename: (req, file, cb) =>{
        const newFileName = 'image-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({storage});


//Exportando al router
module.exports = upload;