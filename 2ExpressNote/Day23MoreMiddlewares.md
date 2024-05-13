## MANAGING ROUTES
## MANAGING CODE BASE
## 404 HANDLELING MIDDLEWARE
## ERROR HANDELING MIDDLEWARE
## RECEIVING DATA ON SERVER
## VALIDATING DATA
----------------------------------------------------------------------------------------------
## MANAGING ROUTES_ eg. auth and authorization routes > '/register' , '/verify-token/:token' ,
 '/set-password' , '/login' , '/forget-password' , '/me' , '/logout'

-> Here eg in auth/ auth.router.js  we'll create its own router variable and mount that in 
   main express router as : router.use(authRouter) 


## MANAGING CODE
 Modular and Collective approach to manage code
    #  src/
    #     app/                          
    #         auth/
    #             router...
    #             controller...
    #             model...
    #             services...
    #             validator...
    #             transformer...
    #         category/
    #             router...
    #             controller...
    #             model...
    #             services...
    #             validator...
    #             transformer...             
    #     config/
    #     router/



 ## 404 HANDLER MIDDLEWARE 
 __ when there is no route handler this executes _written after mounting router to express app 
      in express.config.js

 ## ERROR/GARBAGE COLLECTOR(Error Handeling Middleware) 
 __ handles expection(eg validation failure, db query failure, fileupload ex,etc)
    from any middleware written just before exporting app in express.config.js
   -> If any next() of middleware call is done with one parameter next({code:_,message:_,etc})
       this handler is called.

 ## RECEIVING DATA ON SERVER
  - for now using postman, we send data to route eg http://loacalhost:3000/register 
  - data format can be different eg form-data(used if fileupload) , urlencoded ,raw JSON ,etc

  - NOW payload(data) is received in req.body - BUT express dosent know the format 
  - so,
     we need to PARSE  the body, IN express there are build in middlewares for
     (JSON ->app.use(express.json()) and urlencoded ->app.use(express.urlencoded({extended:true/false}))) 
     , USE them before mounting route in express app 
     FOR form-data need third party plugin called multer()

 ## VALIDATION 
 - After receiving data we validate received data using packages/libraries or custom validation 
 - packages -> JOY , YUP , ZOD , etc  we'll use YUP(for frontend) and ZOD(for backend)
