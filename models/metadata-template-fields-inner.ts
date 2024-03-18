/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MetadataFieldRead } from './metadata-field-read';
import { MetadataTemplateFieldsInnerAllOf } from './metadata-template-fields-inner-all-of';
import { MetadataTemplateFieldsInnerAllOfOptionsInner } from './metadata-template-fields-inner-all-of-options-inner';

/**
 * @type MetadataTemplateFieldsInner
 * A field within a metadata template. Fields can be a basic text, date, or number field, or a list of options.
 * @export
 */
export type MetadataTemplateFieldsInner = MetadataFieldRead & MetadataTemplateFieldsInnerAllOf;

