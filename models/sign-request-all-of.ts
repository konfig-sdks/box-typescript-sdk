/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FileBase } from './file-base';
import { FileMini } from './file-mini';
import { FolderMini } from './folder-mini';
import { SignRequestAllOfSignFiles } from './sign-request-all-of-sign-files';
import { SignRequestSigner } from './sign-request-signer';

/**
 * 
 * @export
 * @interface SignRequestAllOf
 */
export interface SignRequestAllOf {
    /**
     * object type
     * @type {string}
     * @memberof SignRequestAllOf
     */
    'type'?: SignRequestAllOfTypeEnum;
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file.
     * @type {Array<FileBase>}
     * @memberof SignRequestAllOf
     */
    'source_files'?: Array<FileBase>;
    /**
     * Array of signers for the sign request
     * @type {Array<SignRequestSigner>}
     * @memberof SignRequestAllOf
     */
    'signers'?: Array<SignRequestSigner>;
    /**
     * Force a specific color for the signature (blue, black, or red).
     * @type {string}
     * @memberof SignRequestAllOf
     */
    'signature_color'?: string | null;
    /**
     * Sign request ID
     * @type {string}
     * @memberof SignRequestAllOf
     */
    'id'?: string;
    /**
     * This URL is returned if `is_document_preparation_needed` is set to `true` in the request. It is used to prepare the sign request via UI. The sign request is not sent until preparation is complete.
     * @type {string}
     * @memberof SignRequestAllOf
     */
    'prepare_url'?: string | null;
    /**
     * 
     * @type {FileMini}
     * @memberof SignRequestAllOf
     */
    'signing_log'?: FileMini;
    /**
     * Describes the status of the sign request
     * @type {string}
     * @memberof SignRequestAllOf
     */
    'status'?: SignRequestAllOfStatusEnum;
    /**
     * 
     * @type {SignRequestAllOfSignFiles}
     * @memberof SignRequestAllOf
     */
    'sign_files'?: SignRequestAllOfSignFiles;
    /**
     * Uses `days_valid` to calculate the date and time, in GMT, the sign request will expire if unsigned.
     * @type {string}
     * @memberof SignRequestAllOf
     */
    'auto_expire_at'?: string | null;
    /**
     * 
     * @type {FolderMini}
     * @memberof SignRequestAllOf
     */
    'parent_folder'?: FolderMini;
}

type SignRequestAllOfTypeEnum = 'sign-request'
type SignRequestAllOfStatusEnum = 'converting' | 'created' | 'sent' | 'viewed' | 'signed' | 'cancelled' | 'declined' | 'error_converting' | 'error_sending' | 'expired' | 'finalizing' | 'error_finalizing'


