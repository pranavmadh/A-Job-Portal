const z = require('zod')
const bcrypt = require('bcrypt')
const { userModel } = require('../db')
const jwt = require('jsonwebtoken')
const { USER_JWT_PASS } = require('../config')


const userSignup = async (req,res) => {

    const bodySchema = z.object({
        name :  z.string(),
        username : z.string().min(3).max(20),
        email : z.string().min(5).max(50).email(),
        password : z.string().min(6).refine((password) => /[A-Z]/.test(password) , {message : "Should contain altleast one Capital Letter"})
        .refine((password) => /[a-z]/.test(password), {message : "Should Contain atleast one Lowercase Letter"}).refine((password) => /[!@#$%^&*()]/.test(password),{message : "Should contian atleast one Special Characters"})
    })

    const parsedData =  bodySchema.safeParse(req.body)

    if (!parsedData.success) {
        res.status(406).json({
            success : false,
            message :  "Input Data Schema Not Valid"
        })
        return;
    } 

    const name = req.body.name
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    
    const encyptedPassword = await bcrypt.hash(password, 5)

    const user = await userModel.findOne({
        $or : [{username : username},{email : email}]
    })


    console.log(user)
    if(user) {
        res.status(409).json({
            success : "false",
            message : "Username or email already exist"
        })
        return
    }

    try {
        await userModel.create({
            name : name,
            username :  username, 
            email :  email,
            password : encyptedPassword
        })
    } catch {
        res.status(400).json({
            success :  false,
            message : "Bad Request / Not Able to input the Database "
        })
    }

    res.status(200).json({
        success:  true,
        message : "Data input Susccessful"
    })
}

const userLogin = async (req,res) => {
    const email =  req.body.email
    const password = req.body.password


    console.log(email,password)
    const user = await userModel.findOne({
        email : email
    })

    if(!user) {
        res.status(404).json({
            success : false,
            message : "User Login Failed / User Not Found"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password,user.password)

    if(passwordMatch) {
        const token = jwt.sign({id : user._id},USER_JWT_PASS)

        res.status(200).json({
            success : true,
            message : "Sigin Successfull",
            cookies : token
        })

    } else {
        res.status(401).json({
            success : false,
            message : "Password Do not Match /  Wrong / Incorrect Password"
        })
    }
}

const authenticate = async (req,res) => {
    const cookies = req.cookies
    const token = jwt.verify(cookies.uid,USER_JWT_PASS)

    if(token) {
    res.status(200).json({
        success : true,
        message : "Authenticated"
        })
    } else {
        res.status(401).json({
            success : false,
            message : "Authentication Failed"
        })
    }
}

module.exports =  {
    userSignup,
    userLogin,
    authenticate
}