import express from 'express'
import cors from 'cors'
import { routes } from './routes/index.js'

export const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('API para gestion de citas medicas')
})

// Routes
app.use('/users', routes)
