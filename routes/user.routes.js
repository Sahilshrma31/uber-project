const express=require('express')
const router=express.Router()
const {body}=require("express-validator")
const userController=require('../controllers/user.controller.js')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name is required'),
    body('password').isLength({min:6}).withMessage('password must be required')
],userController.registerUser)//agr is chck m kuch b galat hoga to
//control sara registeruser function pe ayega or agr nhi aya to execute hoga ye function

module.exports=router;