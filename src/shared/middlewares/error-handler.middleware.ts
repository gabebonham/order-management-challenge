import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { CustomError } from '../errors/custom-error'

export const errorMiddleware = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Invalid request',
      errors: err,
    })
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      message: err.message,
      statusCode: err.statusCode,
    })
  }

  console.error(err)

  return res.status(500).json({
    message: 'Internal server error',
  })
}
