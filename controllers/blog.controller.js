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

const getBlogs = async (req, res)=>{
    try{
        const result = await blogModel.find()
        if(result){
            res.status(200).send({
                success: true,
                data: result
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

const getBlogById = async (req, res)=>{
    try{
        const result = await blogModel.findById(req.params.id)
        if(result){
            res.status(200).send({
                success: true,
                data: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "Error in blog getBlogById"
            })
        }

    }catch(err){
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const updateBlogById = async (req, res)=>{
    try{
        const body = req.body
        const result = await blogModel.findByIdAndUpdate(req.params.id,body)
        if(result){
            res.status(200).send({
                success: true,
                data: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "Error in blog updateBlogById"
            })
        }

    }catch(err){
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const removeBlogById = async (req, res)=>{
    try{
        const body = req.body
        const result = await blogModel.findByIdAndDelete(req.params.id)
        if(result){
            res.status(200).send({
                success: true,
                data: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "Error in blog removeBlogById"
            })
        }

    }catch(err){
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

const removeAll = async (req, res)=>{
    try{
        // const body = req.body
        const result = await blogModel.deleteMany()
        if(result){
            res.status(200).send({
                success: true,
                data: result
            })
        }else{
            res.status(400).send({
                success: false,
                message: "Error in blog removeAll"
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
    createBlog,
    getBlogs,
    getBlogById,
    updateBlogById,
    removeBlogById,
    removeAll
}