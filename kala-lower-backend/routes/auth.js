const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { validateRegistration, validateLogin, checkValidation } = require('../middleware/validation');
const { loginLimiter } = require('../middleware/auth');

// Public routes
router.post('/register', validateRegistration, checkValidation, authController.register);
router.post('/login', loginLimiter, validateLogin, checkValidation, authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.patch('/reset-password/:token', authController.resetPassword);

// Protected routes
router.use(protect); // All routes below require authentication
router.get('/me', authController.getMe);
router.patch('/update-profile', authController.updateProfile);
router.post('/logout', authController.logout);

module.exports = router;