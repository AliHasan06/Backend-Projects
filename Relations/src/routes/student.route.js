
import express from "express"
import {addStudent,getAllStudent,getStudent, sentEmail} from "../controllers/student.controller.js"

const router = express.Router()

router.post("/student",addStudent)
router.get("/student/:id",getStudent)
router.get("/student",getAllStudent)
router.get("/sendmail",sentEmail)



export default router

