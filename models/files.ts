/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FileFull } from './file-full';

/**
 * A list of files
 * @export
 * @interface Files
 */
export interface Files {
    /**
     * The number of files.
     * @type {number}
     * @memberof Files
     */
    'total_count'?: number;
    /**
     * A list of files
     * @type {Array<FileFull>}
     * @memberof Files
     */
    'entries'?: Array<FileFull>;
}

