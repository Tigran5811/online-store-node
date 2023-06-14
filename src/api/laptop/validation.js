import { body, param } from 'express-validator';
import * as errorMessage from '../../constants/error-massages.js';

export const getOneValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const deleteValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
];

export const createValidation = () => [
    body('Manufacturer').isLength({ min: 1, max: 40 }).withMessage(errorMessage.fromToString(1, 40)),
    body('SSD')
        .isLength({ min: 1, max: 20 })
        .withMessage(errorMessage.fromToString(1, 20)),
    body('Resolution')
        .isLength({ min: 3, max: 20 })
        .withMessage(errorMessage.fromToString(3, 20)),
    body('Diagonal').isLength({ min: 1, max: 20 }).withMessage(errorMessage.fromToString(1, 20)),
    body('Price').isInt({ min: 50, max: 10000 }).withMessage(errorMessage.fromToInteger(50, 10000)),
    body('laptopImage').isMongoId().withMessage(errorMessage.isMongoId),
];

export const updateValidation = () => [
    param('id').isMongoId().withMessage(errorMessage.isMongoId),
    body('Manufacturer').isLength({ min: 1, max: 20 }).withMessage(errorMessage.fromToString(1, 20)).optional(),
    body('SSD')
        .isLength({ min: 1, max: 20 })
        .withMessage(errorMessage.fromToString(1, 20)).optional(),
    body('Resolution')
        .isLength({ min: 3, max: 20 })
        .withMessage(errorMessage.fromToString(3, 20)).optional(),
    body('Diagonal').isInt({ min: 10, max: 30 }).withMessage(errorMessage.fromToInteger(10, 30)).optional(),
    body('Price').isInt({ min: 50, max: 10000 }).withMessage(errorMessage.fromToInteger(50, 10000)).optional(),
    body('laptopImage').isMongoId().withMessage(errorMessage.isMongoId).optional(),
];
