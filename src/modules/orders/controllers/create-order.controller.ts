import { NextFunction, Request, Response } from 'express'
import { createOrder } from '../services/create-order.service'

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await createOrder(req.body)
    res.status(201).json(order)
  } catch (err) {
    next(err)
  }
}
