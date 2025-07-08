import type { HttpRequest, HttpResponse } from '@/presentation/protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle(httpRequest: HttpRequest<any>): HttpResponse<any> {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 200,
      body: {},
    }
  }
}
