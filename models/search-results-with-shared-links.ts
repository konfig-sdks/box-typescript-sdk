/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SearchResultWithSharedLink } from './search-result-with-shared-link';
import { SearchResultsWithSharedLinksAllOf } from './search-results-with-shared-links-all-of';
import { SearchResultsWithSharedLinksAllOf1 } from './search-results-with-shared-links-all-of1';

/**
 * @type SearchResultsWithSharedLinks
 * A list of files, folders and web links that matched the search query, including the additional information about any shared links through which the item has been shared with the user.  This response format is only returned when the `include_recent_shared_links` query parameter has been set to `true`.
 * @export
 */
export type SearchResultsWithSharedLinks = SearchResultsWithSharedLinksAllOf & SearchResultsWithSharedLinksAllOf1;


