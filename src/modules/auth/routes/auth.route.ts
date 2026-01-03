import { Router } from 'express'
import { validateReq } from '../services/validate-request.service'
import { registrationSchema } from '../dtos/registration.dto'
import { registerController } from '../controllers/registration.controller'
import { loginSchema } from '../dtos/login.dto'
import { loginController } from '../controllers/login.controller'

const authRouter = Router()

authRouter.post(
  '/register',
  validateReq(registrationSchema),
  registerController,
)
authRouter.post('/login', validateReq(loginSchema), loginController)
export { authRouter }
