import mongoose, { Model } from 'mongoose'
import { Document } from 'mongoose'
import OrderSchema from '../../../config/database/schemas/order.schema'
interface IService {
  name: string
  value: number
  status: 'PENDING' | 'DONE'
}
export interface IOrder extends Document {
  id: string
  state: 'CREATED' | 'ANALYSIS' | 'COMPLETED'
  lab: string
  patient: string
  customer: string
  status: 'ACTIVE' | 'DELETED'
  services: IService[]
  createdAt: Date
  updatedAt: Date
}

const Order: Model<IOrder> = mongoose.model<IOrder>('Order', OrderSchema)

export default Order
