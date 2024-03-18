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
import { SharedLinksWebLinksAddLinkToWebLinkRequest } from '../models';
// @ts-ignore
import { SharedLinksWebLinksAddLinkToWebLinkRequestSharedLink } from '../models';
// @ts-ignore
import { SharedLinksWebLinksRemoveSharedLinkRequest } from '../models';
// @ts-ignore
import { SharedLinksWebLinksUpdateSharedLinkRequest } from '../models';
// @ts-ignore
import { SharedLinksWebLinksUpdateSharedLinkRequestSharedLink } from '../models';
// @ts-ignore
import { WebLink } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SharedLinksWebLinksApi - axios parameter creator
 * @export
 */
export const SharedLinksWebLinksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a shared link to a web link.
         * @summary Add shared link to web link
         * @param {string} webLinkId The ID of the web link.
         * @param {string} fields Explicitly request the &#x60;shared_link&#x60; fields to be returned for this item.
         * @param {SharedLinksWebLinksAddLinkToWebLinkRequest} [sharedLinksWebLinksAddLinkToWebLinkRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addLinkToWebLink: async (webLinkId: string, fields: string, sharedLinksWebLinksAddLinkToWebLinkRequest?: SharedLinksWebLinksAddLinkToWebLinkRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webLinkId' is not null or undefined
            assertParamExists('addLinkToWebLink', 'webLinkId', webLinkId)
            // verify required parameter 'fields' is not null or undefined
            assertParamExists('addLinkToWebLink', 'fields', fields)
            const localVarPath = `/web_links/{web_link_id}#add_shared_link`
                .replace(`{${"web_link_id"}}`, encodeURIComponent(String(webLinkId !== undefined ? webLinkId : `-web_link_id-`)));
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
            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: sharedLinksWebLinksAddLinkToWebLinkRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/web_links/{web_link_id}#add_shared_link',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(sharedLinksWebLinksAddLinkToWebLinkRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the web link represented by a shared link.  A shared web link can be represented by a shared link, which can originate within the current enterprise or within another.  This endpoint allows an application to retrieve information about a shared web link when only given a shared link.
         * @summary Find web link for shared link
         * @param {string} boxapi A header containing the shared link and optional password for the shared link.  The format for this header is as follows.  &#x60;shared_link&#x3D;[link]&amp;shared_link_password&#x3D;[password]&#x60;
         * @param {string} [ifNoneMatch] Ensures an item is only returned if it has changed.  Pass in the item\&#39;s last observed &#x60;etag&#x60; value into this header and the endpoint will fail with a &#x60;304 Not Modified&#x60; if the item has not changed since.
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSharedWebLink: async (boxapi: string, ifNoneMatch?: string, fields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'boxapi' is not null or undefined
            assertParamExists('findSharedWebLink', 'boxapi', boxapi)
            const localVarPath = `/shared_items#web_links`;
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

            if (ifNoneMatch != null) {
                localVarHeaderParameter['if-none-match'] = String(ifNoneMatch);
            }

            if (boxapi != null) {
                localVarHeaderParameter['boxapi'] = String(boxapi);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/shared_items#web_links',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the information for a shared link on a web link.
         * @summary Get shared link for web link
         * @param {string} webLinkId The ID of the web link.
         * @param {string} fields Explicitly request the &#x60;shared_link&#x60; fields to be returned for this item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLinkInfo: async (webLinkId: string, fields: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webLinkId' is not null or undefined
            assertParamExists('getLinkInfo', 'webLinkId', webLinkId)
            // verify required parameter 'fields' is not null or undefined
            assertParamExists('getLinkInfo', 'fields', fields)
            const localVarPath = `/web_links/{web_link_id}#get_shared_link`
                .replace(`{${"web_link_id"}}`, encodeURIComponent(String(webLinkId !== undefined ? webLinkId : `-web_link_id-`)));
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
            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/web_links/{web_link_id}#get_shared_link',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a shared link from a web link.
         * @summary Remove shared link from web link
         * @param {string} webLinkId The ID of the web link.
         * @param {string} fields Explicitly request the &#x60;shared_link&#x60; fields to be returned for this item.
         * @param {SharedLinksWebLinksRemoveSharedLinkRequest} [sharedLinksWebLinksRemoveSharedLinkRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeSharedLink: async (webLinkId: string, fields: string, sharedLinksWebLinksRemoveSharedLinkRequest?: SharedLinksWebLinksRemoveSharedLinkRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webLinkId' is not null or undefined
            assertParamExists('removeSharedLink', 'webLinkId', webLinkId)
            // verify required parameter 'fields' is not null or undefined
            assertParamExists('removeSharedLink', 'fields', fields)
            const localVarPath = `/web_links/{web_link_id}#remove_shared_link`
                .replace(`{${"web_link_id"}}`, encodeURIComponent(String(webLinkId !== undefined ? webLinkId : `-web_link_id-`)));
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
            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: sharedLinksWebLinksRemoveSharedLinkRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/web_links/{web_link_id}#remove_shared_link',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(sharedLinksWebLinksRemoveSharedLinkRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a shared link on a web link.
         * @summary Update shared link on web link
         * @param {string} webLinkId The ID of the web link.
         * @param {string} fields Explicitly request the &#x60;shared_link&#x60; fields to be returned for this item.
         * @param {SharedLinksWebLinksUpdateSharedLinkRequest} [sharedLinksWebLinksUpdateSharedLinkRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSharedLink: async (webLinkId: string, fields: string, sharedLinksWebLinksUpdateSharedLinkRequest?: SharedLinksWebLinksUpdateSharedLinkRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webLinkId' is not null or undefined
            assertParamExists('updateSharedLink', 'webLinkId', webLinkId)
            // verify required parameter 'fields' is not null or undefined
            assertParamExists('updateSharedLink', 'fields', fields)
            const localVarPath = `/web_links/{web_link_id}#update_shared_link`
                .replace(`{${"web_link_id"}}`, encodeURIComponent(String(webLinkId !== undefined ? webLinkId : `-web_link_id-`)));
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
            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: sharedLinksWebLinksUpdateSharedLinkRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/web_links/{web_link_id}#update_shared_link',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(sharedLinksWebLinksUpdateSharedLinkRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SharedLinksWebLinksApi - functional programming interface
 * @export
 */
export const SharedLinksWebLinksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SharedLinksWebLinksApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a shared link to a web link.
         * @summary Add shared link to web link
         * @param {SharedLinksWebLinksApiAddLinkToWebLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addLinkToWebLink(requestParameters: SharedLinksWebLinksApiAddLinkToWebLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebLink>> {
            const sharedLinksWebLinksAddLinkToWebLinkRequest: SharedLinksWebLinksAddLinkToWebLinkRequest = {
                shared_link: requestParameters.shared_link
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addLinkToWebLink(requestParameters.webLinkId, requestParameters.fields, sharedLinksWebLinksAddLinkToWebLinkRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the web link represented by a shared link.  A shared web link can be represented by a shared link, which can originate within the current enterprise or within another.  This endpoint allows an application to retrieve information about a shared web link when only given a shared link.
         * @summary Find web link for shared link
         * @param {SharedLinksWebLinksApiFindSharedWebLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findSharedWebLink(requestParameters: SharedLinksWebLinksApiFindSharedWebLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebLink>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findSharedWebLink(requestParameters.boxapi, requestParameters.ifNoneMatch, requestParameters.fields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the information for a shared link on a web link.
         * @summary Get shared link for web link
         * @param {SharedLinksWebLinksApiGetLinkInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLinkInfo(requestParameters: SharedLinksWebLinksApiGetLinkInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebLink>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLinkInfo(requestParameters.webLinkId, requestParameters.fields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes a shared link from a web link.
         * @summary Remove shared link from web link
         * @param {SharedLinksWebLinksApiRemoveSharedLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeSharedLink(requestParameters: SharedLinksWebLinksApiRemoveSharedLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebLink>> {
            const sharedLinksWebLinksRemoveSharedLinkRequest: SharedLinksWebLinksRemoveSharedLinkRequest = {
                shared_link: requestParameters.shared_link
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeSharedLink(requestParameters.webLinkId, requestParameters.fields, sharedLinksWebLinksRemoveSharedLinkRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a shared link on a web link.
         * @summary Update shared link on web link
         * @param {SharedLinksWebLinksApiUpdateSharedLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSharedLink(requestParameters: SharedLinksWebLinksApiUpdateSharedLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebLink>> {
            const sharedLinksWebLinksUpdateSharedLinkRequest: SharedLinksWebLinksUpdateSharedLinkRequest = {
                shared_link: requestParameters.shared_link
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSharedLink(requestParameters.webLinkId, requestParameters.fields, sharedLinksWebLinksUpdateSharedLinkRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SharedLinksWebLinksApi - factory interface
 * @export
 */
export const SharedLinksWebLinksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SharedLinksWebLinksApiFp(configuration)
    return {
        /**
         * Adds a shared link to a web link.
         * @summary Add shared link to web link
         * @param {SharedLinksWebLinksApiAddLinkToWebLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addLinkToWebLink(requestParameters: SharedLinksWebLinksApiAddLinkToWebLinkRequest, options?: AxiosRequestConfig): AxiosPromise<WebLink> {
            return localVarFp.addLinkToWebLink(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the web link represented by a shared link.  A shared web link can be represented by a shared link, which can originate within the current enterprise or within another.  This endpoint allows an application to retrieve information about a shared web link when only given a shared link.
         * @summary Find web link for shared link
         * @param {SharedLinksWebLinksApiFindSharedWebLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSharedWebLink(requestParameters: SharedLinksWebLinksApiFindSharedWebLinkRequest, options?: AxiosRequestConfig): AxiosPromise<WebLink> {
            return localVarFp.findSharedWebLink(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the information for a shared link on a web link.
         * @summary Get shared link for web link
         * @param {SharedLinksWebLinksApiGetLinkInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLinkInfo(requestParameters: SharedLinksWebLinksApiGetLinkInfoRequest, options?: AxiosRequestConfig): AxiosPromise<WebLink> {
            return localVarFp.getLinkInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a shared link from a web link.
         * @summary Remove shared link from web link
         * @param {SharedLinksWebLinksApiRemoveSharedLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeSharedLink(requestParameters: SharedLinksWebLinksApiRemoveSharedLinkRequest, options?: AxiosRequestConfig): AxiosPromise<WebLink> {
            return localVarFp.removeSharedLink(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a shared link on a web link.
         * @summary Update shared link on web link
         * @param {SharedLinksWebLinksApiUpdateSharedLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSharedLink(requestParameters: SharedLinksWebLinksApiUpdateSharedLinkRequest, options?: AxiosRequestConfig): AxiosPromise<WebLink> {
            return localVarFp.updateSharedLink(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addLinkToWebLink operation in SharedLinksWebLinksApi.
 * @export
 * @interface SharedLinksWebLinksApiAddLinkToWebLinkRequest
 */
export type SharedLinksWebLinksApiAddLinkToWebLinkRequest = {
    
    /**
    * The ID of the web link.
    * @type {string}
    * @memberof SharedLinksWebLinksApiAddLinkToWebLink
    */
    readonly webLinkId: string
    
    /**
    * Explicitly request the `shared_link` fields to be returned for this item.
    * @type {string}
    * @memberof SharedLinksWebLinksApiAddLinkToWebLink
    */
    readonly fields: string
    
} & SharedLinksWebLinksAddLinkToWebLinkRequest

/**
 * Request parameters for findSharedWebLink operation in SharedLinksWebLinksApi.
 * @export
 * @interface SharedLinksWebLinksApiFindSharedWebLinkRequest
 */
export type SharedLinksWebLinksApiFindSharedWebLinkRequest = {
    
    /**
    * A header containing the shared link and optional password for the shared link.  The format for this header is as follows.  `shared_link=[link]&shared_link_password=[password]`
    * @type {string}
    * @memberof SharedLinksWebLinksApiFindSharedWebLink
    */
    readonly boxapi: string
    
    /**
    * Ensures an item is only returned if it has changed.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `304 Not Modified` if the item has not changed since.
    * @type {string}
    * @memberof SharedLinksWebLinksApiFindSharedWebLink
    */
    readonly ifNoneMatch?: string
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof SharedLinksWebLinksApiFindSharedWebLink
    */
    readonly fields?: Array<string>
    
}

/**
 * Request parameters for getLinkInfo operation in SharedLinksWebLinksApi.
 * @export
 * @interface SharedLinksWebLinksApiGetLinkInfoRequest
 */
export type SharedLinksWebLinksApiGetLinkInfoRequest = {
    
    /**
    * The ID of the web link.
    * @type {string}
    * @memberof SharedLinksWebLinksApiGetLinkInfo
    */
    readonly webLinkId: string
    
    /**
    * Explicitly request the `shared_link` fields to be returned for this item.
    * @type {string}
    * @memberof SharedLinksWebLinksApiGetLinkInfo
    */
    readonly fields: string
    
}

/**
 * Request parameters for removeSharedLink operation in SharedLinksWebLinksApi.
 * @export
 * @interface SharedLinksWebLinksApiRemoveSharedLinkRequest
 */
export type SharedLinksWebLinksApiRemoveSharedLinkRequest = {
    
    /**
    * The ID of the web link.
    * @type {string}
    * @memberof SharedLinksWebLinksApiRemoveSharedLink
    */
    readonly webLinkId: string
    
    /**
    * Explicitly request the `shared_link` fields to be returned for this item.
    * @type {string}
    * @memberof SharedLinksWebLinksApiRemoveSharedLink
    */
    readonly fields: string
    
} & SharedLinksWebLinksRemoveSharedLinkRequest

/**
 * Request parameters for updateSharedLink operation in SharedLinksWebLinksApi.
 * @export
 * @interface SharedLinksWebLinksApiUpdateSharedLinkRequest
 */
export type SharedLinksWebLinksApiUpdateSharedLinkRequest = {
    
    /**
    * The ID of the web link.
    * @type {string}
    * @memberof SharedLinksWebLinksApiUpdateSharedLink
    */
    readonly webLinkId: string
    
    /**
    * Explicitly request the `shared_link` fields to be returned for this item.
    * @type {string}
    * @memberof SharedLinksWebLinksApiUpdateSharedLink
    */
    readonly fields: string
    
} & SharedLinksWebLinksUpdateSharedLinkRequest

/**
 * SharedLinksWebLinksApiGenerated - object-oriented interface
 * @export
 * @class SharedLinksWebLinksApiGenerated
 * @extends {BaseAPI}
 */
export class SharedLinksWebLinksApiGenerated extends BaseAPI {
    /**
     * Adds a shared link to a web link.
     * @summary Add shared link to web link
     * @param {SharedLinksWebLinksApiAddLinkToWebLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedLinksWebLinksApiGenerated
     */
    public addLinkToWebLink(requestParameters: SharedLinksWebLinksApiAddLinkToWebLinkRequest, options?: AxiosRequestConfig) {
        return SharedLinksWebLinksApiFp(this.configuration).addLinkToWebLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the web link represented by a shared link.  A shared web link can be represented by a shared link, which can originate within the current enterprise or within another.  This endpoint allows an application to retrieve information about a shared web link when only given a shared link.
     * @summary Find web link for shared link
     * @param {SharedLinksWebLinksApiFindSharedWebLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedLinksWebLinksApiGenerated
     */
    public findSharedWebLink(requestParameters: SharedLinksWebLinksApiFindSharedWebLinkRequest, options?: AxiosRequestConfig) {
        return SharedLinksWebLinksApiFp(this.configuration).findSharedWebLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the information for a shared link on a web link.
     * @summary Get shared link for web link
     * @param {SharedLinksWebLinksApiGetLinkInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedLinksWebLinksApiGenerated
     */
    public getLinkInfo(requestParameters: SharedLinksWebLinksApiGetLinkInfoRequest, options?: AxiosRequestConfig) {
        return SharedLinksWebLinksApiFp(this.configuration).getLinkInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a shared link from a web link.
     * @summary Remove shared link from web link
     * @param {SharedLinksWebLinksApiRemoveSharedLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedLinksWebLinksApiGenerated
     */
    public removeSharedLink(requestParameters: SharedLinksWebLinksApiRemoveSharedLinkRequest, options?: AxiosRequestConfig) {
        return SharedLinksWebLinksApiFp(this.configuration).removeSharedLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a shared link on a web link.
     * @summary Update shared link on web link
     * @param {SharedLinksWebLinksApiUpdateSharedLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedLinksWebLinksApiGenerated
     */
    public updateSharedLink(requestParameters: SharedLinksWebLinksApiUpdateSharedLinkRequest, options?: AxiosRequestConfig) {
        return SharedLinksWebLinksApiFp(this.configuration).updateSharedLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}