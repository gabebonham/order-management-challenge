import { CustomError } from '../../../shared/errors/custom-error'
import { CreateOrderDTO } from '../dtos/create-order.dto'
import { OrderRequestDTO, ServiceRequestDTO } from '../dtos/order-request.dto'
import { saveOrder } from '../repositories/orders.repository'

export const createOrder = async (data: OrderRequestDTO) => {
  const servicesAreValid = validateServices(data.services)
  if (!servicesAreValid) {
    throw new CustomError('Service should not contain value equal to zero', 400)
  }
  const servicesToSave = data.services.map((service) => ({
    ...service,
    status: 'PENDING',
  }))
  const orderToSave = {
    ...data,
    state: 'CREATED',
    status: 'ACTIVE',
    services: servicesToSave,
  } as CreateOrderDTO
  return await saveOrder(orderToSave)
}
const validateServices = (services: ServiceRequestDTO[]) => {
  if (!services || services.length == 0) return false
  return services.every((service) => service.value != 0)
}
