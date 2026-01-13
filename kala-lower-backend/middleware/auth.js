const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes - require authentication
exports.protect = async (req, res, next) => {
    try {
        let token;
        
        // Check for token in Authorization header
        if (req.headers.authorization && 
            req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        // Check for token in cookies
        else if (req.cookies.token) {
            token = req.cookies.token;
        }
        
        if (!token) {
            return res.status(401).json({
                status: 'error',
                message: 'Please login to access this resource'
            });
        }
        
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if user still exists
        const user = await User.findById(decoded.id).select('+password');
        
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'User no longer exists'
            });
        }
        
        // Check if account is locked
        if (user.isAccountLocked()) {
            return res.status(403).json({
                status: 'error',
                message: 'Account is temporarily locked. Please try again later.'
            });
        }
        
        // Grant access
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 'error',
            message: 'Invalid or expired token'
        });
    }
};

// Restrict to specific roles
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                status: 'error',
                message: 'You do not have permission to perform this action'
            });
        }
        next();
    };
};

// Rate limiting for login attempts
exports.loginLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxAttempts = 5;
    
    // This is a simplified version - in production, use Redis
    if (!req.loginAttempts) {
        req.loginAttempts = {};
    }
    
    if (!req.loginAttempts[ip]) {
        req.loginAttempts[ip] = {
            attempts: 1,
            firstAttempt: now
        };
    } else {
        if (now - req.loginAttempts[ip].firstAttempt > windowMs) {
            // Reset if window has passed
            req.loginAttempts[ip] = {
                attempts: 1,
                firstAttempt: now
            };
        } else {
            req.loginAttempts[ip].attempts++;
            
            if (req.loginAttempts[ip].attempts > maxAttempts) {
                return res.status(429).json({
                    status: 'error',
                    message: 'Too many login attempts. Please try again later.'
                });
            }
        }
    }
    
    next();
};