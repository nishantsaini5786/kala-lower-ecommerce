const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

const allowedOrigins = [
  "http://localhost:5500",
  "https://kala-lower.netlify.app",   
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


// Middleware
// app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const mongoURI = `mongodb+srv://nishant_saini:nishant5786@clustersaini.ttzjaag.mongodb.net/kala-lower-db?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch(err => console.error('❌ MongoDB Error:', err));


// User Schema
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  ageGroup: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: true }
});

const User = mongoose.model('User', UserSchema);

// 🔐 JWT SECRET
const JWT_SECRET = process.env.JWT_SECRET || "KALA_LOWER_SECRET_786";

// 🔏 AUTH MIDDLEWARE (Token Verify)
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided"
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
}

// ----------------------------------------------------------
// 1️⃣ REGISTER API
// ----------------------------------------------------------
app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, phoneNumber, email, password, age, ageGroup } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: existingUser.email === email
          ? "Email already exists"
          : "Phone number already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      age,
      ageGroup
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Registration successful!",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });

  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ----------------------------------------------------------
// 2️⃣ LOGIN API + JWT TOKEN
// ----------------------------------------------------------
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ success: false, message: "Invalid email or password" });

    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass)
      return res.status(401).json({ success: false, message: "Invalid email or password" });

    // Create JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        fullName: user.fullName
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    user.lastLogin = new Date();
    await user.save();

    res.json({
      success: true,
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber
      }
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// ----------------------------------------------------------
// 3️⃣ PROTECTED ROUTE → CHECK LOGIN
// ----------------------------------------------------------
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({
    success: true,
    user
  });
});

// ----------------------------------------------------------
// 4️⃣ ADMIN — GET ALL USERS (remove in production)
// ----------------------------------------------------------
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ----------------------------------------------------------
// START SERVER
// ----------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
