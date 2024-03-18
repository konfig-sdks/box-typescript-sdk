/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillInvocationSourceAllOf } from './skill-invocation-source-all-of';

/**
 * A page of files and folders that matched the metadata query.
 * @export
 * @interface MetadataQueryResults
 */
export interface MetadataQueryResults {
    /**
     * The mini representation of the files and folders that match the search terms.  By default, this endpoint returns only the most basic info about the items. To get additional fields for each item, including any of the metadata, use the `fields` attribute in the query.
     * @type {Array<SkillInvocationSourceAllOf>}
     * @memberof MetadataQueryResults
     */
    'entries'?: Array<SkillInvocationSourceAllOf>;
    /**
     * The limit that was used for this search. This will be the same as the `limit` query parameter unless that value exceeded the maximum value allowed.
     * @type {number}
     * @memberof MetadataQueryResults
     */
    'limit'?: number;
    /**
     * The marker for the start of the next page of results.
     * @type {string}
     * @memberof MetadataQueryResults
     */
    'next_marker'?: string;
}

