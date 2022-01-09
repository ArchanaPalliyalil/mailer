const express=require('express');
const mailerRouter = express.Router();
const nodemailer = require('nodemailer');
// const path = require('path');

mailerRouter.post('/',function(req,res){
   var email= req.body.email
   let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: "ictmailerexercise@gmail.com",
        pass: "mail123@"
    }
});
message = {
    from: "ictmailerexercise@gmail.com",
    to: email,
    subject: "Test subject",
    text: "This is a test email for an exercise from ICT Academy"
}
transporter.sendMail(message,function(err, info) {
    if (err) {
     res.send("<h1>Something went wrong</h1>");

    } else {
        res.send("<h1>Mail sent successfully</h1>");
    }
    
})
});


module.exports=mailerRouter;