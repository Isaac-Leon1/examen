import { specialityCollection } from '../index.js'
import { Speciality } from '../schemas/specialities/specialities.js'

export const specialities = {
  async getAllSpecialities () {
    const specialities = await specialityCollection.find({}).toArray()
    return specialities
  },
  async getSpecialityById (id) {
    const speciality = await specialityCollection.findOne({ _id: id })
    return speciality
  },
  async createSpeciality (speciality) {
    try {
      const newSpeciality = new Speciality(speciality)
      const result = await specialityCollection.insertOne(newSpeciality)
      return result
    } catch (error) {
      console.log(error)
    }
  },
  async updateSpeciality (id, speciality) {
    const result = await specialityCollection.updateOne({ _id: id }, { $set: speciality })
    return result
  },
  async deleteSpeciality (id) {
    const result = await specialityCollection.deleteOne({ _id: id })
    return result
  }
}
