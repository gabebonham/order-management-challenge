import { CustomError } from '../../../shared/errors/custom-error'
import { IUser } from '../../users/models/user.model'
import { createUser, getUserByEmail } from '../../users/services/user.service'
import { RegistrationDTO } from '../dtos/registration.dto'
import { TokenResponse } from '../dtos/token.dto'
import { generateToken } from './jwt.service'
import { hashPassword, verifyPassword } from './password.service'

export const register = async (data: RegistrationDTO): Promise<IUser> => {
  const existingUser = await getUserByEmail(data.email)
  if (existingUser) {
    throw new CustomError('User already exists', 400)
  }
  const hashedPassword = await hashPassword(data.password)
  data.password = hashedPassword
  return await createUser(data)
}
export const login = async (data: RegistrationDTO): Promise<TokenResponse> => {
  const existingUser = await getUserByEmail(data.email)
  if (!existingUser) {
    throw new CustomError('User not found', 404)
  }
  const passwordIsValid = await verifyPassword(
    data.password,
    existingUser.password,
  )
  if (!passwordIsValid) {
    throw new CustomError('Invalid credentials', 401)
  }

  const tokenData = generateToken({ sub: existingUser.id })
  return {
    access_token: tokenData.token,
    expiresIn: tokenData.expIn,
  }
}
