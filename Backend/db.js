const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name : String,
    username : {type : String, unique : true},
    email : {type : String, unique : true},
    password : String
})

const communityPostSchema = new Schema({
    author : {type : String, ref: 'userSchema'},
    isAnonymous : {type : Boolean, default : false},
    authorName : String,
    description : String
})

const userModel = mongoose.model('users',userSchema)
const communityPostModel = mongoose.model('community-posts',communityPostSchema)

module.exports = {userModel , communityPostModel}

