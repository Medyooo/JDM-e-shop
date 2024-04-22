const nodemailer = require('nodemailer');

const SendEmail = async(options) => {
    // 1- Create transporter (service that will send email like "gmail","mailgum", "mialtrap", sendGrid)
    const transporter = nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT, // if secure false port = 587, if true port = 587
    secure: process.env.EMAIL_SECURE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
    })
    // 2- Define email options (like from, to, subject, email content)
    const mailOpts = {
        from: "Les Jardins Du Maroc Boutique App ",
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    // 3- Send email 
    await transporter.sendMail(mailOpts)
}

module.exports = SendEmail;