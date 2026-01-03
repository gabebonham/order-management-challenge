import { CustomError } from '../../../shared/errors/custom-error'
import { RegistrationDTO } from '../../auth/dtos/registration.dto'
import User, { IUser } from '../models/user.model'
import { getUserByEmail, saveUser } from '../repositories/user.repository'

export const createUser = async (data: RegistrationDTO): Promise<IUser> => {
  const existingUser = await getUserByEmail(data.email)
  if (existingUser) {
    throw new CustomError('User already exists', 400)
  }
  const userToSave = { email: data.email, password: data.password }
  return await saveUser(userToSave)
}
export const getUsers = async (): Promise<IUser[]> => {
  return await User.find()
}
export const getUserById = async (id: string): Promise<IUser> => {
  const user = await User.findOne({ id })
  if (!user) {
    throw new CustomError('User not found', 404)
  }
  return user
}
