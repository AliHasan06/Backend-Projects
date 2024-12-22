
import Course from '../models/course.model.js'


const CreateCourse = async  (req,res)=>{

const {name , duration} = req.body;

if (!name) return res.json({message:"Name is requires"})

  const  course = await Course.create({
    name , 
    duration
  })

  res.json(
    {
      
      message:"Course created successfully",
      course

    },
    
  )


}


//get all course

const getAllCourses = async(req,res) => {

  const courses = await Course.find({}).populate("enrolledStudents")
  
  if (!courses) return res.json({message:"No course found"})
    res.status(200).json({
  data:courses
    })
  
  }
  

export {CreateCourse , getAllCourses}

