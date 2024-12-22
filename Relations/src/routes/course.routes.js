
import express from 'express'
import { CreateCourse ,getAllCourses} from '../controllers/course.controller.js';

const router = express.Router();

router.post('/course',CreateCourse)
router.get('/allcourse', getAllCourses)


export default router
