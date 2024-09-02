import z from 'zod'

const updatePatientSchema = z.object({
  name: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(15, 'El nombre debe tener como máximo 15 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El nombre no puede ser un número'
    }).optional(),
  lastName: z
    .string()
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .max(15, 'El apellido debe tener como máximo 15 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El apellido no puede ser un número'
    }).optional,
  birthdate: z
    .string()
    .min(3, 'La fecha de nacimiento debe tener al menos 3 caracteres')
    .max(10, 'La fecha de nacimiento debe tener como máximo 10 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'La fecha de nacimiento no puede ser un número'
    }).optional,
  genre: z
    .string()
    .min(3, 'El genero debe tener al menos 3 caracteres')
    .max(15, 'El genero debe tener como máximo 15 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El genero no puede ser un número'
    }).optional,
  city: z
    .string()
    .min(3, 'La ciudad debe tener al menos 3 caracteres')
    .max(25, 'La ciudad debe tener como máximo 25 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'La ciudad no puede ser un número'
    }).optional,
  address: z
    .string()
    .min(3, 'La dirección debe tener al menos 3 caracteres')
    .max(50, 'La dirección debe tener como máximo 50 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'La dirección no puede ser un número'
    }).optional,
  phone: z
    .string()
    .min(10, 'El teléfono debe tener al menos 10 caracteres')
    .max(15, 'El teléfono debe tener como máximo 15 caracteres')
    .trim()
    .refine(value => /^\d+$/.test(value), {
      message: 'El teléfono debe ser un número'
    }).optional,
  email: z
    .string()
    .email('Email inválido')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El email no puede ser un número'
    }).optional

})

export const validateUpdatePatient = (data) => {
  const isValid = updatePatientSchema.safeParse(data)
  if (!isValid.success) {
    return isValid.error
  }
  return isValid.data
}
