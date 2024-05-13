# Expess Flow Revision 
- index.js -> express.config.js -> router/index.js -> differentComponent routers -> ...middlewares...controlleraction(business logic)

# seperate transformer logic from controller
* moving the input data mapping(on req data) to different file
    - Say we may need register req. mapping/trans logic in another route, like 'user-controller'

    - So crete file, say auth.request.js 
        - Has a class say AuthRequest, which has
        - vars to copy data from req
        - constructor takes (req) and maps vars to  diff. req.<data>
        - and func(say transformRequestData) that modify and return payload
    - File returns class 

- Now where we need modified payload we do :
    - let payload = (new AuthRequest(req)).transformRequestData();

* Make controller as an aggregator that control different functionalities 


# login route DB work
- check incomming credentials(email and password) in DB
    - fetch user from DB _ getUserByFilter(filter) 
    - if userDetail exist and if is activated  _ 
        - then compare pass and return jwt and ref
        - else handle error accordingly

- Hey now rememeber jwt and ref are stored by JWT itself.
 So even after logging out if client've saved token and send, JWT verify it until expire date. To prevent,
- We'll store token and userId in DB, if we want to apply custom logout rules. For that,
    - We create a seperate collection/table
    - auth/personal-access-token.js 
        - Define PATSchema, create PATModel, export PATModel
    - In login route set patData{} and store in that table in DB 
        - make storePAT func. in services file for that 
        - call storePAT(patData)

* modifying Verification process
- we're verifying in auth.middleware.js 
- there we check IF token we get is there in DB and then send for jwt.verify()
    - getPatByToken(token) _ we make function in auth.services.js, it returns userDetail if exist
    - If we get userDetail mean verified 


# handeling logout route
- When user is logged out we delete jwt token of the user in pats table of DB

- route.post('/logout',CheckLogin, authCtrl.logoutUser)
    - WE'LL work on logoutUser
    - get user = req.authUser(appended in CheckLogin)
    - loggedout = await authSvc.deletePatData(user._id)
    - now delete from 'pats' table that user

    * we have multiple delete functions used with Model to delete in different ways

* NOTE that deleting user with user._id will delete from all devices WHERE AS using token from current only
    - to get token we've to write code as we've written in CheckLogin 
    - FOR EASE : move that code in config/helpers.js/ getTokenFromHeader(req) 
    
    

