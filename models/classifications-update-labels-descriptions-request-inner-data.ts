/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClassificationsUpdateLabelsDescriptionsRequestInnerDataStaticConfig } from './classifications-update-labels-descriptions-request-inner-data-static-config';

/**
 * The details of the updated classification.
 * @export
 * @interface ClassificationsUpdateLabelsDescriptionsRequestInnerData
 */
export interface ClassificationsUpdateLabelsDescriptionsRequestInnerData {
    /**
     * A new label for the classification, as it will be shown in the web and mobile interfaces.
     * @type {string}
     * @memberof ClassificationsUpdateLabelsDescriptionsRequestInnerData
     */
    'key': string;
    /**
     * 
     * @type {ClassificationsUpdateLabelsDescriptionsRequestInnerDataStaticConfig}
     * @memberof ClassificationsUpdateLabelsDescriptionsRequestInnerData
     */
    'staticConfig'?: ClassificationsUpdateLabelsDescriptionsRequestInnerDataStaticConfig;
}
