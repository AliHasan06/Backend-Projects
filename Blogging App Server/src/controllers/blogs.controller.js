import Blogs from '../models/blogs.model.js'

const createBlogs = async(req,res) => {

const {title , description} = req.body

if (!title) return res.json({message:"Title is required"})
if (!description) return res.json({message:"description is required"})
const blog = await Blogs.create({
    title,
    description
})


res.json({
    message:"Blog added successfully",
    data:blog
})

}


export {createBlogs}