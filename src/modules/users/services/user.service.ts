import { CustomError } from '../../../shared/errors/custom-error'
import { CreateUserDTO, createUserSchema } from '../dtos/create-user.dto'
import User, { IUser } from '../models/user.model'

export const createUser = async (data: CreateUserDTO): Promise<IUser> => {
  const existingUser = await User.findOne({ email: data.email })
  if (existingUser) {
    throw new CustomError('User already exists', 400)
  }
  return await User.create({ email: data.email, password: data.password })
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
