/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LegalHoldPolicyAssignment } from './legal-hold-policy-assignment';
import { LegalHoldPolicyAssignmentsAllOf } from './legal-hold-policy-assignments-all-of';
import { LegalHoldPolicyAssignmentsAllOf1 } from './legal-hold-policy-assignments-all-of1';

/**
 * @type LegalHoldPolicyAssignments
 * A list of legal hold policies assignments.
 * @export
 */
export type LegalHoldPolicyAssignments = LegalHoldPolicyAssignmentsAllOf & LegalHoldPolicyAssignmentsAllOf1;


