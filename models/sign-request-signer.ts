/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SignRequestCreateSigner } from './sign-request-create-signer';
import { SignRequestSignerAllOf } from './sign-request-signer-all-of';
import { SignRequestSignerAllOfSignerDecision } from './sign-request-signer-all-of-signer-decision';
import { SignRequestSignerInput } from './sign-request-signer-input';

/**
 * @type SignRequestSigner
 * The schema for a Signer in a GET Sign Request request body
 * @export
 */
export type SignRequestSigner = SignRequestCreateSigner & SignRequestSignerAllOf;


