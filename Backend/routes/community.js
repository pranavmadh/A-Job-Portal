const express = require('express')
const userAuth = require('../Middlewares/userAuth')
const communityRouter = express.Router()

const { addCommunityPost,getCommunityPost } = require('../Controllers/communitySectionControllers')


communityRouter.post('/post',userAuth , addCommunityPost)
communityRouter.get('/getpost',userAuth, getCommunityPost)

module.exports = {communityRouter}