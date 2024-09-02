import { patients } from '../models/patients.js'
import { config } from 'dotenv'
import { validateCreatePatient } from '../schemas/patients/createPatient.js'
import z from 'zod'
import { validateUpdatePatient } from '../schemas/patients/updatePatient.js'

config()

export const getPatients = async (req, res) => {
  try {
    const allPatients = await patients.getAllPatients()
    return res.status(200).json(allPatients)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const createPatient = async (req, res) => {
  try {
    const patient = validateCreatePatient(req.body)
    if (patient instanceof z.ZodError) {
      return res.status(400).json({ errors: patient.errors })
    }
    const customerExist = await patients.getUserbyCI(patient.id)
    if (customerExist) {
      return res.status(400).json({ msg: 'El cliente ya existe' })
    }
    const newPatient = await patients.createPatient(patient)
    return res.status(200).json(newPatient)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const updatePatient = async (req, res) => {
  try {
    const id = req.params.id
    // console.log(ci)
    const patient = validateUpdatePatient(req.body)
    if (patient instanceof z.ZodError) {
      return res.status(400).json({ errors: patient.errors })
    }
    const userExist = await patients.getUserbyCI(id)
    if (!userExist) {
      return res.status(400).json({ message: 'El usuario no existe' })
    }
    const result = await patients.updatePatient(id, patient)
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const deletePatient = async (req, res) => {
  try {
    const id = req.params.id
    const result = await patients.deletePatient(id)
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const getPatientById = async (req, res) => {
  try {
    const id = req.params.id
    const patient = await patients.getPatientById(id)
    return res.status(200).json(patient)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
