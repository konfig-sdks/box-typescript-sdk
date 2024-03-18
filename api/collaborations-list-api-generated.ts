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
import { Collaborations } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CollaborationsListApi - axios parameter creator
 * @export
 */
export const CollaborationsListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves all pending collaboration invites for this user.
         * @summary List pending collaborations
         * @param {'pending'} status The status of the collaborations to retrieve
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {number} [offset] The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collaborations: async (status: 'pending', fields?: Array<string>, offset?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'status' is not null or undefined
            assertParamExists('collaborations', 'status', status)
            const localVarPath = `/collaborations`;
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
            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields.join(COLLECTION_FORMATS.csv);
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/collaborations',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of pending and active collaborations for a file. This returns all the users that have access to the file or have been invited to the file.
         * @summary List file collaborations
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {string} [marker] Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires &#x60;usemarker&#x60; to be set to &#x60;true&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileAccessList: async (fileId: string, fields?: Array<string>, limit?: number, marker?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('fileAccessList', 'fileId', fileId)
            const localVarPath = `/files/{file_id}/collaborations`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)));
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
                pathTemplate: '/files/{file_id}/collaborations',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of pending and active collaborations for a folder. This returns all the users that have access to the folder or have been invited to the folder.
         * @summary List folder collaborations
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        folderAccess: async (folderId: string, fields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('folderAccess', 'folderId', folderId)
            const localVarPath = `/folders/{folder_id}/collaborations`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)));
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
                pathTemplate: '/folders/{folder_id}/collaborations',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all the collaborations for a group. The user must have admin permissions to inspect enterprise\'s groups.  Each collaboration object has details on which files or folders the group has access to and with what role.
         * @summary List group collaborations
         * @param {string} groupId The ID of the group.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {number} [offset] The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupAccessDetails: async (groupId: string, limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('groupAccessDetails', 'groupId', groupId)
            const localVarPath = `/groups/{group_id}/collaborations`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId !== undefined ? groupId : `-group_id-`)));
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
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/groups/{group_id}/collaborations',
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
 * CollaborationsListApi - functional programming interface
 * @export
 */
