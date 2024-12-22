
import mongoose  from "mongoose";


const studentSchema = new mongoose.Schema({
name:{
type:String,
required:true
},
email:{
    type:String,
    required:true   
},
enrolledCourse:{
type:mongoose.Schema.Types.ObjectId,
ref:"Course"
}


},
{timestamps:true}
)

export default mongoose.model("Students",studentSchema)