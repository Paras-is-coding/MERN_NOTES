# data update
- db.users.updateOne({filter},{update},{upsert:0/1})
    - upsert means update(if filter condtn true) OR insert 

    eg. db.users.updateOne({token:"jhfjsdhf"},{$set{token:null,status:active}})
    eg. db.users.updateOne({_id: ObjectId("fjsdkfsdjkf)})
-db.users.updateMany()

# delete data
- db.users.deleteOne({filter})
- db.users.deleteMany()

    eg. db.users.deleteOne({_id:"uirj894hdfjksd"})



# aggrigate pipelines
- used as joins 







TODO : Create a database assuming Ecommere as a project. 
Identify the Tables, and data logics. 
Design a database to store all the data
List out the queries to find/insert/update/delete the data across multiple tables

Ecommerce => 
*TABLES 
    Data properties 

    users 
        ->10 users
        
    roles 
    ->admin,seller,customer

    brands
        ->
    category
    products
    orders