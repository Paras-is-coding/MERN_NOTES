# forget-password functionality

* route
router.post('/forget-password',ValidateRequest(emailValidationSchema),authCtrl.forgetPassword)

* forgetPassword middleware
- get email from req.body
- get userDetails = await authSvc.getUserByFilter
- if user's active, update userDetalis(resetToken and resetExpiry)
- send resetToken to frontend in mail
    - auth.services / forgetPasswordMesssage(name,token){}


# reset-password 
- after mail is send to user, click will render to set-password url

* reset-passwore API route

* route
router.post('reset-password/:resetToken',ValidateRequest(passwordSchema),authCtrl.resetPassword)

* resetPassword middleware
- get resetToken from req.params
      - get password from req.body

      - fetch user using resetToken DB, check exists & expired
        - DB resetExpiry, string format -> 2023-10-13T09:00:00:000(Z if UTC is set)
        - so extract timestamp = new Date(userDetails.resetEspiry).getTime(); 
        - todaysTime = Date.now();
        - compare! if(todaysTime > timestamp)
          - => user Update, resetToken => null, resetExipry => null   (optional)
          - validation error throw => token Expired 
        - false
          - user update =>password encrypt=> {password:encPass, resetToken:null, resetExpiry=null}
          - success response send  





## refresh-token API route