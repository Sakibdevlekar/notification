const nodemailer = require('nodemailer');
require('dotenv').config();


module.exports = nodemailer.createTransport({

    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS_KEY
    },
    secure: false
})