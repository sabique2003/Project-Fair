require('dotenv').config()
const express=require('express')
const cors=require('cors')
const route=require('./Routes/routes')
require('./Connection/db')
// const jwt=require('./Middlewear/jwtMiddlewear')

const pfserver=express()

pfserver.use(cors())
pfserver.use(express.json())
// pfserver.use(jwt)
pfserver.use(route)
pfserver.use('/uploads',express.static('./uploads'))
const PORT=3000 || process.env.PORT

pfserver.listen(PORT,()=>{
    console.log('server running at' ,PORT);
})

pfserver.get('/',(req,res)=>{
    res.send("<h1> Welcome Express Server </h1>")
})