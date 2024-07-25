const { verify } = require("jsonwebtoken")

const verifyToken = async (req, res, next)=>{
    try{
        console.log("authorizaton",req.headers.authorization)

        const token = req.headers.authorization
        if(token){
            const bearerToken = token.split(" ")[1]
            if(bearerToken){
                if(verify(bearerToken, 'SECRET'))
                    next()
            }else{
                return res.status(400).send({
                    success: false,
                    message: "Invalid token"
                })
            }
        }else{
            return res.status(400).send({
                success: false,
                message: "Token missing"
            })
        }


    }catch(err){
        console.log("err:", err)
        return res.status(500).send({
            success: false,
            message: err.message
        })

    }
}
module.exports = {
    verifyToken
}