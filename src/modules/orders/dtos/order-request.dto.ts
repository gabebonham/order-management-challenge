import { z } from 'zod'

export const serviceRequestSchema = z.object({
  name: z.string().min(1),
  value: z.number().positive(),
})
export const orderRequestSchema = z.object({
  lab: z.string().min(1),
  patient: z.string().min(1),
  customer: z.string().min(1),

  services: z.array(serviceRequestSchema).min(1, {
    message: 'Order must have at least one service',
  }),
})

export type OrderRequestDTO = z.infer<typeof orderRequestSchema>
export type ServiceRequestDTO = z.infer<typeof serviceRequestSchema>
