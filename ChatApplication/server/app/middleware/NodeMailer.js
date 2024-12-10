const nodemailer = require('nodemailer')
const config = require('../../config/database.config')

function auth() { }

auth.prototype.mailer = (url,email) => {
    
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
        html: `To verify your account click on this link\n\n'<a href="${url}">${url}</a>"`// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
{          console.log(err);
}        else
{          console.log(info);

}     });

}

module.exports = auth