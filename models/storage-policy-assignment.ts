/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StoragePolicyAssignmentAssignedTo } from './storage-policy-assignment-assigned-to';
import { StoragePolicyAssignmentStoragePolicy } from './storage-policy-assignment-storage-policy';

/**
 * The assignment of a storage policy to a user or enterprise
 * @export
 * @interface StoragePolicyAssignment
 */
export interface StoragePolicyAssignment {
    /**
     * The unique identifier for a storage policy assignment.
     * @type {string}
     * @memberof StoragePolicyAssignment
     */
    'id': string;
    /**
     * `storage_policy_assignment`
     * @type {string}
     * @memberof StoragePolicyAssignment
     */
    'type': StoragePolicyAssignmentTypeEnum;
    /**
     * 
     * @type {StoragePolicyAssignmentStoragePolicy}
     * @memberof StoragePolicyAssignment
     */
    'storage_policy'?: StoragePolicyAssignmentStoragePolicy;
    /**
     * 
     * @type {StoragePolicyAssignmentAssignedTo}
     * @memberof StoragePolicyAssignment
     */
    'assigned_to'?: StoragePolicyAssignmentAssignedTo;
}

type StoragePolicyAssignmentTypeEnum = 'storage_policy_assignment'

