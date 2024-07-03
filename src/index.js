import express from 'express'
import morgan from 'morgan'
import { connectToDB } from './db/conecction.js'
import { pageNotFound } from './middleware/pageNotFound.js'
import { router } from './routes/routes.js'

process.loadEnvFile()

const app = express()

connectToDB()

// Middleware
app.disable('x-powered-by')
app.use(express.json())
app.use(morgan('dev'))

// Router
app.use('/api/electronics', router)

// Main route
app.get('/', (req, res) => {
  res.status(200).json({ response: 'The server is listening...' })
})

app.use(pageNotFound)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})
