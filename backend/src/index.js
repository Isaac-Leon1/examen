import { app } from './server.js'
import { config } from 'dotenv'
import { connectDB } from './database.js'

export const db = await connectDB()
// export const userCollection = db.collection('Users')
// export const customersCollection = db.collection('Customers')
// export const vehiclesCollection = db.collection('Vehicles')
// export const reservationsCollection = db.collection('Reservations')

config()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
