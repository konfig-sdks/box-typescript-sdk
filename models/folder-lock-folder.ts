/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FolderMini } from './folder-mini';

/**
 * 
 * @export
 * @interface FolderLockFolder
 */
export interface FolderLockFolder {
    /**
     * The unique identifier that represent a folder.  The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folders/123` the `folder_id` is `123`.
     * @type {string}
     * @memberof FolderLockFolder
     */
    'id': string;
    /**
     * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
     * @type {string}
     * @memberof FolderLockFolder
     */
    'etag'?: string | null;
    /**
     * `folder`
     * @type {string}
     * @memberof FolderLockFolder
     */
    'type': FolderLockFolderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FolderLockFolder
     */
    'sequence_id'?: string;
    /**
     * The name of the folder.
     * @type {string}
     * @memberof FolderLockFolder
     */
    'name'?: string;
}

type FolderLockFolderTypeEnum = 'folder'


