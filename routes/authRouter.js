import express, { response } from 'express'
import { loginUser, userRegister } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/register', userRegister)

authRouter.post('/login', loginUser)

export default authRouter