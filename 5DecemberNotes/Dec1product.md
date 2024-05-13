* There is no product in category table so we can't use populate  (so use agg.)

# product CRUD
- title -> String
- [slug -> Based on title, string, unique, one time entry no update]
- summary -> String compulsory
- description -> Stirng
- category -> ref -> Category model, array
    category : [{
        type: mongoose.Types.ObjectId
        ref: "Category",
        default: null
    }]
- price -> Numeric min:1
- discount -> Numeric, min:0, max:99
- [afterDiscount -> autocalculated]
- brand -> ref, Brand model
- attributes -> [{ key:String, value:String}]
- tags -> [String]
- seller -> ref, User model
- images -> [String]
- [createdBy]
- [updatedBy]
- [createdAt]
- [updatedAt ]

* sku(wareHouseId, productId, floor, sec, seller, batch), stock     for inventory




* make seperate table for attributes with keys so that they can be reused
* same goes with tags






* If want to created associated products make seperate table
- productAssociation(productId, associatedProducts, associatedPrice)
- phone 123 ===> headphone ===>2000, 1500



# SOCKET server
- It is used by realtime applications for bidirectional communication
- upto now client calls and server responds(rest APIs)
- client requests and server will respond then after
    - Connection 
        server response
        server response

- Node application  -> client(are seperate entity)
    - SOCKET server(is also nodejs server) --> clientA , clientB,...
    - we need client for sockt implemetation and server too