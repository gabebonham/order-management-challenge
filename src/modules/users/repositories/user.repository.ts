import { CustomError } from '../../../shared/errors/custom-error'
import User, { IUser } from '../models/user.model'

export const saveUser = async (user: {
  email: string
  password: string
}): Promise<IUser> => {
  return await User.create(user)
}
export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email })
}
