import { CreateOrderDTO } from '../dtos/create-order.dto'
import Order, { IOrder } from '../models/order.model'
interface GetOrdersParams {
  state?: string
  skip: number
  limit: number
}

export const findOrders = async ({ state, skip, limit }: GetOrdersParams) => {
  const filter: any = {}

  if (state) {
    filter.state = state
  }

  const [orders, total] = await Promise.all([
    Order.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),
    Order.countDocuments(filter),
  ])

  return { orders, total }
}
export const saveOrder = async (order: CreateOrderDTO) => {
  return await Order.create(order)
}
