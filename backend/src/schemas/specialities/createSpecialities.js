import z from 'zod'

const createSpecialitySchema = z.object({
  code: z
    .string()
    .min(1, 'El código debe tener al menos 1 caracter')
    .max(10, 'El código debe tener como máximo 10 caracteres')
    .trim(),
  name: z
    .string()
    .min(1, 'El nombre debe tener al menos 1 caracter')
    .max(30, 'El nombre debe tener como máximo 30 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El nombre no puede ser un número'
    }),
  description: z
    .string()
    .min(1, 'La descripción debe tener al menos 1 caracter')
    .max(100, 'La descripción debe tener como máximo 100 caracteres')
    .trim()
    .refine(value => isNaN(Number(value)), {
      message: 'El nombre no puede ser un número'
    })
})

export const validateCreateSpeciality = (data) => {
  const isValid = createSpecialitySchema.safeParse(data)
  if (!isValid.success) {
    return isValid.error
  }
  return isValid.data
}
