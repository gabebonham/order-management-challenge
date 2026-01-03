import { NextFunction, Request, Response } from 'express'
import { register } from '../services/auth.service'

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await register(req.body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}
