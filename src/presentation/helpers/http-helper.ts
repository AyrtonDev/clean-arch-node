import type { HttpResponse } from '@/presentation/protocols/http'
import { ServerError } from '../errors/server-error'

export const badRequest = (error: Error): HttpResponse<any> => ({
  statusCode: 400,
  body: error,
})

export const serverError = (): HttpResponse<ServerError> => ({
  statusCode: 500,
  body: new ServerError(),
})
