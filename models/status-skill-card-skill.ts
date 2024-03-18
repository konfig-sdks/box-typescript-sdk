/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The service that applied this metadata.
 * @export
 * @interface StatusSkillCardSkill
 */
export interface StatusSkillCardSkill {
    /**
     * `service`
     * @type {string}
     * @memberof StatusSkillCardSkill
     */
    'type': StatusSkillCardSkillTypeEnum;
    /**
     * A custom identifier that represent the service that applied this metadata.
     * @type {string}
     * @memberof StatusSkillCardSkill
     */
    'id': string;
}

type StatusSkillCardSkillTypeEnum = 'service'

