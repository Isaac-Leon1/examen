import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const authHeader = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.user
    next()
  } catch (error) {
    console.log(error)
  }
}
