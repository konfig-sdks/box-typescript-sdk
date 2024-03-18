/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FileActivityUser } from './file-activity-user';
import { ReplyParent } from './reply-parent';

/**
 * Reply object
 * @export
 * @interface Reply
 */
export interface Reply {
    /**
     * reply object id.
     * @type {string}
     * @memberof Reply
     */
    'id'?: string;
    /**
     * When the reply object was created.
     * @type {string}
     * @memberof Reply
     */
    'created_at'?: string;
    /**
     * 
     * @type {FileActivityUser}
     * @memberof Reply
     */
    'created_by'?: FileActivityUser;
    /**
     * Reply message
     * @type {string}
     * @memberof Reply
     */
    'message'?: string;
    /**
     * 
     * @type {ReplyParent}
     * @memberof Reply
     */
    'parent'?: ReplyParent;
    /**
     * Reply type
     * @type {string}
     * @memberof Reply
     */
    'type'?: ReplyTypeEnum;
}

type ReplyTypeEnum = 'comment'

