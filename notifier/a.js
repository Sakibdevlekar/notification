const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS_KEY
    }
});

let mailOptions = {
    from: 'sd.crm.service@gmail.com',
    to: 'sakibde01@gmail.com',
    subject: 'crm notify',
    text: `1st test this mail is send by node js app`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
});



