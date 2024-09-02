import { Router } from 'express'
import { login } from '../controllers/user.js'

export const router = Router()
router.get('/', (req, res) => {
  res.send('This is the users Module')
})
router.post('/login', login)
