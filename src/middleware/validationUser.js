
const { body } = require ('express-validator');// Requerimos Express Validator para realizar las validaciones de registro
//Procesamos las validaciones requeridas para el POST




const validations = [
    // body('email').isEmail().withMessage('Debes ingresar un e-mail válido'),
    body('name').notEmpty().withMessage('Debes poner un nombre Completo'),
    body('email')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isEmail().withMessage('Debés escribir un formato de email válido'),
    body('password')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5}).withMessage('La contraseña debe tener mas de 5 caracteres'),
    body('passwordRe')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5 }).withMessage('La contraseña deben coincidir'),
    body('celular')
        .notEmpty().withMessage('El campo no puede estar vacío').bail()
        .isLength({ min: 5, max: 10 }).withMessage('Escribí un número válido'),
    
];


module.exports = validations ;