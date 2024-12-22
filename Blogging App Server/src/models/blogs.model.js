
import mongoose, { model } from "mongoose";


const blogsSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
}


})  

export default mongoose.model("blogs",blogsSchema)

