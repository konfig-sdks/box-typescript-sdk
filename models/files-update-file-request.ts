/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FilesUpdateFileRequestLock } from './files-update-file-request-lock';
import { FilesUpdateFileRequestParent } from './files-update-file-request-parent';
import { FilesUpdateFileRequestPermissions } from './files-update-file-request-permissions';
import { FilesUpdateFileRequestSharedLink } from './files-update-file-request-shared-link';
import { Reference1 } from './reference1';

/**
 * 
 * @export
 * @interface FilesUpdateFileRequest
 */
export interface FilesUpdateFileRequest {
    /**
     * The tags for this item. These tags are shown in the Box web app and mobile apps next to an item.  To add or remove a tag, retrieve the item\'s current tags, modify them, and then update this field.  There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
     * @type {Array<string>}
     * @memberof FilesUpdateFileRequest
     */
    'tags'?: Array<string>;
    /**
     * The description for a file. This can be seen in the right-hand sidebar panel when viewing a file in the Box web app. Additionally, this index is used in the search index of the file, allowing users to find the file by the content in the description.
     * @type {string}
     * @memberof FilesUpdateFileRequest
     */
    'description'?: string;
    /**
     * An optional different name for the file. This can be used to rename the file.
     * @type {string}
     * @memberof FilesUpdateFileRequest
     */
    'name'?: string;
    /**
     * 
     * @type {FilesUpdateFileRequestParent}
     * @memberof FilesUpdateFileRequest
     */
    'parent'?: FilesUpdateFileRequestParent;
    /**
     * 
     * @type {FilesUpdateFileRequestSharedLink}
     * @memberof FilesUpdateFileRequest
     */
    'shared_link'?: FilesUpdateFileRequestSharedLink;
    /**
     * 
     * @type {FilesUpdateFileRequestLock}
     * @memberof FilesUpdateFileRequest
     */
    'lock'?: FilesUpdateFileRequestLock;
    /**
     * The retention expiration timestamp for the given file. This date cannot be shortened once set on a file.
     * @type {string}
     * @memberof FilesUpdateFileRequest
     */
    'disposition_at'?: string;
    /**
     * 
     * @type {FilesUpdateFileRequestPermissions}
     * @memberof FilesUpdateFileRequest
     */
    'permissions'?: FilesUpdateFileRequestPermissions;
    /**
     * An array of collections to make this file a member of. Currently we only support the `favorites` collection.  To get the ID for a collection, use the [List all collections][1] endpoint.  Passing an empty array `[]` or `null` will remove the file from all collections.  [1]: e://get-collections
     * @type {Array<Reference1>}
     * @memberof FilesUpdateFileRequest
     */
    'collections'?: Array<Reference1>;
}
