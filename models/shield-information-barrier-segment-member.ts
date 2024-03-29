/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ShieldInformationBarrierBase } from './shield-information-barrier-base';
import { ShieldInformationBarrierSegmentMemberAllOf } from './shield-information-barrier-segment-member-all-of';
import { ShieldInformationBarrierSegmentMemberAllOfShieldInformationBarrierSegment } from './shield-information-barrier-segment-member-all-of-shield-information-barrier-segment';
import { ShieldInformationBarrierSegmentMemberMini } from './shield-information-barrier-segment-member-mini';
import { UserBase } from './user-base';

/**
 * @type ShieldInformationBarrierSegmentMember
 * A standard representation of a shield information barrier segment member object
 * @export
 */
export type ShieldInformationBarrierSegmentMember = ShieldInformationBarrierSegmentMemberAllOf & ShieldInformationBarrierSegmentMemberMini;


