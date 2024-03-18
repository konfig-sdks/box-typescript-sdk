/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollaborationAcceptanceRequirementsStatus } from './collaboration-acceptance-requirements-status';
import { CollaborationAccessibleBy } from './collaboration-accessible-by';
import { CollaborationCreatedBy } from './collaboration-created-by';
import { CollaborationItem } from './collaboration-item';

/**
 * Collaborations define access permissions for users and groups to files and folders, similar to access control lists. A collaboration object grants a user or group access to a file or folder with permissions defined by a specific role.
 * @export
 * @interface Collaboration
 */
export interface Collaboration {
    /**
     * The unique identifier for this collaboration.
     * @type {string}
     * @memberof Collaboration
     */
    'id': string;
    /**
     * `collaboration`
     * @type {string}
     * @memberof Collaboration
     */
    'type': CollaborationTypeEnum;
    /**
     * 
     * @type {CollaborationItem}
     * @memberof Collaboration
     */
    'item'?: CollaborationItem | null;
    /**
     * 
     * @type {CollaborationAccessibleBy}
     * @memberof Collaboration
     */
    'accessible_by'?: CollaborationAccessibleBy;
    /**
     * The email address used to invite an unregistered collaborator, if they are not a registered user.
     * @type {string}
     * @memberof Collaboration
     */
    'invite_email'?: string | null;
    /**
     * The level of access granted.
     * @type {string}
     * @memberof Collaboration
     */
    'role'?: CollaborationRoleEnum;
    /**
     * When the collaboration will expire, or `null` if no expiration date is set.
     * @type {string}
     * @memberof Collaboration
     */
    'expires_at'?: string | null;
    /**
     * If set to `true`, collaborators have access to shared items, but such items won\'t be visible in the All Files list. Additionally, collaborators won\'t see the the path to the root folder for the shared item.
     * @type {boolean}
     * @memberof Collaboration
     */
    'is_access_only'?: boolean;
    /**
     * The status of the collaboration invitation. If the status is `pending`, `login` and `name` return an empty string.
     * @type {string}
     * @memberof Collaboration
     */
    'status'?: CollaborationStatusEnum;
    /**
     * When the `status` of the collaboration object changed to `accepted` or `rejected`.
     * @type {string}
     * @memberof Collaboration
     */
    'acknowledged_at'?: string;
    /**
     * 
     * @type {CollaborationCreatedBy}
     * @memberof Collaboration
     */
    'created_by'?: CollaborationCreatedBy;
    /**
     * When the collaboration object was created.
     * @type {string}
     * @memberof Collaboration
     */
    'created_at'?: string;
    /**
     * When the collaboration object was last modified.
     * @type {string}
     * @memberof Collaboration
     */
    'modified_at'?: string;
    /**
     * 
     * @type {CollaborationAcceptanceRequirementsStatus}
     * @memberof Collaboration
     */
    'acceptance_requirements_status'?: CollaborationAcceptanceRequirementsStatus;
}

type CollaborationTypeEnum = 'collaboration'
type CollaborationRoleEnum = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | 'owner'
type CollaborationStatusEnum = 'accepted' | 'pending' | 'rejected'


