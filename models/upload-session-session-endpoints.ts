/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SessionEndpoints } from './session-endpoints';

/**
 * 
 * @export
 * @interface UploadSessionSessionEndpoints
 */
export interface UploadSessionSessionEndpoints {
    /**
     * The URL to upload parts to
     * @type {string}
     * @memberof UploadSessionSessionEndpoints
     */
    'upload_part'?: string;
    /**
     * The URL used to commit the file
     * @type {string}
     * @memberof UploadSessionSessionEndpoints
     */
    'commit'?: string;
    /**
     * The URL for used to abort the session.
     * @type {string}
     * @memberof UploadSessionSessionEndpoints
     */
    'abort'?: string;
    /**
     * The URL users to list all parts.
     * @type {string}
     * @memberof UploadSessionSessionEndpoints
     */
    'list_parts'?: string;
    /**
     * The URL used to get the status of the upload.
     * @type {string}
     * @memberof UploadSessionSessionEndpoints
     */
    'status'?: string;
    /**
     * The URL used to get the upload log from.
     * @type {string}
     * @memberof UploadSessionSessionEndpoints
     */
    'log_event'?: string;
}
