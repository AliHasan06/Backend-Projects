import mongoose, { Schema, Types } from "mongoose";
import bcrypt from 'bcrypt'

const schema = mongoose.Schema

const blogSchema = new schema(
    {
 title:{
    type:String,
    maxlength:50,
    required:true
 },
 description:{
    type:String,
    minlength:80,
    required:true,
 }

    }
)


const userSchema = new schema(
    {
 name:{
    type:String,
    minlength:3,
    required:true
 },
 email:{
    type:String,
unique:true, 
   required:true,
 },
 password:{
    type:String,
    minlength:8,
    required:true
 }

    }
)







userSchema.pre('save',async function(next){
if(!this.isModified('password')) return next()

    this.password= await bcrypt.hash(this.password,10)
    next()

})
export default mongoose.model('Users',userSchema)
