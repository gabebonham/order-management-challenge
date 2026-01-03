import { IUser } from '../../users/models/user.model'
import { createUser } from '../../users/services/user.service'
import { RegistrationDTO } from '../dtos/registration.dto'
import { hashPassword } from './password.service'

export const register = async (data: RegistrationDTO): Promise<IUser> => {
  const hashedPassword = await hashPassword(data.password)
  data.password = hashedPassword
  return await createUser(data)
}
