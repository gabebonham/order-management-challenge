import { NextFunction, Request, Response } from 'express'
import { getOrders } from '../services/get-orders.service'

export const getOrdersController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ordersData = await getOrders(req.query as any)
    res.status(201).json(ordersData)
  } catch (err) {
    next(err)
  }
}
