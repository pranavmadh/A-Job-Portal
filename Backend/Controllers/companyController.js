const z = require('zod')
const bcrypt = require('bcrypt')
const { userModel } = require('../db')
const jwt = require('jsonwebtoken')
const { ADMIN_JWT_PASS } = require('../config')


const companySignup = async (req,res) => {

    const bodySchema = z.object({
        companyname :  z.string(),
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

    const companyname = req.body.companyname
    const email = req.body.email
    const password = req.body.password
    
    const encyptedPassword = await bcrypt.hash(password, 5)

    try {
        await userModel.create({
            companyname : companyname,
            email :  email,
            password : encyptedPassword
        })
    } catch {
        res.status(400).json({
            success :  false,
            message : "Bad Request / Not Able to input the Database"
        })
    }

    res.status(200).json({
        success:  true,
        message : "Data input Susccessful"
    })
}

const companyLogin = async (req,res) => {
    const email =  req.body.email
    const password = req.body.password


    const user = await userModel.findOne({
        email : email
    })

    if(!user) {
        res.status(404).json({
            success : false,
            message : "Company Login Failed / User Not Found"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password,user.password)

    if(passwordMatch) {
        const token = jwt.sign({id : user._id},ADMIN_JWT_PASS)

        res.status(200).json({
            success : true,
            message : "Sigin Successfull",
            token : token
        })

    } else {
        res.status(401).json({
            success : false,
            message : "Password Do not Match /  Wrong / Incorrect Password"
        })
    }
}

module.exports =  {
    companySignup,
    companyLogin
}