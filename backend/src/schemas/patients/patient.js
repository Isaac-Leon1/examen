import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  birthdate: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      message: props => `${props.value} no es un correo electrónico válido!`
    }
  }
})

export const Patient = mongoose.model('Patient', patientSchema)
