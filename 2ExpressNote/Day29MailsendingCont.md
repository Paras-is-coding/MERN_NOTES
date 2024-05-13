## ORGANIZING Mail Sender
- SRC/SERVICES/mail.service.js create class MailService > constructor(transporter) / function emailSend(to,sub,message)
- SRC/auth/auth.services.js  create class AuthServices > func registerEmailMessage(token,name)
- in auth.controller.js : call functions
     let mailMsg = authSvc.registerEmailMessage(payload.name,payload.token);
     const mailAck = await mailSvc.emailSend(
                payload.email,
                "Activate yur account!",
                mailMsg
              )
- the URL in email body is of frontend and frontend will read the token on URL and send to backend for verification

Register ==> Url FE ==> Activation token ==> Email
  FEURL ==> API Verify token ==> Response ACK
    Set Password === Token, Password ==> Activate User -->email

Login API == Username,Password ==> Login (jwt token)
 loggedin profileGet == jwt token ==> Verify ==> Access

- Work on verify token and set password ->validator schema , route update
        

# verify-token 
- set verify-token route 
- req.params.<key> in verifyToken middleware and verify comparing with one in db
- if(valid) send res else set 400 invalid error

# set-password 
- First validate password (add schema in auth.validator.js)
  - schema validates psw and confirmpsw also compares if they are equal using (.refine(truecond,falsecond)) function
  - export and use before setPassword controller

- Now after validation we'll store psw in db with the help of token(select user),
   additional    fields: status:"active" & token=null
  - for that we need to hash psw, we'll do using 'bcryptjs'
    - npm i bcryptjs > import bcrypt > encPass = bcrypt.hashSync(psw,salt)
 