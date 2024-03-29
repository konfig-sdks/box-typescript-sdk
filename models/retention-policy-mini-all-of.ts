/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface RetentionPolicyMiniAllOf
 */
export interface RetentionPolicyMiniAllOf {
    /**
     * The name given to the retention policy.
     * @type {string}
     * @memberof RetentionPolicyMiniAllOf
     */
    'policy_name'?: string;
    /**
     * The length of the retention policy. This value specifies the duration in days that the retention policy will be active for after being assigned to content.  If the policy has a `policy_type` of `indefinite`, the `retention_length` will also be `indefinite`.
     * @type {string}
     * @memberof RetentionPolicyMiniAllOf
     */
    'retention_length'?: string;
    /**
     * The disposition action of the retention policy. This action can be `permanently_delete`, which will cause the content retained by the policy to be permanently deleted, or `remove_retention`, which will lift the retention policy from the content, allowing it to be deleted by users, once the retention policy has expired.
     * @type {string}
     * @memberof RetentionPolicyMiniAllOf
     */
    'disposition_action'?: RetentionPolicyMiniAllOfDispositionActionEnum;
}

type RetentionPolicyMiniAllOfDispositionActionEnum = 'permanently_delete' | 'remove_retention'


