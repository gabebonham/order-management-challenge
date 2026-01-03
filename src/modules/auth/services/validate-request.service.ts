import { ZodSchema } from 'zod'
import { NextFunction, Request, Response } from 'express'

export const validateReq =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body)
    next()
  }
