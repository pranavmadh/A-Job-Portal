const { userModel, communityPostModel } = require("../db")
const z = require('zod')


const addCommunityPost = async (req,res) => {
    const userId = req.userId

    const user = await userModel.findById(userId)
    console.log(user)

    if(!user) {
        res.status(401).json({
            success : false,
            message : "User not found/ Authentication Failed"
        })
        return
    }

    const bodySchema = z.object({
        description :  z.string().min(10).max(124),
        isAnonymous : z.boolean()
    })

    const parsedData = bodySchema.safeParse(req.body)

    if(!parsedData.success) {
        res.status(400).json({
            success : false,
            message : "Data Schema invalid"
        })
        return
    }

    const { description, isAnonymous } = req.body

    try {
        await communityPostModel.create({
            author : userId,
            authorName : user.name,
            isAnonymous : isAnonymous,
            description : description
        })
        res.status(200).json({
            success : true,
            message : "Data input Successful"
        })
    } catch (error) {
        console.error('Error creating post:', error)
        res.status(406).json({
            success : false,
            message : "Failed to input data / DataBase Failed"
        })
    }

}



const getCommunityPost = async (req,res) => {
    const userId = req.userId
    

    const user = await userModel.findById(userId)

    if(!user) {
        res.status(401).json({
            success : false,
            message : "User not found/ Authentication Failed"
        })
        return
    }

    try {
        const posts = await communityPostModel.find()

        if (!posts || posts.length === 0) {
            res.status(404).json({
                success : false,
                message : "Posts not Found/ Maybe an error on our side/Sorry"
            })
            return
        }
        res.status(200).json({
            success : true,
            posts : posts
        })
    } catch (error) {
        console.error('Error fetching posts:', error)
        res.status(500).json({
            success : false,
            message : "Error fetching posts"
        })
    }

}

module.exports = {addCommunityPost , getCommunityPost}