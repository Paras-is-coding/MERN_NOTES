- we don't have to store token in server / stored by JWT itself

# using jwt token
- login includes verification & role based access control(RBAC)
> verification
    - '/me/' -> all users access , '/admin' -> only admin
- token sent in:  header > authoriation/x-xsrf-token : Bearer <token>  OR in url query?token=
- middlewares/auth.middleware.js > checkLogin(){//token verify }
    - In checkLogin, firstly we receive the token then we verify using:
    jwt.verify(token,process.env.JWT_SECRETKEY) -> is sync func returns data OR throw exception
    IF used jwt.decode(token) => we can still see data
    - Finally we check if user exist(using payload of data) then call next() otherwise next(err of user not exist)

> role based access control(RBAC)
- If we're loggedIn in admin route get admin features and so on 
- middlewares/rbac.middleware.js > CheckPermission(role){return middleware}
- CheckPermission(role){see if req.authUser is set and role matches otherwise set error accordingly}