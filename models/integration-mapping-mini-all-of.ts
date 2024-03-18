/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface IntegrationMappingMiniAllOf
 */
export interface IntegrationMappingMiniAllOf {
    /**
     * ID of the mapped partner item
     * @type {string}
     * @memberof IntegrationMappingMiniAllOf
     */
    'partner_item_id'?: string;
    /**
     * Domain-specific type of the mapped partner item
     * @type {string}
     * @memberof IntegrationMappingMiniAllOf
     */
    'partner_item_type'?: IntegrationMappingMiniAllOfPartnerItemTypeEnum;
    /**
     * ID of the Box item mapped to the object referenced in `partner_item_id`
     * @type {string}
     * @memberof IntegrationMappingMiniAllOf
     */
    'box_item_id'?: string;
    /**
     * Type of the Box object referenced in `box_item_id`
     * @type {string}
     * @memberof IntegrationMappingMiniAllOf
     */
    'box_item_type'?: IntegrationMappingMiniAllOfBoxItemTypeEnum;
}

type IntegrationMappingMiniAllOfPartnerItemTypeEnum = 'channel'
type IntegrationMappingMiniAllOfBoxItemTypeEnum = 'folder'

