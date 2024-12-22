import jwt from 'jsonwebtoken'
const authenticateUser = async(req,res,next)=>{

    const token  = req.headers['authorization']

    if (!token) {
        return res.json({message:"N token found"})
    }

        jwt.verify(token,process.env.ACCESS_JWT_SECRET)
if (err) {
    res.json({message:"Invalid token"})
}

req.user =  user
next()

}
export default authenticateUser