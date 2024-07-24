const blogModel = require("../models/blog.model")

const createBlog = async (req, res)=>{
    try{
        const body = req.body
        const blogObj = new blogModel({
            title: body.title,
            description: body.description
        })
        const result = await blogObj.save()
        if(result){
            res.status(201).send({
                success: true,
                message: "Blog Created successfully"
            })
        }else{
            res.status(400).send({
                success: false,
                message: "Error in blog creation"
            })
        }

    }catch(err){
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    createBlog
}