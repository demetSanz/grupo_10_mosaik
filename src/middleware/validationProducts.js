const {body} = require('express-validator');
const path = require('path');

const validations = [
    body('name').notEmpty().withMessage('No puede estar vacio').bail()
    .isLength({min: 5}).withMessage('Debe tener minimo 5 caracteres'),
    // body('size_id').notEmpty().withMessage('Seleccione una opcion'),
    // body('category_id').notEmpty().withMessage('Seleccione una opcion'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png'];
        
        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        } 
            
        
        
        return true;
    })
]

module.exports =validations;