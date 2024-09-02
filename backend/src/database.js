import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const uri = process.env.MONGO_URI_ATLAS
export const connectDB = async () => {
  try {
    await mongoose.connect(uri)
    console.log('Database connected')
    const client = mongoose.connection.getClient()
    return client.db('Medilab')
  } catch (error) {
    console.log(error)
  }
}
