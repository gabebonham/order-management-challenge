import { ZodSchema } from 'zod'
import { NextFunction, Request, Response } from 'express'

export const validateReqBody =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body)
    next()
  }
export const validateReqQuery =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.parse(req.query)
    res.locals.query = parsed
    next()
  }
