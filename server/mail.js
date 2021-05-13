const nodemailer = require('nodemailer');
const  mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key:'',
        domain: ''
    }
}

const transporter = nodemailer.createTransporter(mailGun(auth));
const mailOptions = {
    from: '10dmhanzi@gmail.com', // sender address
    to: 'nickchikore@gmail.com', // list of receivers
    subject: "Thank you for contacting us", // Subject line
    html: `Contact regarding work you do`
};
transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log('Error occured')
    }
    else{
        console.log('Message sent!!!')
    }
})

// create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     // auth: {
//     //     user: user.email,
//     //     pass: user.password
//     // }
// });
//

//
// // send mail with defined transport object
// let info = await transporter.sendMail(mailOptions);
//
// callback(info);
