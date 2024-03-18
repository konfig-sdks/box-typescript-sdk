/* tslint:disable */
/* eslint-disable */
/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ClientError } from '../models';
// @ts-ignore
import { TermsOfService } from '../models';
// @ts-ignore
import { TermsOfServiceCreateForEnterpriseAndTypeRequest } from '../models';
// @ts-ignore
import { TermsOfServiceUpdateSpecificTermRequest } from '../models';
// @ts-ignore
import { TermsOfServices } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TermsOfServiceApi - axios parameter creator
 * @export
 */
export const TermsOfServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a terms of service for a given enterprise and type of user.
         * @summary Create terms of service
         * @param {TermsOfServiceCreateForEnterpriseAndTypeRequest} [termsOfServiceCreateForEnterpriseAndTypeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createForEnterpriseAndType: async (termsOfServiceCreateForEnterpriseAndTypeRequest?: TermsOfServiceCreateForEnterpriseAndTypeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/terms_of_services`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2Security", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: termsOfServiceCreateForEnterpriseAndTypeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms_of_services',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(termsOfServiceCreateForEnterpriseAndTypeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the current terms of service text and settings for the enterprise.
         * @summary List terms of services
         * @param {'external' | 'managed'} [tosType] Limits the results to the terms of service of the given type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings: async (tosType?: 'external' | 'managed', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/terms_of_services`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2Security", [], configuration)
            if (tosType !== undefined) {
                localVarQueryParameter['tos_type'] = tosType;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms_of_services',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches a specific terms of service.
         * @summary Get terms of service
         * @param {string} termsOfServiceId The ID of the terms of service.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecific: async (termsOfServiceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'termsOfServiceId' is not null or undefined
            assertParamExists('getSpecific', 'termsOfServiceId', termsOfServiceId)
            const localVarPath = `/terms_of_services/{terms_of_service_id}`
                .replace(`{${"terms_of_service_id"}}`, encodeURIComponent(String(termsOfServiceId !== undefined ? termsOfServiceId : `-terms_of_service_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2Security", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms_of_services/{terms_of_service_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a specific terms of service.
         * @summary Update terms of service
         * @param {string} termsOfServiceId The ID of the terms of service.
         * @param {TermsOfServiceUpdateSpecificTermRequest} [termsOfServiceUpdateSpecificTermRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpecificTerm: async (termsOfServiceId: string, termsOfServiceUpdateSpecificTermRequest?: TermsOfServiceUpdateSpecificTermRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'termsOfServiceId' is not null or undefined
            assertParamExists('updateSpecificTerm', 'termsOfServiceId', termsOfServiceId)
            const localVarPath = `/terms_of_services/{terms_of_service_id}`
                .replace(`{${"terms_of_service_id"}}`, encodeURIComponent(String(termsOfServiceId !== undefined ? termsOfServiceId : `-terms_of_service_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2Security", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: termsOfServiceUpdateSpecificTermRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms_of_services/{terms_of_service_id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(termsOfServiceUpdateSpecificTermRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TermsOfServiceApi - functional programming interface
 * @export
 */
export const TermsOfServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TermsOfServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a terms of service for a given enterprise and type of user.
         * @summary Create terms of service
         * @param {TermsOfServiceApiCreateForEnterpriseAndTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createForEnterpriseAndType(requestParameters: TermsOfServiceApiCreateForEnterpriseAndTypeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermsOfService>> {
            const termsOfServiceCreateForEnterpriseAndTypeRequest: TermsOfServiceCreateForEnterpriseAndTypeRequest = {
                status: requestParameters.status,
                tos_type: requestParameters.tos_type,
                text: requestParameters.text
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createForEnterpriseAndType(termsOfServiceCreateForEnterpriseAndTypeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the current terms of service text and settings for the enterprise.
         * @summary List terms of services
         * @param {TermsOfServiceApiGetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSettings(requestParameters: TermsOfServiceApiGetSettingsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermsOfServices>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSettings(requestParameters.tosType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetches a specific terms of service.
         * @summary Get terms of service
         * @param {TermsOfServiceApiGetSpecificRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecific(requestParameters: TermsOfServiceApiGetSpecificRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermsOfService>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecific(requestParameters.termsOfServiceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a specific terms of service.
         * @summary Update terms of service
         * @param {TermsOfServiceApiUpdateSpecificTermRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSpecificTerm(requestParameters: TermsOfServiceApiUpdateSpecificTermRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermsOfService>> {
            const termsOfServiceUpdateSpecificTermRequest: TermsOfServiceUpdateSpecificTermRequest = {
                status: requestParameters.status,
                text: requestParameters.text
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSpecificTerm(requestParameters.termsOfServiceId, termsOfServiceUpdateSpecificTermRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TermsOfServiceApi - factory interface
 * @export
 */
export const TermsOfServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TermsOfServiceApiFp(configuration)
    return {
        /**
         * Creates a terms of service for a given enterprise and type of user.
         * @summary Create terms of service
         * @param {TermsOfServiceApiCreateForEnterpriseAndTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createForEnterpriseAndType(requestParameters: TermsOfServiceApiCreateForEnterpriseAndTypeRequest, options?: AxiosRequestConfig): AxiosPromise<TermsOfService> {
            return localVarFp.createForEnterpriseAndType(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current terms of service text and settings for the enterprise.
         * @summary List terms of services
         * @param {TermsOfServiceApiGetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings(requestParameters: TermsOfServiceApiGetSettingsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<TermsOfServices> {
            return localVarFp.getSettings(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches a specific terms of service.
         * @summary Get terms of service
         * @param {TermsOfServiceApiGetSpecificRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecific(requestParameters: TermsOfServiceApiGetSpecificRequest, options?: AxiosRequestConfig): AxiosPromise<TermsOfService> {
            return localVarFp.getSpecific(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a specific terms of service.
         * @summary Update terms of service
         * @param {TermsOfServiceApiUpdateSpecificTermRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpecificTerm(requestParameters: TermsOfServiceApiUpdateSpecificTermRequest, options?: AxiosRequestConfig): AxiosPromise<TermsOfService> {
            return localVarFp.updateSpecificTerm(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createForEnterpriseAndType operation in TermsOfServiceApi.
 * @export
 * @interface TermsOfServiceApiCreateForEnterpriseAndTypeRequest
 */
export type TermsOfServiceApiCreateForEnterpriseAndTypeRequest = {
    
} & TermsOfServiceCreateForEnterpriseAndTypeRequest

/**
 * Request parameters for getSettings operation in TermsOfServiceApi.
 * @export
 * @interface TermsOfServiceApiGetSettingsRequest
 */
export type TermsOfServiceApiGetSettingsRequest = {
    
    /**
    * Limits the results to the terms of service of the given type.
    * @type {'external' | 'managed'}
    * @memberof TermsOfServiceApiGetSettings
    */
    readonly tosType?: 'external' | 'managed'
    
}

/**
 * Request parameters for getSpecific operation in TermsOfServiceApi.
 * @export
 * @interface TermsOfServiceApiGetSpecificRequest
 */
export type TermsOfServiceApiGetSpecificRequest = {
    
    /**
    * The ID of the terms of service.
    * @type {string}
    * @memberof TermsOfServiceApiGetSpecific
    */
    readonly termsOfServiceId: string
    
}

/**
 * Request parameters for updateSpecificTerm operation in TermsOfServiceApi.
 * @export
 * @interface TermsOfServiceApiUpdateSpecificTermRequest
 */
export type TermsOfServiceApiUpdateSpecificTermRequest = {
    
    /**
    * The ID of the terms of service.
    * @type {string}
    * @memberof TermsOfServiceApiUpdateSpecificTerm
    */
    readonly termsOfServiceId: string
    
} & TermsOfServiceUpdateSpecificTermRequest

/**
 * TermsOfServiceApiGenerated - object-oriented interface
 * @export
 * @class TermsOfServiceApiGenerated
 * @extends {BaseAPI}
 */
export class TermsOfServiceApiGenerated extends BaseAPI {
    /**
     * Creates a terms of service for a given enterprise and type of user.
     * @summary Create terms of service
     * @param {TermsOfServiceApiCreateForEnterpriseAndTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfServiceApiGenerated
     */
    public createForEnterpriseAndType(requestParameters: TermsOfServiceApiCreateForEnterpriseAndTypeRequest, options?: AxiosRequestConfig) {
        return TermsOfServiceApiFp(this.configuration).createForEnterpriseAndType(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current terms of service text and settings for the enterprise.
     * @summary List terms of services
     * @param {TermsOfServiceApiGetSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfServiceApiGenerated
     */
    public getSettings(requestParameters: TermsOfServiceApiGetSettingsRequest = {}, options?: AxiosRequestConfig) {
        return TermsOfServiceApiFp(this.configuration).getSettings(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches a specific terms of service.
     * @summary Get terms of service
     * @param {TermsOfServiceApiGetSpecificRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfServiceApiGenerated
     */
    public getSpecific(requestParameters: TermsOfServiceApiGetSpecificRequest, options?: AxiosRequestConfig) {
        return TermsOfServiceApiFp(this.configuration).getSpecific(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a specific terms of service.
     * @summary Update terms of service
     * @param {TermsOfServiceApiUpdateSpecificTermRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfServiceApiGenerated
     */
    public updateSpecificTerm(requestParameters: TermsOfServiceApiUpdateSpecificTermRequest, options?: AxiosRequestConfig) {
        return TermsOfServiceApiFp(this.configuration).updateSpecificTerm(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}