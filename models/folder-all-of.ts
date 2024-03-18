/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FolderAllOfFolderUploadEmail } from './folder-all-of-folder-upload-email';
import { FolderMini } from './folder-mini';
import { Items } from './items';
import { UserMini } from './user-mini';

/**
 * 
 * @export
 * @interface FolderAllOf
 */
export interface FolderAllOf {
    /**
     * 
     * @type {string}
     * @memberof FolderAllOf
     */
    'description'?: string;
    /**
     * The date and time when the folder was created. This value may be `null` for some folders such as the root folder or the trash folder.
     * @type {string}
     * @memberof FolderAllOf
     */
    'created_at'?: string | null;
    /**
     * The date and time when the folder was last updated. This value may be `null` for some folders such as the root folder or the trash folder.
     * @type {string}
     * @memberof FolderAllOf
     */
    'modified_at'?: string | null;
    /**
     * The folder size in bytes.  Be careful parsing this integer as its value can get very large.
     * @type {number}
     * @memberof FolderAllOf
     */
    'size'?: number;
    /**
     * 
     * @type {object}
     * @memberof FolderAllOf
     */
    'path_collection'?: object;
    /**
     * 
     * @type {UserMini}
     * @memberof FolderAllOf
     */
    'created_by'?: UserMini;
    /**
     * 
     * @type {UserMini}
     * @memberof FolderAllOf
     */
    'modified_by'?: UserMini;
    /**
     * The time at which this folder was put in the trash.
     * @type {string}
     * @memberof FolderAllOf
     */
    'trashed_at'?: string | null;
    /**
     * The time at which this folder is expected to be purged from the trash.
     * @type {string}
     * @memberof FolderAllOf
     */
    'purged_at'?: string | null;
    /**
     * The date and time at which this folder was originally created.
     * @type {string}
     * @memberof FolderAllOf
     */
    'content_created_at'?: string | null;
    /**
     * The date and time at which this folder was last updated.
     * @type {string}
     * @memberof FolderAllOf
     */
    'content_modified_at'?: string | null;
    /**
     * 
     * @type {UserMini}
     * @memberof FolderAllOf
     */
    'owned_by'?: UserMini;
    /**
     * 
     * @type {object}
     * @memberof FolderAllOf
     */
    'shared_link'?: object | null;
    /**
     * 
     * @type {FolderAllOfFolderUploadEmail}
     * @memberof FolderAllOf
     */
    'folder_upload_email'?: FolderAllOfFolderUploadEmail | null;
    /**
     * 
     * @type {FolderMini}
     * @memberof FolderAllOf
     */
    'parent'?: FolderMini | null;
    /**
     * Defines if this item has been deleted or not.  * `active` when the item has is not in the trash * `trashed` when the item has been moved to the trash but not deleted * `deleted` when the item has been permanently deleted.
     * @type {string}
     * @memberof FolderAllOf
     */
    'item_status'?: FolderAllOfItemStatusEnum;
    /**
     * 
     * @type {Items}
     * @memberof FolderAllOf
     */
    'item_collection'?: Items;
}

type FolderAllOfItemStatusEnum = 'active' | 'trashed' | 'deleted'


