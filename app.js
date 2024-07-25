const express = require("express")
const app = express()
require("dotenv").config()
require("./config/db.config")
const bodyParser = require("body-parser")
app.use(bodyParser.json())

const blogRouter = require("./routes/blog.routes")
const userRouter = require("./routes/user.routes")
const { verifyToken } = require("./middleware/auth.middleware")

app.use("/api/blog", verifyToken, blogRouter)
app.use("/api", userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server up and running on port ${process.env.PORT}`)
})