import { Router } from 'express'
import { validateReqBody } from '../services/validate-request.service'
import { registrationSchema } from '../dtos/registration.dto'
import { registerController } from '../controllers/registration.controller'
import { loginSchema } from '../dtos/login.dto'
import { loginController } from '../controllers/login.controller'

const authRouter = Router()

authRouter.post(
  '/register',
  validateReqBody(registrationSchema),
  registerController,
)
authRouter.post('/login', validateReqBody(loginSchema), loginController)
export { authRouter }
