const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // Create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    
    // Email options
    const mailOptions = {
        from: `${process.env.EMAIL_FROM} <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
};

const sendWelcomeEmail = async (user) => {
    const subject = 'Welcome to काला LOWER - Your Premium Black Clothing Destination!';
    const message = `
        Hi ${user.fullName},
        
        Welcome to काला LOWER! We're excited to have you as part of our premium black clothing community.
        
        Your account has been successfully created. You can now:
        - Browse our exclusive black clothing collections
        - Get special member-only discounts
        - Track your orders
        - Save your favorite items
        
        Thank you for joining us!
        
        Best regards,
        Team काला LOWER
    `;
    
    await sendEmail({
        email: user.email,
        subject,
        message
    });
};

const sendPasswordResetEmail = async (user, resetToken) => {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const subject = 'Password Reset Request - काला LOWER';
    const message = `
        Hi ${user.fullName},
        
        You requested to reset your password for your काला LOWER account.
        
        Please click the link below to reset your password:
        ${resetUrl}
        
        This link will expire in 10 minutes.
        
        If you didn't request this, please ignore this email.
        
        Best regards,
        Team काला LOWER
    `;
    
    await sendEmail({
        email: user.email,
        subject,
        message
    });
};

module.exports = {
    sendEmail,
    sendWelcomeEmail,
    sendPasswordResetEmail
};