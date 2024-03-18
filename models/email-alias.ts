/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An email alias for a user.
 * @export
 * @interface EmailAlias
 */
export interface EmailAlias {
    /**
     * The unique identifier for this object
     * @type {string}
     * @memberof EmailAlias
     */
    'id'?: string;
    /**
     * `email_alias`
     * @type {string}
     * @memberof EmailAlias
     */
    'type'?: EmailAliasTypeEnum;
    /**
     * The email address
     * @type {string}
     * @memberof EmailAlias
     */
    'email'?: string;
    /**
     * Whether the email address has been confirmed
     * @type {boolean}
     * @memberof EmailAlias
     */
    'is_confirmed'?: boolean;
}

type EmailAliasTypeEnum = 'email_alias'


