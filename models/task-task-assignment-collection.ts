/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TaskAssignment } from './task-assignment';
import { TaskAssignments } from './task-assignments';

/**
 * 
 * @export
 * @interface TaskTaskAssignmentCollection
 */
export interface TaskTaskAssignmentCollection {
    /**
     * The total number of items in this collection.
     * @type {number}
     * @memberof TaskTaskAssignmentCollection
     */
    'total_count'?: number;
    /**
     * A list of task assignments
     * @type {Array<TaskAssignment>}
     * @memberof TaskTaskAssignmentCollection
     */
    'entries'?: Array<TaskAssignment>;
}

