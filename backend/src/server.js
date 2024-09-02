import express from 'express'
import cors from 'cors'
import { router } from './routes/users.js'
import { routerPatients } from './routes/patients.js'
import { routerSpecialities } from './routes/specialities.js'

export const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('API para gestion de citas medicas')
})

// Routes
app.use('/users', router)
app.use('/patients', routerPatients)
app.use('/specialities', routerSpecialities)
