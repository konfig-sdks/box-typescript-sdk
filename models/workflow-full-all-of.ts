/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserBase } from './user-base';

/**
 * 
 * @export
 * @interface WorkflowFullAllOf
 */
export interface WorkflowFullAllOf {
    /**
     * The date and time when the workflow was created on Box
     * @type {string}
     * @memberof WorkflowFullAllOf
     */
    'created_at'?: string;
    /**
     * The date and time when the workflow was last updated on Box
     * @type {string}
     * @memberof WorkflowFullAllOf
     */
    'modified_at'?: string;
    /**
     * 
     * @type {UserBase}
     * @memberof WorkflowFullAllOf
     */
    'created_by'?: UserBase;
    /**
     * 
     * @type {UserBase}
     * @memberof WorkflowFullAllOf
     */
    'modified_by'?: UserBase;
}

