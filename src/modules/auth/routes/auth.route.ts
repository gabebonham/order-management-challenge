import { Router } from 'express'
import { validateReq } from '../services/validate-request.service'
import { registrationSchema } from '../dtos/registration.dto'
import { registerController } from '../controllers/registration.controller'

const authRouter = Router()

authRouter.post(
  '/register',
  validateReq(registrationSchema),
  registerController,
)
export { authRouter }
