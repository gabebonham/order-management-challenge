import { z } from 'zod'

export const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type RegistrationDTO = z.infer<typeof registrationSchema>
