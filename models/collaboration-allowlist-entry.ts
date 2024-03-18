/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollaborationAllowlistEntryEnterprise } from './collaboration-allowlist-entry-enterprise';

/**
 * An entry that describes an approved domain for which users can collaborate with files and folders in your enterprise or vice versa.
 * @export
 * @interface CollaborationAllowlistEntry
 */
export interface CollaborationAllowlistEntry {
    /**
     * The unique identifier for this entry
     * @type {string}
     * @memberof CollaborationAllowlistEntry
     */
    'id'?: string;
    /**
     * `collaboration_whitelist_entry`
     * @type {string}
     * @memberof CollaborationAllowlistEntry
     */
    'type'?: CollaborationAllowlistEntryTypeEnum;
    /**
     * The whitelisted domain
     * @type {string}
     * @memberof CollaborationAllowlistEntry
     */
    'domain'?: string;
    /**
     * The direction of the collaborations to allow.
     * @type {string}
     * @memberof CollaborationAllowlistEntry
     */
    'direction'?: CollaborationAllowlistEntryDirectionEnum;
    /**
     * 
     * @type {CollaborationAllowlistEntryEnterprise}
     * @memberof CollaborationAllowlistEntry
     */
    'enterprise'?: CollaborationAllowlistEntryEnterprise;
    /**
     * The time the entry was created at
     * @type {string}
     * @memberof CollaborationAllowlistEntry
     */
    'created_at'?: string;
}

type CollaborationAllowlistEntryTypeEnum = 'collaboration_whitelist_entry'
type CollaborationAllowlistEntryDirectionEnum = 'inbound' | 'outbound' | 'both'


