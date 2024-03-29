/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FoldersUpdateFolderRequestFolderUploadEmail } from './folders-update-folder-request-folder-upload-email';
import { FoldersUpdateFolderRequestParent } from './folders-update-folder-request-parent';
import { FoldersUpdateFolderRequestSharedLink } from './folders-update-folder-request-shared-link';
import { Reference2 } from './reference2';

/**
 * 
 * @export
 * @interface FoldersUpdateFolderRequest
 */
export interface FoldersUpdateFolderRequest {
    /**
     * The tags for this item. These tags are shown in the Box web app and mobile apps next to an item.  To add or remove a tag, retrieve the item\'s current tags, modify them, and then update this field.  There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.
     * @type {Array<string>}
     * @memberof FoldersUpdateFolderRequest
     */
    'tags'?: Array<string>;
    /**
     * The optional description of this folder
     * @type {string}
     * @memberof FoldersUpdateFolderRequest
     */
    'description'?: string;
    /**
     * The optional new name for this folder.
     * @type {string}
     * @memberof FoldersUpdateFolderRequest
     */
    'name'?: string;
    /**
     * Specifies whether a folder should be synced to a user\'s device or not. This is used by Box Sync (discontinued) and is not used by Box Drive.
     * @type {string}
     * @memberof FoldersUpdateFolderRequest
     */
    'sync_state'?: FoldersUpdateFolderRequestSyncStateEnum;
    /**
     * Specifies if users who are not the owner of the folder can invite new collaborators to the folder.
     * @type {boolean}
     * @memberof FoldersUpdateFolderRequest
     */
    'can_non_owners_invite'?: boolean;
    /**
     * 
     * @type {FoldersUpdateFolderRequestParent}
     * @memberof FoldersUpdateFolderRequest
     */
    'parent'?: FoldersUpdateFolderRequestParent;
    /**
     * 
     * @type {FoldersUpdateFolderRequestSharedLink}
     * @memberof FoldersUpdateFolderRequest
     */
    'shared_link'?: FoldersUpdateFolderRequestSharedLink;
    /**
     * 
     * @type {FoldersUpdateFolderRequestFolderUploadEmail}
     * @memberof FoldersUpdateFolderRequest
     */
    'folder_upload_email'?: FoldersUpdateFolderRequestFolderUploadEmail;
    /**
     * Specifies if new invites to this folder are restricted to users within the enterprise. This does not affect existing collaborations.
     * @type {boolean}
     * @memberof FoldersUpdateFolderRequest
     */
    'is_collaboration_restricted_to_enterprise'?: boolean;
    /**
     * An array of collections to make this folder a member of. Currently we only support the `favorites` collection.  To get the ID for a collection, use the [List all collections][1] endpoint.  Passing an empty array `[]` or `null` will remove the folder from all collections.  [1]: e://get-collections
     * @type {Array<Reference2>}
     * @memberof FoldersUpdateFolderRequest
     */
    'collections'?: Array<Reference2>;
    /**
     * Restricts collaborators who are not the owner of this folder from viewing other collaborations on this folder.  It also restricts non-owners from inviting new collaborators.  When setting this field to `false`, it is required to also set `can_non_owners_invite_collaborators` to `false` if it has not already been set.
     * @type {boolean}
     * @memberof FoldersUpdateFolderRequest
     */
    'can_non_owners_view_collaborators'?: boolean;
}

type FoldersUpdateFolderRequestSyncStateEnum = 'synced' | 'not_synced' | 'partially_synced'


