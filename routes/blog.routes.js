const router = require("express").Router()
const blogController = require("../controllers/blog.controller")
router.post("/blog", blogController.createBlog)

module.exports = router