const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // For serving frontend files

// Connect to your MongoDB Atlas
const mongoURI = `mongodb+srv://nishant_saini:nishant5786@clustersaini.ttzjaag.mongodb.net/kala-lower-db?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Atlas Connected Successfully!'))
  .catch(err => console.error('❌ MongoDB Connection Failed:', err));

// User Schema
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid Indian mobile number']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  age: {
    type: Number,
    required: true,
    min: 13,
    max: 100
  },
  ageGroup: {
    type: String,
    required: true,
    enum: ['13-17', '18-25', '26-40', '41-60', '61+']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const User = mongoose.model('User', UserSchema);

// API Routes

// 1. User Registration
app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, phoneNumber, email, password, age, ageGroup } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { phoneNumber }] 
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: existingUser.email === email 
          ? 'Email already registered' 
          : 'Phone number already registered'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      age,
      ageGroup
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful!',
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later'
    });
  }
});

// 2. User Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    res.json({
      success: true,
      message: 'Login successful!',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later'
    });
  }
});

// 3. Check Authentication Status
app.get('/api/auth/me', async (req, res) => {
  // This is a simplified version - in production use JWT tokens
  res.json({
    isAuthenticated: false,
    message: 'Please implement proper authentication'
  });
});

// 4. Serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 5. Get all users (for admin purposes - remove in production)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});