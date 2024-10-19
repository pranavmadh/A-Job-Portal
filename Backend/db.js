const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname : String,
    lastname : String,
    email : {type : String, unique : true},
    password : String
})

const userModel = mongoose.model('users',userSchema)

module.exports = {userModel}

