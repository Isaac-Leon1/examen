import mongoose from 'mongoose'

const specialitySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
})
export const Speciality = mongoose.model('Speciality', specialitySchema)
