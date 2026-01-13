const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
        validate: {
            validator: function(v) {
                return /^[6-9]\d{9}$/.test(v);
            },
            message: 'Please enter a valid 10-digit Indian mobile number'
        }
    },
    
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return validator.isEmail(v) && 
                       !this.isDisposableEmail(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        select: false // Don't return password in queries
    },
    
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [13, 'You must be at least 13 years old'],
        max: [100, 'Please enter a valid age']
    },
    
    ageGroup: {
        type: String,
        required: [true, 'Age group is required'],
        enum: ['13-17', '18-25', '26-40', '41-60', '61+']
    },
    
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    
    newsletterSubscription: {
        type: Boolean,
        default: true
    },
    
    lastLogin: {
        type: Date
    },
    
    loginAttempts: {
        type: Number,
        default: 0
    },
    
    accountLockedUntil: {
        type: Date
    },
    
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
    emailVerificationToken: String,
    emailVerificationExpire: Date,
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Method to check if email is disposable
userSchema.methods.isDisposableEmail = function(email) {
    const disposableDomains = [
        'tempmail.com', 'mailinator.com', 'guerrillamail.com',
        '10minutemail.com', 'throwawaymail.com', 'yopmail.com',
        'fakeinbox.com', 'trashmail.com', 'tempmailaddress.com',
        'getnada.com', 'tmpmail.org', 'sharklasers.com'
    ];
    
    const domain = email.split('@')[1].toLowerCase();
    return disposableDomains.includes(domain);
};

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Update timestamp before update
userSchema.pre('findOneAndUpdate', function(next) {
    this.set({ updatedAt: Date.now() });
    next();
});

// Method to check password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Method to check if account is locked
userSchema.methods.isAccountLocked = function() {
    if (this.accountLockedUntil) {
        return this.accountLockedUntil > Date.now();
    }
    return false;
};

// Method to generate JWT token
userSchema.methods.generateAuthToken = function() {
    const jwt = require('jsonwebtoken');
    return jwt.sign(
        { id: this._id, role: this.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    );
};

const User = mongoose.model('User', userSchema);

module.exports = User;