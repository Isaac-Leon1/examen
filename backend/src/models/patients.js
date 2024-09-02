import { patientCollection } from '../index.js'
import { Patient } from '../schemas/patients/patient.js'
import mongoose from 'mongoose'

export const patients = {
  async getAllPatients () {
    const patients = await patientCollection.find({}).toArray()
    return patients
  },
  async createPatient (patient) {
    try {
      const newPatient = new Patient(patient)
      const result = await patientCollection.insertOne(newPatient)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  async getPatientById (id) {
    console.log(id)
    const patient = await patientCollection.findOne({ _id: new mongoose.Types.ObjectId(id) })
    console.log(patient)
    return patient
  },
  async deletePatient (id) {
    const result = await patientCollection.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
    return result
  },
  async updatePatient (id, patient) {
    const result = await patientCollection.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: patient })
    return result
  },
  async getUserbyNameandLastName (name, lastName) {
    const patient = await patientCollection.findOne({ name, lastName })
    return patient
  }
}
