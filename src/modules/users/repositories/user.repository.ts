import { RegistrationDTO } from '../../auth/dtos/registration.dto'
import User, { IUser } from '../models/user.model'

export const saveUser = async (user: RegistrationDTO): Promise<IUser> => {
  return await User.create(user)
}
export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email })
}
