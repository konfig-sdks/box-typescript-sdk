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
 * @interface UserAvatarsAddOrUpdateImageRequest
 */
export interface UserAvatarsAddOrUpdateImageRequest {
    /**
     * The image file to be uploaded to Box. Accepted file extensions are `.jpg` or `.png`. The maximum file size is 1MB.
     * @type {Uint8Array | File | buffer.File}
     * @memberof UserAvatarsAddOrUpdateImageRequest
     */
    'pic': Uint8Array | File | buffer.File;
}

