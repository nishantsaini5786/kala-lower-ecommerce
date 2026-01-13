const { body, validationResult } = require('express-validator');

// Validation rules for registration
exports.validateRegistration = [
    body('fullName')
        .trim()
        .notEmpty().withMessage('Full name is required')
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters')
        .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces'),
    
    body('phoneNumber')
        .trim()
        .notEmpty().withMessage('Phone number is required')
        .matches(/^[6-9]\d{9}$/).withMessage('Please enter a valid 10-digit Indian mobile number'),
    
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email address')
        .normalizeEmail()
        .custom((email) => {
            // Check for disposable emails
            const disposableDomains = [
                'tempmail.com', 'mailinator.com', 'guerrillamail.com',
                '10minutemail.com', 'throwawaymail.com', 'yopmail.com'
            ];
            const domain = email.split('@')[1].toLowerCase();
            if (disposableDomains.includes(domain)) {
                throw new Error('Temporary email addresses are not allowed');
            }
            return true;
        }),
    
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/\d/).withMessage('Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    
    body('confirmPassword')
        .notEmpty().withMessage('Please confirm your password')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
    
    body('age')
        .notEmpty().withMessage('Age is required')
        .isInt({ min: 13, max: 100 }).withMessage('Age must be between 13 and 100'),
    
    body('ageGroup')
        .notEmpty().withMessage('Age group is required')
        .isIn(['13-17', '18-25', '26-40', '41-60', '61+']).withMessage('Please select a valid age group'),
    
    body('terms')
        .equals('true').withMessage('You must agree to the terms and conditions')
];

// Validation rules for login
exports.validateLogin = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email address'),
    
    body('password')
        .notEmpty().withMessage('Password is required')
];

// Check validation results
exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => ({
            field: err.path,
            message: err.msg
        }));
        
        return res.status(400).json({
            status: 'error',
            message: 'Validation failed',
            errors: errorMessages
        });
    }
    
    next();
};