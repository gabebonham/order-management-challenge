import { describe, it, expect, vi, beforeEach } from 'vitest'
import { advanceOrder } from '../advance-order.service'
import { CustomError } from '../../../../shared/errors/custom-error'
import * as ordersRepo from '../../repositories/orders.repository'

describe('advanceOrder', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('should advance state from CREATED to ANALYSIS', async () => {
    const mockOrder = {
      state: 'CREATED',
      save: vi.fn().mockResolvedValue(true),
    }

    vi.spyOn(ordersRepo, 'findOrderById').mockResolvedValue(mockOrder as any)

    const result = await advanceOrder('order-id')

    expect(result.state).toBe('ANALYSIS')
    expect(mockOrder.save).toHaveBeenCalledOnce()
  })

  it('should advance state from ANALYSIS to COMPLETED', async () => {
    const mockOrder = {
      state: 'ANALYSIS',
      save: vi.fn().mockResolvedValue(true),
    }

    vi.spyOn(ordersRepo, 'findOrderById').mockResolvedValue(mockOrder as any)

    const result = await advanceOrder('order-id')

    expect(result.state).toBe('COMPLETED')
    expect(mockOrder.save).toHaveBeenCalledOnce()
  })

  it('should throw error if order does not exist', async () => {
    vi.spyOn(ordersRepo, 'findOrderById').mockResolvedValue(null)

    await expect(advanceOrder('invalid-id')).rejects.toBeInstanceOf(CustomError)

    await expect(advanceOrder('invalid-id')).rejects.toMatchObject({
      message: 'Order not found',
      statusCode: 404,
    })
  })

  it('should block transition if order is COMPLETED', async () => {
    const mockOrder = {
      state: 'COMPLETED',
      save: vi.fn(),
    }

    vi.spyOn(ordersRepo, 'findOrderById').mockResolvedValue(mockOrder as any)

    await expect(advanceOrder('order-id')).rejects.toMatchObject({
      message: 'Order already completed',
      statusCode: 400,
    })

    expect(mockOrder.save).not.toHaveBeenCalled()
  })
})
