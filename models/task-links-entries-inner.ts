/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TaskAssigneesEntriesInnerPermissions } from './task-assignees-entries-inner-permissions';
import { TaskBase } from './task-base';
import { TaskLinksEntriesInnerTarget } from './task-links-entries-inner-target';

/**
 * 
 * @export
 * @interface TaskLinksEntriesInner
 */
export interface TaskLinksEntriesInner {
    /**
     * 
     * @type {string}
     * @memberof TaskLinksEntriesInner
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskLinksEntriesInner
     */
    'id'?: string;
    /**
     * 
     * @type {TaskAssigneesEntriesInnerPermissions}
     * @memberof TaskLinksEntriesInner
     */
    'permissions'?: TaskAssigneesEntriesInnerPermissions;
    /**
     * 
     * @type {TaskLinksEntriesInnerTarget}
     * @memberof TaskLinksEntriesInner
     */
    'target'?: TaskLinksEntriesInnerTarget;
    /**
     * 
     * @type {TaskBase}
     * @memberof TaskLinksEntriesInner
     */
    'task'?: TaskBase;
    /**
     * 
     * @type {string}
     * @memberof TaskLinksEntriesInner
     */
    'type'?: TaskLinksEntriesInnerTypeEnum;
}

type TaskLinksEntriesInnerTypeEnum = 'task_link'

