import { NextFunction, Request, Response } from 'express'
import { createOrder } from '../services/create-order.service'
import { advanceOrder } from '../services/advance-order.service'

export const advanceOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await advanceOrder(req.params.id)
    res.status(200).json(order)
  } catch (err) {
    next(err)
  }
}
