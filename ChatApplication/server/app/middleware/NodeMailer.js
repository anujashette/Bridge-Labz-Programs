const nodemailer = require('nodemailer')
const config = require('../../config/database.config')

function auth() { }

auth.prototype.mailer = (url,email,id) => {
    
    const transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: config.id,
            pass: config.pass
        }
    });

    const mailOptions = {
        from: 'anujashette@yahoo.com', // sender address
        to: email, // list of receivers
        subject: 'Verfy Email...!', // Subject line
        html: 'To verify your account click on this link\n\n' + url  +{"id":id}// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
{          console.log(err);
    // return('error');
}        else
{          console.log(info);
    // return('Verification mail is send to user mail id')
}     });

}

module.exports = auth