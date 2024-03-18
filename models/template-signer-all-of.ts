/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TemplateSignerInput } from './template-signer-input';

/**
 * 
 * @export
 * @interface TemplateSignerAllOf
 */
export interface TemplateSignerAllOf {
    /**
     * 
     * @type {Array<TemplateSignerInput>}
     * @memberof TemplateSignerAllOf
     */
    'inputs'?: Array<TemplateSignerInput>;
    /**
     * Email address of the signer
     * @type {string}
     * @memberof TemplateSignerAllOf
     */
    'email'?: string | null;
    /**
     * Defines the role of the signer in the signature request. A role of `signer` needs to sign the document, a role `approver` approves the document and a `final_copy_reader` role only receives the final signed document and signing log.
     * @type {string}
     * @memberof TemplateSignerAllOf
     */
    'role'?: TemplateSignerAllOfRoleEnum;
    /**
     * Used in combination with an embed URL for a sender. After the sender signs, they will be redirected to the next `in_person` signer.
     * @type {boolean}
     * @memberof TemplateSignerAllOf
     */
    'is_in_person'?: boolean;
    /**
     * Order of the signer
     * @type {number}
     * @memberof TemplateSignerAllOf
     */
    'order'?: number;
    /**
     * If provided, this value points signers that are assigned the same inputs and belongs to same signer group. A signer group is not a Box Group. It is an entity that belongs to the template itself and can only be used within Sign Requests created from it.
     * @type {string}
     * @memberof TemplateSignerAllOf
     */
    'signer_group_id'?: string | null;
}

type TemplateSignerAllOfRoleEnum = 'signer' | 'approver' | 'final_copy_reader'

