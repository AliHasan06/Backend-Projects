
import express from 'express'
import { loginUser, logOut, refreshToken, registerUser, uploadImage } from '../controllers/user.controller.js'
import { upload } from '../middleware/image-uploader.js'

const router = express.Router()

router.post('/register',  registerUser)
router.post('/login',  loginUser)
router.post('/logout',  logOut)
router.post('/refreshtoken',  refreshToken)
router.post('/uploadimage',upload.single('image'),  uploadImage)

export default router
