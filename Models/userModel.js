const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    linkedin:{
        type:String
    },
    github:{
        type:String
    },
    profile:{
        type:String
    }

})

const user=mongoose.model('users',userSchema)

module.exports=user