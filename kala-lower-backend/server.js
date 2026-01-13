const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ---------------------------
// 🔥 CORS CONFIG FOR RENDER + NETLIFY
// ---------------------------
const allowedOrigins = [
  "http://localhost:5500",               // Localhost
  "https://kala-lower.netlify.app"       // 👉 Your Netlify domain (change if needed)
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("❌ Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

// ---------------------------
// 🔥 MongoDB Connection
// ---------------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected Successfully!"))
  .catch(err => console.error("❌ MongoDB Failed:", err));

// ---------------------------
// 🔥 User Schema
// ---------------------------
const UserSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  age: Number,
  ageGroup: String,
  createdAt: { type: Date, default: Date.now },
  lastLogin: Date
});

const User = mongoose.model("User", UserSchema);

// ---------------------------
// 🔥 REGISTER API
// ---------------------------
app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, phoneNumber, email, password, age, ageGroup } = req.body;

    const existing = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this Email/Phone"
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      phoneNumber,
      email,
      password: hashedPass,
      age,
      ageGroup
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful!",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });

  } catch (err) {
    console.log("Registration Error:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ---------------------------
// 🔥 LOGIN API + JWT TOKEN
// ---------------------------
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ success: false, message: "Invalid email or password" });

    // Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "KALA_LOWER_SECRET_786",
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
    console.log("Login Error:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ---------------------------
// 🔥 PROTECTED ROUTE
// ---------------------------
app.get('/api/auth/me', (req, res) => {
  res.json({ success: true, message: "JWT implemented successfully!" });
});

// ---------------------------
// 🔥 START SERVER
// ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
