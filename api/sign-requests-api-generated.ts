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
import { FileBase } from '../models';
// @ts-ignore
import { FolderMini } from '../models';
// @ts-ignore
import { SignRequest } from '../models';
// @ts-ignore
import { SignRequestCreateRequest } from '../models';
// @ts-ignore
import { SignRequestCreateSigner } from '../models';
// @ts-ignore
import { SignRequestPrefillTag } from '../models';
// @ts-ignore
import { SignRequests } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SignRequestsApi - axios parameter creator
 * @export
 */
export const SignRequestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Cancels a sign request.
         * @summary Cancel sign request
         * @param {string} signRequestId The ID of the sign request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelRequest: async (signRequestId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signRequestId' is not null or undefined
            assertParamExists('cancelRequest', 'signRequestId', signRequestId)
            const localVarPath = `/sign_requests/{sign_request_id}/cancel`
                .replace(`{${"sign_request_id"}}`, encodeURIComponent(String(signRequestId !== undefined ? signRequestId : `-sign_request_id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sign_requests/{sign_request_id}/cancel',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a sign request. This involves preparing a document for signing and sending the sign request to signers.
         * @summary Create sign request
         * @param {SignRequestCreateRequest} [signRequestCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequest: async (signRequestCreateRequest?: SignRequestCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sign_requests`;
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
                requestBody: signRequestCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sign_requests',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(signRequestCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a sign request by ID.
         * @summary Get sign request by ID
         * @param {string} signRequestId The ID of the sign request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (signRequestId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signRequestId' is not null or undefined
            assertParamExists('getById', 'signRequestId', signRequestId)
            const localVarPath = `/sign_requests/{sign_request_id}`
                .replace(`{${"sign_request_id"}}`, encodeURIComponent(String(signRequestId !== undefined ? signRequestId : `-sign_request_id-`)));
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
                pathTemplate: '/sign_requests/{sign_request_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets sign requests created by a user. If the `sign_files` and/or `parent_folder` are deleted, the sign request will not return in the list.
         * @summary List sign requests
         * @param {string} [marker] Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires &#x60;usemarker&#x60; to be set to &#x60;true&#x60;.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (marker?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sign_requests`;
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sign_requests',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resends a sign request email to all outstanding signers.
         * @summary Resend sign request
         * @param {string} signRequestId The ID of the sign request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendSignRequestEmails: async (signRequestId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signRequestId' is not null or undefined
            assertParamExists('resendSignRequestEmails', 'signRequestId', signRequestId)
            const localVarPath = `/sign_requests/{sign_request_id}/resend`
                .replace(`{${"sign_request_id"}}`, encodeURIComponent(String(signRequestId !== undefined ? signRequestId : `-sign_request_id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sign_requests/{sign_request_id}/resend',
                httpMethod: 'POST'
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
 * SignRequestsApi - functional programming interface
 * @export
 */
export const SignRequestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SignRequestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Cancels a sign request.
         * @summary Cancel sign request
         * @param {SignRequestsApiCancelRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelRequest(requestParameters: SignRequestsApiCancelRequestRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignRequest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelRequest(requestParameters.signRequestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a sign request. This involves preparing a document for signing and sending the sign request to signers.
         * @summary Create sign request
         * @param {SignRequestsApiCreateRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRequest(requestParameters: SignRequestsApiCreateRequestRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignRequest>> {
            const signRequestCreateRequest: SignRequestCreateRequest = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRequest(signRequestCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a sign request by ID.
         * @summary Get sign request by ID
         * @param {SignRequestsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: SignRequestsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignRequest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.signRequestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets sign requests created by a user. If the `sign_files` and/or `parent_folder` are deleted, the sign request will not return in the list.
         * @summary List sign requests
         * @param {SignRequestsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: SignRequestsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignRequests>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.marker, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Resends a sign request email to all outstanding signers.
         * @summary Resend sign request
         * @param {SignRequestsApiResendSignRequestEmailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendSignRequestEmails(requestParameters: SignRequestsApiResendSignRequestEmailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendSignRequestEmails(requestParameters.signRequestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SignRequestsApi - factory interface
 * @export
 */
export const SignRequestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SignRequestsApiFp(configuration)
    return {
        /**
         * Cancels a sign request.
         * @summary Cancel sign request
         * @param {SignRequestsApiCancelRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelRequest(requestParameters: SignRequestsApiCancelRequestRequest, options?: AxiosRequestConfig): AxiosPromise<SignRequest> {
            return localVarFp.cancelRequest(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a sign request. This involves preparing a document for signing and sending the sign request to signers.
         * @summary Create sign request
         * @param {SignRequestsApiCreateRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequest(requestParameters: SignRequestsApiCreateRequestRequest = {}, options?: AxiosRequestConfig): AxiosPromise<SignRequest> {
            return localVarFp.createRequest(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a sign request by ID.
         * @summary Get sign request by ID
         * @param {SignRequestsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: SignRequestsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<SignRequest> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets sign requests created by a user. If the `sign_files` and/or `parent_folder` are deleted, the sign request will not return in the list.
         * @summary List sign requests
         * @param {SignRequestsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: SignRequestsApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<SignRequests> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Resends a sign request email to all outstanding signers.
         * @summary Resend sign request
         * @param {SignRequestsApiResendSignRequestEmailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendSignRequestEmails(requestParameters: SignRequestsApiResendSignRequestEmailsRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resendSignRequestEmails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelRequest operation in SignRequestsApi.
 * @export
 * @interface SignRequestsApiCancelRequestRequest
 */
export type SignRequestsApiCancelRequestRequest = {
    
    /**
    * The ID of the sign request
    * @type {string}
    * @memberof SignRequestsApiCancelRequest
    */
    readonly signRequestId: string
    
}

/**
 * Request parameters for createRequest operation in SignRequestsApi.
 * @export
 * @interface SignRequestsApiCreateRequestRequest
 */
export type SignRequestsApiCreateRequestRequest = {
    
} & SignRequestCreateRequest

/**
 * Request parameters for getById operation in SignRequestsApi.
 * @export
 * @interface SignRequestsApiGetByIdRequest
 */
export type SignRequestsApiGetByIdRequest = {
    
    /**
    * The ID of the sign request
    * @type {string}
    * @memberof SignRequestsApiGetById
    */
    readonly signRequestId: string
    
}

/**
 * Request parameters for list operation in SignRequestsApi.
 * @export
 * @interface SignRequestsApiListRequest
 */
export type SignRequestsApiListRequest = {
    
    /**
    * Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.
    * @type {string}
    * @memberof SignRequestsApiList
    */
    readonly marker?: string
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof SignRequestsApiList
    */
    readonly limit?: number
    
}

/**
 * Request parameters for resendSignRequestEmails operation in SignRequestsApi.
 * @export
 * @interface SignRequestsApiResendSignRequestEmailsRequest
 */
export type SignRequestsApiResendSignRequestEmailsRequest = {
    
    /**
    * The ID of the sign request
    * @type {string}
    * @memberof SignRequestsApiResendSignRequestEmails
    */
    readonly signRequestId: string
    
}

/**
 * SignRequestsApiGenerated - object-oriented interface
 * @export
 * @class SignRequestsApiGenerated
 * @extends {BaseAPI}
 */
export class SignRequestsApiGenerated extends BaseAPI {
    /**
     * Cancels a sign request.
     * @summary Cancel sign request
     * @param {SignRequestsApiCancelRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignRequestsApiGenerated
     */
    public cancelRequest(requestParameters: SignRequestsApiCancelRequestRequest, options?: AxiosRequestConfig) {
        return SignRequestsApiFp(this.configuration).cancelRequest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a sign request. This involves preparing a document for signing and sending the sign request to signers.
     * @summary Create sign request
     * @param {SignRequestsApiCreateRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignRequestsApiGenerated
     */
    public createRequest(requestParameters: SignRequestsApiCreateRequestRequest = {}, options?: AxiosRequestConfig) {
        return SignRequestsApiFp(this.configuration).createRequest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a sign request by ID.
     * @summary Get sign request by ID
     * @param {SignRequestsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignRequestsApiGenerated
     */
    public getById(requestParameters: SignRequestsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return SignRequestsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets sign requests created by a user. If the `sign_files` and/or `parent_folder` are deleted, the sign request will not return in the list.
     * @summary List sign requests
     * @param {SignRequestsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignRequestsApiGenerated
     */
    public list(requestParameters: SignRequestsApiListRequest = {}, options?: AxiosRequestConfig) {
        return SignRequestsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resends a sign request email to all outstanding signers.
     * @summary Resend sign request
     * @param {SignRequestsApiResendSignRequestEmailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignRequestsApiGenerated
     */
    public resendSignRequestEmails(requestParameters: SignRequestsApiResendSignRequestEmailsRequest, options?: AxiosRequestConfig) {
        return SignRequestsApiFp(this.configuration).resendSignRequestEmails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
