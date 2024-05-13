## VALIDATION

## FILE/Image EXT,SIZE VALIDATION
- Since we need this code(PURAI CODE FILE UPLOAD KO) in many routers where file uploaded is needed, 
    SO CREATE folder src/middleware/uploader.middleware.js
- module.exports = uploader

** myStorage ko destination we've to add dirSetup(custom middleware) before calling uploader in route
    const dirSetup = (req,res,next)=>{ req.uploadDir="./public/uploads/user next()"} //eg 
    

const imageFilter = (req,file,cb)=>{
    //check if extension of file matches to allowed ones or not
    if(){cb(null,true)}
    else{ 
        cb({code:400,message:"Invalid format"})// this is throw and if not catched goes to error handling middleware
        }
}
- In uploader = multer({
    storage: myStorage,
    fileFilter:imageFilter // second param for file ext
    limits:{
        fileSize:3*1024*1024(ie 3mb), // filesize limit
        fieldSize:     // ie for no of file
    }
})


## HANDELING MULTER ERROR 
- Inside err handler middleware  before res.
- check if(error instanceof MulterError){
    if(error === 'LIMIT_FILE_SIZE'){
        code = 400;
        message = error.message; 
    }//similarly handele other type of multer error since they are string .status(code) cant handle
}



- myStorage is local server -> we'll get third party server specially for file


## VALIDATING OTHER DATA
- TWO WAYS :
    > custom validation  -> manually validate each field (validation is done in beginning of controller function) 
    eg if(check invalid condn){ next({code:,message:})}

    > package based validation -> ZOD(backend),JOI(frontend), YUP(backend), ajv, class-validator  are some popular packages


## ZOD // look documentation
- npm i zod
- import {z} from z
- create mySchema ie expected data 
    eg const regSchema = z.object({
        name : z.string().min(2),max(50),
        email : z.string().email(),
        role : z.string().regx(/admin|customer|seller/).default('customer')
    })
- let validatedData = regSchema.parse(payload) // if failed it'll throw error , we'll catch it later
