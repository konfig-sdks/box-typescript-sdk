/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MetadataQueryIndexFieldsInner } from './metadata-query-index-fields-inner';

/**
 * A metadata query index
 * @export
 * @interface MetadataQueryIndex
 */
export interface MetadataQueryIndex {
    /**
     * The ID of the metadata query index.
     * @type {string}
     * @memberof MetadataQueryIndex
     */
    'id'?: string;
    /**
     * Value is always `metadata_query_index`
     * @type {string}
     * @memberof MetadataQueryIndex
     */
    'type': string;
    /**
     * The status of the metadata query index
     * @type {string}
     * @memberof MetadataQueryIndex
     */
    'status': MetadataQueryIndexStatusEnum;
    /**
     * A list of template fields which make up the index.
     * @type {Array<MetadataQueryIndexFieldsInner>}
     * @memberof MetadataQueryIndex
     */
    'fields'?: Array<MetadataQueryIndexFieldsInner>;
}

type MetadataQueryIndexStatusEnum = 'building' | 'active' | 'disabled'


