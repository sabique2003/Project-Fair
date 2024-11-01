const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')

const jwtmiddle=require('../Middlewear/jwtMiddlewear')
const multerMiddle=require('../Middlewear/multerMiddlewear')

const routes=express.Router()

routes.post('/reg',userController.userRegistration)
routes.post('/log',userController.userLogin)
routes.put('/updateProfile',jwtmiddle,multerMiddle.single('profile'),userController.profileUpdate)

routes.post('/addproject',jwtmiddle,multerMiddle.single('image'),projectController.addProject)
routes.put('/editproject/:id',jwtmiddle,multerMiddle.single('image'),projectController.editProject)

routes.get('/projectlist',jwtmiddle,projectController.getProjectList)
routes.delete('/delproject/:id',jwtmiddle,projectController.deleteProject)
routes.get('/allprojects',projectController.allProjects)

module.exports=routes