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
import { FileVersionRetention } from '../models';
// @ts-ignore
import { FileVersionRetentions } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FileVersionRetentionsApi - axios parameter creator
 * @export
 */
export const FileVersionRetentionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns information about a file version retention.
         * @summary Get retention on file
         * @param {string} fileVersionRetentionId The ID of the file version retention
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileVersionRetentionInfo: async (fileVersionRetentionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileVersionRetentionId' is not null or undefined
            assertParamExists('getFileVersionRetentionInfo', 'fileVersionRetentionId', fileVersionRetentionId)
            const localVarPath = `/file_version_retentions/{file_version_retention_id}`
                .replace(`{${"file_version_retention_id"}}`, encodeURIComponent(String(fileVersionRetentionId !== undefined ? fileVersionRetentionId : `-file_version_retention_id-`)));
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
                pathTemplate: '/file_version_retentions/{file_version_retention_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all file version retentions for the given enterprise.
         * @summary List file version retentions
         * @param {string} [fileId] Filters results by files with this ID.
         * @param {string} [fileVersionId] Filters results by file versions with this ID.
         * @param {string} [policyId] Filters results by the retention policy with this ID.
         * @param {'permanently_delete' | 'remove_retention'} [dispositionAction] Filters results by the retention policy with this disposition action.
         * @param {string} [dispositionBefore] Filters results by files that will have their disposition come into effect before this date.
         * @param {string} [dispositionAfter] Filters results by files that will have their disposition come into effect after this date.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {string} [marker] Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires &#x60;usemarker&#x60; to be set to &#x60;true&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRetentions: async (fileId?: string, fileVersionId?: string, policyId?: string, dispositionAction?: 'permanently_delete' | 'remove_retention', dispositionBefore?: string, dispositionAfter?: string, limit?: number, marker?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/file_version_retentions`;
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
            if (fileId !== undefined) {
                localVarQueryParameter['file_id'] = fileId;
            }

            if (fileVersionId !== undefined) {
                localVarQueryParameter['file_version_id'] = fileVersionId;
            }

            if (policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }

            if (dispositionAction !== undefined) {
                localVarQueryParameter['disposition_action'] = dispositionAction;
            }

            if (dispositionBefore !== undefined) {
                localVarQueryParameter['disposition_before'] = dispositionBefore;
            }

            if (dispositionAfter !== undefined) {
                localVarQueryParameter['disposition_after'] = dispositionAfter;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/file_version_retentions',
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
 * FileVersionRetentionsApi - functional programming interface
 * @export
 */
export const FileVersionRetentionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FileVersionRetentionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns information about a file version retention.
         * @summary Get retention on file
         * @param {FileVersionRetentionsApiGetFileVersionRetentionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFileVersionRetentionInfo(requestParameters: FileVersionRetentionsApiGetFileVersionRetentionInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileVersionRetention>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileVersionRetentionInfo(requestParameters.fileVersionRetentionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves all file version retentions for the given enterprise.
         * @summary List file version retentions
         * @param {FileVersionRetentionsApiListRetentionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRetentions(requestParameters: FileVersionRetentionsApiListRetentionsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileVersionRetentions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRetentions(requestParameters.fileId, requestParameters.fileVersionId, requestParameters.policyId, requestParameters.dispositionAction, requestParameters.dispositionBefore, requestParameters.dispositionAfter, requestParameters.limit, requestParameters.marker, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FileVersionRetentionsApi - factory interface
 * @export
 */
export const FileVersionRetentionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FileVersionRetentionsApiFp(configuration)
    return {
        /**
         * Returns information about a file version retention.
         * @summary Get retention on file
         * @param {FileVersionRetentionsApiGetFileVersionRetentionInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileVersionRetentionInfo(requestParameters: FileVersionRetentionsApiGetFileVersionRetentionInfoRequest, options?: AxiosRequestConfig): AxiosPromise<FileVersionRetention> {
            return localVarFp.getFileVersionRetentionInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all file version retentions for the given enterprise.
         * @summary List file version retentions
         * @param {FileVersionRetentionsApiListRetentionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRetentions(requestParameters: FileVersionRetentionsApiListRetentionsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<FileVersionRetentions> {
            return localVarFp.listRetentions(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFileVersionRetentionInfo operation in FileVersionRetentionsApi.
 * @export
 * @interface FileVersionRetentionsApiGetFileVersionRetentionInfoRequest
 */
export type FileVersionRetentionsApiGetFileVersionRetentionInfoRequest = {
    
    /**
    * The ID of the file version retention
    * @type {string}
    * @memberof FileVersionRetentionsApiGetFileVersionRetentionInfo
    */
    readonly fileVersionRetentionId: string
    
}

/**
 * Request parameters for listRetentions operation in FileVersionRetentionsApi.
 * @export
 * @interface FileVersionRetentionsApiListRetentionsRequest
 */
export type FileVersionRetentionsApiListRetentionsRequest = {
    
    /**
    * Filters results by files with this ID.
    * @type {string}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly fileId?: string
    
    /**
    * Filters results by file versions with this ID.
    * @type {string}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly fileVersionId?: string
    
    /**
    * Filters results by the retention policy with this ID.
    * @type {string}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly policyId?: string
    
    /**
    * Filters results by the retention policy with this disposition action.
    * @type {'permanently_delete' | 'remove_retention'}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly dispositionAction?: 'permanently_delete' | 'remove_retention'
    
    /**
    * Filters results by files that will have their disposition come into effect before this date.
    * @type {string}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly dispositionBefore?: string
    
    /**
    * Filters results by files that will have their disposition come into effect after this date.
    * @type {string}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly dispositionAfter?: string
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly limit?: number
    
    /**
    * Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.
    * @type {string}
    * @memberof FileVersionRetentionsApiListRetentions
    */
    readonly marker?: string
    
}

/**
 * FileVersionRetentionsApiGenerated - object-oriented interface
 * @export
 * @class FileVersionRetentionsApiGenerated
 * @extends {BaseAPI}
 */
export class FileVersionRetentionsApiGenerated extends BaseAPI {
    /**
     * Returns information about a file version retention.
     * @summary Get retention on file
     * @param {FileVersionRetentionsApiGetFileVersionRetentionInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileVersionRetentionsApiGenerated
     */
    public getFileVersionRetentionInfo(requestParameters: FileVersionRetentionsApiGetFileVersionRetentionInfoRequest, options?: AxiosRequestConfig) {
        return FileVersionRetentionsApiFp(this.configuration).getFileVersionRetentionInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all file version retentions for the given enterprise.
     * @summary List file version retentions
     * @param {FileVersionRetentionsApiListRetentionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileVersionRetentionsApiGenerated
     */
    public listRetentions(requestParameters: FileVersionRetentionsApiListRetentionsRequest = {}, options?: AxiosRequestConfig) {
        return FileVersionRetentionsApiFp(this.configuration).listRetentions(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
