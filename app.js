const express = require('express');
const sendEmail = require('./services/email')

const app = express();

app.get('/', (req, res) => {
    res.send("hello world!");
}) 

app.get('/send-email', (req, res) => {
    sendEmail(
        'gurjarpatel118@gmail.com',
        'Test Email now Subject',
        'This is a test email sent with Nodemailer using OAuth2.',
        '<h1>This is a test email sent with <b>Nodemailer</b> using OAuth2 by rane.</h1>'
    )

    res.send('Email sent successfully');
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
});