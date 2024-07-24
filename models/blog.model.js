const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
    isPublished: Boolean
},{
    timestamps: true
})

module.exports = mongoose.model("blog", blogSchema)