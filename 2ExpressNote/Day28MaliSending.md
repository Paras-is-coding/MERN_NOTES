## EMAIL VERIFICATION / USER GENIUNE VERIFY
- store provided data to dbase

- Send mail or OTP for verification
- For now in email we'll send activation token in mail
- we add few more fields in payload to implement business logic(eg payload.active ,payload.token ,etc)
- RANDOM STRING generation for token, config/helpers.js -> write func for generation

## MAIL, OTP
- how to send email from server to client?
    -> we use SMTP server which might reside in your web server of some third party server
     (is blocked mostly in localhost)
    -> laptop  SMTP | IMAP/POP3(25,2525,467,587) -- Internet(ISP) | SMTP Server -- clout(gmail)
    -> localhost , 127.0.0, ::1
        from : gmail.com | admin@paras.com.np - will only be sent of from SMTP of that domain
- USING SMTP server :
     - mailtrap.io(provides SMTP server) > fake SMTP server > Myinbox > showCredientials > integration 
     - npm i nodemailer (to send mail) > import nodemailer > transpoter/mathi ko inte code 
     - npm i dotenv > .env > import & dotenv.config() tyo code ko variables rakhne
     - SEND MAIL : const mailAck = await transporter.sendMail({
        to:payload.email,
        from:'test@gmail.com',   //for now
        subject:
        html:"... <a href="http://localhost:5173/activate/${payload.token}>yei link</a>...",
        text:"jasko ma html render vayena"
     })
