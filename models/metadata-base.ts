/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The base representation of a metadata instance.
 * @export
 * @interface MetadataBase
 */
export interface MetadataBase {
    /**
     * The identifier of the item that this metadata instance has been attached to. This combines the `type` and the `id` of the parent in the form `{type}_{id}`.
     * @type {string}
     * @memberof MetadataBase
     */
    '$parent'?: string;
    /**
     * The name of the template
     * @type {string}
     * @memberof MetadataBase
     */
    '$template'?: string;
    /**
     * An ID for the scope in which this template has been applied. This will be `enterprise_{enterprise_id}` for templates defined for use in this enterprise, and `global` for general templates that are available to all enterprises using Box.
     * @type {string}
     * @memberof MetadataBase
     */
    '$scope'?: string;
    /**
     * The version of the metadata instance. This version starts at 0 and increases every time a user-defined property is modified.
     * @type {number}
     * @memberof MetadataBase
     */
    '$version'?: number;
}
