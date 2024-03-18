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
import { Classification } from '../models';
// @ts-ignore
import { ClassificationsOnFoldersAddClassificationToFolderRequest } from '../models';
// @ts-ignore
import { ClassificationsOnFoldersUpdateClassificationRequestInner } from '../models';
// @ts-ignore
import { ClientError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ClassificationsOnFoldersApi - axios parameter creator
 * @export
 */
export const ClassificationsOnFoldersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a classification to a folder by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Add classification to folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {ClassificationsOnFoldersAddClassificationToFolderRequest} [classificationsOnFoldersAddClassificationToFolderRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClassificationToFolder: async (folderId: string, classificationsOnFoldersAddClassificationToFolderRequest?: ClassificationsOnFoldersAddClassificationToFolderRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('addClassificationToFolder', 'folderId', folderId)
            const localVarPath = `/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)));
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
                requestBody: classificationsOnFoldersAddClassificationToFolderRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(classificationsOnFoldersAddClassificationToFolderRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the classification metadata instance that has been applied to a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Get classification on folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassificationMetadata: async (folderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getClassificationMetadata', 'folderId', folderId)
            const localVarPath = `/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes any classifications from a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Remove classification from folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromFolder: async (folderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('removeFromFolder', 'folderId', folderId)
            const localVarPath = `/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)));
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
                pathTemplate: '/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a classification on a folder.  The classification can only be updated if a classification has already been applied to the folder before. When editing classifications, only values are defined for the enterprise will be accepted.
         * @summary Update classification on folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {Array<ClassificationsOnFoldersUpdateClassificationRequestInner>} [classificationsOnFoldersUpdateClassificationRequestInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClassification: async (folderId: string, classificationsOnFoldersUpdateClassificationRequestInner?: Array<ClassificationsOnFoldersUpdateClassificationRequestInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('updateClassification', 'folderId', folderId)
            const localVarPath = `/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)));
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

    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: classificationsOnFoldersUpdateClassificationRequestInner,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(classificationsOnFoldersUpdateClassificationRequestInner, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClassificationsOnFoldersApi - functional programming interface
 * @export
 */
export const ClassificationsOnFoldersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClassificationsOnFoldersApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a classification to a folder by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Add classification to folder
         * @param {ClassificationsOnFoldersApiAddClassificationToFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addClassificationToFolder(requestParameters: ClassificationsOnFoldersApiAddClassificationToFolderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Classification>> {
            const classificationsOnFoldersAddClassificationToFolderRequest: ClassificationsOnFoldersAddClassificationToFolderRequest = {
                Box__Security__Classification__Key: requestParameters.Box__Security__Classification__Key
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addClassificationToFolder(requestParameters.folderId, classificationsOnFoldersAddClassificationToFolderRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the classification metadata instance that has been applied to a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Get classification on folder
         * @param {ClassificationsOnFoldersApiGetClassificationMetadataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClassificationMetadata(requestParameters: ClassificationsOnFoldersApiGetClassificationMetadataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Classification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClassificationMetadata(requestParameters.folderId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes any classifications from a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Remove classification from folder
         * @param {ClassificationsOnFoldersApiRemoveFromFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFromFolder(requestParameters: ClassificationsOnFoldersApiRemoveFromFolderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFromFolder(requestParameters.folderId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a classification on a folder.  The classification can only be updated if a classification has already been applied to the folder before. When editing classifications, only values are defined for the enterprise will be accepted.
         * @summary Update classification on folder
         * @param {ClassificationsOnFoldersApiUpdateClassificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateClassification(requestParameters: ClassificationsOnFoldersApiUpdateClassificationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Classification>> {
            const classificationsOnFoldersUpdateClassificationRequestInner: Array<ClassificationsOnFoldersUpdateClassificationRequestInner> = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClassification(requestParameters.folderId, classificationsOnFoldersUpdateClassificationRequestInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClassificationsOnFoldersApi - factory interface
 * @export
 */
export const ClassificationsOnFoldersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClassificationsOnFoldersApiFp(configuration)
    return {
        /**
         * Adds a classification to a folder by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Add classification to folder
         * @param {ClassificationsOnFoldersApiAddClassificationToFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClassificationToFolder(requestParameters: ClassificationsOnFoldersApiAddClassificationToFolderRequest, options?: AxiosRequestConfig): AxiosPromise<Classification> {
            return localVarFp.addClassificationToFolder(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the classification metadata instance that has been applied to a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Get classification on folder
         * @param {ClassificationsOnFoldersApiGetClassificationMetadataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassificationMetadata(requestParameters: ClassificationsOnFoldersApiGetClassificationMetadataRequest, options?: AxiosRequestConfig): AxiosPromise<Classification> {
            return localVarFp.getClassificationMetadata(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes any classifications from a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Remove classification from folder
         * @param {ClassificationsOnFoldersApiRemoveFromFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromFolder(requestParameters: ClassificationsOnFoldersApiRemoveFromFolderRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeFromFolder(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a classification on a folder.  The classification can only be updated if a classification has already been applied to the folder before. When editing classifications, only values are defined for the enterprise will be accepted.
         * @summary Update classification on folder
         * @param {ClassificationsOnFoldersApiUpdateClassificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClassification(requestParameters: ClassificationsOnFoldersApiUpdateClassificationRequest, options?: AxiosRequestConfig): AxiosPromise<Classification> {
            return localVarFp.updateClassification(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addClassificationToFolder operation in ClassificationsOnFoldersApi.
 * @export
 * @interface ClassificationsOnFoldersApiAddClassificationToFolderRequest
 */
export type ClassificationsOnFoldersApiAddClassificationToFolderRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof ClassificationsOnFoldersApiAddClassificationToFolder
    */
    readonly folderId: string
    
} & ClassificationsOnFoldersAddClassificationToFolderRequest

/**
 * Request parameters for getClassificationMetadata operation in ClassificationsOnFoldersApi.
 * @export
 * @interface ClassificationsOnFoldersApiGetClassificationMetadataRequest
 */
export type ClassificationsOnFoldersApiGetClassificationMetadataRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof ClassificationsOnFoldersApiGetClassificationMetadata
    */
    readonly folderId: string
    
}

/**
 * Request parameters for removeFromFolder operation in ClassificationsOnFoldersApi.
 * @export
 * @interface ClassificationsOnFoldersApiRemoveFromFolderRequest
 */
export type ClassificationsOnFoldersApiRemoveFromFolderRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof ClassificationsOnFoldersApiRemoveFromFolder
    */
    readonly folderId: string
    
}

/**
 * Request parameters for updateClassification operation in ClassificationsOnFoldersApi.
 * @export
 * @interface ClassificationsOnFoldersApiUpdateClassificationRequest
 */
export type ClassificationsOnFoldersApiUpdateClassificationRequest = {
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof ClassificationsOnFoldersApiUpdateClassification
    */
    readonly folderId: string
    /**
    * 
    * @type {Array<ClassificationsOnFoldersUpdateClassificationRequestInner>}
    * @memberof ClassificationsOnFoldersApiUpdateClassification
    */
    readonly requestBody?: Array<ClassificationsOnFoldersUpdateClassificationRequestInner>
}

/**
 * ClassificationsOnFoldersApiGenerated - object-oriented interface
 * @export
 * @class ClassificationsOnFoldersApiGenerated
 * @extends {BaseAPI}
 */
export class ClassificationsOnFoldersApiGenerated extends BaseAPI {
    /**
     * Adds a classification to a folder by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
     * @summary Add classification to folder
     * @param {ClassificationsOnFoldersApiAddClassificationToFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFoldersApiGenerated
     */
    public addClassificationToFolder(requestParameters: ClassificationsOnFoldersApiAddClassificationToFolderRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFoldersApiFp(this.configuration).addClassificationToFolder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the classification metadata instance that has been applied to a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
     * @summary Get classification on folder
     * @param {ClassificationsOnFoldersApiGetClassificationMetadataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFoldersApiGenerated
     */
    public getClassificationMetadata(requestParameters: ClassificationsOnFoldersApiGetClassificationMetadataRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFoldersApiFp(this.configuration).getClassificationMetadata(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes any classifications from a folder.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
     * @summary Remove classification from folder
     * @param {ClassificationsOnFoldersApiRemoveFromFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFoldersApiGenerated
     */
    public removeFromFolder(requestParameters: ClassificationsOnFoldersApiRemoveFromFolderRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFoldersApiFp(this.configuration).removeFromFolder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a classification on a folder.  The classification can only be updated if a classification has already been applied to the folder before. When editing classifications, only values are defined for the enterprise will be accepted.
     * @summary Update classification on folder
     * @param {ClassificationsOnFoldersApiUpdateClassificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFoldersApiGenerated
     */
    public updateClassification(requestParameters: ClassificationsOnFoldersApiUpdateClassificationRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFoldersApiFp(this.configuration).updateClassification(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}