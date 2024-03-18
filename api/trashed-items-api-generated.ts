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
import { Items } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TrashedItemsApi - axios parameter creator
 * @export
 */
export const TrashedItemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the files and folders that have been moved to the trash.  Any attribute in the full files or folders objects can be passed in with the `fields` parameter to retrieve those specific attributes that are not returned by default.  This endpoint defaults to use offset-based pagination, yet also supports marker-based pagination using the `marker` parameter.
         * @summary List trashed items
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {number} [offset] The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
         * @param {boolean} [usemarker] Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time.  By setting this value to true, the API will return a &#x60;marker&#x60; field that can be passed as a parameter to this endpoint to get the next page of the response.
         * @param {string} [marker] Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires &#x60;usemarker&#x60; to be set to &#x60;true&#x60;.
         * @param {'ASC' | 'DESC'} [direction] The direction to sort results in. This can be either in alphabetical ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order.
         * @param {'name' | 'date' | 'size'} [sort] Defines the **second** attribute by which items are sorted.  Items are always sorted by their &#x60;type&#x60; first, with folders listed before files, and files listed before web links.  This parameter is not supported when using marker-based pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRetrievedItems: async (fields?: Array<string>, limit?: number, offset?: number, usemarker?: boolean, marker?: string, direction?: 'ASC' | 'DESC', sort?: 'name' | 'date' | 'size', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/folders/trash/items`;
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
            if (fields) {
                localVarQueryParameter['fields'] = fields.join(COLLECTION_FORMATS.csv);
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (usemarker !== undefined) {
                localVarQueryParameter['usemarker'] = usemarker;
            }

            if (marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/folders/trash/items',
                httpMethod: 'GET'
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
 * TrashedItemsApi - functional programming interface
 * @export
 */
export const TrashedItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TrashedItemsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves the files and folders that have been moved to the trash.  Any attribute in the full files or folders objects can be passed in with the `fields` parameter to retrieve those specific attributes that are not returned by default.  This endpoint defaults to use offset-based pagination, yet also supports marker-based pagination using the `marker` parameter.
         * @summary List trashed items
         * @param {TrashedItemsApiListRetrievedItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRetrievedItems(requestParameters: TrashedItemsApiListRetrievedItemsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Items>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRetrievedItems(requestParameters.fields, requestParameters.limit, requestParameters.offset, requestParameters.usemarker, requestParameters.marker, requestParameters.direction, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TrashedItemsApi - factory interface
 * @export
 */
export const TrashedItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TrashedItemsApiFp(configuration)
    return {
        /**
         * Retrieves the files and folders that have been moved to the trash.  Any attribute in the full files or folders objects can be passed in with the `fields` parameter to retrieve those specific attributes that are not returned by default.  This endpoint defaults to use offset-based pagination, yet also supports marker-based pagination using the `marker` parameter.
         * @summary List trashed items
         * @param {TrashedItemsApiListRetrievedItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRetrievedItems(requestParameters: TrashedItemsApiListRetrievedItemsRequest, options?: AxiosRequestConfig): AxiosPromise<Items> {
            return localVarFp.listRetrievedItems(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listRetrievedItems operation in TrashedItemsApi.
 * @export
 * @interface TrashedItemsApiListRetrievedItemsRequest
 */
export type TrashedItemsApiListRetrievedItemsRequest = {
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof TrashedItemsApiListRetrievedItems
    */
    readonly fields?: Array<string>
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof TrashedItemsApiListRetrievedItems
    */
    readonly limit?: number
    
    /**
    * The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
    * @type {number}
    * @memberof TrashedItemsApiListRetrievedItems
    */
    readonly offset?: number
    
    /**
    * Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time.  By setting this value to true, the API will return a `marker` field that can be passed as a parameter to this endpoint to get the next page of the response.
    * @type {boolean}
    * @memberof TrashedItemsApiListRetrievedItems
    */
    readonly usemarker?: boolean
    
    /**
    * Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.
    * @type {string}
    * @memberof TrashedItemsApiListRetrievedItems
    */
    readonly marker?: string
    
    /**
    * The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.
    * @type {'ASC' | 'DESC'}
    * @memberof TrashedItemsApiListRetrievedItems
    */
    readonly direction?: 'ASC' | 'DESC'
    
    /**
    * Defines the **second** attribute by which items are sorted.  Items are always sorted by their `type` first, with folders listed before files, and files listed before web links.  This parameter is not supported when using marker-based pagination.
    * @type {'name' | 'date' | 'size'}
    * @memberof TrashedItemsApiListRetrievedItems
    */
    readonly sort?: 'name' | 'date' | 'size'
    
}

/**
 * TrashedItemsApiGenerated - object-oriented interface
 * @export
 * @class TrashedItemsApiGenerated
 * @extends {BaseAPI}
 */
export class TrashedItemsApiGenerated extends BaseAPI {
    /**
     * Retrieves the files and folders that have been moved to the trash.  Any attribute in the full files or folders objects can be passed in with the `fields` parameter to retrieve those specific attributes that are not returned by default.  This endpoint defaults to use offset-based pagination, yet also supports marker-based pagination using the `marker` parameter.
     * @summary List trashed items
     * @param {TrashedItemsApiListRetrievedItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrashedItemsApiGenerated
     */
    public listRetrievedItems(requestParameters: TrashedItemsApiListRetrievedItemsRequest, options?: AxiosRequestConfig) {
        return TrashedItemsApiFp(this.configuration).listRetrievedItems(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}