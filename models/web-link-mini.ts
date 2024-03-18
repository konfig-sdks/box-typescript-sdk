/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebLinkBase } from './web-link-base';
import { WebLinkMiniAllOf } from './web-link-mini-all-of';

/**
 * @type WebLinkMini
 * Web links are objects that point to URLs. These objects are also known as bookmarks within the Box web application.  Web link objects are treated similarly to file objects, they will also support most actions that apply to regular files.
 * @export
 */
export type WebLinkMini = WebLinkBase & WebLinkMiniAllOf;


