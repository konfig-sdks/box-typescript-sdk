/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FilesUpdateFileRequestSharedLinkAllOfPermissions } from './files-update-file-request-shared-link-all-of-permissions';

/**
 * Defines a shared link for an item. Set this to `null` to remove the shared link.
 * @export
 * @interface FilesUpdateFileRequestSharedLinkAllOf
 */
export interface FilesUpdateFileRequestSharedLinkAllOf {
    /**
     * The level of access for the shared link. This can be restricted to anyone with the link (`open`), only people within the company (`company`) and only those who have been invited to the folder (`collaborators`).  If not set, this field defaults to the access level specified by the enterprise admin. To create a shared link with this default setting pass the `shared_link` object with no `access` field, for example `{ \"shared_link\": {} }`.  The `company` access level is only available to paid accounts.
     * @type {string}
     * @memberof FilesUpdateFileRequestSharedLinkAllOf
     */
    'access'?: FilesUpdateFileRequestSharedLinkAllOfAccessEnum;
    /**
     * The password required to access the shared link. Set the password to `null` to remove it. Passwords must now be at least eight characters long and include a number, upper case letter, or a non-numeric or non-alphabetic character. A password can only be set when `access` is set to `open`.
     * @type {string}
     * @memberof FilesUpdateFileRequestSharedLinkAllOf
     */
    'password'?: string;
    /**
     * Defines a custom vanity name to use in the shared link URL, for example `https://app.box.com/v/my-shared-link`.  Custom URLs should not be used when sharing sensitive content as vanity URLs are a lot easier to guess than regular shared links.
     * @type {string}
     * @memberof FilesUpdateFileRequestSharedLinkAllOf
     */
    'vanity_name'?: string;
    /**
     * The timestamp at which this shared link will expire. This field can only be set by users with paid accounts.
     * @type {string}
     * @memberof FilesUpdateFileRequestSharedLinkAllOf
     */
    'unshared_at'?: string;
    /**
     * 
     * @type {FilesUpdateFileRequestSharedLinkAllOfPermissions}
     * @memberof FilesUpdateFileRequestSharedLinkAllOf
     */
    'permissions'?: FilesUpdateFileRequestSharedLinkAllOfPermissions;
}

type FilesUpdateFileRequestSharedLinkAllOfAccessEnum = 'open' | 'company' | 'collaborators'


