const express = require('express');
const path = require('path'); // <-- Add this line to import the 'path' module
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');  

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',  // Allow only the Angular app to access this server
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
// Use body-parser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/moolai-stealth'))); // Now this will work

// Example route for serving the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/moolai-stealth/index.html'));
});

// Create the HTTP server
const http = require('http');
const server = http.createServer(app);

// Set up the email service route
app.post('/send-email', (req, res) => {
    const { name, email, contactNumber } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'moolai.academy@gmail.com', // replace with your email
            pass: 'gxrqshujriripsbz'  // replace with your email password
        }
    });

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

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: 'Error sending email', error });
        } else {
            res.status(200).send({ message: 'Email sent successfully!' });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
