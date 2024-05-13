## Using mongodb
- So far we learned to use from mongoshell and compass
- Now we actually will use through application

- mongodb is a NoSOL database, suitable when we don't have to maintain relational structure

## Using mongodb with our app

- Two ways of using mongodb     
    - Core Driver/Raw defined -> Not defining structure of dbase / writing everything from codebase 
        - 'mongodb' package 

    - ORM/ODM /Structured     -> We define models/ structure 
        - 'mongoose' package
- We'll just learn CRUD using Core Driver, We'll learn mongoose in deep



# using mongodb package
- npm i mongodb
- In the file we need to store data to dbase
    - import {MongoClient} from 'mongodb'

    * 1 server connect
    - const client = await MongoClient.connect(<DATABASE_URL>,{<options>}) 
        - for localhost: "mongodb://127.0.0.1:27017"

    * 2 db connect
    - const db = client.db(<dbname>)

    * 3 store/insertion query / returns ack and _id
    - res = await  db.collection(<tablename>).insertOne(<data>)

- user reg. is done, now we are using mailtrap for verification there we've sent token,
     for now we'll use that token to call 'verify-token' API route.
     - Here also repeat step 1 and 2 

     * 3 fetch/read from dbase / returns userDetails if found/valid token
     - let userdetail = await db.collection('users').findOne({token:token})

- Since we're repeating conn. code we'll put in organize it 
    - services/db.service.js/ class DatabaseService{}  _ here we'll connect to db
    
    - moving db call from controller to services
        - extend DatabaseService class to make _ eg AuthService in auth.services.js
        - make functions for db call  _ eg registerUser
        - call them from controller _ eg authSvc.registerUser(payload)

- similarly other functionalities can be completed _ eg setpassword / UPDATE
    - fetch userdetails using token, if exist add password field   

* Note that we are using Core Driver mongodb however we'll use mongoose and learn to create models    
