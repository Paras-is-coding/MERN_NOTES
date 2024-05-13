# removing mongodb (Core Driver) setup from app
 - we'll not work with Core Driver mongodb
    - npm uninstall mongodb
    - delete 'services/db.service.js' file
    - modify auth/auth.services.js _ using model created

 # mongoose
 - working with ODM of mongodb > mongoose package
 - We can structure table in DB, keys and their data structure

- Every table is pointed by Model (eg users table ,User model) 
- Each row is instance of Model class

* setup
- install mongoose
 - npm i mongoose
- connect db after creating express app in express.config.js
 - config/db.config.js
   
* Create Model _ to define table structure|schema
- Here we are creating User model
 - user/user.model.js 
   - create UserSchema, then UserModel and export UserModel
   - now we'll use UserModel to do operation in 'users' table
   - TODO : modify functions of auth.services.js using UserModel
    
* handeling mongoose 11000 error
- That's unique error i/e not unique value like already used email
- we have to specially handle this code in error handeling middleware