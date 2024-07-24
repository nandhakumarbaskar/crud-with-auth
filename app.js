const express = require("express")
const app = express()
require("dotenv").config()
require("./config/db.config")
const bodyParser = require("body-parser")
app.use(bodyParser.json())

const blogRouter = require("./routes/blog.routes")

app.use("/api", blogRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server up and running on port ${process.env.PORT}`)
})