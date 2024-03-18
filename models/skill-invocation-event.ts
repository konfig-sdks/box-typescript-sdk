/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Event } from './event';
import { EventCreatedBy } from './event-created-by';
import { EventSource } from './event-source';

/**
 * 
 * @export
 * @interface SkillInvocationEvent
 */
export interface SkillInvocationEvent {
    /**
     * `event`
     * @type {string}
     * @memberof SkillInvocationEvent
     */
    'type'?: string;
    /**
     * When the event object was created
     * @type {string}
     * @memberof SkillInvocationEvent
     */
    'created_at'?: string;
    /**
     * When the event object was recorded in database
     * @type {string}
     * @memberof SkillInvocationEvent
     */
    'recorded_at'?: string;
    /**
     * The ID of the event object. You can use this to detect duplicate events
     * @type {string}
     * @memberof SkillInvocationEvent
     */
    'event_id'?: string;
    /**
     * 
     * @type {EventCreatedBy}
     * @memberof SkillInvocationEvent
     */
    'created_by'?: EventCreatedBy;
    /**
     * 
     * @type {string}
     * @memberof SkillInvocationEvent
     */
    'event_type'?: string;
    /**
     * The session of the user that performed the action. Not all events will populate this attribute.
     * @type {string}
     * @memberof SkillInvocationEvent
     */
    'session_id'?: string;
    /**
     * 
     * @type {EventSource}
     * @memberof SkillInvocationEvent
     */
    'source'?: EventSource;
    /**
     * This object provides additional information about the event if available.  This can include how a user performed an event as well as additional information to correlate an event to external KeySafe logs. Not all events have an `additional_details` object.  This object is only available in the Enterprise Events.
     * @type {object}
     * @memberof SkillInvocationEvent
     */
    'additional_details'?: object;
}

