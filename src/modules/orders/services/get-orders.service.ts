import { GetOrdersQueryDTO } from '../dtos/get-orders-query.dto'
import { findOrders, getOrdersCount } from '../repositories/orders.repository'

export const getOrders = async (query: GetOrdersQueryDTO) => {
  const { page, limit, state } = query
  const skip = (page - 1) * limit
  const filter: any = {}

  if (state) {
    filter.state = state
  }

  const orders = await findOrders({
    filter,
    skip,
    limit,
  })
  const total = await getOrdersCount({
    filter,
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
