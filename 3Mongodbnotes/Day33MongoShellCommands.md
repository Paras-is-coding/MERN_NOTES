# Commands of MongoShell
- mongosh           -> To connect to local server
- use databasename; -> Create database and switch to that db
- show dbs;         -> list databases but only with table in it
- db;               -> show db in which we are
- show tables;      -> show tables/collections

# insertion
- db.users.insertOne({json_data}) -> creates users table(if not exist) and insert object to it
- db.users.insertMany([{},{}])    -> multiple documents/rows

# data extraction/read
- db.users.findOne()              -> gives data of first index of collection
- db.users.find()                 -> gives all rows/document of users table

- filterObj -> first param passed in findOne() and find()  to filter out rows\
    > find({role:"admin"}) -> return row with row admin
    > {key:value,key1:value}                      //eqv to ... where key = value and key1 = value
    > {$or: [{role:"admin"},{role:"customer"}]}   //eqv to ... where cond1 or cond2
    > {$and : [
        {$or:[{},{},{$gte:{age:10}}]},
        {status:"active"}
    ]}
    > mongodb.com _ to see query operators
    
- limitObj -> second param to only fetch certain field only
    > {name:1,email:1,_id:0} -> set one to the field to be fetched
    

# Mongodb data storing format 
- Cluster > database(s) > collection(table in sql) > document(row in sql)