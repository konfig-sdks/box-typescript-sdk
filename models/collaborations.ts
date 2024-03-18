/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Collaboration } from './collaboration';
import { CollaborationsAllOf } from './collaborations-all-of';
import { CollaborationsAllOf1 } from './collaborations-all-of1';
import { CollaborationsAllOfOrder } from './collaborations-all-of-order';

/**
 * @type Collaborations
 * A list of collaborations
 * @export
 */
export type Collaborations = CollaborationsAllOf & CollaborationsAllOf1;


