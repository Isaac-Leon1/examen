import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    required: true,
    trim: true
  },
  year_of_manufacture: {
    type: String,
    required: true,
    trim: true
  },
  plate: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  vehicle_type: {
    type: String,
    required: true,
    trim: true
  },
  mileage: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
})

export const Speciality = mongoose.model('Speciality', vehicleSchema)
