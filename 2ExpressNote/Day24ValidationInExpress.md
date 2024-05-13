## CONTROLLER
## WEBSITE DEPLOYMENT
-----------------------------------------------------------------------------
## CONTROLLER
 - Its not express terminology, infact we make a different controller file to 
    write all the business logic involved in route handler
 - Structure of file could be class based or just function, we'll use class
   > CREATE class(that contain diff. functions/middlewares for diff. route handler),
     CREATE obj and export obj
   > Now we'll use that obj only to access from anywhere(SingletonPattern) => low resource utilization
       eg: binding controller to route > router.post('/register',authCtrl.register)

 - assignment : look at SOIT model for s/w dev.

## WEBSITE DEPLOYMENT
 - domain(kinne), hosting(server kinne) and codebase(timro website) 
 - server deployment > automated(through git) and mannual(mannual upload)
 - Type of server > 
    vps(terminal access) we have to setup what we need like nodejs,mongodb ...
        *domain link(facebook.com)
        */var/www/html/frontend
            subdomain => api.facebook.com '/api'
        * git pull origin <branch>
        * npm i     * touch en * nanoenv 
        * pm2 (instead of nodemon)

- .com.np domain free ma milxa re : GOTO register.com.np  
- hosting(server) chai kinne ho, need to be careful(shared hosting ma mongodb chaldaina)
         go for cloud hosting

#NEXT WE'LL SEE VALIDATION, FILE UPLOADING AND DATATABASE
- see ZOD , multer()

