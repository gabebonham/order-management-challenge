import { Router } from 'express'
import { validateReq } from '../../auth/services/validate-request.service'
import { createOrderController } from '../controllers/create-order.controller'
import { orderRequestSchema } from '../dtos/order-request.dto'

const ordersRouter = Router()

ordersRouter.post(
  '/orders',
  validateReq(orderRequestSchema),
  createOrderController,
)
export { ordersRouter }
