import { patientCollection } from '../index.js'
import { Patient } from '../schemas/patients/patient.js'

export const customers = {
  async getCustomers () {
    const customers = await patientCollection.find({}).toArray()
    return customers
  },
  async createCustomer (customer) {
    try {
      const newCustomer = new Patient(customer)
      const result = await patientCollection.insertOne(newCustomer)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  async getUserbyCI (ci) {
    const user = await patientCollection.findOne({ ci })
    return user
  },
  async deleteCustomer (ci) {
    const result = await patientCollection.deleteOne({ ci })
    return result
  },
  async updateCustomer (ci, customer) {
    const result = await patientCollection.updateOne({ ci }, { $set: customer })
    return result
  }
}
