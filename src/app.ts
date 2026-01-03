import express, { Request, Response } from 'express'
import {
  createUser,
  getUserById,
  getUsers,
} from './modules/users/services/user.service'
import { create } from 'domain'
const app = express()

app.use(express.json())
app.get('/users', async (req: Request, res: Response) => {
  const users = await getUsers()
  res.json(users)
})
app.get('/users/:id', async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id)
  res.json(user)
})
app.post('/users', async (req: Request, res: Response) => {
  const user = await createUser(req.body)
  res.json(user)
})
export default app
