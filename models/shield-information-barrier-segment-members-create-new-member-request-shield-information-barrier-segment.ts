/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The `type` and `id` of the requested shield information barrier segment.
 * @export
 * @interface ShieldInformationBarrierSegmentMembersCreateNewMemberRequestShieldInformationBarrierSegment
 */
export interface ShieldInformationBarrierSegmentMembersCreateNewMemberRequestShieldInformationBarrierSegment {
    /**
     * The ID reference of the requesting shield information barrier segment.
     * @type {string}
     * @memberof ShieldInformationBarrierSegmentMembersCreateNewMemberRequestShieldInformationBarrierSegment
     */
    'id'?: string;
    /**
     * The type of the shield barrier segment for this member.
     * @type {string}
     * @memberof ShieldInformationBarrierSegmentMembersCreateNewMemberRequestShieldInformationBarrierSegment
     */
    'type'?: ShieldInformationBarrierSegmentMembersCreateNewMemberRequestShieldInformationBarrierSegmentTypeEnum;
}

type ShieldInformationBarrierSegmentMembersCreateNewMemberRequestShieldInformationBarrierSegmentTypeEnum = 'shield_information_barrier_segment'


