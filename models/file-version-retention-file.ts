/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FileMini } from './file-mini';
import { FileVersionMini } from './file-version-mini';

/**
 * 
 * @export
 * @interface FileVersionRetentionFile
 */
export interface FileVersionRetentionFile {
    /**
     * The unique identifier that represent a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.
     * @type {string}
     * @memberof FileVersionRetentionFile
     */
    'id': string;
    /**
     * The HTTP `etag` of this file. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the file if (no) changes have happened.
     * @type {string}
     * @memberof FileVersionRetentionFile
     */
    'etag'?: string | null;
    /**
     * `file`
     * @type {string}
     * @memberof FileVersionRetentionFile
     */
    'type': FileVersionRetentionFileTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FileVersionRetentionFile
     */
    'sequence_id'?: string;
    /**
     * The name of the file
     * @type {string}
     * @memberof FileVersionRetentionFile
     */
    'name'?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents of a file on Box with a local file.
     * @type {string}
     * @memberof FileVersionRetentionFile
     */
    'sha1'?: string;
    /**
     * 
     * @type {FileVersionMini}
     * @memberof FileVersionRetentionFile
     */
    'file_version'?: FileVersionMini;
}

type FileVersionRetentionFileTypeEnum = 'file'


