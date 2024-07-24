const jwt = require("jsonwebtoken")
const { genSaltSync,hashSync, compareSync } = require("bcryptjs")
const userModel = require("../models/user.model")


const signUp = async (req, res)=>{
    try{
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        const userObj = new userModel({
            username: body.username,
            password: body.password
        })
        const result = await userObj.save()
        if(result){
            res.status(201).send({
                success: true,
                message: "User created successfully.."
            })
        }else{
            res.status(400).send({
                success: true,
                message: "Error in user creation."
            })
        }
    }catch(err){
        res.status(500).send({
            success: true,
            message: err.message
        })
    }

}

const login = async (req, res)=>{
    try{
        const body = req.body
        const result = await userModel.findOne({username: body.username})
        if(result){
            // result.password
            if(compareSync(body.password, result.password)){
                const token = jwt.sign({username: result.username}, 'SECRET', { expiresIn: '1h'})
                res.status(200).send({
                    success: true,
                    message: "Login success",
                    token: token
                })

            }else{
                res.status(201).send({
                    success: true,
                    message: "Error in user password"
                })

            }
            
        }else{
            res.status(400).send({
                success: true,
                message: "Error in user login."
            })
        }
    }catch(err){
        res.status(500).send({
            success: true,
            message: err.message
        })
    }

}

module.exports = {
    signUp,
    login
}