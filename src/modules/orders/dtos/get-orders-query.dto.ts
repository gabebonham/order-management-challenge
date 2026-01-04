import { z } from 'zod'

export const getOrdersQuerySchema = z
  .object({
    state: z.enum(['CREATED', 'ANALYSIS', 'COMPLETED']).optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(50).default(10),
  })
  .strip()

export type GetOrdersQueryDTO = z.infer<typeof getOrdersQuerySchema>
