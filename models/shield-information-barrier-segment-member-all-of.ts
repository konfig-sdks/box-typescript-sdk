/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ShieldInformationBarrierBase } from './shield-information-barrier-base';
import { ShieldInformationBarrierSegmentMemberAllOfShieldInformationBarrierSegment } from './shield-information-barrier-segment-member-all-of-shield-information-barrier-segment';
import { UserBase } from './user-base';

/**
 * 
 * @export
 * @interface ShieldInformationBarrierSegmentMemberAllOf
 */
export interface ShieldInformationBarrierSegmentMemberAllOf {
    /**
     * 
     * @type {ShieldInformationBarrierBase}
     * @memberof ShieldInformationBarrierSegmentMemberAllOf
     */
    'shield_information_barrier'?: ShieldInformationBarrierBase;
    /**
     * 
     * @type {ShieldInformationBarrierSegmentMemberAllOfShieldInformationBarrierSegment}
     * @memberof ShieldInformationBarrierSegmentMemberAllOf
     */
    'shield_information_barrier_segment'?: ShieldInformationBarrierSegmentMemberAllOfShieldInformationBarrierSegment;
    /**
     * 
     * @type {UserBase}
     * @memberof ShieldInformationBarrierSegmentMemberAllOf
     */
    'user'?: UserBase;
    /**
     * ISO date time string when this shield information barrier object was created.
     * @type {string}
     * @memberof ShieldInformationBarrierSegmentMemberAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {UserBase}
     * @memberof ShieldInformationBarrierSegmentMemberAllOf
     */
    'created_by'?: UserBase;
    /**
     * ISO date time string when this shield information barrier segment Member was updated.
     * @type {string}
     * @memberof ShieldInformationBarrierSegmentMemberAllOf
     */
    'updated_at'?: string;
    /**
     * 
     * @type {UserBase}
     * @memberof ShieldInformationBarrierSegmentMemberAllOf
     */
    'updated_by'?: UserBase;
}

