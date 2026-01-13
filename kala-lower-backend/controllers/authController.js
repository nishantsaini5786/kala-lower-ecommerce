const User = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Register new user
exports.register = async (req, res, next) => {
    try {
        const { 
            fullName, 
            phoneNumber, 
            email, 
            password, 
            age, 
            ageGroup,
            newsletterSubscription = true 
        } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phoneNumber }]
        });
        
        if (existingUser) {
            return res.status(400).json({
                status: 'error',
                message: 'User with this email or phone number already exists'
            });
        }
        
        // Create new user
        const user = await User.create({
            fullName,
            phoneNumber,
            email: email.toLowerCase(),
            password,
            age: parseInt(age),
            ageGroup,
            newsletterSubscription
        });
        
        // Generate JWT token
        const token = user.generateAuthToken();
        
        // Set cookie
        res.cookie('token', token, {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        
        // Remove password from response
        user.password = undefined;
        
        res.status(201).json({
            status: 'success',
            message: 'Registration successful! Welcome to काला LOWER.',
            token,
            data: {
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    age: user.age,
                    ageGroup: user.ageGroup,
                    role: user.role
                }
            }
        });
        
    } catch (error) {
        next(error);
    }
};

// Login user
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        // Find user
        const user = await User.findOne({ email: email.toLowerCase() })
            .select('+password +loginAttempts +accountLockedUntil');
        
        // Check if user exists
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid email or password'
            });
        }
        
        // Check if account is locked
        if (user.isAccountLocked()) {
            return res.status(403).json({
                status: 'error',
                message: 'Account is temporarily locked. Please try again later.'
            });
        }
        
        // Check password
        const isPasswordCorrect = await user.comparePassword(password);
        
        if (!isPasswordCorrect) {
            // Increment login attempts
            user.loginAttempts += 1;
            
            // Lock account after 5 failed attempts
            if (user.loginAttempts >= 5) {
                user.accountLockedUntil = Date.now() + 15 * 60 * 1000; // 15 minutes
            }
            
            await user.save();
            
            return res.status(401).json({
                status: 'error',
                message: 'Invalid email or password',
                attemptsLeft: 5 - user.loginAttempts
            });
        }
        
        // Reset login attempts on successful login
        user.loginAttempts = 0;
        user.accountLockedUntil = undefined;
        user.lastLogin = Date.now();
        await user.save();
        
        // Generate JWT token
        const token = user.generateAuthToken();
        
        // Set cookie
        res.cookie('token', token, {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        
        // Remove password from response
        user.password = undefined;
        
        res.status(200).json({
            status: 'success',
            message: 'Login successful! Welcome back to काला LOWER.',
            token,
            data: {
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    age: user.age,
                    ageGroup: user.ageGroup,
                    role: user.role
                }
            }
        });
        
    } catch (error) {
        next(error);
    }
};

// Logout user
exports.logout = (req, res) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    
    res.status(200).json({
        status: 'success',
        message: 'Logged out successfully'
    });
};

// Get current user
exports.getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        
        res.status(200).json({
            status: 'success',
            data: {
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    age: user.age,
                    ageGroup: user.ageGroup,
                    role: user.role,
                    newsletterSubscription: user.newsletterSubscription,
                    createdAt: user.createdAt
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

// Forgot password
exports.forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        
        const user = await User.findOne({ email: email.toLowerCase() });
        
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'No user found with this email address'
            });
        }
        
        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        
        // Hash token and set to user
        user.resetPasswordToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');
        
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
        
        await user.save();
        
        // In production, send email with reset link
        const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/reset-password/${resetToken}`;
        
        // For now, just return the token (in production, send email)
        res.status(200).json({
            status: 'success',
            message: 'Password reset token generated',
            data: {
                resetToken, // Remove this in production
                resetUrl
            }
        });
        
    } catch (error) {
        next(error);
    }
};

// Reset password
exports.resetPassword = async (req, res, next) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        
        // Hash token
        const hashedToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');
        
        // Find user by token
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() }
        });
        
        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid or expired token'
            });
        }
        
        // Set new password
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        
        await user.save();
        
        // Generate new token
        const newToken = user.generateAuthToken();
        
        res.status(200).json({
            status: 'success',
            message: 'Password reset successful',
            token: newToken,
            data: {
                user: {
                    id: user._id,
                    email: user.email
                }
            }
        });
        
    } catch (error) {
        next(error);
    }
};

// Update user profile
exports.updateProfile = async (req, res, next) => {
    try {
        const { fullName, phoneNumber, age, ageGroup, newsletterSubscription } = req.body;
        
        const user = await User.findById(req.user.id);
        
        // Update fields
        if (fullName) user.fullName = fullName;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (age) user.age = age;
        if (ageGroup) user.ageGroup = ageGroup;
        if (newsletterSubscription !== undefined) user.newsletterSubscription = newsletterSubscription;
        
        await user.save();
        
        res.status(200).json({
            status: 'success',
            message: 'Profile updated successfully',
            data: {
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    age: user.age,
                    ageGroup: user.ageGroup,
                    newsletterSubscription: user.newsletterSubscription
                }
            }
        });
        
    } catch (error) {
        next(error);
    }
};