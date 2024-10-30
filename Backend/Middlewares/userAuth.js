const jwt = require('jsonwebtoken')
const { USER_JWT_PASS } = require('../config')

const userAuth = (req,res,next) => {
    
    const token = req.cookies?.uid

    console.log(token)
    
    if(!token || token === undefined) {
        res.status(401).json({
            success : false,
            message : "Authorization Failed!"
        })
    }

    const user = jwt.verify(token,USER_JWT_PASS)

    if(user) {
        req.userId = user.id
        next()
    } else {
        res.status(401).json({
            success : false,
            message :  "Authentication Failed"
        })
    }
}

module.exports = userAuth