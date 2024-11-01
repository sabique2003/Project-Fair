const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        filename=`Image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

const fileFilter=(req,file,callback)=>{
    if(file.mimetype=="image/jpg" || file.mimetype=="image/png" || file.mimetype=="image/jpeg"){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("Please Upload the file with following extensions (png,jpg,jpeg) !!"))
    }
}

const multerConfig=multer({
    storage,fileFilter
})

module.exports=multerConfig