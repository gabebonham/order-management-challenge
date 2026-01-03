import { Router } from 'express'
import { validateReq } from '../../auth/services/validate-request.service'
import { createOrderController } from '../controllers/create-order.controller'
import { orderRequestSchema } from '../dtos/order-request.dto'
import { getOrdersController } from '../controllers/get-orders.controllers'
import { getOrdersQuerySchema } from '../dtos/get-orders-query.dto'

const ordersRouter = Router()

ordersRouter.post(
  '/orders',
  validateReq(orderRequestSchema),
  createOrderController,
)

ordersRouter.get(
  '/orders',
  validateReq(getOrdersQuerySchema),
  getOrdersController,
)

export { ordersRouter }
