/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FolderMini } from './folder-mini';
import { UserMini } from './user-mini';

/**
 * 
 * @export
 * @interface FileAllOf
 */
export interface FileAllOf {
    /**
     * The optional description of this file
     * @type {string}
     * @memberof FileAllOf
     */
    'description'?: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can get very large and cause an integer overflow.
     * @type {number}
     * @memberof FileAllOf
     */
    'size'?: number;
    /**
     * 
     * @type {object}
     * @memberof FileAllOf
     */
    'path_collection'?: object;
    /**
     * The date and time when the file was created on Box.
     * @type {string}
     * @memberof FileAllOf
     */
    'created_at'?: string;
    /**
     * The date and time when the file was last updated on Box.
     * @type {string}
     * @memberof FileAllOf
     */
    'modified_at'?: string;
    /**
     * The time at which this file was put in the trash.
     * @type {string}
     * @memberof FileAllOf
     */
    'trashed_at'?: string | null;
    /**
     * The time at which this file is expected to be purged from the trash.
     * @type {string}
     * @memberof FileAllOf
     */
    'purged_at'?: string | null;
    /**
     * The date and time at which this file was originally created, which might be before it was uploaded to Box.
     * @type {string}
     * @memberof FileAllOf
     */
    'content_created_at'?: string | null;
    /**
     * The date and time at which this file was last updated, which might be before it was uploaded to Box.
     * @type {string}
     * @memberof FileAllOf
     */
    'content_modified_at'?: string | null;
    /**
     * 
     * @type {UserMini}
     * @memberof FileAllOf
     */
    'created_by'?: UserMini;
    /**
     * 
     * @type {UserMini}
     * @memberof FileAllOf
     */
    'modified_by'?: UserMini;
    /**
     * 
     * @type {UserMini}
     * @memberof FileAllOf
     */
    'owned_by'?: UserMini;
    /**
     * 
     * @type {object}
     * @memberof FileAllOf
     */
    'shared_link'?: object;
    /**
     * 
     * @type {FolderMini}
     * @memberof FileAllOf
     */
    'parent'?: FolderMini | null;
    /**
     * Defines if this item has been deleted or not.  * `active` when the item has is not in the trash * `trashed` when the item has been moved to the trash but not deleted * `deleted` when the item has been permanently deleted.
     * @type {string}
     * @memberof FileAllOf
     */
    'item_status'?: FileAllOfItemStatusEnum;
}

type FileAllOfItemStatusEnum = 'active' | 'trashed' | 'deleted'


