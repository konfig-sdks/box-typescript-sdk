/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Comment } from './comment';
import { CommentFullAllOf } from './comment-full-all-of';
import { UserMini } from './user-mini';

/**
 * @type CommentFull
 * Comments are messages created on files. Comments can be made independently or created as responses to other comments
 * @export
 */
export type CommentFull = Comment & CommentFullAllOf;


