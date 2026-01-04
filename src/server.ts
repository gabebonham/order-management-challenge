import app from './app'
import 'dotenv/config'
import { connectDB } from './config/database'

connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
