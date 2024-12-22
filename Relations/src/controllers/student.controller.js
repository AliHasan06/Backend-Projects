
import mongoose from 'mongoose';
import Course from '../models/course.model.js'
import Student from "../models/students.model.js";
import nodemailer from 'nodemailer'


// nodemailer configuration



const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});




const addStudent = async(req,res) => {

const {name , email , enrolledCourse } = req.body ;

if (!name) return res.json({message:"Name is required"})
if (!email) return res.json({message:"email is required"})

const student =await Student.create({
    name,
    email,
    enrolledCourse
})

const course = await Course.findByIdAndUpdate(enrolledCourse, {
    $push: { enrolledStudents: student._id },
  });

res.json({
  message:"Student enrolled successfully",
  data:student

}
  
)



}




// get student 


const getStudent = async (req,res) => {
const {id}  =  req.params;

if(!mongoose.Types.ObjectId.isValid(id)){
res.json({message:"Not a valid ID"})
return
}

const student = await Student.findById(id).populate("enrolledCourse")
// 

if (!student)return res.json({message:"No student found"})

  res.status(200).json({
    data:student
   })



}




const getAllStudent  = async(req,res) => {

const page = req.query.page || 1
const limit = req.query.limit || 3

const skip =  (page - 1) * limit
const student = await Student.find({}).skip(skip).limit(limit)
res.json({data:student})

}


const sentEmail = async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
      to: "muhammadarsalanforever@gmail.com",
      subject: "Congratulations for being selected in U19 T20 Cup 2025 ✔",
      text: "Mubaarak ho aap ko k aap ka name aagaya h U19 Team m",
      html: "<b>Hello world?</b>",
    });
    console.log("Message sent: %s", info.messageId);
    res.send("email delivered successfully");
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
};



export {addStudent , getStudent ,getAllStudent,sentEmail}


