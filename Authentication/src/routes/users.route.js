
import express from 'express'
import { loginUser, logOut, refreshToken, registerUser } from '../controllers/user.controller.js'
const router = express.Router()


router.post('/register',  registerUser)
router.post('/login',  loginUser)
router.post('/logout',  logOut)
router.post('/refreshtoken',  refreshToken)

export default router
