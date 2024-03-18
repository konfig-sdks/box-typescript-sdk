/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StatusSkillCardInvocation } from './status-skill-card-invocation';
import { StatusSkillCardSkill } from './status-skill-card-skill';
import { StatusSkillCardSkillCardTitle } from './status-skill-card-skill-card-title';
import { StatusSkillCardStatus } from './status-skill-card-status';

/**
 * A Box Skill metadata card that puts a status message in the metadata sidebar.
 * @export
 * @interface StatusSkillCard
 */
export interface StatusSkillCard {
    /**
     * The optional date and time this card was created at.
     * @type {string}
     * @memberof StatusSkillCard
     */
    'created_at'?: string;
    /**
     * `skill_card`
     * @type {string}
     * @memberof StatusSkillCard
     */
    'type': StatusSkillCardTypeEnum;
    /**
     * `status`
     * @type {string}
     * @memberof StatusSkillCard
     */
    'skill_card_type': StatusSkillCardSkillCardTypeEnum;
    /**
     * 
     * @type {StatusSkillCardSkillCardTitle}
     * @memberof StatusSkillCard
     */
    'skill_card_title'?: StatusSkillCardSkillCardTitle;
    /**
     * 
     * @type {StatusSkillCardStatus}
     * @memberof StatusSkillCard
     */
    'status': StatusSkillCardStatus;
    /**
     * 
     * @type {StatusSkillCardSkill}
     * @memberof StatusSkillCard
     */
    'skill': StatusSkillCardSkill;
    /**
     * 
     * @type {StatusSkillCardInvocation}
     * @memberof StatusSkillCard
     */
    'invocation': StatusSkillCardInvocation;
}

type StatusSkillCardTypeEnum = 'skill_card'
type StatusSkillCardSkillCardTypeEnum = 'status'


