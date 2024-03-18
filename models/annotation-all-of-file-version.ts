/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * File version mini object returned with annotation.
 * @export
 * @interface AnnotationAllOfFileVersion
 */
export interface AnnotationAllOfFileVersion {
    /**
     * A unique id of the resource
     * @type {string}
     * @memberof AnnotationAllOfFileVersion
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotationAllOfFileVersion
     */
    'type'?: AnnotationAllOfFileVersionTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof AnnotationAllOfFileVersion
     */
    'version_number'?: number;
}

type AnnotationAllOfFileVersionTypeEnum = 'file_version'


