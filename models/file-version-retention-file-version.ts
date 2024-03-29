/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FileVersionMini } from './file-version-mini';

/**
 * 
 * @export
 * @interface FileVersionRetentionFileVersion
 */
export interface FileVersionRetentionFileVersion {
    /**
     * The unique identifier that represent a file version.
     * @type {string}
     * @memberof FileVersionRetentionFileVersion
     */
    'id': string;
    /**
     * `file_version`
     * @type {string}
     * @memberof FileVersionRetentionFileVersion
     */
    'type': FileVersionRetentionFileVersionTypeEnum;
    /**
     * The SHA1 hash of this version of the file.
     * @type {string}
     * @memberof FileVersionRetentionFileVersion
     */
    'sha1'?: string;
}

type FileVersionRetentionFileVersionTypeEnum = 'file_version'


