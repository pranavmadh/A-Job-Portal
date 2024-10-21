const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { userRouter } = require("./routes/user")
const cookieParser = require('cookie-parser')
const { communityRouter } = require("./routes/community")
require('dotenv').config()
const MONGOOSE_URL = process.env.MONGOOSE_CONNECTION_STRING
const port  =  process.env.PORT

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/user',userRouter)
app.use('/api/v1/user/community',communityRouter)

const main = async() => {
    await  mongoose.connect(MONGOOSE_URL).then(() => {
        console.log("Database Connected Successfully")
    });
    app.listen(port,() => {
        console.log("Listening to Port " + port)
    })
}

main()
