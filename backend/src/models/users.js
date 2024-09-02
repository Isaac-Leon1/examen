import { userCollection } from '../index.js'

export const users = {
  async login ({ email, password }) {
    const user = await userCollection.findOne({ email, password })
    return user
  }
}
