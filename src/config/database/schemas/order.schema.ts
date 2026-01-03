import mongoose from 'mongoose'
import { v4 } from 'uuid'

const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'DONE'],
      required: true,
    },
  },
  { _id: false },
)

const OrderSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: v4,
      unique: true,
      index: true,
    },
    lab: {
      type: String,
      required: true,
    },
    patient: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ['CREATED', 'ANALYSIS', 'COMPLETED'],
      required: true,
      default: 'CREATED',
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'DELETED'],
      required: true,
      default: 'ACTIVE',
    },
    services: {
      type: [ServiceSchema],
      required: true,
      validate: {
        validator: (v: unknown[]) => v.length > 0,
        message: 'Order must have at least one service',
      },
    },
  },
  { timestamps: true },
)
OrderSchema.set('toJSON', {
  versionKey: false,
  transform: (_, ret) => {
    delete (ret as any)._id
  },
})
export default OrderSchema
