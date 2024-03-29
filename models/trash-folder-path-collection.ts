/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PathCollectionTrash1 } from './path-collection-trash1';
import { PathCollectionTrash1EntriesInner } from './path-collection-trash1-entries-inner';

/**
 * 
 * @export
 * @interface TrashFolderPathCollection
 */
export interface TrashFolderPathCollection {
    /**
     * The number of folders in this list.
     * @type {number}
     * @memberof TrashFolderPathCollection
     */
    'total_count': number;
    /**
     * Array of folders for this item\'s path collection
     * @type {Array<PathCollectionTrash1EntriesInner>}
     * @memberof TrashFolderPathCollection
     */
    'entries': Array<PathCollectionTrash1EntriesInner>;
}

