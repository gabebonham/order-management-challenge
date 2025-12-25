import express from 'express'

const app = express()

app.use(express.json())
app.post('/name', (req, res) => {
  const { name } = req.body
  res.send({ nameSent: name })
})
export default app
