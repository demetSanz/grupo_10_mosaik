
const { body } = require ('express-validator');// Requerimos Express Validator para realizar las validaciones de registro
//Procesamos las validaciones requeridas para el POST
const path = require("path");



const validations = [
    body('name').notEmpty().withMessage('Debes poner un nombre Completo'),
    body('email')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isEmail().withMessage('Debés escribir un formato de email válido'),
    body('address').notEmpty().withMessage('El campo no puede estar vacío'),
    body('phone')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5, max: 10 }).withMessage('Escribí un número válido'),
        body('password')
            .notEmpty().withMessage('El campo no puede estar vacío').bail()
            .isLength({ min: 5}).withMessage('La contraseña debe tener mas de 5 caracteres'),
            body('imagePerfil').custom((value, { req }) => {
                let file = req.file;
                let acceptedExtensions = ['.jpg', '.png'];
                
                if (!file) {
                    throw new Error('Tenés que subir una imagen');
                } else {
                    let fileExtension = path.extname(file.originalname);
                    if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                    }
                }
                
                return true;
            })
    
];


module.exports = validations ;