/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ShieldInformationBarrierReference } from './shield-information-barrier-reference';
import { ShieldInformationBarrierReportAllOf } from './shield-information-barrier-report-all-of';
import { ShieldInformationBarrierReportBase } from './shield-information-barrier-report-base';
import { ShieldInformationBarrierReportDetails } from './shield-information-barrier-report-details';
import { UserBase } from './user-base';

/**
 * @type ShieldInformationBarrierReport
 * A standard representation of a shield information barrier report object
 * @export
 */
export type ShieldInformationBarrierReport = ShieldInformationBarrierReportAllOf & ShieldInformationBarrierReportBase;

