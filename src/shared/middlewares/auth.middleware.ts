import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'
import { verifyToken } from '../../modules/auth/services/jwt.service'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new CustomError('Authorization header missing', 401)
  }

  const [type, token] = authHeader.split(' ')

  if (type !== 'Bearer' || !token) {
    throw new CustomError('Token must be Bearer', 401)
  }

  try {
    verifyToken(token)
    next()
  } catch {
    throw new CustomError('Invalid token', 401)
  }
}
