import { NextFunction, Request, Response } from 'express'
import { login } from '../services/auth.service'

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tokenRes = await login(req.body)
    res.status(200).json(tokenRes)
  } catch (err) {
    next(err)
  }
}
