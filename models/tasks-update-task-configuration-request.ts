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
 * @interface TasksUpdateTaskConfigurationRequest
 */
export interface TasksUpdateTaskConfigurationRequest {
    /**
     * The action the task assignee will be prompted to do. Must be  * `review` defines an approval task that can be approved or rejected * `complete` defines a general task which can be completed
     * @type {string}
     * @memberof TasksUpdateTaskConfigurationRequest
     */
    'action'?: TasksUpdateTaskConfigurationRequestActionEnum;
    /**
     * The message included with the task.
     * @type {string}
     * @memberof TasksUpdateTaskConfigurationRequest
     */
    'message'?: string;
    /**
     * When the task is due at.
     * @type {string}
     * @memberof TasksUpdateTaskConfigurationRequest
     */
    'due_at'?: string;
    /**
     * Defines which assignees need to complete this task before the task is considered completed.  * `all_assignees` (default) requires all assignees to review or approve the the task in order for it to be considered completed. * `any_assignee` accepts any one assignee to review or approve the the task in order for it to be considered completed.
     * @type {string}
     * @memberof TasksUpdateTaskConfigurationRequest
     */
    'completion_rule'?: TasksUpdateTaskConfigurationRequestCompletionRuleEnum;
}

type TasksUpdateTaskConfigurationRequestActionEnum = 'review' | 'complete'
type TasksUpdateTaskConfigurationRequestCompletionRuleEnum = 'all_assignees' | 'any_assignee'


