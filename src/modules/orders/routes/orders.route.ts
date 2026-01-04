import { Router } from 'express'
import {
  validateReqBody,
  validateReqQuery,
} from '../../auth/services/validate-request.service'
import { createOrderController } from '../controllers/create-order.controller'
import { orderRequestSchema } from '../dtos/order-request.dto'
import { getOrdersController } from '../controllers/get-orders.controllers'
import { getOrdersQuerySchema } from '../dtos/get-orders-query.dto'
import { advanceOrderController } from '../controllers/advance-order.controller'
import { authMiddleware } from '../../../shared/middlewares/auth.middleware'

const ordersRouter = Router()

ordersRouter.post(
  '/orders',
  authMiddleware,
  validateReqBody(orderRequestSchema),
  createOrderController,
)

ordersRouter.get(
  '/orders',
  authMiddleware,
  validateReqQuery(getOrdersQuerySchema),
  getOrdersController,
)
ordersRouter.patch(
  '/orders/:id/advance',
  authMiddleware,
  advanceOrderController,
)
export { ordersRouter }
