import express, { Request, Response } from 'express'
import { errorMiddleware } from './shared/middlewares/error-handler.middleware'
import { authRouter } from './modules/auth/routes/auth.route'
import { ordersRouter } from './modules/orders/routes/orders.route'
const app = express()

app.use(express.json())

app.use('/', authRouter)
app.use('/api', ordersRouter)

app.use(errorMiddleware)
export default app
