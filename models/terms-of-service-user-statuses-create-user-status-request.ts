/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TermsOfServiceUserStatusesCreateUserStatusRequestTos } from './terms-of-service-user-statuses-create-user-status-request-tos';
import { TermsOfServiceUserStatusesCreateUserStatusRequestUser } from './terms-of-service-user-statuses-create-user-status-request-user';

/**
 * 
 * @export
 * @interface TermsOfServiceUserStatusesCreateUserStatusRequest
 */
export interface TermsOfServiceUserStatusesCreateUserStatusRequest {
    /**
     * 
     * @type {TermsOfServiceUserStatusesCreateUserStatusRequestTos}
     * @memberof TermsOfServiceUserStatusesCreateUserStatusRequest
     */
    'tos': TermsOfServiceUserStatusesCreateUserStatusRequestTos;
    /**
     * 
     * @type {TermsOfServiceUserStatusesCreateUserStatusRequestUser}
     * @memberof TermsOfServiceUserStatusesCreateUserStatusRequest
     */
    'user': TermsOfServiceUserStatusesCreateUserStatusRequestUser;
    /**
     * Whether the user has accepted the terms.
     * @type {boolean}
     * @memberof TermsOfServiceUserStatusesCreateUserStatusRequest
     */
    'is_accepted': boolean;
}
