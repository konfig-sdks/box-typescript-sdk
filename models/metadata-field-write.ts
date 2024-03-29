/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MetadataOptionWrite2 } from './metadata-option-write2';

/**
 * A field within a metadata template. Fields can be a basic text, date, or number field, or a list of options.
 * @export
 * @interface MetadataFieldWrite
 */
export interface MetadataFieldWrite {
    /**
     * A description of the field. This is not shown to the user.
     * @type {string}
     * @memberof MetadataFieldWrite
     */
    'description'?: string;
    /**
     * The type of field. The basic fields are a `string` field for text, a `float` field for numbers, and a `date` fields to present the user with a date-time picker.  Additionally, metadata templates support an `enum` field for a basic list of items, and ` multiSelect` field for a similar list of items where the user can select more than one value.
     * @type {string}
     * @memberof MetadataFieldWrite
     */
    'type': MetadataFieldWriteTypeEnum;
    /**
     * A unique identifier for the field. The identifier must be unique within the template to which it belongs.
     * @type {string}
     * @memberof MetadataFieldWrite
     */
    'key': string;
    /**
     * The display name of the field as it is shown to the user in the web and mobile apps.
     * @type {string}
     * @memberof MetadataFieldWrite
     */
    'displayName': string;
    /**
     * Whether this field is hidden in the UI for the user and can only be set through the API instead.
     * @type {boolean}
     * @memberof MetadataFieldWrite
     */
    'hidden'?: boolean;
    /**
     * A list of options for this field. This is used in combination with the `enum` and `multiSelect` field types.
     * @type {Array<MetadataOptionWrite2>}
     * @memberof MetadataFieldWrite
     */
    'options'?: Array<MetadataOptionWrite2>;
}

type MetadataFieldWriteTypeEnum = 'string' | 'float' | 'date' | 'enum' | 'multiSelect'


