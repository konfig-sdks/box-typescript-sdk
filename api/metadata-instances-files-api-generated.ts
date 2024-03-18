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
import { AMetadataInstanceUpdateOperation } from '../models';
// @ts-ignore
import { ClientError } from '../models';
// @ts-ignore
import { MetadataFull } from '../models';
// @ts-ignore
import { Metadatas } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MetadataInstancesFilesApi - axios parameter creator
 * @export
 */
export const MetadataInstancesFilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Applies an instance of a metadata template to a file.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.
         * @summary Create metadata instance on file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {{ [key: string]: ; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        applyTemplate: async (fileId: string, scope: 'global' | 'enterprise', templateKey: string, requestBody?: { [key: string]: ; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('applyTemplate', 'fileId', fileId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('applyTemplate', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('applyTemplate', 'templateKey', templateKey)
            const localVarPath = `/files/{file_id}/metadata/{scope}/{template_key}`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)))
                .replace(`{${"scope"}}`, encodeURIComponent(String(scope !== undefined ? scope : `-scope-`)))
                .replace(`{${"template_key"}}`, encodeURIComponent(String(templateKey !== undefined ? templateKey : `-template_key-`)));
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
                requestBody: requestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/files/{file_id}/metadata/{scope}/{template_key}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the instance of a metadata template that has been applied to a file.
         * @summary Get metadata instance on file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstance: async (fileId: string, scope: 'global' | 'enterprise', templateKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getInstance', 'fileId', fileId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('getInstance', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('getInstance', 'templateKey', templateKey)
            const localVarPath = `/files/{file_id}/metadata/{scope}/{template_key}`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)))
                .replace(`{${"scope"}}`, encodeURIComponent(String(scope !== undefined ? scope : `-scope-`)))
                .replace(`{${"template_key"}}`, encodeURIComponent(String(templateKey !== undefined ? templateKey : `-template_key-`)));
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
                pathTemplate: '/files/{file_id}/metadata/{scope}/{template_key}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all metadata for a given file.
         * @summary List metadata instances on file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFileMetadata: async (fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('listFileMetadata', 'fileId', fileId)
            const localVarPath = `/files/{file_id}/metadata`
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
                pathTemplate: '/files/{file_id}/metadata',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a piece of file metadata.
         * @summary Remove metadata instance from file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeInstance: async (fileId: string, scope: 'global' | 'enterprise', templateKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('removeInstance', 'fileId', fileId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('removeInstance', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('removeInstance', 'templateKey', templateKey)
            const localVarPath = `/files/{file_id}/metadata/{scope}/{template_key}`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)))
                .replace(`{${"scope"}}`, encodeURIComponent(String(scope !== undefined ? scope : `-scope-`)))
                .replace(`{${"template_key"}}`, encodeURIComponent(String(templateKey !== undefined ? templateKey : `-template_key-`)));
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
                pathTemplate: '/files/{file_id}/metadata/{scope}/{template_key}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a piece of metadata on a file.  The metadata instance can only be updated if the template has already been applied to the file before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
         * @summary Update metadata instance on file
         * @param {string} fileId The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {Array<AMetadataInstanceUpdateOperation>} [aMetadataInstanceUpdateOperation] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceOnFile: async (fileId: string, scope: 'global' | 'enterprise', templateKey: string, aMetadataInstanceUpdateOperation?: Array<AMetadataInstanceUpdateOperation>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('updateInstanceOnFile', 'fileId', fileId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('updateInstanceOnFile', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('updateInstanceOnFile', 'templateKey', templateKey)
            const localVarPath = `/files/{file_id}/metadata/{scope}/{template_key}`
                .replace(`{${"file_id"}}`, encodeURIComponent(String(fileId !== undefined ? fileId : `-file_id-`)))
                .replace(`{${"scope"}}`, encodeURIComponent(String(scope !== undefined ? scope : `-scope-`)))
                .replace(`{${"template_key"}}`, encodeURIComponent(String(templateKey !== undefined ? templateKey : `-template_key-`)));
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
                requestBody: aMetadataInstanceUpdateOperation,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/files/{file_id}/metadata/{scope}/{template_key}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(aMetadataInstanceUpdateOperation, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetadataInstancesFilesApi - functional programming interface
 * @export
 */
export const MetadataInstancesFilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetadataInstancesFilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Applies an instance of a metadata template to a file.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.
         * @summary Create metadata instance on file
         * @param {MetadataInstancesFilesApiApplyTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applyTemplate(requestParameters: MetadataInstancesFilesApiApplyTemplateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFull>> {
            const requestBody: { [key: string]: ; } = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.applyTemplate(requestParameters.fileId, requestParameters.scope, requestParameters.templateKey, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the instance of a metadata template that has been applied to a file.
         * @summary Get metadata instance on file
         * @param {MetadataInstancesFilesApiGetInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInstance(requestParameters: MetadataInstancesFilesApiGetInstanceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFull>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInstance(requestParameters.fileId, requestParameters.scope, requestParameters.templateKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves all metadata for a given file.
         * @summary List metadata instances on file
         * @param {MetadataInstancesFilesApiListFileMetadataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFileMetadata(requestParameters: MetadataInstancesFilesApiListFileMetadataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Metadatas>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFileMetadata(requestParameters.fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a piece of file metadata.
         * @summary Remove metadata instance from file
         * @param {MetadataInstancesFilesApiRemoveInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeInstance(requestParameters: MetadataInstancesFilesApiRemoveInstanceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeInstance(requestParameters.fileId, requestParameters.scope, requestParameters.templateKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a piece of metadata on a file.  The metadata instance can only be updated if the template has already been applied to the file before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
         * @summary Update metadata instance on file
         * @param {MetadataInstancesFilesApiUpdateInstanceOnFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInstanceOnFile(requestParameters: MetadataInstancesFilesApiUpdateInstanceOnFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFull>> {
            const aMetadataInstanceUpdateOperation: Array<AMetadataInstanceUpdateOperation> = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInstanceOnFile(requestParameters.fileId, requestParameters.scope, requestParameters.templateKey, aMetadataInstanceUpdateOperation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MetadataInstancesFilesApi - factory interface
 * @export
 */
export const MetadataInstancesFilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetadataInstancesFilesApiFp(configuration)
    return {
        /**
         * Applies an instance of a metadata template to a file.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.
         * @summary Create metadata instance on file
         * @param {MetadataInstancesFilesApiApplyTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        applyTemplate(requestParameters: MetadataInstancesFilesApiApplyTemplateRequest, options?: AxiosRequestConfig): AxiosPromise<MetadataFull> {
            return localVarFp.applyTemplate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the instance of a metadata template that has been applied to a file.
         * @summary Get metadata instance on file
         * @param {MetadataInstancesFilesApiGetInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstance(requestParameters: MetadataInstancesFilesApiGetInstanceRequest, options?: AxiosRequestConfig): AxiosPromise<MetadataFull> {
            return localVarFp.getInstance(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all metadata for a given file.
         * @summary List metadata instances on file
         * @param {MetadataInstancesFilesApiListFileMetadataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFileMetadata(requestParameters: MetadataInstancesFilesApiListFileMetadataRequest, options?: AxiosRequestConfig): AxiosPromise<Metadatas> {
            return localVarFp.listFileMetadata(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a piece of file metadata.
         * @summary Remove metadata instance from file
         * @param {MetadataInstancesFilesApiRemoveInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeInstance(requestParameters: MetadataInstancesFilesApiRemoveInstanceRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeInstance(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a piece of metadata on a file.  The metadata instance can only be updated if the template has already been applied to the file before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
         * @summary Update metadata instance on file
         * @param {MetadataInstancesFilesApiUpdateInstanceOnFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceOnFile(requestParameters: MetadataInstancesFilesApiUpdateInstanceOnFileRequest, options?: AxiosRequestConfig): AxiosPromise<MetadataFull> {
            return localVarFp.updateInstanceOnFile(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for applyTemplate operation in MetadataInstancesFilesApi.
 * @export
 * @interface MetadataInstancesFilesApiApplyTemplateRequest
 */
export type MetadataInstancesFilesApiApplyTemplateRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof MetadataInstancesFilesApiApplyTemplate
    */
    readonly fileId: string
    
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFilesApiApplyTemplate
    */
    readonly scope: 'global' | 'enterprise'
    
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFilesApiApplyTemplate
    */
    readonly templateKey: string
    
} & { [key: string]: ; }

/**
 * Request parameters for getInstance operation in MetadataInstancesFilesApi.
 * @export
 * @interface MetadataInstancesFilesApiGetInstanceRequest
 */
export type MetadataInstancesFilesApiGetInstanceRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof MetadataInstancesFilesApiGetInstance
    */
    readonly fileId: string
    
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFilesApiGetInstance
    */
    readonly scope: 'global' | 'enterprise'
    
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFilesApiGetInstance
    */
    readonly templateKey: string
    
}

/**
 * Request parameters for listFileMetadata operation in MetadataInstancesFilesApi.
 * @export
 * @interface MetadataInstancesFilesApiListFileMetadataRequest
 */
export type MetadataInstancesFilesApiListFileMetadataRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof MetadataInstancesFilesApiListFileMetadata
    */
    readonly fileId: string
    
}

/**
 * Request parameters for removeInstance operation in MetadataInstancesFilesApi.
 * @export
 * @interface MetadataInstancesFilesApiRemoveInstanceRequest
 */
export type MetadataInstancesFilesApiRemoveInstanceRequest = {
    
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof MetadataInstancesFilesApiRemoveInstance
    */
    readonly fileId: string
    
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFilesApiRemoveInstance
    */
    readonly scope: 'global' | 'enterprise'
    
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFilesApiRemoveInstance
    */
    readonly templateKey: string
    
}

/**
 * Request parameters for updateInstanceOnFile operation in MetadataInstancesFilesApi.
 * @export
 * @interface MetadataInstancesFilesApiUpdateInstanceOnFileRequest
 */
export type MetadataInstancesFilesApiUpdateInstanceOnFileRequest = {
    /**
    * The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
    * @type {string}
    * @memberof MetadataInstancesFilesApiUpdateInstanceOnFile
    */
    readonly fileId: string
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFilesApiUpdateInstanceOnFile
    */
    readonly scope: 'global' | 'enterprise'
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFilesApiUpdateInstanceOnFile
    */
    readonly templateKey: string
    /**
    * 
    * @type {Array<AMetadataInstanceUpdateOperation>}
    * @memberof MetadataInstancesFilesApiUpdateInstanceOnFile
    */
    readonly requestBody?: Array<AMetadataInstanceUpdateOperation>
}

/**
 * MetadataInstancesFilesApiGenerated - object-oriented interface
 * @export
 * @class MetadataInstancesFilesApiGenerated
 * @extends {BaseAPI}
 */
export class MetadataInstancesFilesApiGenerated extends BaseAPI {
    /**
     * Applies an instance of a metadata template to a file.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.
     * @summary Create metadata instance on file
     * @param {MetadataInstancesFilesApiApplyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFilesApiGenerated
     */
    public applyTemplate(requestParameters: MetadataInstancesFilesApiApplyTemplateRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFilesApiFp(this.configuration).applyTemplate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the instance of a metadata template that has been applied to a file.
     * @summary Get metadata instance on file
     * @param {MetadataInstancesFilesApiGetInstanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFilesApiGenerated
     */
    public getInstance(requestParameters: MetadataInstancesFilesApiGetInstanceRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFilesApiFp(this.configuration).getInstance(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all metadata for a given file.
     * @summary List metadata instances on file
     * @param {MetadataInstancesFilesApiListFileMetadataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFilesApiGenerated
     */
    public listFileMetadata(requestParameters: MetadataInstancesFilesApiListFileMetadataRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFilesApiFp(this.configuration).listFileMetadata(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a piece of file metadata.
     * @summary Remove metadata instance from file
     * @param {MetadataInstancesFilesApiRemoveInstanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFilesApiGenerated
     */
    public removeInstance(requestParameters: MetadataInstancesFilesApiRemoveInstanceRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFilesApiFp(this.configuration).removeInstance(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a piece of metadata on a file.  The metadata instance can only be updated if the template has already been applied to the file before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
     * @summary Update metadata instance on file
     * @param {MetadataInstancesFilesApiUpdateInstanceOnFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFilesApiGenerated
     */
    public updateInstanceOnFile(requestParameters: MetadataInstancesFilesApiUpdateInstanceOnFileRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFilesApiFp(this.configuration).updateInstanceOnFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
