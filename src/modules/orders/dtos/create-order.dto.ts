import { z } from 'zod'

export const createServiceSchema = z.object({
  name: z.string().min(1),
  value: z.number().nonnegative(),
  status: z.enum(['PENDING', 'DONE']),
})

export const createOrderSchema = z.object({
  lab: z.string().min(1),
  patient: z.string().min(1),
  customer: z.string().min(1),

  state: z.enum(['CREATED', 'ANALYSIS', 'COMPLETED']).optional(),
  status: z.enum(['ACTIVE', 'DELETED']).optional(),

  services: z.array(createServiceSchema).min(1, {
    message: 'Order must have at least one service',
  }),
})

export type CreateOrderDTO = z.infer<typeof createOrderSchema>
