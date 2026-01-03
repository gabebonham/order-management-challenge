import { GetOrdersQueryDTO } from '../dtos/get-orders-query.dto'
import { findOrders } from '../repositories/orders.repository'

export const getOrders = async (query: GetOrdersQueryDTO) => {
  const { page, limit, state } = query
  const skip = (page - 1) * limit
  const { orders, total } = await findOrders({
    state,
    skip,
    limit,
  })
  return {
    data: orders,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  }
}
