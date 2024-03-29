/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MetadataCascadePolicyOwnerEnterprise } from './metadata-cascade-policy-owner-enterprise';
import { MetadataCascadePolicyParent } from './metadata-cascade-policy-parent';

/**
 * A metadata cascade policy automatically applies a metadata template instance to all the files and folders within the targeted folder.
 * @export
 * @interface MetadataCascadePolicy
 */
export interface MetadataCascadePolicy {
    /**
     * The ID of the metadata cascade policy object
     * @type {string}
     * @memberof MetadataCascadePolicy
     */
    'id': string;
    /**
     * `metadata_cascade_policy`
     * @type {string}
     * @memberof MetadataCascadePolicy
     */
    'type': MetadataCascadePolicyTypeEnum;
    /**
     * 
     * @type {MetadataCascadePolicyOwnerEnterprise}
     * @memberof MetadataCascadePolicy
     */
    'owner_enterprise'?: MetadataCascadePolicyOwnerEnterprise;
    /**
     * 
     * @type {MetadataCascadePolicyParent}
     * @memberof MetadataCascadePolicy
     */
    'parent'?: MetadataCascadePolicyParent;
    /**
     * The scope of the metadata cascade policy can either be `global` or `enterprise_*`. The `global` scope is used for policies that are available to any Box enterprise. The `enterprise_*` scope represents policies that have been created within a specific enterprise, where `*` will be the ID of that enterprise.
     * @type {string}
     * @memberof MetadataCascadePolicy
     */
    'scope'?: string;
    /**
     * The key of the template that is cascaded down to the folder\'s children.  In many cases the template key is automatically derived of its display name, for example `Contract Template` would become `contractTemplate`. In some cases the creator of the template will have provided its own template key.  Please [list the templates for an enterprise][list], or get all instances on a [file][file] or [folder][folder] to inspect a template\'s key.  [list]: e://get-metadata-templates-enterprise [file]: e://get-files-id-metadata [folder]: e://get-folders-id-metadata
     * @type {string}
     * @memberof MetadataCascadePolicy
     */
    'templateKey'?: string;
}

type MetadataCascadePolicyTypeEnum = 'metadata_cascade_policy'


