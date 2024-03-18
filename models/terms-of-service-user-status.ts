/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TermsOfServiceUserStatusTos } from './terms-of-service-user-status-tos';
import { TermsOfServiceUserStatusUser } from './terms-of-service-user-status-user';

/**
 * The association between a Terms of Service and a user
 * @export
 * @interface TermsOfServiceUserStatus
 */
export interface TermsOfServiceUserStatus {
    /**
     * The unique identifier for this terms of service user status
     * @type {string}
     * @memberof TermsOfServiceUserStatus
     */
    'id': string;
    /**
     * `terms_of_service_user_status`
     * @type {string}
     * @memberof TermsOfServiceUserStatus
     */
    'type': TermsOfServiceUserStatusTypeEnum;
    /**
     * 
     * @type {TermsOfServiceUserStatusTos}
     * @memberof TermsOfServiceUserStatus
     */
    'tos'?: TermsOfServiceUserStatusTos;
    /**
     * 
     * @type {TermsOfServiceUserStatusUser}
     * @memberof TermsOfServiceUserStatus
     */
    'user'?: TermsOfServiceUserStatusUser;
    /**
     * If the user has accepted the terms of services
     * @type {boolean}
     * @memberof TermsOfServiceUserStatus
     */
    'is_accepted'?: boolean;
    /**
     * When the legal item was created
     * @type {string}
     * @memberof TermsOfServiceUserStatus
     */
    'created_at'?: string;
    /**
     * When the legal item was modified.
     * @type {string}
     * @memberof TermsOfServiceUserStatus
     */
    'modified_at'?: string;
}

type TermsOfServiceUserStatusTypeEnum = 'terms_of_service_user_status'

