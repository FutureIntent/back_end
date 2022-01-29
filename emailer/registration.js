const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

function reg_emailer(email, msg) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.email,
            pass: process.env.email_pass
        }
    });

    const mailOptions = {
        from: process.env.email,
        to: email,
        subject: 'FutureInc registration verification',
        text: msg
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = reg_emailer;
