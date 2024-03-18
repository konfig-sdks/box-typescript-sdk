/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An alternate notification email address to which email notifications are sent. When it\'s confirmed, this will be the email address to which notifications are sent instead of to the primary email address.  Set this value to `null` to remove the notification email.
 * @export
 * @interface UsersUpdateManagedUserRequestNotificationEmail
 */
export interface UsersUpdateManagedUserRequestNotificationEmail {
    /**
     * The email address to send the notifications to.
     * @type {string}
     * @memberof UsersUpdateManagedUserRequestNotificationEmail
     */
    'email'?: string;
}

