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
import { Events } from '../models';
// @ts-ignore
import { RealtimeServers } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns up to a year of past events for a given user or for the entire enterprise.  By default this returns events for the authenticated user. To retrieve events for the entire enterprise, set the `stream_type` to `admin_logs_streaming` for live monitoring of new events, or `admin_logs` for querying across historical events. The user making the API call will need to have admin privileges, and the application will need to have the scope `manage enterprise properties` checked.
         * @summary List user and enterprise events
         * @param {'all' | 'changes' | 'sync' | 'admin_logs' | 'admin_logs_streaming'} [streamType] Defines the type of events that are returned  * &#x60;all&#x60; returns everything for a user and is the default * &#x60;changes&#x60; returns events that may cause file tree changes   such as file updates or collaborations. * &#x60;sync&#x60; is similar to &#x60;changes&#x60; but only applies to synced folders * &#x60;admin_logs&#x60; returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for programmatically pulling from a 1 year history of   events across all users within the enterprise and within a   &#x60;created_after&#x60; and &#x60;created_before&#x60; time frame. The complete history   of events will be returned in chronological order based on the event   time, but latency will be much higher than &#x60;admin_logs_streaming&#x60;. * &#x60;admin_logs_streaming&#x60; returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for polling for recent events across all users within   the enterprise. Latency will be much lower than &#x60;admin_logs&#x60;, but   events will not be returned in chronological order and may   contain duplicates.
         * @param {string} [streamPosition] The location in the event stream to start receiving events from.  * &#x60;now&#x60; will return an empty list events and the latest stream position for initialization. * &#x60;0&#x60; or &#x60;null&#x60; will return all events.
         * @param {number} [limit] Limits the number of events returned  Note: Sometimes, the events less than the limit requested can be returned even when there may be more events remaining. This is primarily done in the case where a number of events have already been retrieved and these retrieved events are returned rather than delaying for an unknown amount of time to see if there are any more results.
         * @param {Array<'ACCESS_GRANTED' | 'ACCESS_REVOKED' | 'ADD_DEVICE_ASSOCIATION' | 'ADD_LOGIN_ACTIVITY_DEVICE' | 'ADMIN_LOGIN' | 'APPLICATION_CREATED' | 'APPLICATION_PUBLIC_KEY_ADDED' | 'APPLICATION_PUBLIC_KEY_DELETED' | 'CHANGE_ADMIN_ROLE' | 'CHANGE_FOLDER_PERMISSION' | 'COLLABORATION_ACCEPT' | 'COLLABORATION_EXPIRATION' | 'COLLABORATION_INVITE' | 'COLLABORATION_REMOVE' | 'COLLABORATION_ROLE_CHANGE' | 'COMMENT_CREATE' | 'COMMENT_DELETE' | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY' | 'CONTENT_WORKFLOW_AUTOMATION_ADD' | 'CONTENT_WORKFLOW_AUTOMATION_DELETE' | 'CONTENT_WORKFLOW_POLICY_ADD' | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION' | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION' | 'COPY' | 'DATA_RETENTION_CREATE_RETENTION' | 'DATA_RETENTION_REMOVE_RETENTION' | 'DELETE' | 'DELETE_USER' | 'DEVICE_TRUST_CHECK_FAILED' | 'DOWNLOAD' | 'EDIT' | 'EDIT_USER' | 'EMAIL_ALIAS_CONFIRM' | 'EMAIL_ALIAS_REMOVE' | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE' | 'EXTERNAL_COLLAB_SECURITY_SETTINGS' | 'FAILED_LOGIN' | 'FILE_MARKED_MALICIOUS' | 'FILE_WATERMARKED_DOWNLOAD' | 'GROUP_ADD_ITEM' | 'GROUP_ADD_USER' | 'GROUP_CREATION' | 'GROUP_DELETION' | 'GROUP_EDITED' | 'GROUP_REMOVE_ITEM' | 'GROUP_REMOVE_USER' | 'ITEM_MODIFY' | 'ITEM_OPEN' | 'ITEM_SHARED_UPDATE' | 'ITEM_SYNC' | 'ITEM_UNSYNC' | 'LEGAL_HOLD_ASSIGNMENT_CREATE' | 'LEGAL_HOLD_ASSIGNMENT_DELETE' | 'LEGAL_HOLD_POLICY_CREATE' | 'LEGAL_HOLD_POLICY_DELETE' | 'LEGAL_HOLD_POLICY_UPDATE' | 'LOCK' | 'LOGIN' | 'METADATA_INSTANCE_CREATE' | 'METADATA_INSTANCE_DELETE' | 'METADATA_INSTANCE_UPDATE' | 'METADATA_TEMPLATE_CREATE' | 'METADATA_TEMPLATE_DELETE' | 'METADATA_TEMPLATE_UPDATE' | 'MOVE' | 'NEW_USER' | 'OAUTH2_ACCESS_TOKEN_REVOKE' | 'PREVIEW' | 'REMOVE_DEVICE_ASSOCIATION' | 'REMOVE_LOGIN_ACTIVITY_DEVICE' | 'RENAME' | 'RETENTION_POLICY_ASSIGNMENT_ADD' | 'SHARE' | 'SHARE_EXPIRATION' | 'SHIELD_ALERT' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_JUSTIFICATION_APPROVAL' | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE' | 'SIGN_DOCUMENT_ASSIGNED' | 'SIGN_DOCUMENT_CANCELLED' | 'SIGN_DOCUMENT_COMPLETED' | 'SIGN_DOCUMENT_CONVERTED' | 'SIGN_DOCUMENT_CREATED' | 'SIGN_DOCUMENT_DECLINED' | 'SIGN_DOCUMENT_EXPIRED' | 'SIGN_DOCUMENT_SIGNED' | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED' | 'SIGNER_DOWNLOADED' | 'SIGNER_FORWARDED' | 'STORAGE_EXPIRATION' | 'TASK_ASSIGNMENT_CREATE' | 'TASK_ASSIGNMENT_DELETE' | 'TASK_ASSIGNMENT_UPDATE' | 'TASK_CREATE' | 'TASK_UPDATE' | 'TERMS_OF_SERVICE_ACCEPT' | 'TERMS_OF_SERVICE_REJECT' | 'UNDELETE' | 'UNLOCK' | 'UNSHARE' | 'UPDATE_COLLABORATION_EXPIRATION' | 'UPDATE_SHARE_EXPIRATION' | 'UPLOAD' | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE' | 'WATERMARK_LABEL_CREATE' | 'WATERMARK_LABEL_DELETE'>} [eventType] A comma-separated list of events to filter by. This can only be used when requesting the events with a &#x60;stream_type&#x60; of &#x60;admin_logs&#x60; or &#x60;adming_logs_streaming&#x60;. For any other &#x60;stream_type&#x60; this value will be ignored.
         * @param {string} [createdAfter] The lower bound date and time to return events for. This can only be used when requesting the events with a &#x60;stream_type&#x60; of &#x60;admin_logs&#x60;. For any other &#x60;stream_type&#x60; this value will be ignored.
         * @param {string} [createdBefore] The upper bound date and time to return events for. This can only be used when requesting the events with a &#x60;stream_type&#x60; of &#x60;admin_logs&#x60;. For any other &#x60;stream_type&#x60; this value will be ignored.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        events: async (streamType?: 'all' | 'changes' | 'sync' | 'admin_logs' | 'admin_logs_streaming', streamPosition?: string, limit?: number, eventType?: Array<'ACCESS_GRANTED' | 'ACCESS_REVOKED' | 'ADD_DEVICE_ASSOCIATION' | 'ADD_LOGIN_ACTIVITY_DEVICE' | 'ADMIN_LOGIN' | 'APPLICATION_CREATED' | 'APPLICATION_PUBLIC_KEY_ADDED' | 'APPLICATION_PUBLIC_KEY_DELETED' | 'CHANGE_ADMIN_ROLE' | 'CHANGE_FOLDER_PERMISSION' | 'COLLABORATION_ACCEPT' | 'COLLABORATION_EXPIRATION' | 'COLLABORATION_INVITE' | 'COLLABORATION_REMOVE' | 'COLLABORATION_ROLE_CHANGE' | 'COMMENT_CREATE' | 'COMMENT_DELETE' | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY' | 'CONTENT_WORKFLOW_AUTOMATION_ADD' | 'CONTENT_WORKFLOW_AUTOMATION_DELETE' | 'CONTENT_WORKFLOW_POLICY_ADD' | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION' | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION' | 'COPY' | 'DATA_RETENTION_CREATE_RETENTION' | 'DATA_RETENTION_REMOVE_RETENTION' | 'DELETE' | 'DELETE_USER' | 'DEVICE_TRUST_CHECK_FAILED' | 'DOWNLOAD' | 'EDIT' | 'EDIT_USER' | 'EMAIL_ALIAS_CONFIRM' | 'EMAIL_ALIAS_REMOVE' | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE' | 'EXTERNAL_COLLAB_SECURITY_SETTINGS' | 'FAILED_LOGIN' | 'FILE_MARKED_MALICIOUS' | 'FILE_WATERMARKED_DOWNLOAD' | 'GROUP_ADD_ITEM' | 'GROUP_ADD_USER' | 'GROUP_CREATION' | 'GROUP_DELETION' | 'GROUP_EDITED' | 'GROUP_REMOVE_ITEM' | 'GROUP_REMOVE_USER' | 'ITEM_MODIFY' | 'ITEM_OPEN' | 'ITEM_SHARED_UPDATE' | 'ITEM_SYNC' | 'ITEM_UNSYNC' | 'LEGAL_HOLD_ASSIGNMENT_CREATE' | 'LEGAL_HOLD_ASSIGNMENT_DELETE' | 'LEGAL_HOLD_POLICY_CREATE' | 'LEGAL_HOLD_POLICY_DELETE' | 'LEGAL_HOLD_POLICY_UPDATE' | 'LOCK' | 'LOGIN' | 'METADATA_INSTANCE_CREATE' | 'METADATA_INSTANCE_DELETE' | 'METADATA_INSTANCE_UPDATE' | 'METADATA_TEMPLATE_CREATE' | 'METADATA_TEMPLATE_DELETE' | 'METADATA_TEMPLATE_UPDATE' | 'MOVE' | 'NEW_USER' | 'OAUTH2_ACCESS_TOKEN_REVOKE' | 'PREVIEW' | 'REMOVE_DEVICE_ASSOCIATION' | 'REMOVE_LOGIN_ACTIVITY_DEVICE' | 'RENAME' | 'RETENTION_POLICY_ASSIGNMENT_ADD' | 'SHARE' | 'SHARE_EXPIRATION' | 'SHIELD_ALERT' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_JUSTIFICATION_APPROVAL' | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE' | 'SIGN_DOCUMENT_ASSIGNED' | 'SIGN_DOCUMENT_CANCELLED' | 'SIGN_DOCUMENT_COMPLETED' | 'SIGN_DOCUMENT_CONVERTED' | 'SIGN_DOCUMENT_CREATED' | 'SIGN_DOCUMENT_DECLINED' | 'SIGN_DOCUMENT_EXPIRED' | 'SIGN_DOCUMENT_SIGNED' | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED' | 'SIGNER_DOWNLOADED' | 'SIGNER_FORWARDED' | 'STORAGE_EXPIRATION' | 'TASK_ASSIGNMENT_CREATE' | 'TASK_ASSIGNMENT_DELETE' | 'TASK_ASSIGNMENT_UPDATE' | 'TASK_CREATE' | 'TASK_UPDATE' | 'TERMS_OF_SERVICE_ACCEPT' | 'TERMS_OF_SERVICE_REJECT' | 'UNDELETE' | 'UNLOCK' | 'UNSHARE' | 'UPDATE_COLLABORATION_EXPIRATION' | 'UPDATE_SHARE_EXPIRATION' | 'UPLOAD' | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE' | 'WATERMARK_LABEL_CREATE' | 'WATERMARK_LABEL_DELETE'>, createdAfter?: string, createdBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/events`;
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
            if (streamType !== undefined) {
                localVarQueryParameter['stream_type'] = streamType;
            }

            if (streamPosition !== undefined) {
                localVarQueryParameter['stream_position'] = streamPosition;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (eventType) {
                localVarQueryParameter['event_type'] = eventType.join(COLLECTION_FORMATS.csv);
            }

            if (createdAfter !== undefined) {
                localVarQueryParameter['created_after'] = (createdAfter as any instanceof Date) ?
                    (createdAfter as any).toISOString() :
                    createdAfter;
            }

            if (createdBefore !== undefined) {
                localVarQueryParameter['created_before'] = (createdBefore as any instanceof Date) ?
                    (createdBefore as any).toISOString() :
                    createdBefore;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/events',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of real-time servers that can be used for long-polling updates to the [event stream](https://raw.githubusercontent.com).  Long polling is the concept where a HTTP request is kept open until the server sends a response, then repeating the process over and over to receive updated responses.  Long polling the event stream can only be used for user events, not for enterprise events.  To use long polling, first use this endpoint to retrieve a list of long poll URLs. Next, make a long poll request to any of the provided URLs.  When an event occurs in monitored account a response with the value `new_change` will be sent. The response contains no other details as it only serves as a prompt to take further action such as sending a request to the [events endpoint](https://raw.githubusercontent.com) with the last known `stream_position`.  After the server sends this response it closes the connection. You must now repeat the long poll process to begin listening for events again.  If no events occur for a while and the connection times out you will receive a response with the value `reconnect`. When you receive this response you’ll make another call to this endpoint to restart the process.  If you receive no events in `retry_timeout` seconds then you will need to make another request to the real-time server (one of the URLs in the response for this endpoint). This might be necessary due to network errors.  Finally, if you receive a `max_retries` error when making a request to the real-time server, you should start over by making a call to this endpoint first.
         * @summary Get events long poll endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        events_1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'OPTIONS', ...baseOptions, ...options};
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
                pathTemplate: '/events',
                httpMethod: 'OPTIONS'
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
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns up to a year of past events for a given user or for the entire enterprise.  By default this returns events for the authenticated user. To retrieve events for the entire enterprise, set the `stream_type` to `admin_logs_streaming` for live monitoring of new events, or `admin_logs` for querying across historical events. The user making the API call will need to have admin privileges, and the application will need to have the scope `manage enterprise properties` checked.
         * @summary List user and enterprise events
         * @param {EventsApiEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async events(requestParameters: EventsApiEventsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Events>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.events(requestParameters.streamType, requestParameters.streamPosition, requestParameters.limit, requestParameters.eventType, requestParameters.createdAfter, requestParameters.createdBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of real-time servers that can be used for long-polling updates to the [event stream](https://raw.githubusercontent.com).  Long polling is the concept where a HTTP request is kept open until the server sends a response, then repeating the process over and over to receive updated responses.  Long polling the event stream can only be used for user events, not for enterprise events.  To use long polling, first use this endpoint to retrieve a list of long poll URLs. Next, make a long poll request to any of the provided URLs.  When an event occurs in monitored account a response with the value `new_change` will be sent. The response contains no other details as it only serves as a prompt to take further action such as sending a request to the [events endpoint](https://raw.githubusercontent.com) with the last known `stream_position`.  After the server sends this response it closes the connection. You must now repeat the long poll process to begin listening for events again.  If no events occur for a while and the connection times out you will receive a response with the value `reconnect`. When you receive this response you’ll make another call to this endpoint to restart the process.  If you receive no events in `retry_timeout` seconds then you will need to make another request to the real-time server (one of the URLs in the response for this endpoint). This might be necessary due to network errors.  Finally, if you receive a `max_retries` error when making a request to the real-time server, you should start over by making a call to this endpoint first.
         * @summary Get events long poll endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async events_1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RealtimeServers>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.events_1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventsApiFp(configuration)
    return {
        /**
         * Returns up to a year of past events for a given user or for the entire enterprise.  By default this returns events for the authenticated user. To retrieve events for the entire enterprise, set the `stream_type` to `admin_logs_streaming` for live monitoring of new events, or `admin_logs` for querying across historical events. The user making the API call will need to have admin privileges, and the application will need to have the scope `manage enterprise properties` checked.
         * @summary List user and enterprise events
         * @param {EventsApiEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        events(requestParameters: EventsApiEventsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Events> {
            return localVarFp.events(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of real-time servers that can be used for long-polling updates to the [event stream](https://raw.githubusercontent.com).  Long polling is the concept where a HTTP request is kept open until the server sends a response, then repeating the process over and over to receive updated responses.  Long polling the event stream can only be used for user events, not for enterprise events.  To use long polling, first use this endpoint to retrieve a list of long poll URLs. Next, make a long poll request to any of the provided URLs.  When an event occurs in monitored account a response with the value `new_change` will be sent. The response contains no other details as it only serves as a prompt to take further action such as sending a request to the [events endpoint](https://raw.githubusercontent.com) with the last known `stream_position`.  After the server sends this response it closes the connection. You must now repeat the long poll process to begin listening for events again.  If no events occur for a while and the connection times out you will receive a response with the value `reconnect`. When you receive this response you’ll make another call to this endpoint to restart the process.  If you receive no events in `retry_timeout` seconds then you will need to make another request to the real-time server (one of the URLs in the response for this endpoint). This might be necessary due to network errors.  Finally, if you receive a `max_retries` error when making a request to the real-time server, you should start over by making a call to this endpoint first.
         * @summary Get events long poll endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        events_1(options?: AxiosRequestConfig): AxiosPromise<RealtimeServers> {
            return localVarFp.events_1(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for events operation in EventsApi.
 * @export
 * @interface EventsApiEventsRequest
 */
export type EventsApiEventsRequest = {
    
    /**
    * Defines the type of events that are returned  * `all` returns everything for a user and is the default * `changes` returns events that may cause file tree changes   such as file updates or collaborations. * `sync` is similar to `changes` but only applies to synced folders * `admin_logs` returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for programmatically pulling from a 1 year history of   events across all users within the enterprise and within a   `created_after` and `created_before` time frame. The complete history   of events will be returned in chronological order based on the event   time, but latency will be much higher than `admin_logs_streaming`. * `admin_logs_streaming` returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for polling for recent events across all users within   the enterprise. Latency will be much lower than `admin_logs`, but   events will not be returned in chronological order and may   contain duplicates.
    * @type {'all' | 'changes' | 'sync' | 'admin_logs' | 'admin_logs_streaming'}
    * @memberof EventsApiEvents
    */
    readonly streamType?: 'all' | 'changes' | 'sync' | 'admin_logs' | 'admin_logs_streaming'
    
    /**
    * The location in the event stream to start receiving events from.  * `now` will return an empty list events and the latest stream position for initialization. * `0` or `null` will return all events.
    * @type {string}
    * @memberof EventsApiEvents
    */
    readonly streamPosition?: string
    
    /**
    * Limits the number of events returned  Note: Sometimes, the events less than the limit requested can be returned even when there may be more events remaining. This is primarily done in the case where a number of events have already been retrieved and these retrieved events are returned rather than delaying for an unknown amount of time to see if there are any more results.
    * @type {number}
    * @memberof EventsApiEvents
    */
    readonly limit?: number
    
    /**
    * A comma-separated list of events to filter by. This can only be used when requesting the events with a `stream_type` of `admin_logs` or `adming_logs_streaming`. For any other `stream_type` this value will be ignored.
    * @type {Array<'ACCESS_GRANTED' | 'ACCESS_REVOKED' | 'ADD_DEVICE_ASSOCIATION' | 'ADD_LOGIN_ACTIVITY_DEVICE' | 'ADMIN_LOGIN' | 'APPLICATION_CREATED' | 'APPLICATION_PUBLIC_KEY_ADDED' | 'APPLICATION_PUBLIC_KEY_DELETED' | 'CHANGE_ADMIN_ROLE' | 'CHANGE_FOLDER_PERMISSION' | 'COLLABORATION_ACCEPT' | 'COLLABORATION_EXPIRATION' | 'COLLABORATION_INVITE' | 'COLLABORATION_REMOVE' | 'COLLABORATION_ROLE_CHANGE' | 'COMMENT_CREATE' | 'COMMENT_DELETE' | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY' | 'CONTENT_WORKFLOW_AUTOMATION_ADD' | 'CONTENT_WORKFLOW_AUTOMATION_DELETE' | 'CONTENT_WORKFLOW_POLICY_ADD' | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION' | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION' | 'COPY' | 'DATA_RETENTION_CREATE_RETENTION' | 'DATA_RETENTION_REMOVE_RETENTION' | 'DELETE' | 'DELETE_USER' | 'DEVICE_TRUST_CHECK_FAILED' | 'DOWNLOAD' | 'EDIT' | 'EDIT_USER' | 'EMAIL_ALIAS_CONFIRM' | 'EMAIL_ALIAS_REMOVE' | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE' | 'EXTERNAL_COLLAB_SECURITY_SETTINGS' | 'FAILED_LOGIN' | 'FILE_MARKED_MALICIOUS' | 'FILE_WATERMARKED_DOWNLOAD' | 'GROUP_ADD_ITEM' | 'GROUP_ADD_USER' | 'GROUP_CREATION' | 'GROUP_DELETION' | 'GROUP_EDITED' | 'GROUP_REMOVE_ITEM' | 'GROUP_REMOVE_USER' | 'ITEM_MODIFY' | 'ITEM_OPEN' | 'ITEM_SHARED_UPDATE' | 'ITEM_SYNC' | 'ITEM_UNSYNC' | 'LEGAL_HOLD_ASSIGNMENT_CREATE' | 'LEGAL_HOLD_ASSIGNMENT_DELETE' | 'LEGAL_HOLD_POLICY_CREATE' | 'LEGAL_HOLD_POLICY_DELETE' | 'LEGAL_HOLD_POLICY_UPDATE' | 'LOCK' | 'LOGIN' | 'METADATA_INSTANCE_CREATE' | 'METADATA_INSTANCE_DELETE' | 'METADATA_INSTANCE_UPDATE' | 'METADATA_TEMPLATE_CREATE' | 'METADATA_TEMPLATE_DELETE' | 'METADATA_TEMPLATE_UPDATE' | 'MOVE' | 'NEW_USER' | 'OAUTH2_ACCESS_TOKEN_REVOKE' | 'PREVIEW' | 'REMOVE_DEVICE_ASSOCIATION' | 'REMOVE_LOGIN_ACTIVITY_DEVICE' | 'RENAME' | 'RETENTION_POLICY_ASSIGNMENT_ADD' | 'SHARE' | 'SHARE_EXPIRATION' | 'SHIELD_ALERT' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_JUSTIFICATION_APPROVAL' | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE' | 'SIGN_DOCUMENT_ASSIGNED' | 'SIGN_DOCUMENT_CANCELLED' | 'SIGN_DOCUMENT_COMPLETED' | 'SIGN_DOCUMENT_CONVERTED' | 'SIGN_DOCUMENT_CREATED' | 'SIGN_DOCUMENT_DECLINED' | 'SIGN_DOCUMENT_EXPIRED' | 'SIGN_DOCUMENT_SIGNED' | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED' | 'SIGNER_DOWNLOADED' | 'SIGNER_FORWARDED' | 'STORAGE_EXPIRATION' | 'TASK_ASSIGNMENT_CREATE' | 'TASK_ASSIGNMENT_DELETE' | 'TASK_ASSIGNMENT_UPDATE' | 'TASK_CREATE' | 'TASK_UPDATE' | 'TERMS_OF_SERVICE_ACCEPT' | 'TERMS_OF_SERVICE_REJECT' | 'UNDELETE' | 'UNLOCK' | 'UNSHARE' | 'UPDATE_COLLABORATION_EXPIRATION' | 'UPDATE_SHARE_EXPIRATION' | 'UPLOAD' | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE' | 'WATERMARK_LABEL_CREATE' | 'WATERMARK_LABEL_DELETE'>}
    * @memberof EventsApiEvents
    */
    readonly eventType?: Array<'ACCESS_GRANTED' | 'ACCESS_REVOKED' | 'ADD_DEVICE_ASSOCIATION' | 'ADD_LOGIN_ACTIVITY_DEVICE' | 'ADMIN_LOGIN' | 'APPLICATION_CREATED' | 'APPLICATION_PUBLIC_KEY_ADDED' | 'APPLICATION_PUBLIC_KEY_DELETED' | 'CHANGE_ADMIN_ROLE' | 'CHANGE_FOLDER_PERMISSION' | 'COLLABORATION_ACCEPT' | 'COLLABORATION_EXPIRATION' | 'COLLABORATION_INVITE' | 'COLLABORATION_REMOVE' | 'COLLABORATION_ROLE_CHANGE' | 'COMMENT_CREATE' | 'COMMENT_DELETE' | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY' | 'CONTENT_WORKFLOW_AUTOMATION_ADD' | 'CONTENT_WORKFLOW_AUTOMATION_DELETE' | 'CONTENT_WORKFLOW_POLICY_ADD' | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION' | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION' | 'COPY' | 'DATA_RETENTION_CREATE_RETENTION' | 'DATA_RETENTION_REMOVE_RETENTION' | 'DELETE' | 'DELETE_USER' | 'DEVICE_TRUST_CHECK_FAILED' | 'DOWNLOAD' | 'EDIT' | 'EDIT_USER' | 'EMAIL_ALIAS_CONFIRM' | 'EMAIL_ALIAS_REMOVE' | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE' | 'EXTERNAL_COLLAB_SECURITY_SETTINGS' | 'FAILED_LOGIN' | 'FILE_MARKED_MALICIOUS' | 'FILE_WATERMARKED_DOWNLOAD' | 'GROUP_ADD_ITEM' | 'GROUP_ADD_USER' | 'GROUP_CREATION' | 'GROUP_DELETION' | 'GROUP_EDITED' | 'GROUP_REMOVE_ITEM' | 'GROUP_REMOVE_USER' | 'ITEM_MODIFY' | 'ITEM_OPEN' | 'ITEM_SHARED_UPDATE' | 'ITEM_SYNC' | 'ITEM_UNSYNC' | 'LEGAL_HOLD_ASSIGNMENT_CREATE' | 'LEGAL_HOLD_ASSIGNMENT_DELETE' | 'LEGAL_HOLD_POLICY_CREATE' | 'LEGAL_HOLD_POLICY_DELETE' | 'LEGAL_HOLD_POLICY_UPDATE' | 'LOCK' | 'LOGIN' | 'METADATA_INSTANCE_CREATE' | 'METADATA_INSTANCE_DELETE' | 'METADATA_INSTANCE_UPDATE' | 'METADATA_TEMPLATE_CREATE' | 'METADATA_TEMPLATE_DELETE' | 'METADATA_TEMPLATE_UPDATE' | 'MOVE' | 'NEW_USER' | 'OAUTH2_ACCESS_TOKEN_REVOKE' | 'PREVIEW' | 'REMOVE_DEVICE_ASSOCIATION' | 'REMOVE_LOGIN_ACTIVITY_DEVICE' | 'RENAME' | 'RETENTION_POLICY_ASSIGNMENT_ADD' | 'SHARE' | 'SHARE_EXPIRATION' | 'SHIELD_ALERT' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED' | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION' | 'SHIELD_JUSTIFICATION_APPROVAL' | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE' | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE' | 'SIGN_DOCUMENT_ASSIGNED' | 'SIGN_DOCUMENT_CANCELLED' | 'SIGN_DOCUMENT_COMPLETED' | 'SIGN_DOCUMENT_CONVERTED' | 'SIGN_DOCUMENT_CREATED' | 'SIGN_DOCUMENT_DECLINED' | 'SIGN_DOCUMENT_EXPIRED' | 'SIGN_DOCUMENT_SIGNED' | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED' | 'SIGNER_DOWNLOADED' | 'SIGNER_FORWARDED' | 'STORAGE_EXPIRATION' | 'TASK_ASSIGNMENT_CREATE' | 'TASK_ASSIGNMENT_DELETE' | 'TASK_ASSIGNMENT_UPDATE' | 'TASK_CREATE' | 'TASK_UPDATE' | 'TERMS_OF_SERVICE_ACCEPT' | 'TERMS_OF_SERVICE_REJECT' | 'UNDELETE' | 'UNLOCK' | 'UNSHARE' | 'UPDATE_COLLABORATION_EXPIRATION' | 'UPDATE_SHARE_EXPIRATION' | 'UPLOAD' | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE' | 'WATERMARK_LABEL_CREATE' | 'WATERMARK_LABEL_DELETE'>
    
    /**
    * The lower bound date and time to return events for. This can only be used when requesting the events with a `stream_type` of `admin_logs`. For any other `stream_type` this value will be ignored.
    * @type {string}
    * @memberof EventsApiEvents
    */
    readonly createdAfter?: string
    
    /**
    * The upper bound date and time to return events for. This can only be used when requesting the events with a `stream_type` of `admin_logs`. For any other `stream_type` this value will be ignored.
    * @type {string}
    * @memberof EventsApiEvents
    */
    readonly createdBefore?: string
    
}

/**
 * EventsApiGenerated - object-oriented interface
 * @export
 * @class EventsApiGenerated
 * @extends {BaseAPI}
 */
export class EventsApiGenerated extends BaseAPI {
    /**
     * Returns up to a year of past events for a given user or for the entire enterprise.  By default this returns events for the authenticated user. To retrieve events for the entire enterprise, set the `stream_type` to `admin_logs_streaming` for live monitoring of new events, or `admin_logs` for querying across historical events. The user making the API call will need to have admin privileges, and the application will need to have the scope `manage enterprise properties` checked.
     * @summary List user and enterprise events
     * @param {EventsApiEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiGenerated
     */
    public events(requestParameters: EventsApiEventsRequest = {}, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).events(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of real-time servers that can be used for long-polling updates to the [event stream](https://raw.githubusercontent.com).  Long polling is the concept where a HTTP request is kept open until the server sends a response, then repeating the process over and over to receive updated responses.  Long polling the event stream can only be used for user events, not for enterprise events.  To use long polling, first use this endpoint to retrieve a list of long poll URLs. Next, make a long poll request to any of the provided URLs.  When an event occurs in monitored account a response with the value `new_change` will be sent. The response contains no other details as it only serves as a prompt to take further action such as sending a request to the [events endpoint](https://raw.githubusercontent.com) with the last known `stream_position`.  After the server sends this response it closes the connection. You must now repeat the long poll process to begin listening for events again.  If no events occur for a while and the connection times out you will receive a response with the value `reconnect`. When you receive this response you’ll make another call to this endpoint to restart the process.  If you receive no events in `retry_timeout` seconds then you will need to make another request to the real-time server (one of the URLs in the response for this endpoint). This might be necessary due to network errors.  Finally, if you receive a `max_retries` error when making a request to the real-time server, you should start over by making a call to this endpoint first.
     * @summary Get events long poll endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiGenerated
     */
    public events_1(options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).events_1(options).then((request) => request(this.axios, this.basePath));
    }
}
