import { specialities } from '../models/specialities.js'
import { config } from 'dotenv'
import { validateCreateSpeciality } from '../schemas/specialities/createSpecialities.js'
import { validateUpdateSpeciality } from '../schemas/specialities/updateSpecialities.js'
import z from 'zod'

config()

export const getSpecialities = async (req, res) => {
  try {
    const allSpecialities = await specialities.getAllSpecialities()
    return res.status(200).json(allSpecialities)
  } catch (error) {
    console.log(error)
  }
}

export const createSpeciality = async (req, res) => {
  try {
    const speciality = validateCreateSpeciality(req.body)
    if (speciality instanceof z.ZodError) {
      return res.status(400).json({ errors: speciality.errors })
    }
    const specialityExist = await specialities.getSpecialityByName(speciality.name)
    if (specialityExist) {
      return res.status(400).json({ msg: 'La especialidad ya existe' })
    }
    const newSpeciality = await specialities.createSpeciality(speciality)
    return res.status(200).json(newSpeciality)
  } catch (error) {
    console.log(error)
  }
}

export const updateSpeciality = async (req, res) => {
  try {
    const id = req.params.id
    const speciality = validateUpdateSpeciality(req.body)
    if (speciality instanceof z.ZodError) {
      return res.status(400).json({ errors: speciality.errors })
    }
    const specialityExist = await specialities.getSpecialityByName(speciality.name)
    if (specialityExist) {
      return res.status(400).json({ msg: 'La especialidad ya existe' })
    }
    const result = await specialities.updateSpeciality(id, speciality)
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

export const deleteSpeciality = async (req, res) => {
  try {
    const id = req.params.id
    const result = await specialities.deleteSpeciality(id)
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

export const getSpecialityById = async (req, res) => {
  try {
    const id = req.params.id
    const speciality = await specialities.getSpecialityById(id)
    return res.status(200).json(speciality)
  } catch (error) {
    console.log(error)
  }
}
