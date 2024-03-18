/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A representation of a Box enterprise
 * @export
 * @interface Enterprise2
 */
export interface Enterprise2 {
    /**
     * The unique identifier for this enterprise.
     * @type {string}
     * @memberof Enterprise2
     */
    'id'?: string;
    /**
     * `enterprise`
     * @type {string}
     * @memberof Enterprise2
     */
    'type'?: Enterprise2TypeEnum;
    /**
     * The name of the enterprise
     * @type {string}
     * @memberof Enterprise2
     */
    'name'?: string;
}

type Enterprise2TypeEnum = 'enterprise'


