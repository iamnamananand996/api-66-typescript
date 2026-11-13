import { Guest6dd35d51ee9eApiError } from '../../http/errors/throwable-error';
import { RawResponse } from '../../http/utils/fetcher';

export class NotFoundError extends Guest6dd35d51ee9eApiError {
  constructor(body?: unknown, rawResponse?: RawResponse) {
    super({ message: 'NotFoundError', statusCode: 404, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'NotFoundError';
  }
}
