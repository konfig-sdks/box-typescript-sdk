/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The additional attributes of the file being uploaded. Mainly the name and the parent folder. These attributes are part of the multi part request body and are in JSON format.  <Message warning>    The `attributes` part of the body must come **before** the   `file` part. Requests that do not follow this format when   uploading the file will receive a HTTP `400` error with a   `metadata_after_file_contents` error code.  </Message>
 * @export
 * @interface UploadsFileContentUpdateRequestAttributes
 */
export interface UploadsFileContentUpdateRequestAttributes {
    /**
     * An optional new name for the file. If specified, the file will be renamed when the new version is uploaded.
     * @type {string}
     * @memberof UploadsFileContentUpdateRequestAttributes
     */
    'name': string;
    /**
     * Defines the time the file was last modified at.  If not set, the upload time will be used.
     * @type {string}
     * @memberof UploadsFileContentUpdateRequestAttributes
     */
    'content_modified_at'?: string;
}

