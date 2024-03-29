/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An instance of the classification metadata template, containing the classification applied to the file or folder.  To get more details about the classification applied to an item, request the classification metadata template.
 * @export
 * @interface Classification
 */
export interface Classification {
    /**
     * The name of the classification applied to the item.
     * @type {string}
     * @memberof Classification
     */
    'Box__Security__Classification__Key'?: string;
    /**
     * The identifier of the item that this metadata instance has been attached to. This combines the `type` and the `id` of the parent in the form `{type}_{id}`.
     * @type {string}
     * @memberof Classification
     */
    '$parent'?: string;
    /**
     * `securityClassification-6VMVochwUWo`
     * @type {string}
     * @memberof Classification
     */
    '$template'?: ClassificationTemplateEnum;
    /**
     * The scope of the enterprise that this classification has been applied for.  This will be in the format `enterprise_{enterprise_id}`.
     * @type {string}
     * @memberof Classification
     */
    '$scope'?: string;
    /**
     * The version of the metadata instance. This version starts at 0 and increases every time a classification is updated.
     * @type {number}
     * @memberof Classification
     */
    '$version'?: number;
    /**
     * The unique ID of this classification instance. This will be include the name of the classification template and a unique ID.
     * @type {string}
     * @memberof Classification
     */
    '$type'?: string;
    /**
     * The version of the metadata template. This version starts at 0 and increases every time the template is updated. This is mostly for internal use.
     * @type {number}
     * @memberof Classification
     */
    '$typeVersion'?: number;
    /**
     * Whether an end user can change the classification.
     * @type {boolean}
     * @memberof Classification
     */
    '$canEdit'?: boolean;
}

type ClassificationTemplateEnum = 'securityClassification-6VMVochwUWo'


