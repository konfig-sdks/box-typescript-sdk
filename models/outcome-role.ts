/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RoleVariable } from './role-variable';

/**
 * 
 * @export
 * @interface OutcomeRole
 */
export interface OutcomeRole {
    /**
     * Role object type. 
     * @type {string}
     * @memberof OutcomeRole
     */
    'type': OutcomeRoleTypeEnum;
    /**
     * The variable type used by the object. 
     * @type {string}
     * @memberof OutcomeRole
     */
    'variable_type': OutcomeRoleVariableTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof OutcomeRole
     */
    'variable_value': string;
}

type OutcomeRoleTypeEnum = 'variable'
type OutcomeRoleVariableTypeEnum = 'collaborator_role'


