
import express from 'express'
import { createBlogs } from '../controllers/blogs.controller.js'

const router = express.Router()

router.post('/blog',createBlogs)


export default router


