import type { HttpResponse } from '@/presentation/protocols/http'

export const badRequest = (error: Error): HttpResponse<any> => ({
  statusCode: 400,
  body: error,
})
