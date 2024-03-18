/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SignTemplateAllOfAdditionalInfoRequired } from './sign-template-all-of-additional-info-required';

/**
 * Additional information on which fields are required and which fields are not editable.
 * @export
 * @interface SignTemplateAllOfAdditionalInfo
 */
export interface SignTemplateAllOfAdditionalInfo {
    /**
     * Non editable fields.
     * @type {Array<string>}
     * @memberof SignTemplateAllOfAdditionalInfo
     */
    'non_editable'?: Array<SignTemplateAllOfAdditionalInfoNonEditableEnum>;
    /**
     * 
     * @type {SignTemplateAllOfAdditionalInfoRequired}
     * @memberof SignTemplateAllOfAdditionalInfo
     */
    'required'?: SignTemplateAllOfAdditionalInfoRequired;
}

type SignTemplateAllOfAdditionalInfoNonEditableEnum = 'email_subject' | 'email_message' | 'name' | 'days_valid' | 'signers' | 'source_files'

