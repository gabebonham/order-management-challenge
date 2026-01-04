import { RegistrationDTO } from '../../auth/dtos/registration.dto'
import User, { IUser } from '../models/user.model'
import { findUserByEmail, saveUser } from '../repositories/user.repository'

export const createUser = async (data: RegistrationDTO): Promise<IUser> => {
  const userToSave = { email: data.email, password: data.password }
  return await saveUser(userToSave)
}
export const getUsers = async (): Promise<IUser[]> => {
  return await User.find()
}
export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return await findUserByEmail(email)
}
