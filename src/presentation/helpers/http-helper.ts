import type { HttpResponse } from '@/presentation/protocols/http'
import { ServerError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
})
