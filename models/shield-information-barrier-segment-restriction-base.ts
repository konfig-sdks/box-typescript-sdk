/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A base representation of a segment restriction object for the shield information barrier
 * @export
 * @interface ShieldInformationBarrierSegmentRestrictionBase
 */
export interface ShieldInformationBarrierSegmentRestrictionBase {
    /**
     * Shield information barrier segment restriction
     * @type {string}
     * @memberof ShieldInformationBarrierSegmentRestrictionBase
     */
    'type'?: ShieldInformationBarrierSegmentRestrictionBaseTypeEnum;
    /**
     * The unique identifier for the shield information barrier segment restriction.
     * @type {string}
     * @memberof ShieldInformationBarrierSegmentRestrictionBase
     */
    'id'?: string;
}

type ShieldInformationBarrierSegmentRestrictionBaseTypeEnum = 'shield_information_barrier_segment_restriction'


