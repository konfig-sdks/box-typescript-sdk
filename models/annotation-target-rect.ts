/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AnnotationTargetRectFill } from './annotation-target-rect-fill';
import { AnnotationTargetStroke } from './annotation-target-stroke';

/**
 * Annotation target size and coordinates.
 * @export
 * @interface AnnotationTargetRect
 */
export interface AnnotationTargetRect {
    /**
     * 
     * @type {AnnotationTargetRectFill}
     * @memberof AnnotationTargetRect
     */
    'fill'?: AnnotationTargetRectFill;
    /**
     * Height in pixels
     * @type {number}
     * @memberof AnnotationTargetRect
     */
    'height': number;
    /**
     * 
     * @type {AnnotationTargetStroke}
     * @memberof AnnotationTargetRect
     */
    'stroke'?: AnnotationTargetStroke;
    /**
     * 
     * @type {string}
     * @memberof AnnotationTargetRect
     */
    'type': AnnotationTargetRectTypeEnum;
    /**
     * Width in pixels
     * @type {number}
     * @memberof AnnotationTargetRect
     */
    'width': number;
    /**
     * Annotation target `coord` value.
     * @type {number}
     * @memberof AnnotationTargetRect
     */
    'x': number;
    /**
     * Annotation target `coord` value.
     * @type {number}
     * @memberof AnnotationTargetRect
     */
    'y': number;
}

type AnnotationTargetRectTypeEnum = 'rect'

