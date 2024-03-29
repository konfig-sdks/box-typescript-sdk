/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The parent folder for this item
 * @export
 * @interface PathCollectionTrash1EntriesInner
 */
export interface PathCollectionTrash1EntriesInner {
    /**
     * `folder`
     * @type {string}
     * @memberof PathCollectionTrash1EntriesInner
     */
    'type'?: PathCollectionTrash1EntriesInnerTypeEnum;
    /**
     * The unique identifier that represent a folder.
     * @type {string}
     * @memberof PathCollectionTrash1EntriesInner
     */
    'id'?: string;
    /**
     * This field is null for the Trash folder
     * @type {string}
     * @memberof PathCollectionTrash1EntriesInner
     */
    'sequence_id'?: string | null;
    /**
     * This field is null for the Trash folder
     * @type {string}
     * @memberof PathCollectionTrash1EntriesInner
     */
    'etag'?: string | null;
    /**
     * The name of the Trash folder.
     * @type {string}
     * @memberof PathCollectionTrash1EntriesInner
     */
    'name'?: string;
}

type PathCollectionTrash1EntriesInnerTypeEnum = 'folder'


