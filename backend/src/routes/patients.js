import { Router } from 'express'
import { createPatient, getPatients, getPatientByaId, updatePatient, deletePatientbyId } from '../controllers/patients.js'
import { authHeader } from '../middlewares/auth.js'

export const routerPatients = Router()
routerPatients.get('/', authHeader, getPatients)
routerPatients.get('/:id', authHeader, getPatientByaId)
routerPatients.post('/', authHeader, createPatient)
routerPatients.put('/:id', authHeader, updatePatient)
routerPatients.delete('/:id', authHeader, deletePatientbyId)
