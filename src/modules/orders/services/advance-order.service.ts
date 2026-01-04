import { CustomError } from '../../../shared/errors/custom-error'
import { findOrderById } from '../repositories/orders.repository'

export const advanceOrder = async (id: string) => {
  const targetOrder = await findOrderById(id)
  if (!targetOrder) {
    throw new CustomError('Order not found', 404)
  }
  if (targetOrder.state == 'COMPLETED') {
    throw new CustomError('Order already completed', 400)
  }
  targetOrder.state = getNextState(targetOrder.state)
  await targetOrder.save()
  return targetOrder
}
const getNextState = (state: 'CREATED' | 'ANALYSIS' | 'COMPLETED') => {
  return state == 'CREATED' ? 'ANALYSIS' : 'COMPLETED'
}
