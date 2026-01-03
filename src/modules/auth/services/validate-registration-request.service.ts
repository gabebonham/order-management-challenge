import { CustomError } from '../../../shared/errors/custom-error'
import { createUserSchema } from '../../users/dtos/create-user.dto'

const validateRegisterDto = (data: any) => {
  const parsedUser = createUserSchema.safeParse(data)
  if (!parsedUser.success) {
    throw new CustomError('Invalid request body', 400)
  }
  return parsedUser.data
}
