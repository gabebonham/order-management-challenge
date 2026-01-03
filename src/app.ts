import express, { Request, Response } from 'express'
import { errorMiddleware } from './shared/middlewares/error-handler.middleware'
import { authRouter } from './modules/auth/routes/auth.route'
const app = express()

app.use(express.json())

app.use('/', authRouter)

app.use(errorMiddleware)
export default app
