/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The operations to lock for the folder. If `locked_operations` is included in the request, both `move` and `delete` must also be included and both set to `true`.
 * @export
 * @interface FolderLocksCreateRequestLockedOperations
 */
export interface FolderLocksCreateRequestLockedOperations {
    /**
     * Whether moving the folder should be locked.
     * @type {boolean}
     * @memberof FolderLocksCreateRequestLockedOperations
     */
    'move': boolean;
    /**
     * Whether deleting the folder should be locked.
     * @type {boolean}
     * @memberof FolderLocksCreateRequestLockedOperations
     */
    'delete': boolean;
}
