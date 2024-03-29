/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DevicePinnerOwnedBy } from './device-pinner-owned-by';

/**
 * Device pins allow enterprises to control what devices can use native Box applications.
 * @export
 * @interface DevicePinner
 */
export interface DevicePinner {
    /**
     * The unique identifier for this device pin.
     * @type {string}
     * @memberof DevicePinner
     */
    'id'?: string;
    /**
     * `device_pinner`
     * @type {string}
     * @memberof DevicePinner
     */
    'type'?: DevicePinnerTypeEnum;
    /**
     * 
     * @type {DevicePinnerOwnedBy}
     * @memberof DevicePinner
     */
    'owned_by'?: DevicePinnerOwnedBy;
    /**
     * The type of device being pinned
     * @type {string}
     * @memberof DevicePinner
     */
    'product_name'?: string;
}

type DevicePinnerTypeEnum = 'device_pinner'


