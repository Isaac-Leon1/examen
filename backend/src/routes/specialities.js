import { Router } from 'express'
import { createSpeciality, getSpecialities, getSpecialityById, updateSpeciality, deleteSpeciality } from '../controllers/specialities.js'
import { authHeader } from '../middlewares/auth.js'

export const routerSpecialities = Router()
routerSpecialities.get('/', authHeader, getSpecialities)
routerSpecialities.get('/:id', authHeader, getSpecialityById)
routerSpecialities.post('/', authHeader, createSpeciality)
routerSpecialities.put('/:id', authHeader, updateSpeciality)
routerSpecialities.delete('/:id', authHeader, deleteSpeciality)
