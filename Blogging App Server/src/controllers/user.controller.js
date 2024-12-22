
import User from '../models/user.model.js'


//createUser

const createUser = async(req,res) => {

const {name,email} = req.body

if (!name) return res.json({message:"Name is required"})
if (!email) return res.json({message:"Email is required"})

    const Bloguser =await User.create({
        name,
        email
    })

    res.status(400).json({
        message:"User created Successfully",
        data:Bloguser
    })




}


export {createUser}