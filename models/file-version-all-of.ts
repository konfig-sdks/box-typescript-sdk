/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserMini } from './user-mini';

/**
 * 
 * @export
 * @interface FileVersionAllOf
 */
export interface FileVersionAllOf {
    /**
     * The name of the file version
     * @type {string}
     * @memberof FileVersionAllOf
     */
    'name'?: string;
    /**
     * Size of the file version in bytes
     * @type {number}
     * @memberof FileVersionAllOf
     */
    'size'?: number;
    /**
     * When the file version object was created
     * @type {string}
     * @memberof FileVersionAllOf
     */
    'created_at'?: string;
    /**
     * When the file version object was last updated
     * @type {string}
     * @memberof FileVersionAllOf
     */
    'modified_at'?: string;
    /**
     * 
     * @type {UserMini}
     * @memberof FileVersionAllOf
     */
    'modified_by'?: UserMini;
    /**
     * When the file version object was trashed.
     * @type {string}
     * @memberof FileVersionAllOf
     */
    'trashed_at'?: string | null;
    /**
     * 
     * @type {UserMini}
     * @memberof FileVersionAllOf
     */
    'trashed_by'?: UserMini;
    /**
     * When the file version was restored from the trash.
     * @type {string}
     * @memberof FileVersionAllOf
     */
    'restored_at'?: string | null;
    /**
     * 
     * @type {UserMini}
     * @memberof FileVersionAllOf
     */
    'restored_by'?: UserMini;
    /**
     * When the file version object will be permanently deleted.
     * @type {string}
     * @memberof FileVersionAllOf
     */
    'purged_at'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FileVersionAllOf
     */
    'uploader_display_name'?: string;
}

