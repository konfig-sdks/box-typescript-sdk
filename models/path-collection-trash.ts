/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PathCollectionTrashEntriesInner } from './path-collection-trash-entries-inner';

/**
 * A list of parent folders for an item in the trash.
 * @export
 * @interface PathCollectionTrash
 */
export interface PathCollectionTrash {
    /**
     * The number of folders in this list.
     * @type {number}
     * @memberof PathCollectionTrash
     */
    'total_count': number;
    /**
     * Array of folders for this item\'s path collection
     * @type {Array<PathCollectionTrashEntriesInner>}
     * @memberof PathCollectionTrash
     */
    'entries': Array<PathCollectionTrashEntriesInner>;
}

