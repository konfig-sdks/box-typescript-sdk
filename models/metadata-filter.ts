/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MetadataFilterFilters } from './metadata-filter-filters';

/**
 * A metadata template to filter the search results by.
 * @export
 * @interface MetadataFilter
 */
export interface MetadataFilter {
    /**
     * Specifies the scope of the template to filter search results by.  This will be `enterprise_{enterprise_id}` for templates defined for use in this enterprise, and `global` for general templates that are available to all enterprises using Box.
     * @type {string}
     * @memberof MetadataFilter
     */
    'scope'?: MetadataFilterScopeEnum;
    /**
     * The key of the template to filter search results by.  In many cases the template key is automatically derived of its display name, for example `Contract Template` would become `contractTemplate`. In some cases the creator of the template will have provided its own template key.  Please [list the templates for an enterprise][list], or get all instances on a [file][file] or [folder][folder] to inspect a template\'s key.  [list]: e://get-metadata-templates-enterprise [file]: e://get-files-id-metadata [folder]: e://get-folders-id-metadata
     * @type {string}
     * @memberof MetadataFilter
     */
    'templateKey'?: string;
    /**
     * 
     * @type {MetadataFilterFilters}
     * @memberof MetadataFilter
     */
    'filters'?: MetadataFilterFilters;
}

type MetadataFilterScopeEnum = 'global' | 'enterprise' | 'enterprise_{enterprise_id}'


