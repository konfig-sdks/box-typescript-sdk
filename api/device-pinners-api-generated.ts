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
import { DevicePinner } from '../models';
// @ts-ignore
import { DevicePinners } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DevicePinnersApi - axios parameter creator
 * @export
 */
export const DevicePinnersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves information about an individual device pin.
         * @summary Get device pin
         * @param {string} devicePinnerId The ID of the device pin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPinnerInfo: async (devicePinnerId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'devicePinnerId' is not null or undefined
            assertParamExists('getPinnerInfo', 'devicePinnerId', devicePinnerId)
            const localVarPath = `/device_pinners/{device_pinner_id}`
                .replace(`{${"device_pinner_id"}}`, encodeURIComponent(String(devicePinnerId !== undefined ? devicePinnerId : `-device_pinner_id-`)));
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
                pathTemplate: '/device_pinners/{device_pinner_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all the device pins within an enterprise.  The user must have admin privileges, and the application needs the \"manage enterprise\" scope to make this call.
         * @summary List enterprise device pins
         * @param {string} enterpriseId The ID of the enterprise
         * @param {string} [marker] Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires &#x60;usemarker&#x60; to be set to &#x60;true&#x60;.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {'ASC' | 'DESC'} [direction] The direction to sort results in. This can be either in alphabetical ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPinnerInfo: async (enterpriseId: string, marker?: string, limit?: number, direction?: 'ASC' | 'DESC', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'enterpriseId' is not null or undefined
            assertParamExists('listPinnerInfo', 'enterpriseId', enterpriseId)
            const localVarPath = `/enterprises/{enterprise_id}/device_pinners`
                .replace(`{${"enterprise_id"}}`, encodeURIComponent(String(enterpriseId !== undefined ? enterpriseId : `-enterprise_id-`)));
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
            if (marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/enterprises/{enterprise_id}/device_pinners',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an individual device pin.
         * @summary Remove device pin
         * @param {string} devicePinnerId The ID of the device pin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDevicePin: async (devicePinnerId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'devicePinnerId' is not null or undefined
            assertParamExists('removeDevicePin', 'devicePinnerId', devicePinnerId)
            const localVarPath = `/device_pinners/{device_pinner_id}`
                .replace(`{${"device_pinner_id"}}`, encodeURIComponent(String(devicePinnerId !== undefined ? devicePinnerId : `-device_pinner_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
                pathTemplate: '/device_pinners/{device_pinner_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DevicePinnersApi - functional programming interface
 * @export
 */
export const DevicePinnersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DevicePinnersApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves information about an individual device pin.
         * @summary Get device pin
         * @param {DevicePinnersApiGetPinnerInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPinnerInfo(requestParameters: DevicePinnersApiGetPinnerInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DevicePinner>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPinnerInfo(requestParameters.devicePinnerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves all the device pins within an enterprise.  The user must have admin privileges, and the application needs the \"manage enterprise\" scope to make this call.
         * @summary List enterprise device pins
         * @param {DevicePinnersApiListPinnerInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPinnerInfo(requestParameters: DevicePinnersApiListPinnerInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DevicePinners>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPinnerInfo(requestParameters.enterpriseId, requestParameters.marker, requestParameters.limit, requestParameters.direction, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an individual device pin.
         * @summary Remove device pin
         * @param {DevicePinnersApiRemoveDevicePinRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeDevicePin(requestParameters: DevicePinnersApiRemoveDevicePinRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeDevicePin(requestParameters.devicePinnerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DevicePinnersApi - factory interface
 * @export
 */
export const DevicePinnersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DevicePinnersApiFp(configuration)
    return {
        /**
         * Retrieves information about an individual device pin.
         * @summary Get device pin
         * @param {DevicePinnersApiGetPinnerInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPinnerInfo(requestParameters: DevicePinnersApiGetPinnerInfoRequest, options?: AxiosRequestConfig): AxiosPromise<DevicePinner> {
            return localVarFp.getPinnerInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all the device pins within an enterprise.  The user must have admin privileges, and the application needs the \"manage enterprise\" scope to make this call.
         * @summary List enterprise device pins
         * @param {DevicePinnersApiListPinnerInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPinnerInfo(requestParameters: DevicePinnersApiListPinnerInfoRequest, options?: AxiosRequestConfig): AxiosPromise<DevicePinners> {
            return localVarFp.listPinnerInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an individual device pin.
         * @summary Remove device pin
         * @param {DevicePinnersApiRemoveDevicePinRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDevicePin(requestParameters: DevicePinnersApiRemoveDevicePinRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeDevicePin(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPinnerInfo operation in DevicePinnersApi.
 * @export
 * @interface DevicePinnersApiGetPinnerInfoRequest
 */
export type DevicePinnersApiGetPinnerInfoRequest = {
    
    /**
    * The ID of the device pin
    * @type {string}
    * @memberof DevicePinnersApiGetPinnerInfo
    */
    readonly devicePinnerId: string
    
}

/**
 * Request parameters for listPinnerInfo operation in DevicePinnersApi.
 * @export
 * @interface DevicePinnersApiListPinnerInfoRequest
 */
export type DevicePinnersApiListPinnerInfoRequest = {
    
    /**
    * The ID of the enterprise
    * @type {string}
    * @memberof DevicePinnersApiListPinnerInfo
    */
    readonly enterpriseId: string
    
    /**
    * Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.
    * @type {string}
    * @memberof DevicePinnersApiListPinnerInfo
    */
    readonly marker?: string
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof DevicePinnersApiListPinnerInfo
    */
    readonly limit?: number
    
    /**
    * The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.
    * @type {'ASC' | 'DESC'}
    * @memberof DevicePinnersApiListPinnerInfo
    */
    readonly direction?: 'ASC' | 'DESC'
    
}

/**
 * Request parameters for removeDevicePin operation in DevicePinnersApi.
 * @export
 * @interface DevicePinnersApiRemoveDevicePinRequest
 */
export type DevicePinnersApiRemoveDevicePinRequest = {
    
    /**
    * The ID of the device pin
    * @type {string}
    * @memberof DevicePinnersApiRemoveDevicePin
    */
    readonly devicePinnerId: string
    
}

/**
 * DevicePinnersApiGenerated - object-oriented interface
 * @export
 * @class DevicePinnersApiGenerated
 * @extends {BaseAPI}
 */
export class DevicePinnersApiGenerated extends BaseAPI {
    /**
     * Retrieves information about an individual device pin.
     * @summary Get device pin
     * @param {DevicePinnersApiGetPinnerInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePinnersApiGenerated
     */
    public getPinnerInfo(requestParameters: DevicePinnersApiGetPinnerInfoRequest, options?: AxiosRequestConfig) {
        return DevicePinnersApiFp(this.configuration).getPinnerInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all the device pins within an enterprise.  The user must have admin privileges, and the application needs the \"manage enterprise\" scope to make this call.
     * @summary List enterprise device pins
     * @param {DevicePinnersApiListPinnerInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePinnersApiGenerated
     */
    public listPinnerInfo(requestParameters: DevicePinnersApiListPinnerInfoRequest, options?: AxiosRequestConfig) {
        return DevicePinnersApiFp(this.configuration).listPinnerInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an individual device pin.
     * @summary Remove device pin
     * @param {DevicePinnersApiRemoveDevicePinRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePinnersApiGenerated
     */
    public removeDevicePin(requestParameters: DevicePinnersApiRemoveDevicePinRequest, options?: AxiosRequestConfig) {
        return DevicePinnersApiFp(this.configuration).removeDevicePin(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
