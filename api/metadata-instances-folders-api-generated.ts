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
import { AMetadataInstanceUpdateOperation1 } from '../models';
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
 * MetadataInstancesFoldersApi - axios parameter creator
 * @export
 */
export const MetadataInstancesFoldersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Applies an instance of a metadata template to a folder.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.  To display the metadata template in the Box web app the enterprise needs to be configured to enable **Cascading Folder Level Metadata** for the user in the admin console.
         * @summary Create metadata instance on folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {{ [key: string]: ; }} [requestBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        applyTemplate: async (folderId: string, scope: 'global' | 'enterprise', templateKey: string, requestBody?: { [key: string]: ; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('applyTemplate', 'folderId', folderId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('applyTemplate', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('applyTemplate', 'templateKey', templateKey)
            const localVarPath = `/folders/{folder_id}/metadata/{scope}/{template_key}`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)))
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
                pathTemplate: '/folders/{folder_id}/metadata/{scope}/{template_key}',
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
         * Retrieves the instance of a metadata template that has been applied to a folder. This can not be used on the root folder with ID `0`.
         * @summary Get metadata instance on folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderMetadataInstance: async (folderId: string, scope: 'global' | 'enterprise', templateKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getFolderMetadataInstance', 'folderId', folderId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('getFolderMetadataInstance', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('getFolderMetadataInstance', 'templateKey', templateKey)
            const localVarPath = `/folders/{folder_id}/metadata/{scope}/{template_key}`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)))
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
                pathTemplate: '/folders/{folder_id}/metadata/{scope}/{template_key}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all metadata for a given folder. This can not be used on the root folder with ID `0`.
         * @summary List metadata instances on folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOnFolder: async (folderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('listOnFolder', 'folderId', folderId)
            const localVarPath = `/folders/{folder_id}/metadata`
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
                pathTemplate: '/folders/{folder_id}/metadata',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a piece of folder metadata.
         * @summary Remove metadata instance from folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeInstance: async (folderId: string, scope: 'global' | 'enterprise', templateKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('removeInstance', 'folderId', folderId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('removeInstance', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('removeInstance', 'templateKey', templateKey)
            const localVarPath = `/folders/{folder_id}/metadata/{scope}/{template_key}`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)))
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
                pathTemplate: '/folders/{folder_id}/metadata/{scope}/{template_key}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a piece of metadata on a folder.  The metadata instance can only be updated if the template has already been applied to the folder before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
         * @summary Update metadata instance on folder
         * @param {string} folderId The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://_*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
         * @param {'global' | 'enterprise'} scope The scope of the metadata template
         * @param {string} templateKey The name of the metadata template
         * @param {Array<AMetadataInstanceUpdateOperation1>} [aMetadataInstanceUpdateOperation1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceOnFolder: async (folderId: string, scope: 'global' | 'enterprise', templateKey: string, aMetadataInstanceUpdateOperation1?: Array<AMetadataInstanceUpdateOperation1>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('updateInstanceOnFolder', 'folderId', folderId)
            // verify required parameter 'scope' is not null or undefined
            assertParamExists('updateInstanceOnFolder', 'scope', scope)
            // verify required parameter 'templateKey' is not null or undefined
            assertParamExists('updateInstanceOnFolder', 'templateKey', templateKey)
            const localVarPath = `/folders/{folder_id}/metadata/{scope}/{template_key}`
                .replace(`{${"folder_id"}}`, encodeURIComponent(String(folderId !== undefined ? folderId : `-folder_id-`)))
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
                requestBody: aMetadataInstanceUpdateOperation1,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/folders/{folder_id}/metadata/{scope}/{template_key}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(aMetadataInstanceUpdateOperation1, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetadataInstancesFoldersApi - functional programming interface
 * @export
 */
export const MetadataInstancesFoldersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetadataInstancesFoldersApiAxiosParamCreator(configuration)
    return {
        /**
         * Applies an instance of a metadata template to a folder.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.  To display the metadata template in the Box web app the enterprise needs to be configured to enable **Cascading Folder Level Metadata** for the user in the admin console.
         * @summary Create metadata instance on folder
         * @param {MetadataInstancesFoldersApiApplyTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async applyTemplate(requestParameters: MetadataInstancesFoldersApiApplyTemplateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFull>> {
            const requestBody: { [key: string]: ; } = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.applyTemplate(requestParameters.folderId, requestParameters.scope, requestParameters.templateKey, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the instance of a metadata template that has been applied to a folder. This can not be used on the root folder with ID `0`.
         * @summary Get metadata instance on folder
         * @param {MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFolderMetadataInstance(requestParameters: MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFull>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderMetadataInstance(requestParameters.folderId, requestParameters.scope, requestParameters.templateKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves all metadata for a given folder. This can not be used on the root folder with ID `0`.
         * @summary List metadata instances on folder
         * @param {MetadataInstancesFoldersApiListOnFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOnFolder(requestParameters: MetadataInstancesFoldersApiListOnFolderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Metadatas>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listOnFolder(requestParameters.folderId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a piece of folder metadata.
         * @summary Remove metadata instance from folder
         * @param {MetadataInstancesFoldersApiRemoveInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeInstance(requestParameters: MetadataInstancesFoldersApiRemoveInstanceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeInstance(requestParameters.folderId, requestParameters.scope, requestParameters.templateKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a piece of metadata on a folder.  The metadata instance can only be updated if the template has already been applied to the folder before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
         * @summary Update metadata instance on folder
         * @param {MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInstanceOnFolder(requestParameters: MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataFull>> {
            const aMetadataInstanceUpdateOperation1: Array<AMetadataInstanceUpdateOperation1> = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInstanceOnFolder(requestParameters.folderId, requestParameters.scope, requestParameters.templateKey, aMetadataInstanceUpdateOperation1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MetadataInstancesFoldersApi - factory interface
 * @export
 */
export const MetadataInstancesFoldersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetadataInstancesFoldersApiFp(configuration)
    return {
        /**
         * Applies an instance of a metadata template to a folder.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.  To display the metadata template in the Box web app the enterprise needs to be configured to enable **Cascading Folder Level Metadata** for the user in the admin console.
         * @summary Create metadata instance on folder
         * @param {MetadataInstancesFoldersApiApplyTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        applyTemplate(requestParameters: MetadataInstancesFoldersApiApplyTemplateRequest, options?: AxiosRequestConfig): AxiosPromise<MetadataFull> {
            return localVarFp.applyTemplate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the instance of a metadata template that has been applied to a folder. This can not be used on the root folder with ID `0`.
         * @summary Get metadata instance on folder
         * @param {MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFolderMetadataInstance(requestParameters: MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest, options?: AxiosRequestConfig): AxiosPromise<MetadataFull> {
            return localVarFp.getFolderMetadataInstance(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all metadata for a given folder. This can not be used on the root folder with ID `0`.
         * @summary List metadata instances on folder
         * @param {MetadataInstancesFoldersApiListOnFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOnFolder(requestParameters: MetadataInstancesFoldersApiListOnFolderRequest, options?: AxiosRequestConfig): AxiosPromise<Metadatas> {
            return localVarFp.listOnFolder(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a piece of folder metadata.
         * @summary Remove metadata instance from folder
         * @param {MetadataInstancesFoldersApiRemoveInstanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeInstance(requestParameters: MetadataInstancesFoldersApiRemoveInstanceRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeInstance(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a piece of metadata on a folder.  The metadata instance can only be updated if the template has already been applied to the folder before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
         * @summary Update metadata instance on folder
         * @param {MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceOnFolder(requestParameters: MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest, options?: AxiosRequestConfig): AxiosPromise<MetadataFull> {
            return localVarFp.updateInstanceOnFolder(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for applyTemplate operation in MetadataInstancesFoldersApi.
 * @export
 * @interface MetadataInstancesFoldersApiApplyTemplateRequest
 */
export type MetadataInstancesFoldersApiApplyTemplateRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof MetadataInstancesFoldersApiApplyTemplate
    */
    readonly folderId: string
    
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFoldersApiApplyTemplate
    */
    readonly scope: 'global' | 'enterprise'
    
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFoldersApiApplyTemplate
    */
    readonly templateKey: string
    
} & { [key: string]: ; }

/**
 * Request parameters for getFolderMetadataInstance operation in MetadataInstancesFoldersApi.
 * @export
 * @interface MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest
 */
export type MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof MetadataInstancesFoldersApiGetFolderMetadataInstance
    */
    readonly folderId: string
    
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFoldersApiGetFolderMetadataInstance
    */
    readonly scope: 'global' | 'enterprise'
    
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFoldersApiGetFolderMetadataInstance
    */
    readonly templateKey: string
    
}

/**
 * Request parameters for listOnFolder operation in MetadataInstancesFoldersApi.
 * @export
 * @interface MetadataInstancesFoldersApiListOnFolderRequest
 */
export type MetadataInstancesFoldersApiListOnFolderRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof MetadataInstancesFoldersApiListOnFolder
    */
    readonly folderId: string
    
}

/**
 * Request parameters for removeInstance operation in MetadataInstancesFoldersApi.
 * @export
 * @interface MetadataInstancesFoldersApiRemoveInstanceRequest
 */
export type MetadataInstancesFoldersApiRemoveInstanceRequest = {
    
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof MetadataInstancesFoldersApiRemoveInstance
    */
    readonly folderId: string
    
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFoldersApiRemoveInstance
    */
    readonly scope: 'global' | 'enterprise'
    
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFoldersApiRemoveInstance
    */
    readonly templateKey: string
    
}

/**
 * Request parameters for updateInstanceOnFolder operation in MetadataInstancesFoldersApi.
 * @export
 * @interface MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest
 */
export type MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest = {
    /**
    * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.
    * @type {string}
    * @memberof MetadataInstancesFoldersApiUpdateInstanceOnFolder
    */
    readonly folderId: string
    /**
    * The scope of the metadata template
    * @type {'global' | 'enterprise'}
    * @memberof MetadataInstancesFoldersApiUpdateInstanceOnFolder
    */
    readonly scope: 'global' | 'enterprise'
    /**
    * The name of the metadata template
    * @type {string}
    * @memberof MetadataInstancesFoldersApiUpdateInstanceOnFolder
    */
    readonly templateKey: string
    /**
    * 
    * @type {Array<AMetadataInstanceUpdateOperation1>}
    * @memberof MetadataInstancesFoldersApiUpdateInstanceOnFolder
    */
    readonly requestBody?: Array<AMetadataInstanceUpdateOperation1>
}

/**
 * MetadataInstancesFoldersApiGenerated - object-oriented interface
 * @export
 * @class MetadataInstancesFoldersApiGenerated
 * @extends {BaseAPI}
 */
export class MetadataInstancesFoldersApiGenerated extends BaseAPI {
    /**
     * Applies an instance of a metadata template to a folder.  In most cases only values that are present in the metadata template will be accepted, except for the `global.properties` template which accepts any key-value pair.  To display the metadata template in the Box web app the enterprise needs to be configured to enable **Cascading Folder Level Metadata** for the user in the admin console.
     * @summary Create metadata instance on folder
     * @param {MetadataInstancesFoldersApiApplyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFoldersApiGenerated
     */
    public applyTemplate(requestParameters: MetadataInstancesFoldersApiApplyTemplateRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFoldersApiFp(this.configuration).applyTemplate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the instance of a metadata template that has been applied to a folder. This can not be used on the root folder with ID `0`.
     * @summary Get metadata instance on folder
     * @param {MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFoldersApiGenerated
     */
    public getFolderMetadataInstance(requestParameters: MetadataInstancesFoldersApiGetFolderMetadataInstanceRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFoldersApiFp(this.configuration).getFolderMetadataInstance(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all metadata for a given folder. This can not be used on the root folder with ID `0`.
     * @summary List metadata instances on folder
     * @param {MetadataInstancesFoldersApiListOnFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFoldersApiGenerated
     */
    public listOnFolder(requestParameters: MetadataInstancesFoldersApiListOnFolderRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFoldersApiFp(this.configuration).listOnFolder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a piece of folder metadata.
     * @summary Remove metadata instance from folder
     * @param {MetadataInstancesFoldersApiRemoveInstanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFoldersApiGenerated
     */
    public removeInstance(requestParameters: MetadataInstancesFoldersApiRemoveInstanceRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFoldersApiFp(this.configuration).removeInstance(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a piece of metadata on a folder.  The metadata instance can only be updated if the template has already been applied to the folder before. When editing metadata, only values that match the metadata template schema will be accepted.  The update is applied atomically. If any errors occur during the application of the operations, the metadata instance will not be changed.
     * @summary Update metadata instance on folder
     * @param {MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataInstancesFoldersApiGenerated
     */
    public updateInstanceOnFolder(requestParameters: MetadataInstancesFoldersApiUpdateInstanceOnFolderRequest, options?: AxiosRequestConfig) {
        return MetadataInstancesFoldersApiFp(this.configuration).updateInstanceOnFolder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}