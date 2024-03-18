/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Outcome } from './outcome';
import { WorkflowsStartBasedOnRequestRequestFilesInner } from './workflows-start-based-on-request-request-files-inner';
import { WorkflowsStartBasedOnRequestRequestFlow } from './workflows-start-based-on-request-request-flow';
import { WorkflowsStartBasedOnRequestRequestFolder } from './workflows-start-based-on-request-request-folder';

/**
 * 
 * @export
 * @interface WorkflowsStartBasedOnRequestRequest
 */
export interface WorkflowsStartBasedOnRequestRequest {
    /**
     * The type of the parameters object
     * @type {string}
     * @memberof WorkflowsStartBasedOnRequestRequest
     */
    'type'?: WorkflowsStartBasedOnRequestRequestTypeEnum;
    /**
     * 
     * @type {WorkflowsStartBasedOnRequestRequestFlow}
     * @memberof WorkflowsStartBasedOnRequestRequest
     */
    'flow': WorkflowsStartBasedOnRequestRequestFlow;
    /**
     * The array of files for which the workflow should start. All files must be in the workflow\'s configured folder.
     * @type {Array<WorkflowsStartBasedOnRequestRequestFilesInner>}
     * @memberof WorkflowsStartBasedOnRequestRequest
     */
    'files': Array<WorkflowsStartBasedOnRequestRequestFilesInner>;
    /**
     * 
     * @type {WorkflowsStartBasedOnRequestRequestFolder}
     * @memberof WorkflowsStartBasedOnRequestRequest
     */
    'folder': WorkflowsStartBasedOnRequestRequestFolder;
    /**
     * A configurable outcome the workflow should complete.
     * @type {Array<Outcome>}
     * @memberof WorkflowsStartBasedOnRequestRequest
     */
    'outcomes'?: Array<Outcome>;
}

type WorkflowsStartBasedOnRequestRequestTypeEnum = 'workflow_parameters'


