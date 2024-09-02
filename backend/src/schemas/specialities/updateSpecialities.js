import z from 'zod'

const updateSpecialitySchema = z.object({
  code: z
    .string()
    .min(1, 'El código debe tener al menos 1 caracter')
    .max(10, 'El código debe tener como máximo 10 caracteres')
    .trim()
    .optional(),
  name: z
    .string()
    .min(1, 'El nombre debe tener al menos 1 caracter')
    .max(30, 'El nombre debe tener como máximo 30 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El nombre no puede ser un número'
    })
    .optional(),
  description: z
    .string()
    .min(1, 'La descripción debe tener al menos 1 caracter')
    .max(100, 'La descripción debe tener como máximo 100 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El nombre no puede ser un número'
    })
    .optional()
})

export const validateUpdateSpeciality = (data) => {
  const isValid = updateSpecialitySchema.safeParse(data)
  if (!isValid.success) {
    return isValid.error
  }
  return isValid.data
}
