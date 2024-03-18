/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FileVersionLegalHold } from './file-version-legal-hold';

/**
 * 
 * @export
 * @interface FileVersionLegalHoldsAllOf1
 */
export interface FileVersionLegalHoldsAllOf1 {
    /**
     * A list of file version legal holds
     * @type {Array<FileVersionLegalHold>}
     * @memberof FileVersionLegalHoldsAllOf1
     */
    'entries'?: Array<FileVersionLegalHold>;
}

