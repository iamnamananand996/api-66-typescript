import * as core from '../../../../core';
import type * as Guest6dd35d51ee9eApi from '../../..';
import { BaseService } from '../../../../services/base-service';
import {
  BaseClientOptions,
  BaseRequestOptions,
  ContentType,
  HttpResponse,
} from '../../../../http/types';
import { RequestBuilder } from '../../../../http/transport/request-builder';
import { SerializationStyle } from '../../../../http/serialization/base-serializer';
import { Guest6dd35d51ee9eApiError } from '../../../../http/errors/throwable-error';
import { HttpResponsePromise, WithRawResponse } from '../../../../http/response-promise';
import { Supplier, resolveHeaders } from '../../../../http/utils/supplier';
import { Guest6dd35d51ee9eApiEnvironment } from '../../../../http/environment';
import { Pet, petResponse } from '../../../types/Pet';
import { GetPetRequest, ListPetsRequest } from './requests';
import { NewPet, newPetRequest } from '../types/NewPet';

export declare namespace PetsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Pets operations.
 * Provides methods to interact with Pets-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PetsClient extends BaseService {
  protected listPetsConfig?: Partial<BaseClientOptions>;

  protected createPetConfig?: Partial<BaseClientOptions>;

  protected getPetConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for listPets.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setListPetsConfig(config: Partial<BaseClientOptions>): this {
    this.listPetsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for createPet.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setCreatePetConfig(config: Partial<BaseClientOptions>): this {
    this.createPetConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getPet.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  protected setGetPetConfig(config: Partial<BaseClientOptions>): this {
    this.getPetConfig = config;
    return this;
  }

  /**
   *
   * @param {Guest6dd35d51ee9eApi.ListPetsRequest} request
   * @param {PetsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<Guest6dd35d51ee9eApi.Pet[]>} - A page of pets.
   *
   * @throws {@link errors.Guest6dd35d51ee9eApiError}
   * @throws {@link errors.Guest6dd35d51ee9eApiTimeoutError}
   *
   * @example
   *     await client.pets.listPets()
   */
  listPets(
    request: Guest6dd35d51ee9eApi.ListPetsRequest = {},
    requestOptions?: PetsClient.RequestOptions,
  ): HttpResponsePromise<Guest6dd35d51ee9eApi.Pet[]> {
    return HttpResponsePromise.fromPromise(this.__listPets(request, requestOptions));
  }
  private async __listPets(
    request: Guest6dd35d51ee9eApi.ListPetsRequest = {},
    requestOptions?: PetsClient.RequestOptions,
  ): Promise<WithRawResponse<Guest6dd35d51ee9eApi.Pet[]>> {
    const resolvedConfig = this.getResolvedConfig(this.listPetsConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/pets')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.list(petResponse),
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'limit',
        value: request.limit,
      })
      .build();
    return this.client.callWithRawResponse<Guest6dd35d51ee9eApi.Pet[]>(_request);
  }

  /**
   *
   * @param {Guest6dd35d51ee9eApi.NewPet} request
   * @param {PetsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<Guest6dd35d51ee9eApi.Pet>} - The created pet.
   *
   * @throws {@link errors.Guest6dd35d51ee9eApiError}
   * @throws {@link errors.Guest6dd35d51ee9eApiTimeoutError}
   *
   * @example
   *     await client.pets.createPet({
   *         name: "name",
   *         species: "dog"
   *     })
   */
  createPet(
    request: Guest6dd35d51ee9eApi.NewPet,
    requestOptions?: PetsClient.RequestOptions,
  ): HttpResponsePromise<Guest6dd35d51ee9eApi.Pet> {
    return HttpResponsePromise.fromPromise(this.__createPet(request, requestOptions));
  }
  private async __createPet(
    request: Guest6dd35d51ee9eApi.NewPet,
    requestOptions?: PetsClient.RequestOptions,
  ): Promise<WithRawResponse<Guest6dd35d51ee9eApi.Pet>> {
    const resolvedConfig = this.getResolvedConfig(this.createPetConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('POST')
      .setPath('/pets')
      .setRequestSchema(newPetRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: petResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(request)
      .build();
    return this.client.callWithRawResponse<Guest6dd35d51ee9eApi.Pet>(_request);
  }

  /**
   *
   * @param {Guest6dd35d51ee9eApi.GetPetRequest} request
   * @param {PetsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<Guest6dd35d51ee9eApi.Pet>} - The pet.
   *
   * @throws {@link Guest6dd35d51ee9eApi.NotFoundError}
   * @throws {@link errors.Guest6dd35d51ee9eApiError}
   * @throws {@link errors.Guest6dd35d51ee9eApiTimeoutError}
   *
   * @example
   *     await client.pets.getPet({
   *         petId: 1
   *     })
   */
  getPet(
    request: Guest6dd35d51ee9eApi.GetPetRequest,
    requestOptions?: PetsClient.RequestOptions,
  ): HttpResponsePromise<Guest6dd35d51ee9eApi.Pet> {
    return HttpResponsePromise.fromPromise(this.__getPet(request, requestOptions));
  }
  private async __getPet(
    request: Guest6dd35d51ee9eApi.GetPetRequest,
    requestOptions?: PetsClient.RequestOptions,
  ): Promise<WithRawResponse<Guest6dd35d51ee9eApi.Pet>> {
    const resolvedConfig = this.getResolvedConfig(this.getPetConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ?? resolvedConfig.environment,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/pets/{petId}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: petResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'petId',
        value: request.petId,
      })
      .build();
    return this.client.callWithRawResponse<Guest6dd35d51ee9eApi.Pet>(_request);
  }
}
