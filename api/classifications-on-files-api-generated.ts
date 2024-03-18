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
import { ClassificationsOnFilesAddClassificationRequest } from '../models';
// @ts-ignore
import { ClassificationsOnFilesUpdateClassificationMetadataInstanceRequestInner } from '../models';
// @ts-ignore
import { ClientError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ClassificationsOnFilesApi - axios parameter creator
 * @export
 */
export const ClassificationsOnFilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds a classification to a file by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Add classification to file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {ClassificationsOnFilesAddClassificationRequest} [classificationsOnFilesAddClassificationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClassification: async (fileId: string, classificationsOnFilesAddClassificationRequest?: ClassificationsOnFilesAddClassificationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('addClassification', 'fileId', fileId)
            const localVarPath = `/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)));
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
                requestBody: classificationsOnFilesAddClassificationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(classificationsOnFilesAddClassificationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the classification metadata instance that has been applied to a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Get classification on file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassificationMetadataInstance: async (fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getClassificationMetadataInstance', 'fileId', fileId)
            const localVarPath = `/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes any classifications from a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Remove classification from file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeClassification: async (fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('removeClassification', 'fileId', fileId)
            const localVarPath = `/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)));
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
                pathTemplate: '/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a classification on a file.  The classification can only be updated if a classification has already been applied to the file before. When editing classifications, only values are defined for the enterprise will be accepted.
         * @summary Update classification on file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {Array<ClassificationsOnFilesUpdateClassificationMetadataInstanceRequestInner>} [classificationsOnFilesUpdateClassificationMetadataInstanceRequestInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClassificationMetadataInstance: async (fileId: string, classificationsOnFilesUpdateClassificationMetadataInstanceRequestInner?: Array<ClassificationsOnFilesUpdateClassificationMetadataInstanceRequestInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateClassificationMetadataInstance', 'fileId', fileId)
            const localVarPath = `/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)));
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
                requestBody: classificationsOnFilesUpdateClassificationMetadataInstanceRequestInner,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(classificationsOnFilesUpdateClassificationMetadataInstanceRequestInner, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClassificationsOnFilesApi - functional programming interface
 * @export
 */
export const ClassificationsOnFilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClassificationsOnFilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds a classification to a file by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Add classification to file
         * @param {ClassificationsOnFilesApiAddClassificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addClassification(requestParameters: ClassificationsOnFilesApiAddClassificationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Classification>> {
            const classificationsOnFilesAddClassificationRequest: ClassificationsOnFilesAddClassificationRequest = {
                Box__Security__Classification__Key: requestParameters.Box__Security__Classification__Key
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addClassification(requestParameters.fileId, classificationsOnFilesAddClassificationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the classification metadata instance that has been applied to a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Get classification on file
         * @param {ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClassificationMetadataInstance(requestParameters: ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Classification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClassificationMetadataInstance(requestParameters.fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes any classifications from a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Remove classification from file
         * @param {ClassificationsOnFilesApiRemoveClassificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeClassification(requestParameters: ClassificationsOnFilesApiRemoveClassificationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeClassification(requestParameters.fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a classification on a file.  The classification can only be updated if a classification has already been applied to the file before. When editing classifications, only values are defined for the enterprise will be accepted.
         * @summary Update classification on file
         * @param {ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateClassificationMetadataInstance(requestParameters: ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Classification>> {
            const classificationsOnFilesUpdateClassificationMetadataInstanceRequestInner: Array<ClassificationsOnFilesUpdateClassificationMetadataInstanceRequestInner> = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClassificationMetadataInstance(requestParameters.fileId, classificationsOnFilesUpdateClassificationMetadataInstanceRequestInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClassificationsOnFilesApi - factory interface
 * @export
 */
export const ClassificationsOnFilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClassificationsOnFilesApiFp(configuration)
    return {
        /**
         * Adds a classification to a file by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Add classification to file
         * @param {ClassificationsOnFilesApiAddClassificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addClassification(requestParameters: ClassificationsOnFilesApiAddClassificationRequest, options?: AxiosRequestConfig): AxiosPromise<Classification> {
            return localVarFp.addClassification(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the classification metadata instance that has been applied to a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Get classification on file
         * @param {ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClassificationMetadataInstance(requestParameters: ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest, options?: AxiosRequestConfig): AxiosPromise<Classification> {
            return localVarFp.getClassificationMetadataInstance(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes any classifications from a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
         * @summary Remove classification from file
         * @param {ClassificationsOnFilesApiRemoveClassificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeClassification(requestParameters: ClassificationsOnFilesApiRemoveClassificationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeClassification(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a classification on a file.  The classification can only be updated if a classification has already been applied to the file before. When editing classifications, only values are defined for the enterprise will be accepted.
         * @summary Update classification on file
         * @param {ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClassificationMetadataInstance(requestParameters: ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest, options?: AxiosRequestConfig): AxiosPromise<Classification> {
            return localVarFp.updateClassificationMetadataInstance(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addClassification operation in ClassificationsOnFilesApi.
 * @export
 * @interface ClassificationsOnFilesApiAddClassificationRequest
 */
export type ClassificationsOnFilesApiAddClassificationRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof ClassificationsOnFilesApiAddClassification
    */
    readonly fileId: string
    
} & ClassificationsOnFilesAddClassificationRequest

/**
 * Request parameters for getClassificationMetadataInstance operation in ClassificationsOnFilesApi.
 * @export
 * @interface ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest
 */
export type ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof ClassificationsOnFilesApiGetClassificationMetadataInstance
    */
    readonly fileId: string
    
}

/**
 * Request parameters for removeClassification operation in ClassificationsOnFilesApi.
 * @export
 * @interface ClassificationsOnFilesApiRemoveClassificationRequest
 */
export type ClassificationsOnFilesApiRemoveClassificationRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof ClassificationsOnFilesApiRemoveClassification
    */
    readonly fileId: string
    
}

/**
 * Request parameters for updateClassificationMetadataInstance operation in ClassificationsOnFilesApi.
 * @export
 * @interface ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest
 */
export type ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest = {
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof ClassificationsOnFilesApiUpdateClassificationMetadataInstance
    */
    readonly fileId: string
    /**
    * 
    * @type {Array<ClassificationsOnFilesUpdateClassificationMetadataInstanceRequestInner>}
    * @memberof ClassificationsOnFilesApiUpdateClassificationMetadataInstance
    */
    readonly requestBody?: Array<ClassificationsOnFilesUpdateClassificationMetadataInstanceRequestInner>
}

/**
 * ClassificationsOnFilesApiGenerated - object-oriented interface
 * @export
 * @class ClassificationsOnFilesApiGenerated
 * @extends {BaseAPI}
 */
export class ClassificationsOnFilesApiGenerated extends BaseAPI {
    /**
     * Adds a classification to a file by specifying the label of the classification to add.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
     * @summary Add classification to file
     * @param {ClassificationsOnFilesApiAddClassificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFilesApiGenerated
     */
    public addClassification(requestParameters: ClassificationsOnFilesApiAddClassificationRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFilesApiFp(this.configuration).addClassification(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the classification metadata instance that has been applied to a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
     * @summary Get classification on file
     * @param {ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFilesApiGenerated
     */
    public getClassificationMetadataInstance(requestParameters: ClassificationsOnFilesApiGetClassificationMetadataInstanceRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFilesApiFp(this.configuration).getClassificationMetadataInstance(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes any classifications from a file.  This API can also be called by including the enterprise ID in the URL explicitly, for example `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
     * @summary Remove classification from file
     * @param {ClassificationsOnFilesApiRemoveClassificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFilesApiGenerated
     */
    public removeClassification(requestParameters: ClassificationsOnFilesApiRemoveClassificationRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFilesApiFp(this.configuration).removeClassification(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a classification on a file.  The classification can only be updated if a classification has already been applied to the file before. When editing classifications, only values are defined for the enterprise will be accepted.
     * @summary Update classification on file
     * @param {ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassificationsOnFilesApiGenerated
     */
    public updateClassificationMetadataInstance(requestParameters: ClassificationsOnFilesApiUpdateClassificationMetadataInstanceRequest, options?: AxiosRequestConfig) {
        return ClassificationsOnFilesApiFp(this.configuration).updateClassificationMetadataInstance(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
