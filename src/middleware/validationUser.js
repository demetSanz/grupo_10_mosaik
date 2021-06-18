
const { body } = require ('express-validator');// Requerimos Express Validator para realizar las validaciones de registro
//Procesamos las validaciones requeridas para el POST
const path = require("path");



const validations = [
    // body('email').isEmail().withMessage('Debes ingresar un e-mail válido'),
    body('name').notEmpty().withMessage('Debes poner un nombre Completo'),
    body('address').notEmpty().withMessage('El campo no puede estar vacío'),
    body('payment').notEmpty().withMessage('Seleccioná un medio de pago'),
    body('email')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isEmail().withMessage('Debés escribir un formato de email válido'),
    body('password')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5}).withMessage('La contraseña debe tener mas de 5 caracteres'),

    body('celular')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5, max: 10 }).withMessage('Escribí un número válido'),
    
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