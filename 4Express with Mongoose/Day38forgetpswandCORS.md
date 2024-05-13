# handeling forget-password route
- take registered Email from user
    - Verify email, verify user exists, 
    - set resetToken:random string, resetExpiry: 
- send email to email address with the link
    // http://localhose:5173/set-password/resetToken
- API to set Password with reset token as params 
    - Check token is valid or not with resetExpiry time not greater 
    - update password


# CORS

CORS -> Server call from different URL than server URL, Server does not allow 

* Controlling CORS from server 
- npm i cors
- express.config.js/ const cors = require('cors')
    - app.use(cors( { origin: '*'}))  _ allow all domains 
    - specifice domain access can be done by replacing * 
    - route.get('/route',cors(),)  _ allow for specific route 


