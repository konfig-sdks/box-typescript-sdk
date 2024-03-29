/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A real-time server that can be used for long polling user events
 * @export
 * @interface RealtimeServer
 */
export interface RealtimeServer {
    /**
     * `realtime_server`
     * @type {string}
     * @memberof RealtimeServer
     */
    'type'?: string;
    /**
     * The URL for the server.
     * @type {string}
     * @memberof RealtimeServer
     */
    'url'?: string;
    /**
     * The time in minutes for which this server is available
     * @type {number}
     * @memberof RealtimeServer
     */
    'ttl'?: number;
    /**
     * The maximum number of retries this server will allow before a new long poll should be started by getting a [new list of server](https://raw.githubusercontent.com).
     * @type {number}
     * @memberof RealtimeServer
     */
    'max_retries'?: number;
    /**
     * The maximum number of seconds without a response after which you should retry the long poll connection.  This helps to overcome network issues where the long poll looks to be working but no packages are coming through.
     * @type {number}
     * @memberof RealtimeServer
     */
    'retry_timeout'?: number;
}

