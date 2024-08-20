const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Set up the email service route
router.post('/send-email', (req, res) => {
    console.log("Inside Send Email: ", req.body);
    const { name, email, contactNumber } = req.body;

    // Set up the email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'moolai.academy@gmail.com', // replace with your email
            pass: 'gxrqshujriripsbz'  // replace with your email password or app-specific password
        }
    });

    // Configure email options
    const mailOptions = {
        from: 'moolai.academy@gmail.com',
        to: 'swarnamalya.balaji@gmail.com, arvindh.goldstar@outlook.com',
        subject: 'Mool AI Gen AI Academy August 25th 2024 Cohort',
        text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}`,
        headers: {
            'X-Priority': '1', // High priority
            'Importance': 'high'
        }
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error: ", error);
            return res.status(500).send({ message: 'Error sending email', error });
        } else {
            res.status(200).send({ message: 'Email sent successfully!' });
        }
    });
});

module.exports = router;
