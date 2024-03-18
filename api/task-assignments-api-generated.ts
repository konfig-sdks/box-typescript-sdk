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
import { TaskAssignment } from '../models';
// @ts-ignore
import { TaskAssignments } from '../models';
// @ts-ignore
import { TaskAssignmentsAssignMultipleUsersRequest } from '../models';
// @ts-ignore
import { TaskAssignmentsAssignMultipleUsersRequestAssignTo } from '../models';
// @ts-ignore
import { TaskAssignmentsAssignMultipleUsersRequestTask } from '../models';
// @ts-ignore
import { TaskAssignmentsUpdateStateAssignedToUserRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TaskAssignmentsApi - axios parameter creator
 * @export
 */
export const TaskAssignmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Assigns a task to a user.  A task can be assigned to more than one user by creating multiple assignments.
         * @summary Assign task
         * @param {TaskAssignmentsAssignMultipleUsersRequest} [taskAssignmentsAssignMultipleUsersRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignMultipleUsers: async (taskAssignmentsAssignMultipleUsersRequest?: TaskAssignmentsAssignMultipleUsersRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/task_assignments`;
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
                requestBody: taskAssignmentsAssignMultipleUsersRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/task_assignments',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskAssignmentsAssignMultipleUsersRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a specific task assignment.
         * @summary Unassign task
         * @param {string} taskAssignmentId The ID of the task assignment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecificAssignment: async (taskAssignmentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskAssignmentId' is not null or undefined
            assertParamExists('deleteSpecificAssignment', 'taskAssignmentId', taskAssignmentId)
            const localVarPath = `/task_assignments/{task_assignment_id}`
                .replace(`{${"task_assignment_id"}}`, encodeURIComponent(String(taskAssignmentId !== undefined ? taskAssignmentId : `-task_assignment_id-`)));
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
                pathTemplate: '/task_assignments/{task_assignment_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves information about a task assignment.
         * @summary Get task assignment
         * @param {string} taskAssignmentId The ID of the task assignment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskAssignmentInfo: async (taskAssignmentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskAssignmentId' is not null or undefined
            assertParamExists('getTaskAssignmentInfo', 'taskAssignmentId', taskAssignmentId)
            const localVarPath = `/task_assignments/{task_assignment_id}`
                .replace(`{${"task_assignment_id"}}`, encodeURIComponent(String(taskAssignmentId !== undefined ? taskAssignmentId : `-task_assignment_id-`)));
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
                pathTemplate: '/task_assignments/{task_assignment_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all of the assignments for a given task.
         * @summary List task assignments
         * @param {string} taskId The ID of the task.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listForTask: async (taskId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('listForTask', 'taskId', taskId)
            const localVarPath = `/tasks/{task_id}/assignments`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId !== undefined ? taskId : `-task_id-`)));
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
                pathTemplate: '/tasks/{task_id}/assignments',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a task assignment. This endpoint can be used to update the state of a task assigned to a user.
         * @summary Update task assignment
         * @param {string} taskAssignmentId The ID of the task assignment.
         * @param {TaskAssignmentsUpdateStateAssignedToUserRequest} [taskAssignmentsUpdateStateAssignedToUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStateAssignedToUser: async (taskAssignmentId: string, taskAssignmentsUpdateStateAssignedToUserRequest?: TaskAssignmentsUpdateStateAssignedToUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskAssignmentId' is not null or undefined
            assertParamExists('updateStateAssignedToUser', 'taskAssignmentId', taskAssignmentId)
            const localVarPath = `/task_assignments/{task_assignment_id}`
                .replace(`{${"task_assignment_id"}}`, encodeURIComponent(String(taskAssignmentId !== undefined ? taskAssignmentId : `-task_assignment_id-`)));
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
                requestBody: taskAssignmentsUpdateStateAssignedToUserRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/task_assignments/{task_assignment_id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(taskAssignmentsUpdateStateAssignedToUserRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskAssignmentsApi - functional programming interface
 * @export
 */
export const TaskAssignmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskAssignmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Assigns a task to a user.  A task can be assigned to more than one user by creating multiple assignments.
         * @summary Assign task
         * @param {TaskAssignmentsApiAssignMultipleUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignMultipleUsers(requestParameters: TaskAssignmentsApiAssignMultipleUsersRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskAssignment>> {
            const taskAssignmentsAssignMultipleUsersRequest: TaskAssignmentsAssignMultipleUsersRequest = {
                task: requestParameters.task,
                assign_to: requestParameters.assign_to
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignMultipleUsers(taskAssignmentsAssignMultipleUsersRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a specific task assignment.
         * @summary Unassign task
         * @param {TaskAssignmentsApiDeleteSpecificAssignmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSpecificAssignment(requestParameters: TaskAssignmentsApiDeleteSpecificAssignmentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSpecificAssignment(requestParameters.taskAssignmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves information about a task assignment.
         * @summary Get task assignment
         * @param {TaskAssignmentsApiGetTaskAssignmentInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaskAssignmentInfo(requestParameters: TaskAssignmentsApiGetTaskAssignmentInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskAssignment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTaskAssignmentInfo(requestParameters.taskAssignmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all of the assignments for a given task.
         * @summary List task assignments
         * @param {TaskAssignmentsApiListForTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listForTask(requestParameters: TaskAssignmentsApiListForTaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskAssignments>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listForTask(requestParameters.taskId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a task assignment. This endpoint can be used to update the state of a task assigned to a user.
         * @summary Update task assignment
         * @param {TaskAssignmentsApiUpdateStateAssignedToUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateStateAssignedToUser(requestParameters: TaskAssignmentsApiUpdateStateAssignedToUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskAssignment>> {
            const taskAssignmentsUpdateStateAssignedToUserRequest: TaskAssignmentsUpdateStateAssignedToUserRequest = {
                message: requestParameters.message,
                resolution_state: requestParameters.resolution_state
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStateAssignedToUser(requestParameters.taskAssignmentId, taskAssignmentsUpdateStateAssignedToUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaskAssignmentsApi - factory interface
 * @export
 */
export const TaskAssignmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskAssignmentsApiFp(configuration)
    return {
        /**
         * Assigns a task to a user.  A task can be assigned to more than one user by creating multiple assignments.
         * @summary Assign task
         * @param {TaskAssignmentsApiAssignMultipleUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignMultipleUsers(requestParameters: TaskAssignmentsApiAssignMultipleUsersRequest, options?: AxiosRequestConfig): AxiosPromise<TaskAssignment> {
            return localVarFp.assignMultipleUsers(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a specific task assignment.
         * @summary Unassign task
         * @param {TaskAssignmentsApiDeleteSpecificAssignmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecificAssignment(requestParameters: TaskAssignmentsApiDeleteSpecificAssignmentRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSpecificAssignment(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves information about a task assignment.
         * @summary Get task assignment
         * @param {TaskAssignmentsApiGetTaskAssignmentInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskAssignmentInfo(requestParameters: TaskAssignmentsApiGetTaskAssignmentInfoRequest, options?: AxiosRequestConfig): AxiosPromise<TaskAssignment> {
            return localVarFp.getTaskAssignmentInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of the assignments for a given task.
         * @summary List task assignments
         * @param {TaskAssignmentsApiListForTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listForTask(requestParameters: TaskAssignmentsApiListForTaskRequest, options?: AxiosRequestConfig): AxiosPromise<TaskAssignments> {
            return localVarFp.listForTask(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a task assignment. This endpoint can be used to update the state of a task assigned to a user.
         * @summary Update task assignment
         * @param {TaskAssignmentsApiUpdateStateAssignedToUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStateAssignedToUser(requestParameters: TaskAssignmentsApiUpdateStateAssignedToUserRequest, options?: AxiosRequestConfig): AxiosPromise<TaskAssignment> {
            return localVarFp.updateStateAssignedToUser(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assignMultipleUsers operation in TaskAssignmentsApi.
 * @export
 * @interface TaskAssignmentsApiAssignMultipleUsersRequest
 */
export type TaskAssignmentsApiAssignMultipleUsersRequest = {
    
} & TaskAssignmentsAssignMultipleUsersRequest

/**
 * Request parameters for deleteSpecificAssignment operation in TaskAssignmentsApi.
 * @export
 * @interface TaskAssignmentsApiDeleteSpecificAssignmentRequest
 */
export type TaskAssignmentsApiDeleteSpecificAssignmentRequest = {
    
    /**
    * The ID of the task assignment.
    * @type {string}
    * @memberof TaskAssignmentsApiDeleteSpecificAssignment
    */
    readonly taskAssignmentId: string
    
}

/**
 * Request parameters for getTaskAssignmentInfo operation in TaskAssignmentsApi.
 * @export
 * @interface TaskAssignmentsApiGetTaskAssignmentInfoRequest
 */
export type TaskAssignmentsApiGetTaskAssignmentInfoRequest = {
    
    /**
    * The ID of the task assignment.
    * @type {string}
    * @memberof TaskAssignmentsApiGetTaskAssignmentInfo
    */
    readonly taskAssignmentId: string
    
}

/**
 * Request parameters for listForTask operation in TaskAssignmentsApi.
 * @export
 * @interface TaskAssignmentsApiListForTaskRequest
 */
export type TaskAssignmentsApiListForTaskRequest = {
    
    /**
    * The ID of the task.
    * @type {string}
    * @memberof TaskAssignmentsApiListForTask
    */
    readonly taskId: string
    
}

/**
 * Request parameters for updateStateAssignedToUser operation in TaskAssignmentsApi.
 * @export
 * @interface TaskAssignmentsApiUpdateStateAssignedToUserRequest
 */
export type TaskAssignmentsApiUpdateStateAssignedToUserRequest = {
    
    /**
    * The ID of the task assignment.
    * @type {string}
    * @memberof TaskAssignmentsApiUpdateStateAssignedToUser
    */
    readonly taskAssignmentId: string
    
} & TaskAssignmentsUpdateStateAssignedToUserRequest

/**
 * TaskAssignmentsApiGenerated - object-oriented interface
 * @export
 * @class TaskAssignmentsApiGenerated
 * @extends {BaseAPI}
 */
export class TaskAssignmentsApiGenerated extends BaseAPI {
    /**
     * Assigns a task to a user.  A task can be assigned to more than one user by creating multiple assignments.
     * @summary Assign task
     * @param {TaskAssignmentsApiAssignMultipleUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskAssignmentsApiGenerated
     */
    public assignMultipleUsers(requestParameters: TaskAssignmentsApiAssignMultipleUsersRequest, options?: AxiosRequestConfig) {
        return TaskAssignmentsApiFp(this.configuration).assignMultipleUsers(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a specific task assignment.
     * @summary Unassign task
     * @param {TaskAssignmentsApiDeleteSpecificAssignmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskAssignmentsApiGenerated
     */
    public deleteSpecificAssignment(requestParameters: TaskAssignmentsApiDeleteSpecificAssignmentRequest, options?: AxiosRequestConfig) {
        return TaskAssignmentsApiFp(this.configuration).deleteSpecificAssignment(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves information about a task assignment.
     * @summary Get task assignment
     * @param {TaskAssignmentsApiGetTaskAssignmentInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskAssignmentsApiGenerated
     */
    public getTaskAssignmentInfo(requestParameters: TaskAssignmentsApiGetTaskAssignmentInfoRequest, options?: AxiosRequestConfig) {
        return TaskAssignmentsApiFp(this.configuration).getTaskAssignmentInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all of the assignments for a given task.
     * @summary List task assignments
     * @param {TaskAssignmentsApiListForTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskAssignmentsApiGenerated
     */
    public listForTask(requestParameters: TaskAssignmentsApiListForTaskRequest, options?: AxiosRequestConfig) {
        return TaskAssignmentsApiFp(this.configuration).listForTask(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a task assignment. This endpoint can be used to update the state of a task assigned to a user.
     * @summary Update task assignment
     * @param {TaskAssignmentsApiUpdateStateAssignedToUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskAssignmentsApiGenerated
     */
    public updateStateAssignedToUser(requestParameters: TaskAssignmentsApiUpdateStateAssignedToUserRequest, options?: AxiosRequestConfig) {
        return TaskAssignmentsApiFp(this.configuration).updateStateAssignedToUser(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
