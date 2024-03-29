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
 * @interface CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirement
 */
export interface CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirement {
    /**
     * Whether or not the enterprise that owns the content requires two-factor authentication to be enabled in order to collaborate on the content.
     * @type {boolean}
     * @memberof CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirement
     */
    'enterprise_has_two_factor_auth_enabled'?: boolean;
    /**
     * Whether or not the user has two-factor authentication enabled. The field is `null` when two-factor authentication is not required.
     * @type {boolean}
     * @memberof CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirement
     */
    'user_has_two_factor_authentication_enabled'?: boolean | null;
}

