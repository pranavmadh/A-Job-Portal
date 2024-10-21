const { userModel, communityPostModel } = require("../db")


const addCommunityPost = async (req,res) => {
    const userId = req.userId

    const user = await userModel.findById(userId)

    if(!user) {
        res.status(401).json({
            success : false,
            message : "User not found/ Authentication Failed"
        })
        return
    }

    const bodySchema = z.object({
        description :  z.string().min(10).max(124)
    })

    const parsedData = bodySchema.safeParse(req.body)

    if(!parsedData.success) {
        res.status(400).json({
            success : false,
            message : "Data Schema invalid"
        })
        return
    }

    const description = req.body.description

    try {
        await communityPostModel.create({
            author : userId,
            description : description
        })
    } catch {
        res.status(406).json({
            success : false,
            message : "Failed to input data / DataBase Failed"
        })
    }

    res.status(200).json({
        success : true,
        message : "Data input Successful"
    })

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

    const posts =  await communityPostModel.find({})

    if (!posts) {
        res.status(404).json({
            success : false,
            message : "Posts not Found/ Maybe an error on our side/Sorry"
        })
    }

    res.status(200).json(posts)
}

module.exports = {addCommunityPost , getCommunityPost}