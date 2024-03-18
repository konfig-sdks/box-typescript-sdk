/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FolderAllOf } from './folder-all-of';
import { FolderAllOfFolderUploadEmail } from './folder-all-of-folder-upload-email';
import { FolderMini } from './folder-mini';
import { Items } from './items';
import { UserMini } from './user-mini';

/**
 * @type Folder
 * A standard representation of a folder, as returned from any folder API endpoints by default
 * @export
 */
export type Folder = FolderAllOf & FolderMini;


