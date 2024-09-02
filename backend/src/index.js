import { app } from './server.js'
import { config } from 'dotenv'
import { connectDB } from './database.js'

export const db = await connectDB()
export const userCollection = db.collection('Users')
export const patientCollection = db.collection('Patients')
export const specialityCollection = db.collection('Specialities')

config()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
