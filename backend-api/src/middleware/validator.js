import { body, validationResult } from 'express-validator';

// Validation rules for contact form
export const validateContactForm = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Full name can only contain letters and spaces'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage('Please provide a valid phone number')
    .isLength({ min: 10, max: 20 })
    .withMessage('Phone number must be between 10 and 20 characters'),

  body('practiceName')
    .trim()
    .notEmpty()
    .withMessage('Practice name is required')
    .isLength({ min: 2, max: 200 })
    .withMessage('Practice name must be between 2 and 200 characters'),

  body('specialty')
    .trim()
    .notEmpty()
    .withMessage('Specialty is required')
    .isIn([
      'Internal Medicine',
      'Cardiology',
      'Neurology',
      'Pediatrics',
      'Orthopedics',
      'Family Medicine',
      'Mental Health',
      'Dermatology',
      'Physical Therapy',
      'Laboratory',
      'Wound Care',
      'Home Health',
      'Geriatrics',
      'Rheumatology',
      'Other'
    ])
    .withMessage('Please select a valid specialty'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),

  // Middleware to check validation results
  (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    
    next();
  }
];
