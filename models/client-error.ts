/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClientErrorContextInfo } from './client-error-context-info';

/**
 * A generic error
 * @export
 * @interface ClientError
 */
export interface ClientError {
    /**
     * error
     * @type {string}
     * @memberof ClientError
     */
    'type'?: ClientErrorTypeEnum;
    /**
     * The HTTP status of the response.
     * @type {number}
     * @memberof ClientError
     */
    'status'?: number;
    /**
     * A Box-specific error code
     * @type {string}
     * @memberof ClientError
     */
    'code'?: ClientErrorCodeEnum;
    /**
     * A short message describing the error.
     * @type {string}
     * @memberof ClientError
     */
    'message'?: string;
    /**
     * 
     * @type {ClientErrorContextInfo}
     * @memberof ClientError
     */
    'context_info'?: ClientErrorContextInfo | null;
    /**
     * A URL that links to more information about why this error occurred.
     * @type {string}
     * @memberof ClientError
     */
    'help_url'?: string;
    /**
     * A unique identifier for this response, which can be used when contacting Box support.
     * @type {string}
     * @memberof ClientError
     */
    'request_id'?: string;
}

type ClientErrorTypeEnum = 'error'
type ClientErrorCodeEnum = 'created' | 'accepted' | 'no_content' | 'redirect' | 'not_modified' | 'bad_request' | 'unauthorized' | 'forbidden' | 'not_found' | 'method_not_allowed' | 'conflict' | 'precondition_failed' | 'too_many_requests' | 'internal_server_error' | 'unavailable' | 'item_name_invalid' | 'insufficient_scope'


