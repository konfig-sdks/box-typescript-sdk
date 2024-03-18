/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FileActivityUser } from './file-activity-user';
import { VersionsActivityEnd } from './versions-activity-end';
import { VersionsActivityStart } from './versions-activity-start';

/**
 * Versions activity.
 * @export
 * @interface VersionsActivity
 */
export interface VersionsActivity {
    /**
     * Users who performed one of the `action_types` (`created`, `deleted` or `restored`)
     * @type {Array<FileActivityUser>}
     * @memberof VersionsActivity
     */
    'action_by'?: Array<FileActivityUser>;
    /**
     * 
     * @type {string}
     * @memberof VersionsActivity
     */
    'action_type'?: VersionsActivityActionTypeEnum;
    /**
     * 
     * @type {VersionsActivityEnd}
     * @memberof VersionsActivity
     */
    'end'?: VersionsActivityEnd;
    /**
     * 
     * @type {VersionsActivityStart}
     * @memberof VersionsActivity
     */
    'start'?: VersionsActivityStart;
    /**
     * 
     * @type {string}
     * @memberof VersionsActivity
     */
    'type'?: VersionsActivityTypeEnum;
}

type VersionsActivityActionTypeEnum = 'created' | 'restored' | 'trashed'
type VersionsActivityTypeEnum = 'versions'