export const CollaborationsListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CollaborationsListApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves all pending collaboration invites for this user.
         * @summary List pending collaborations
         * @param {CollaborationsListApiCollaborationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async collaborations(requestParameters: CollaborationsListApiCollaborationsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collaborations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.collaborations(requestParameters.status, requestParameters.fields, requestParameters.offset, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a list of pending and active collaborations for a file. This returns all the users that have access to the file or have been invited to the file.
         * @summary List file collaborations
         * @param {CollaborationsListApiFileAccessListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fileAccessList(requestParameters: CollaborationsListApiFileAccessListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collaborations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fileAccessList(requestParameters.fileId, requestParameters.fields, requestParameters.limit, requestParameters.marker, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a list of pending and active collaborations for a folder. This returns all the users that have access to the folder or have been invited to the folder.
         * @summary List folder collaborations
         * @param {CollaborationsListApiFolderAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async folderAccess(requestParameters: CollaborationsListApiFolderAccessRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collaborations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.folderAccess(requestParameters.folderId, requestParameters.fields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves all the collaborations for a group. The user must have admin permissions to inspect enterprise\'s groups.  Each collaboration object has details on which files or folders the group has access to and with what role.
         * @summary List group collaborations
         * @param {CollaborationsListApiGroupAccessDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async groupAccessDetails(requestParameters: CollaborationsListApiGroupAccessDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collaborations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.groupAccessDetails(requestParameters.groupId, requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CollaborationsListApi - factory interface
 * @export
 */
export const CollaborationsListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CollaborationsListApiFp(configuration)
    return {
        /**
         * Retrieves all pending collaboration invites for this user.
         * @summary List pending collaborations
         * @param {CollaborationsListApiCollaborationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collaborations(requestParameters: CollaborationsListApiCollaborationsRequest, options?: AxiosRequestConfig): AxiosPromise<Collaborations> {
            return localVarFp.collaborations(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of pending and active collaborations for a file. This returns all the users that have access to the file or have been invited to the file.
         * @summary List file collaborations
         * @param {CollaborationsListApiFileAccessListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileAccessList(requestParameters: CollaborationsListApiFileAccessListRequest, options?: AxiosRequestConfig): AxiosPromise<Collaborations> {
            return localVarFp.fileAccessList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of pending and active collaborations for a folder. This returns all the users that have access to the folder or have been invited to the folder.
         * @summary List folder collaborations
         * @param {CollaborationsListApiFolderAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        folderAccess(requestParameters: CollaborationsListApiFolderAccessRequest, options?: AxiosRequestConfig): AxiosPromise<Collaborations> {
            return localVarFp.folderAccess(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all the collaborations for a group. The user must have admin permissions to inspect enterprise\'s groups.  Each collaboration object has details on which files or folders the group has access to and with what role.
         * @summary List group collaborations
         * @param {CollaborationsListApiGroupAccessDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupAccessDetails(requestParameters: CollaborationsListApiGroupAccessDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<Collaborations> {
            return localVarFp.groupAccessDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for collaborations operation in CollaborationsListApi.
 * @export
 * @interface CollaborationsListApiCollaborationsRequest
 */
export type CollaborationsListApiCollaborationsRequest = {
    
    /**
    * The status of the collaborations to retrieve
    * @type {'pending'}
    * @memberof CollaborationsListApiCollaborations
    */
    readonly status: 'pending'
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof CollaborationsListApiCollaborations
    */
    readonly fields?: Array<string>
    
    /**
    * The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
    * @type {number}
    * @memberof CollaborationsListApiCollaborations
    */
    readonly offset?: number
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof CollaborationsListApiCollaborations
    */
    readonly limit?: number
    
}

/**
 * Request parameters for fileAccessList operation in CollaborationsListApi.
 * @export
 * @interface CollaborationsListApiFileAccessListRequest
 */
export type CollaborationsListApiFileAccessListRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof CollaborationsListApiFileAccessList
    */
    readonly fileId: string
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof CollaborationsListApiFileAccessList
    */
    readonly fields?: Array<string>
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof CollaborationsListApiFileAccessList
    */
    readonly limit?: number
    
    /**
    * Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.
    * @type {string}
    * @memberof CollaborationsListApiFileAccessList
    */
    readonly marker?: string
    
}

/**
 * Request parameters for folderAccess operation in CollaborationsListApi.
 * @export
 * @interface CollaborationsListApiFolderAccessRequest
 */
export type CollaborationsListApiFolderAccessRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.
    * @type {string}
    * @memberof CollaborationsListApiFolderAccess
    */
    readonly folderId: string
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof CollaborationsListApiFolderAccess
    */
    readonly fields?: Array<string>
    
}

/**
 * Request parameters for groupAccessDetails operation in CollaborationsListApi.
 * @export
 * @interface CollaborationsListApiGroupAccessDetailsRequest
 */
export type CollaborationsListApiGroupAccessDetailsRequest = {
    
    /**
    * The ID of the group.
    * @type {string}
    * @memberof CollaborationsListApiGroupAccessDetails
    */
    readonly groupId: string
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof CollaborationsListApiGroupAccessDetails
    */
    readonly limit?: number
    
    /**
    * The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.
    * @type {number}
    * @memberof CollaborationsListApiGroupAccessDetails
    */
    readonly offset?: number
    
}

/**
 * CollaborationsListApiGenerated - object-oriented interface
 * @export
 * @class CollaborationsListApiGenerated
 * @extends {BaseAPI}
 */
export class CollaborationsListApiGenerated extends BaseAPI {
    /**
     * Retrieves all pending collaboration invites for this user.
     * @summary List pending collaborations
     * @param {CollaborationsListApiCollaborationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollaborationsListApiGenerated
     */
    public collaborations(requestParameters: CollaborationsListApiCollaborationsRequest, options?: AxiosRequestConfig) {
        return CollaborationsListApiFp(this.configuration).collaborations(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of pending and active collaborations for a file. This returns all the users that have access to the file or have been invited to the file.
     * @summary List file collaborations
     * @param {CollaborationsListApiFileAccessListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollaborationsListApiGenerated
     */
    public fileAccessList(requestParameters: CollaborationsListApiFileAccessListRequest, options?: AxiosRequestConfig) {
        return CollaborationsListApiFp(this.configuration).fileAccessList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of pending and active collaborations for a folder. This returns all the users that have access to the folder or have been invited to the folder.
     * @summary List folder collaborations
     * @param {CollaborationsListApiFolderAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollaborationsListApiGenerated
     */
    public folderAccess(requestParameters: CollaborationsListApiFolderAccessRequest, options?: AxiosRequestConfig) {
        return CollaborationsListApiFp(this.configuration).folderAccess(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all the collaborations for a group. The user must have admin permissions to inspect enterprise\'s groups.  Each collaboration object has details on which files or folders the group has access to and with what role.
     * @summary List group collaborations
     * @param {CollaborationsListApiGroupAccessDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollaborationsListApiGenerated
     */
    public groupAccessDetails(requestParameters: CollaborationsListApiGroupAccessDetailsRequest, options?: AxiosRequestConfig) {
        return CollaborationsListApiFp(this.configuration).groupAccessDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
