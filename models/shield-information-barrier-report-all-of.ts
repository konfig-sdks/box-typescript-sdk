/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ShieldInformationBarrierReference } from './shield-information-barrier-reference';
import { ShieldInformationBarrierReportDetails } from './shield-information-barrier-report-details';
import { UserBase } from './user-base';

/**
 * 
 * @export
 * @interface ShieldInformationBarrierReportAllOf
 */
export interface ShieldInformationBarrierReportAllOf {
    /**
     * 
     * @type {ShieldInformationBarrierReference}
     * @memberof ShieldInformationBarrierReportAllOf
     */
    'shield_information_barrier'?: ShieldInformationBarrierReference;
    /**
     * Status of the shield information report
     * @type {string}
     * @memberof ShieldInformationBarrierReportAllOf
     */
    'status'?: ShieldInformationBarrierReportAllOfStatusEnum;
    /**
     * 
     * @type {ShieldInformationBarrierReportDetails}
     * @memberof ShieldInformationBarrierReportAllOf
     */
    'details'?: ShieldInformationBarrierReportDetails;
    /**
     * ISO date time string when this shield information barrier report object was created.
     * @type {string}
     * @memberof ShieldInformationBarrierReportAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {UserBase}
     * @memberof ShieldInformationBarrierReportAllOf
     */
    'created_by'?: UserBase;
    /**
     * ISO date time string when this shield information barrier report was updated.
     * @type {string}
     * @memberof ShieldInformationBarrierReportAllOf
     */
    'updated_at'?: string;
}

type ShieldInformationBarrierReportAllOfStatusEnum = 'pending' | 'error' | 'done' | 'cancelled'


