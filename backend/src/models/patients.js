import { patientCollection } from '../index.js'
import { Patient } from '../schemas/patients/patient.js'

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
    const patient = await patientCollection.findOne({ _id: id })
    return patient
  },
  async deletePatient (id) {
    const result = await patientCollection.deleteOne({ _id: id })
    return result
  },
  async updatePatient (id, patient) {
    const result = await patientCollection.updateOne({ _id: id }, { $set: patient })
    return result
  },
  async getUserbyNameandLastName (name, lastName) {
    const patient = await patientCollection.findOne({ name, lastName })
    return patient
  }
}
