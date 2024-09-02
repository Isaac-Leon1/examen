import { users } from '../models/users.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import { validateLogin } from '../schemas/login.js'
import bcrypt from 'bcrypt'

config()

export const login = async (req, res) => {
  try {
    const user = validateLogin(req.body)
    if (!user.email || !user.password) {
      return res.status(400).json({ msg: 'Todos los campos son obligatorios' })
    }

    // const userDB = await userCollection.findOne({ email: user.email })

    const userLogin = await users.login({ email: user.email })
    if (!userLogin) {
      return res.status(400).json({ msg: 'No existe el usuario' })
    }
    bcrypt.compare(user.password, userLogin.password, (err, result) => {
      if (err) {
        return res.status(400).json({ msg: 'Usuario o contraseña incorrectos' })
      }
      if (!result) {
        return res.status(400).json({ msg: 'Usuario o contraseña incorrectos' })
      }
    })

    const { _id, password, ...rest } = userLogin

    const token = jwt.sign({ rest }, process.env.JWT_SECRET)
    return res.json({ userLogin: rest, token })
  } catch (error) {
    console.log(error)
    res.json({ error: error.message })
  }
}
