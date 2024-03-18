/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserMini } from './user-mini';

/**
 * 
 * @export
 * @interface FileRequestCreatedBy
 */
export interface FileRequestCreatedBy {
    /**
     * The unique identifier for this user
     * @type {string}
     * @memberof FileRequestCreatedBy
     */
    'id': string;
    /**
     * `user`
     * @type {string}
     * @memberof FileRequestCreatedBy
     */
    'type': FileRequestCreatedByTypeEnum;
    /**
     * The display name of this user
     * @type {string}
     * @memberof FileRequestCreatedBy
     */
    'name'?: string;
    /**
     * The primary email address of this user
     * @type {string}
     * @memberof FileRequestCreatedBy
     */
    'login'?: string;
}

type FileRequestCreatedByTypeEnum = 'user'


