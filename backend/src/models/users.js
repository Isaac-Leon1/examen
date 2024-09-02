import { userCollection } from '../index.js'

export const users = {
  async login ({ email }) {
    const user = await userCollection.findOne({ email })
    return user
  }
}
