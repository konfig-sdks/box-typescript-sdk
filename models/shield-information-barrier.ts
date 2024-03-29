/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EnterpriseBase } from './enterprise-base';
import { ShieldInformationBarrierEnabledBy } from './shield-information-barrier-enabled-by';
import { UserBase } from './user-base';

/**
 * A standard representation of a shield information barrier object
 * @export
 * @interface ShieldInformationBarrier
 */
export interface ShieldInformationBarrier {
    /**
     * The unique identifier for the shield information barrier
     * @type {string}
     * @memberof ShieldInformationBarrier
     */
    'id'?: string;
    /**
     * The type of the shield information barrier
     * @type {string}
     * @memberof ShieldInformationBarrier
     */
    'type'?: ShieldInformationBarrierTypeEnum;
    /**
     * The `type` and `id` of enterprise this barrier is under.
     * @type {EnterpriseBase}
     * @memberof ShieldInformationBarrier
     */
    'enterprise'?: EnterpriseBase;
    /**
     * Status of the shield information barrier
     * @type {string}
     * @memberof ShieldInformationBarrier
     */
    'status'?: ShieldInformationBarrierStatusEnum;
    /**
     * ISO date time string when this shield information barrier object was created.
     * @type {string}
     * @memberof ShieldInformationBarrier
     */
    'created_at'?: string;
    /**
     * The user who created this shield information barrier.
     * @type {UserBase}
     * @memberof ShieldInformationBarrier
     */
    'created_by'?: UserBase;
    /**
     * ISO date time string when this shield information barrier was updated.
     * @type {string}
     * @memberof ShieldInformationBarrier
     */
    'updated_at'?: string;
    /**
     * The user that updated this shield information barrier.
     * @type {UserBase}
     * @memberof ShieldInformationBarrier
     */
    'updated_by'?: UserBase;
    /**
     * ISO date time string when this shield information barrier was enabled.
     * @type {string}
     * @memberof ShieldInformationBarrier
     */
    'enabled_at'?: string;
    /**
     * 
     * @type {ShieldInformationBarrierEnabledBy}
     * @memberof ShieldInformationBarrier
     */
    'enabled_by'?: ShieldInformationBarrierEnabledBy;
}

type ShieldInformationBarrierTypeEnum = 'shield_information_barrier'
type ShieldInformationBarrierStatusEnum = 'draft' | 'pending' | 'disabled' | 'enabled' | 'invalid'


