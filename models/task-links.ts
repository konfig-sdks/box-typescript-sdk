/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TaskLinksEntriesInner } from './task-links-entries-inner';

/**
 * Task links.
 * @export
 * @interface TaskLinks
 */
export interface TaskLinks {
    /**
     * 
     * @type {Array<TaskLinksEntriesInner>}
     * @memberof TaskLinks
     */
    'entries': Array<TaskLinksEntriesInner>;
    /**
     * 
     * @type {string}
     * @memberof TaskLinks
     */
    'next_marker'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TaskLinks
     */
    'limit'?: number;
}

