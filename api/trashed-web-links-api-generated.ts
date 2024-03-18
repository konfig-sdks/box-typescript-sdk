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
import { TrashWebLink } from '../models';
// @ts-ignore
import { TrashWebLinkRestored } from '../models';
// @ts-ignore
import { TrashedWebLinksRestoreWebLinkRequest } from '../models';
// @ts-ignore
import { TrashedWebLinksRestoreWebLinkRequestParent } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TrashedWebLinksApi - axios parameter creator
 * @export
 */
export const TrashedWebLinksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a web link that has been moved to the trash.
         * @summary Get trashed web link
         * @param {string} webLinkId The ID of the web link.
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTrashedLink: async (webLinkId: string, fields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webLinkId' is not null or undefined
            assertParamExists('getTrashedLink', 'webLinkId', webLinkId)
            const localVarPath = `/web_links/{web_link_id}/trash`
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
            if (fields) {
                localVarQueryParameter['fields'] = fields.join(COLLECTION_FORMATS.csv);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/web_links/{web_link_id}/trash',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Permanently deletes a web link that is in the trash. This action cannot be undone.
         * @summary Permanently remove web link
         * @param {string} webLinkId The ID of the web link.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permanentlyRemove: async (webLinkId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webLinkId' is not null or undefined
            assertParamExists('permanentlyRemove', 'webLinkId', webLinkId)
            const localVarPath = `/web_links/{web_link_id}/trash`
                .replace(`{${"web_link_id"}}`, encodeURIComponent(String(webLinkId !== undefined ? webLinkId : `-web_link_id-`)));
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
                pathTemplate: '/web_links/{web_link_id}/trash',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Restores a web link that has been moved to the trash.  An optional new parent ID can be provided to restore the  web link to in case the original folder has been deleted.
         * @summary Restore web link
         * @param {string} webLinkId The ID of the web link.
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {TrashedWebLinksRestoreWebLinkRequest} [trashedWebLinksRestoreWebLinkRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restoreWebLink: async (webLinkId: string, fields?: Array<string>, trashedWebLinksRestoreWebLinkRequest?: TrashedWebLinksRestoreWebLinkRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webLinkId' is not null or undefined
            assertParamExists('restoreWebLink', 'webLinkId', webLinkId)
            const localVarPath = `/web_links/{web_link_id}`
                .replace(`{${"web_link_id"}}`, encodeURIComponent(String(webLinkId !== undefined ? webLinkId : `-web_link_id-`)));
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
            if (fields) {
                localVarQueryParameter['fields'] = fields.join(COLLECTION_FORMATS.csv);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: trashedWebLinksRestoreWebLinkRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/web_links/{web_link_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(trashedWebLinksRestoreWebLinkRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TrashedWebLinksApi - functional programming interface
 * @export
 */
export const TrashedWebLinksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TrashedWebLinksApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves a web link that has been moved to the trash.
         * @summary Get trashed web link
         * @param {TrashedWebLinksApiGetTrashedLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTrashedLink(requestParameters: TrashedWebLinksApiGetTrashedLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrashWebLink>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTrashedLink(requestParameters.webLinkId, requestParameters.fields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Permanently deletes a web link that is in the trash. This action cannot be undone.
         * @summary Permanently remove web link
         * @param {TrashedWebLinksApiPermanentlyRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permanentlyRemove(requestParameters: TrashedWebLinksApiPermanentlyRemoveRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permanentlyRemove(requestParameters.webLinkId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Restores a web link that has been moved to the trash.  An optional new parent ID can be provided to restore the  web link to in case the original folder has been deleted.
         * @summary Restore web link
         * @param {TrashedWebLinksApiRestoreWebLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async restoreWebLink(requestParameters: TrashedWebLinksApiRestoreWebLinkRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrashWebLinkRestored>> {
            const trashedWebLinksRestoreWebLinkRequest: TrashedWebLinksRestoreWebLinkRequest = {
                name: requestParameters.name,
                parent: requestParameters.parent
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreWebLink(requestParameters.webLinkId, requestParameters.fields, trashedWebLinksRestoreWebLinkRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TrashedWebLinksApi - factory interface
 * @export
 */
export const TrashedWebLinksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TrashedWebLinksApiFp(configuration)
    return {
        /**
         * Retrieves a web link that has been moved to the trash.
         * @summary Get trashed web link
         * @param {TrashedWebLinksApiGetTrashedLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTrashedLink(requestParameters: TrashedWebLinksApiGetTrashedLinkRequest, options?: AxiosRequestConfig): AxiosPromise<TrashWebLink> {
            return localVarFp.getTrashedLink(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Permanently deletes a web link that is in the trash. This action cannot be undone.
         * @summary Permanently remove web link
         * @param {TrashedWebLinksApiPermanentlyRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permanentlyRemove(requestParameters: TrashedWebLinksApiPermanentlyRemoveRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.permanentlyRemove(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores a web link that has been moved to the trash.  An optional new parent ID can be provided to restore the  web link to in case the original folder has been deleted.
         * @summary Restore web link
         * @param {TrashedWebLinksApiRestoreWebLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restoreWebLink(requestParameters: TrashedWebLinksApiRestoreWebLinkRequest, options?: AxiosRequestConfig): AxiosPromise<TrashWebLinkRestored> {
            return localVarFp.restoreWebLink(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getTrashedLink operation in TrashedWebLinksApi.
 * @export
 * @interface TrashedWebLinksApiGetTrashedLinkRequest
 */
export type TrashedWebLinksApiGetTrashedLinkRequest = {
    
    /**
    * The ID of the web link.
    * @type {string}
    * @memberof TrashedWebLinksApiGetTrashedLink
    */
    readonly webLinkId: string
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof TrashedWebLinksApiGetTrashedLink
    */
    readonly fields?: Array<string>
    
}

/**
 * Request parameters for permanentlyRemove operation in TrashedWebLinksApi.
 * @export
 * @interface TrashedWebLinksApiPermanentlyRemoveRequest
 */
export type TrashedWebLinksApiPermanentlyRemoveRequest = {
    
    /**
    * The ID of the web link.
    * @type {string}
    * @memberof TrashedWebLinksApiPermanentlyRemove
    */
    readonly webLinkId: string
    
}

/**
 * Request parameters for restoreWebLink operation in TrashedWebLinksApi.
 * @export
 * @interface TrashedWebLinksApiRestoreWebLinkRequest
 */
export type TrashedWebLinksApiRestoreWebLinkRequest = {
    
    /**
    * The ID of the web link.
    * @type {string}
    * @memberof TrashedWebLinksApiRestoreWebLink
    */
    readonly webLinkId: string
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof TrashedWebLinksApiRestoreWebLink
    */
    readonly fields?: Array<string>
    
} & TrashedWebLinksRestoreWebLinkRequest

/**
 * TrashedWebLinksApiGenerated - object-oriented interface
 * @export
 * @class TrashedWebLinksApiGenerated
 * @extends {BaseAPI}
 */
export class TrashedWebLinksApiGenerated extends BaseAPI {
    /**
     * Retrieves a web link that has been moved to the trash.
     * @summary Get trashed web link
     * @param {TrashedWebLinksApiGetTrashedLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrashedWebLinksApiGenerated
     */
    public getTrashedLink(requestParameters: TrashedWebLinksApiGetTrashedLinkRequest, options?: AxiosRequestConfig) {
        return TrashedWebLinksApiFp(this.configuration).getTrashedLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Permanently deletes a web link that is in the trash. This action cannot be undone.
     * @summary Permanently remove web link
     * @param {TrashedWebLinksApiPermanentlyRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrashedWebLinksApiGenerated
     */
    public permanentlyRemove(requestParameters: TrashedWebLinksApiPermanentlyRemoveRequest, options?: AxiosRequestConfig) {
        return TrashedWebLinksApiFp(this.configuration).permanentlyRemove(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores a web link that has been moved to the trash.  An optional new parent ID can be provided to restore the  web link to in case the original folder has been deleted.
     * @summary Restore web link
     * @param {TrashedWebLinksApiRestoreWebLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrashedWebLinksApiGenerated
     */
    public restoreWebLink(requestParameters: TrashedWebLinksApiRestoreWebLinkRequest, options?: AxiosRequestConfig) {
        return TrashedWebLinksApiFp(this.configuration).restoreWebLink(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}