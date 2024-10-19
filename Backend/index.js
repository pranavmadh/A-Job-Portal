const express = require("express")
const app = express()
const dotenv = require('dotenv')
const port  = process.env.PORT || 2000

app.use(express.json())

app.listen(port,() => {
    console.log("Listening to Port " + port)
})