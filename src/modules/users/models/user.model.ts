import mongoose, { Model } from 'mongoose'
import UserSchema from '../../../config/database/schemas/user.schema'
import { Document } from 'mongoose'

export interface IUser extends Document {
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema)

export default User
