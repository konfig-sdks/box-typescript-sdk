/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Match a `date` metadata field to a range of values.
 * @export
 * @interface MetadataFieldFilterDateRange
 */
export interface MetadataFieldFilterDateRange {
    /**
     * Specifies the (inclusive) upper bound for the metadata field value. The value of a field must be lower than (`lt`) or equal to this value for the search query to match this template.
     * @type {string}
     * @memberof MetadataFieldFilterDateRange
     */
    'lt'?: string;
    /**
     * Specifies the (inclusive) lower bound for the metadata field value. The value of a field must be greater than (`gt`) or equal to this value for the search query to match this template.
     * @type {string}
     * @memberof MetadataFieldFilterDateRange
     */
    'gt'?: string;
}

