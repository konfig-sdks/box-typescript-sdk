/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Event } from './event';

/**
 * A list of event objects
 * @export
 * @interface Events
 */
export interface Events {
    /**
     * The number of events returned in this response.
     * @type {number}
     * @memberof Events
     */
    'chunk_size'?: number;
    /**
     * The stream position of the start of the next page (chunk) of events.
     * @type {string}
     * @memberof Events
     */
    'next_stream_position'?: string;
    /**
     * A list of events
     * @type {Array<Event>}
     * @memberof Events
     */
    'entries'?: Array<Event>;
}

