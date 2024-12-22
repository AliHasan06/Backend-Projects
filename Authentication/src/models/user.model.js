import mongoose, { Schema, Types } from "mongoose";
import bcrypt from 'bcrypt'

const schema = mongoose.Schema

const userSchema = new schema(
    {
        email:{
            type:String,
            required:[true,'Email is required'],
            unique:true
        
        },
        password:{
            type:String,
            required:[true,'Password is required']
        }
    }
)


userSchema.pre('save',async function(next){
if(!this.isModified('password')) return next()

    this.password= await bcrypt.hash(this.password,10)
    next()

})
export default mongoose.model('Users',userSchema)
