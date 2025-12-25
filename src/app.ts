import express from 'express'
import User from './config/database/schemas/user.schema'
const app = express()

app.use(express.json())
app.post('/users', async (req, res) => {
  const user = await User.create(req.body)
  return res.status(201).json(user)
})
app.get('/users', async (req, res) => {
  const users = await User.find()
  return res.json(users)
})
export default app
