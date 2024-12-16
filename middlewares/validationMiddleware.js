const { body, validationResult } = require('express-validator');

// Validaciones para crear o actualizar un producto
const validateProduct = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isString().withMessage('El nombre debe ser un texto'),
  body('descripcion')
    .optional()
    .isString().withMessage('La descripción debe ser un texto'),
  body('precio')
    .notEmpty().withMessage('El precio es obligatorio')
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a 0'),
  body('stock')
    .notEmpty().withMessage('El stock es obligatorio')
    .isInt({ min: 0 }).withMessage('El stock debe ser un número entero mayor o igual a 0'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateProduct
};
