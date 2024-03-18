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
import { RetentionPolicies } from '../models';
// @ts-ignore
import { RetentionPoliciesCreatePolicyRequest } from '../models';
// @ts-ignore
import { RetentionPoliciesCreatePolicyRequestRetentionLength } from '../models';
// @ts-ignore
import { RetentionPoliciesUpdatePolicyRequest } from '../models';
// @ts-ignore
import { RetentionPoliciesUpdatePolicyRequestDispositionAction } from '../models';
// @ts-ignore
import { RetentionPolicy } from '../models';
// @ts-ignore
import { UserBase } from '../models';
// @ts-ignore
import { UserMini } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RetentionPoliciesApi - axios parameter creator
 * @export
 */
export const RetentionPoliciesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a retention policy.
         * @summary Create retention policy
         * @param {RetentionPoliciesCreatePolicyRequest} [retentionPoliciesCreatePolicyRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPolicy: async (retentionPoliciesCreatePolicyRequest?: RetentionPoliciesCreatePolicyRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/retention_policies`;
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
                requestBody: retentionPoliciesCreatePolicyRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/retention_policies',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(retentionPoliciesCreatePolicyRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Permanently deletes a retention policy.
         * @summary Delete retention policy
         * @param {string} retentionPolicyId The ID of the retention policy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePolicy: async (retentionPolicyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'retentionPolicyId' is not null or undefined
            assertParamExists('deletePolicy', 'retentionPolicyId', retentionPolicyId)
            const localVarPath = `/retention_policies/{retention_policy_id}`
                .replace(`{${"retention_policy_id"}}`, encodeURIComponent(String(retentionPolicyId !== undefined ? retentionPolicyId : `-retention_policy_id-`)));
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
                pathTemplate: '/retention_policies/{retention_policy_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a retention policy.
         * @summary Get retention policy
         * @param {string} retentionPolicyId The ID of the retention policy.
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPolicy: async (retentionPolicyId: string, fields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'retentionPolicyId' is not null or undefined
            assertParamExists('getPolicy', 'retentionPolicyId', retentionPolicyId)
            const localVarPath = `/retention_policies/{retention_policy_id}`
                .replace(`{${"retention_policy_id"}}`, encodeURIComponent(String(retentionPolicyId !== undefined ? retentionPolicyId : `-retention_policy_id-`)));
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
                pathTemplate: '/retention_policies/{retention_policy_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves all of the retention policies for an enterprise.
         * @summary List retention policies
         * @param {string} [policyName] Filters results by a case sensitive prefix of the name of retention policies.
         * @param {'finite' | 'indefinite'} [policyType] Filters results by the type of retention policy.
         * @param {string} [createdByUserId] Filters results by the ID of the user who created policy.
         * @param {Array<string>} [fields] A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {string} [marker] Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (policyName?: string, policyType?: 'finite' | 'indefinite', createdByUserId?: string, fields?: Array<string>, limit?: number, marker?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/retention_policies`;
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
            if (policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }

            if (policyType !== undefined) {
                localVarQueryParameter['policy_type'] = policyType;
            }

            if (createdByUserId !== undefined) {
                localVarQueryParameter['created_by_user_id'] = createdByUserId;
            }

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
                pathTemplate: '/retention_policies',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a retention policy.
         * @summary Update retention policy
         * @param {string} retentionPolicyId The ID of the retention policy.
         * @param {RetentionPoliciesUpdatePolicyRequest} [retentionPoliciesUpdatePolicyRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePolicy: async (retentionPolicyId: string, retentionPoliciesUpdatePolicyRequest?: RetentionPoliciesUpdatePolicyRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'retentionPolicyId' is not null or undefined
            assertParamExists('updatePolicy', 'retentionPolicyId', retentionPolicyId)
            const localVarPath = `/retention_policies/{retention_policy_id}`
                .replace(`{${"retention_policy_id"}}`, encodeURIComponent(String(retentionPolicyId !== undefined ? retentionPolicyId : `-retention_policy_id-`)));
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

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: retentionPoliciesUpdatePolicyRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/retention_policies/{retention_policy_id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(retentionPoliciesUpdatePolicyRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RetentionPoliciesApi - functional programming interface
 * @export
 */
export const RetentionPoliciesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RetentionPoliciesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a retention policy.
         * @summary Create retention policy
         * @param {RetentionPoliciesApiCreatePolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPolicy(requestParameters: RetentionPoliciesApiCreatePolicyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetentionPolicy>> {
            const retentionPoliciesCreatePolicyRequest: RetentionPoliciesCreatePolicyRequest = {
                description: requestParameters.description,
                policy_name: requestParameters.policy_name,
                policy_type: requestParameters.policy_type,
                disposition_action: requestParameters.disposition_action,
                retention_length: requestParameters.retention_length,
                retention_type: requestParameters.retention_type,
                can_owner_extend_retention: requestParameters.can_owner_extend_retention,
                are_owners_notified: requestParameters.are_owners_notified,
                custom_notification_recipients: requestParameters.custom_notification_recipients
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPolicy(retentionPoliciesCreatePolicyRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Permanently deletes a retention policy.
         * @summary Delete retention policy
         * @param {RetentionPoliciesApiDeletePolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePolicy(requestParameters: RetentionPoliciesApiDeletePolicyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePolicy(requestParameters.retentionPolicyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a retention policy.
         * @summary Get retention policy
         * @param {RetentionPoliciesApiGetPolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPolicy(requestParameters: RetentionPoliciesApiGetPolicyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetentionPolicy>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPolicy(requestParameters.retentionPolicyId, requestParameters.fields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves all of the retention policies for an enterprise.
         * @summary List retention policies
         * @param {RetentionPoliciesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: RetentionPoliciesApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetentionPolicies>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.policyName, requestParameters.policyType, requestParameters.createdByUserId, requestParameters.fields, requestParameters.limit, requestParameters.marker, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a retention policy.
         * @summary Update retention policy
         * @param {RetentionPoliciesApiUpdatePolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePolicy(requestParameters: RetentionPoliciesApiUpdatePolicyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetentionPolicy>> {
            const retentionPoliciesUpdatePolicyRequest: RetentionPoliciesUpdatePolicyRequest = {
                description: requestParameters.description,
                policy_name: requestParameters.policy_name,
                disposition_action: requestParameters.disposition_action,
                retention_type: requestParameters.retention_type,
                retention_length: requestParameters.retention_length,
                status: requestParameters.status,
                can_owner_extend_retention: requestParameters.can_owner_extend_retention,
                are_owners_notified: requestParameters.are_owners_notified,
                custom_notification_recipients: requestParameters.custom_notification_recipients
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePolicy(requestParameters.retentionPolicyId, retentionPoliciesUpdatePolicyRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RetentionPoliciesApi - factory interface
 * @export
 */
export const RetentionPoliciesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RetentionPoliciesApiFp(configuration)
    return {
        /**
         * Creates a retention policy.
         * @summary Create retention policy
         * @param {RetentionPoliciesApiCreatePolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPolicy(requestParameters: RetentionPoliciesApiCreatePolicyRequest, options?: AxiosRequestConfig): AxiosPromise<RetentionPolicy> {
            return localVarFp.createPolicy(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Permanently deletes a retention policy.
         * @summary Delete retention policy
         * @param {RetentionPoliciesApiDeletePolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePolicy(requestParameters: RetentionPoliciesApiDeletePolicyRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deletePolicy(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a retention policy.
         * @summary Get retention policy
         * @param {RetentionPoliciesApiGetPolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPolicy(requestParameters: RetentionPoliciesApiGetPolicyRequest, options?: AxiosRequestConfig): AxiosPromise<RetentionPolicy> {
            return localVarFp.getPolicy(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves all of the retention policies for an enterprise.
         * @summary List retention policies
         * @param {RetentionPoliciesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: RetentionPoliciesApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<RetentionPolicies> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a retention policy.
         * @summary Update retention policy
         * @param {RetentionPoliciesApiUpdatePolicyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePolicy(requestParameters: RetentionPoliciesApiUpdatePolicyRequest, options?: AxiosRequestConfig): AxiosPromise<RetentionPolicy> {
            return localVarFp.updatePolicy(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createPolicy operation in RetentionPoliciesApi.
 * @export
 * @interface RetentionPoliciesApiCreatePolicyRequest
 */
export type RetentionPoliciesApiCreatePolicyRequest = {
    
} & RetentionPoliciesCreatePolicyRequest

/**
 * Request parameters for deletePolicy operation in RetentionPoliciesApi.
 * @export
 * @interface RetentionPoliciesApiDeletePolicyRequest
 */
export type RetentionPoliciesApiDeletePolicyRequest = {
    
    /**
    * The ID of the retention policy.
    * @type {string}
    * @memberof RetentionPoliciesApiDeletePolicy
    */
    readonly retentionPolicyId: string
    
}

/**
 * Request parameters for getPolicy operation in RetentionPoliciesApi.
 * @export
 * @interface RetentionPoliciesApiGetPolicyRequest
 */
export type RetentionPoliciesApiGetPolicyRequest = {
    
    /**
    * The ID of the retention policy.
    * @type {string}
    * @memberof RetentionPoliciesApiGetPolicy
    */
    readonly retentionPolicyId: string
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof RetentionPoliciesApiGetPolicy
    */
    readonly fields?: Array<string>
    
}

/**
 * Request parameters for listAll operation in RetentionPoliciesApi.
 * @export
 * @interface RetentionPoliciesApiListAllRequest
 */
export type RetentionPoliciesApiListAllRequest = {
    
    /**
    * Filters results by a case sensitive prefix of the name of retention policies.
    * @type {string}
    * @memberof RetentionPoliciesApiListAll
    */
    readonly policyName?: string
    
    /**
    * Filters results by the type of retention policy.
    * @type {'finite' | 'indefinite'}
    * @memberof RetentionPoliciesApiListAll
    */
    readonly policyType?: 'finite' | 'indefinite'
    
    /**
    * Filters results by the ID of the user who created policy.
    * @type {string}
    * @memberof RetentionPoliciesApiListAll
    */
    readonly createdByUserId?: string
    
    /**
    * A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.
    * @type {Array<string>}
    * @memberof RetentionPoliciesApiListAll
    */
    readonly fields?: Array<string>
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof RetentionPoliciesApiListAll
    */
    readonly limit?: number
    
    /**
    * Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.
    * @type {string}
    * @memberof RetentionPoliciesApiListAll
    */
    readonly marker?: string
    
}

/**
 * Request parameters for updatePolicy operation in RetentionPoliciesApi.
 * @export
 * @interface RetentionPoliciesApiUpdatePolicyRequest
 */
export type RetentionPoliciesApiUpdatePolicyRequest = {
    
    /**
    * The ID of the retention policy.
    * @type {string}
    * @memberof RetentionPoliciesApiUpdatePolicy
    */
    readonly retentionPolicyId: string
    
} & RetentionPoliciesUpdatePolicyRequest

/**
 * RetentionPoliciesApiGenerated - object-oriented interface
 * @export
 * @class RetentionPoliciesApiGenerated
 * @extends {BaseAPI}
 */
export class RetentionPoliciesApiGenerated extends BaseAPI {
    /**
     * Creates a retention policy.
     * @summary Create retention policy
     * @param {RetentionPoliciesApiCreatePolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetentionPoliciesApiGenerated
     */
    public createPolicy(requestParameters: RetentionPoliciesApiCreatePolicyRequest, options?: AxiosRequestConfig) {
        return RetentionPoliciesApiFp(this.configuration).createPolicy(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Permanently deletes a retention policy.
     * @summary Delete retention policy
     * @param {RetentionPoliciesApiDeletePolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetentionPoliciesApiGenerated
     */
    public deletePolicy(requestParameters: RetentionPoliciesApiDeletePolicyRequest, options?: AxiosRequestConfig) {
        return RetentionPoliciesApiFp(this.configuration).deletePolicy(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a retention policy.
     * @summary Get retention policy
     * @param {RetentionPoliciesApiGetPolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetentionPoliciesApiGenerated
     */
    public getPolicy(requestParameters: RetentionPoliciesApiGetPolicyRequest, options?: AxiosRequestConfig) {
        return RetentionPoliciesApiFp(this.configuration).getPolicy(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves all of the retention policies for an enterprise.
     * @summary List retention policies
     * @param {RetentionPoliciesApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetentionPoliciesApiGenerated
     */
    public listAll(requestParameters: RetentionPoliciesApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return RetentionPoliciesApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a retention policy.
     * @summary Update retention policy
     * @param {RetentionPoliciesApiUpdatePolicyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RetentionPoliciesApiGenerated
     */
    public updatePolicy(requestParameters: RetentionPoliciesApiUpdatePolicyRequest, options?: AxiosRequestConfig) {
        return RetentionPoliciesApiFp(this.configuration).updatePolicy(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}