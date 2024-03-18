/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PostGroupsRequest
 */
export interface PostGroupsRequest {
    /**
     * A human readable description of the group.
     * @type {string}
     * @memberof PostGroupsRequest
     */
    'description'?: string;
    /**
     * The name of the new group to be created. This name must be unique within the enterprise.
     * @type {string}
     * @memberof PostGroupsRequest
     */
    'name': string;
    /**
     * Keeps track of which external source this group is coming, for example `Active Directory`, or `Okta`.  Setting this will also prevent Box admins from editing the group name and its members directly via the Box web application.  This is desirable for one-way syncing of groups.
     * @type {string}
     * @memberof PostGroupsRequest
     */
    'provenance'?: string;
    /**
     * An arbitrary identifier that can be used by external group sync tools to link this Box Group to an external group.  Example values of this field could be an **Active Directory Object ID** or a **Google Group ID**.  We recommend you use of this field in order to avoid issues when group names are updated in either Box or external systems.
     * @type {string}
     * @memberof PostGroupsRequest
     */
    'external_sync_identifier'?: string;
    /**
     * Specifies who can invite the group to collaborate on folders.  When set to `admins_only` the enterprise admin, co-admins, and the group\'s admin can invite the group.  When set to `admins_and_members` all the admins listed above and group members can invite the group.  When set to `all_managed_users` all managed users in the enterprise can invite the group.
     * @type {string}
     * @memberof PostGroupsRequest
     */
    'invitability_level'?: PostGroupsRequestInvitabilityLevelEnum;
    /**
     * Specifies who can see the members of the group.  * `admins_only` - the enterprise admin, co-admins, group\'s   group admin * `admins_and_members` - all admins and group members * `all_managed_users` - all managed users in the   enterprise
     * @type {string}
     * @memberof PostGroupsRequest
     */
    'member_viewability_level'?: PostGroupsRequestMemberViewabilityLevelEnum;
}

type PostGroupsRequestInvitabilityLevelEnum = 'admins_only' | 'admins_and_members' | 'all_managed_users'
type PostGroupsRequestMemberViewabilityLevelEnum = 'admins_only' | 'admins_and_members' | 'all_managed_users'


