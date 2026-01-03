import { CreateOrderDTO } from '../dtos/create-order.dto'
import Order, { IOrder } from '../models/order.model'

export const saveOrder = async (order: CreateOrderDTO) => {
  return await Order.create(order)
}
