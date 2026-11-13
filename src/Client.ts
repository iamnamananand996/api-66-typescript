import { Guest6dd35d51ee9eApiEnvironment } from './http/environment';
import {
  BaseClientOptions,
  BaseRequestOptions,
  NormalizedClientOptions,
  core,
  normalizeClientOptions,
} from './http/types';
import { Supplier } from './http/utils/supplier';
import { makePassthroughRequest } from './http/utils/passthrough-request';
import { PetsClient } from './api/resources/pets';

export declare namespace Guest6dd35d51ee9eApiClient {
  export type Options = BaseClientOptions;
  export interface RequestOptions extends BaseRequestOptions {}
}

export class Guest6dd35d51ee9eApiClient {
  protected readonly _options: NormalizedClientOptions<BaseClientOptions>;

  protected _pets: PetsClient | undefined;

  constructor(options: BaseClientOptions = {}) {
    this._options = normalizeClientOptions(options);
  }

  public get pets(): PetsClient {
    return (this._pets ??= new PetsClient(this._options));
  }

  /**
   * Escape hatch for calling an endpoint this SDK doesn't wrap: resolves `input` against the
   * configured baseUrl/environment, applies the SDK's default headers, auth, timeout, and retry
   * policy, and returns the raw `Response` — no request/response schema validation.
   */
  public async fetch(
    input: Request | string | URL,
    init?: RequestInit,
    requestOptions?: core.PassthroughRequest.RequestOptions,
  ): Promise<Response> {
    return makePassthroughRequest(
      input,
      init,
      {
        baseUrl: this._options.baseUrl ?? this._options.environment,
        headers: this._options.headers,
        timeoutInSeconds: this._options.timeoutInSeconds,
        maxRetries: this._options.maxRetries,
        fetch: this._options.fetch,
        logging: this._options.logging,
      },
      requestOptions,
    );
  }
}
