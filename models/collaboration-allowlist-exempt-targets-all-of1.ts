/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollaborationAllowlistExemptTarget } from './collaboration-allowlist-exempt-target';

/**
 * 
 * @export
 * @interface CollaborationAllowlistExemptTargetsAllOf1
 */
export interface CollaborationAllowlistExemptTargetsAllOf1 {
    /**
     * A list of users exempt from any of the restrictions imposed by the list of allowed collaboration domains for this enterprise.
     * @type {Array<CollaborationAllowlistExemptTarget>}
     * @memberof CollaborationAllowlistExemptTargetsAllOf1
     */
    'entries'?: Array<CollaborationAllowlistExemptTarget>;
}
