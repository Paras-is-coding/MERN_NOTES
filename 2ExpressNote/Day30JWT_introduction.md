- Auth and Authorization flow we observer from other applications

# login API
- Here we need to generate JWT token(used for login vefification)
- username,password validate _ loginSchema in auth.validator.js

- Now fetch user from db using provided email
- Then vefify password using bcrypt.compareSync()

- we're logged in now still we need to maintain session so that server will know us
  next time we use personal routes
- create JWT token > npm i jsonwebtoken > import jwt >
     jwt.sign({payload},"JWT_SECRETKEY",{algorithm:"",expires:"1d"})

- create refresh token
(when jwt token expires frontend send req to refresh-token route with this token),
 there the token and refresh token are regenerated and sent again

- Frontend store these tokens on their local storage & every API calls after this are send with this token

  