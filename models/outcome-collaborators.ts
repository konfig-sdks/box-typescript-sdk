/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollaboratorVariable } from './collaborator-variable';
import { CollaboratorVariableVariableValueInner } from './collaborator-variable-variable-value-inner';

/**
 * 
 * @export
 * @interface OutcomeCollaborators
 */
export interface OutcomeCollaborators {
    /**
     * Collaborator object type. 
     * @type {string}
     * @memberof OutcomeCollaborators
     */
    'type': OutcomeCollaboratorsTypeEnum;
    /**
     * Variable type  for the Collaborator object. 
     * @type {string}
     * @memberof OutcomeCollaborators
     */
    'variable_type': OutcomeCollaboratorsVariableTypeEnum;
    /**
     * A list of user IDs.
     * @type {Array<CollaboratorVariableVariableValueInner>}
     * @memberof OutcomeCollaborators
     */
    'variable_value': Array<CollaboratorVariableVariableValueInner>;
}

type OutcomeCollaboratorsTypeEnum = 'variable'
type OutcomeCollaboratorsVariableTypeEnum = 'user_list'


