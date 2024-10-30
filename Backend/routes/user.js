const express = require('express')
const { userSignup, userLogin, authenticate } = require('../Controllers/userController')
const userAuth = require('../Middlewares/userAuth')
const userRouter  = express.Router()

userRouter.post('/signup',userSignup)
userRouter.post('/login',userLogin)
userRouter.post('/auth',authenticate)

module.exports = {userRouter}