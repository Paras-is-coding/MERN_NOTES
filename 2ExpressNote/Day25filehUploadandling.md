## FORM DATA HANDELING(FILE UPLOAD)
- We use a middleware multer 
- npm i multer

const multer = require("multer");
const fs = require("fs");
const myStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        //create destination path
        cb(null,path)
    },
    filename:(req,file,cb)=>{
        //createfilename
        cb(null,filename);
    }
})
const uploader = multer({storage:myStorage});

- This uploader middleware is used to used to handle file , IT is called before controller is called in route as:
    eg router.post('/register',uploader.none/single/array('keyforfile'),authCtrl.register)
    ->.array('key',{key:})
- req.file/files  is used to get file or files(single/multiple uploads)

- we donot save file to dbase but server and path to dbase