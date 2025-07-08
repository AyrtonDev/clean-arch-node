import type { HttpRequest, HttpResponse } from './http'

export interface Controller<T, R> {
  handle: (httpRequest: HttpRequest<T>) => HttpResponse<R>
}
