import mongoose from 'mongoose'
import { v4 } from 'uuid'
const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: v4,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true },
)
UserSchema.set('toJSON', {
  versionKey: false,
  transform: (_, ret) => {
    delete (ret as any)._id
  },
})
export default mongoose.model('User', UserSchema)
