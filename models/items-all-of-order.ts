/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The order in which a pagination is ordered
 * @export
 * @interface ItemsAllOfOrder
 */
export interface ItemsAllOfOrder {
    /**
     * The field to order by
     * @type {string}
     * @memberof ItemsAllOfOrder
     */
    'by'?: string;
    /**
     * The direction to order by, either ascending or descending
     * @type {string}
     * @memberof ItemsAllOfOrder
     */
    'direction'?: ItemsAllOfOrderDirectionEnum;
}

type ItemsAllOfOrderDirectionEnum = 'ASC' | 'DESC'


