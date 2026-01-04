import { CreateOrderDTO } from '../dtos/create-order.dto'
import Order from '../models/order.model'
interface GetOrdersParams {
  filter?: any
  skip: number
  limit: number
}
export const findOrders = async ({ filter, skip, limit }: GetOrdersParams) => {
  const orders = Order.find(filter)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .lean()

  return orders
}
export const getOrdersCount = async ({ filter }: GetOrdersParams) => {
  const total = Order.countDocuments(filter)

  return total
}
export const saveOrder = async (order: CreateOrderDTO) => {
  return await Order.create(order)
}
export const findOrderById = async (id: string) => {
  return await Order.findOne({ id })
}
