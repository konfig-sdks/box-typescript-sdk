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
import { ShieldInformationBarrierBase } from '../models';
// @ts-ignore
import { ShieldInformationBarrierReference } from '../models';
// @ts-ignore
import { ShieldInformationBarrierReport } from '../models';
// @ts-ignore
import { ShieldInformationBarrierReports } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ShieldInformationBarrierReportsApi - axios parameter creator
 * @export
 */
export const ShieldInformationBarrierReportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a shield information barrier report for a given barrier.
         * @summary Create shield information barrier report
         * @param {ShieldInformationBarrierReference} [shieldInformationBarrierReference] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReport: async (shieldInformationBarrierReference?: ShieldInformationBarrierReference, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/shield_information_barrier_reports`;
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
                requestBody: shieldInformationBarrierReference,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/shield_information_barrier_reports',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shieldInformationBarrierReference, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a shield information barrier report by its ID.
         * @summary Get shield information barrier report by ID
         * @param {string} shieldInformationBarrierReportId The ID of the shield information barrier Report.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (shieldInformationBarrierReportId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'shieldInformationBarrierReportId' is not null or undefined
            assertParamExists('getById', 'shieldInformationBarrierReportId', shieldInformationBarrierReportId)
            const localVarPath = `/shield_information_barrier_reports/{shield_information_barrier_report_id}`
                .replace(`{${"shield_information_barrier_report_id"}}`, encodeURIComponent(String(shieldInformationBarrierReportId !== undefined ? shieldInformationBarrierReportId : `-shield_information_barrier_report_id-`)));
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
                pathTemplate: '/shield_information_barrier_reports/{shield_information_barrier_report_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists shield information barrier reports.
         * @summary List shield information barrier reports
         * @param {string} shieldInformationBarrierId The ID of the shield information barrier.
         * @param {string} [marker] Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires &#x60;usemarker&#x60; to be set to &#x60;true&#x60;.
         * @param {number} [limit] The maximum number of items to return per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReports: async (shieldInformationBarrierId: string, marker?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'shieldInformationBarrierId' is not null or undefined
            assertParamExists('listReports', 'shieldInformationBarrierId', shieldInformationBarrierId)
            const localVarPath = `/shield_information_barrier_reports`;
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
            if (shieldInformationBarrierId !== undefined) {
                localVarQueryParameter['shield_information_barrier_id'] = shieldInformationBarrierId;
            }

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
                pathTemplate: '/shield_information_barrier_reports',
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
 * ShieldInformationBarrierReportsApi - functional programming interface
 * @export
 */
export const ShieldInformationBarrierReportsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShieldInformationBarrierReportsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a shield information barrier report for a given barrier.
         * @summary Create shield information barrier report
         * @param {ShieldInformationBarrierReportsApiCreateReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReport(requestParameters: ShieldInformationBarrierReportsApiCreateReportRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShieldInformationBarrierReport>> {
            const shieldInformationBarrierReference: ShieldInformationBarrierReference = {
                shield_information_barrier: requestParameters.shield_information_barrier
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReport(shieldInformationBarrierReference, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a shield information barrier report by its ID.
         * @summary Get shield information barrier report by ID
         * @param {ShieldInformationBarrierReportsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: ShieldInformationBarrierReportsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShieldInformationBarrierReport>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.shieldInformationBarrierReportId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists shield information barrier reports.
         * @summary List shield information barrier reports
         * @param {ShieldInformationBarrierReportsApiListReportsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listReports(requestParameters: ShieldInformationBarrierReportsApiListReportsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShieldInformationBarrierReports>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listReports(requestParameters.shieldInformationBarrierId, requestParameters.marker, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShieldInformationBarrierReportsApi - factory interface
 * @export
 */
export const ShieldInformationBarrierReportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShieldInformationBarrierReportsApiFp(configuration)
    return {
        /**
         * Creates a shield information barrier report for a given barrier.
         * @summary Create shield information barrier report
         * @param {ShieldInformationBarrierReportsApiCreateReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReport(requestParameters: ShieldInformationBarrierReportsApiCreateReportRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ShieldInformationBarrierReport> {
            return localVarFp.createReport(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a shield information barrier report by its ID.
         * @summary Get shield information barrier report by ID
         * @param {ShieldInformationBarrierReportsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: ShieldInformationBarrierReportsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ShieldInformationBarrierReport> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists shield information barrier reports.
         * @summary List shield information barrier reports
         * @param {ShieldInformationBarrierReportsApiListReportsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReports(requestParameters: ShieldInformationBarrierReportsApiListReportsRequest, options?: AxiosRequestConfig): AxiosPromise<ShieldInformationBarrierReports> {
            return localVarFp.listReports(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createReport operation in ShieldInformationBarrierReportsApi.
 * @export
 * @interface ShieldInformationBarrierReportsApiCreateReportRequest
 */
export type ShieldInformationBarrierReportsApiCreateReportRequest = {
    
} & ShieldInformationBarrierReference

/**
 * Request parameters for getById operation in ShieldInformationBarrierReportsApi.
 * @export
 * @interface ShieldInformationBarrierReportsApiGetByIdRequest
 */
export type ShieldInformationBarrierReportsApiGetByIdRequest = {
    
    /**
    * The ID of the shield information barrier Report.
    * @type {string}
    * @memberof ShieldInformationBarrierReportsApiGetById
    */
    readonly shieldInformationBarrierReportId: string
    
}

/**
 * Request parameters for listReports operation in ShieldInformationBarrierReportsApi.
 * @export
 * @interface ShieldInformationBarrierReportsApiListReportsRequest
 */
export type ShieldInformationBarrierReportsApiListReportsRequest = {
    
    /**
    * The ID of the shield information barrier.
    * @type {string}
    * @memberof ShieldInformationBarrierReportsApiListReports
    */
    readonly shieldInformationBarrierId: string
    
    /**
    * Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.
    * @type {string}
    * @memberof ShieldInformationBarrierReportsApiListReports
    */
    readonly marker?: string
    
    /**
    * The maximum number of items to return per page.
    * @type {number}
    * @memberof ShieldInformationBarrierReportsApiListReports
    */
    readonly limit?: number
    
}

/**
 * ShieldInformationBarrierReportsApiGenerated - object-oriented interface
 * @export
 * @class ShieldInformationBarrierReportsApiGenerated
 * @extends {BaseAPI}
 */
export class ShieldInformationBarrierReportsApiGenerated extends BaseAPI {
    /**
     * Creates a shield information barrier report for a given barrier.
     * @summary Create shield information barrier report
     * @param {ShieldInformationBarrierReportsApiCreateReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShieldInformationBarrierReportsApiGenerated
     */
    public createReport(requestParameters: ShieldInformationBarrierReportsApiCreateReportRequest = {}, options?: AxiosRequestConfig) {
        return ShieldInformationBarrierReportsApiFp(this.configuration).createReport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a shield information barrier report by its ID.
     * @summary Get shield information barrier report by ID
     * @param {ShieldInformationBarrierReportsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShieldInformationBarrierReportsApiGenerated
     */
    public getById(requestParameters: ShieldInformationBarrierReportsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return ShieldInformationBarrierReportsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists shield information barrier reports.
     * @summary List shield information barrier reports
     * @param {ShieldInformationBarrierReportsApiListReportsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShieldInformationBarrierReportsApiGenerated
     */
    public listReports(requestParameters: ShieldInformationBarrierReportsApiListReportsRequest, options?: AxiosRequestConfig) {
        return ShieldInformationBarrierReportsApiFp(this.configuration).listReports(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
