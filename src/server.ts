import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/test', (_, res) => {
  res.status(200).json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
