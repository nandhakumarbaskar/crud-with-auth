const userController = require("../controllers/user.controller")
const router = require("express").Router()

router.post("/signUp", userController.signUp)
router.post("/login", userController.login)

module.exports = router