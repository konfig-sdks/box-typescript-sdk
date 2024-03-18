/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A collection of items, including files and folders.  Currently, the only collection available is the `favorites` collection.  The contents of a collection can be explored in a similar way to which the contents of a folder is explored.
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * The unique identifier for this collection.
     * @type {string}
     * @memberof Collection
     */
    'id'?: string;
    /**
     * `collection`
     * @type {string}
     * @memberof Collection
     */
    'type'?: CollectionTypeEnum;
    /**
     * The name of the collection.
     * @type {string}
     * @memberof Collection
     */
    'name'?: CollectionNameEnum;
    /**
     * The type of the collection. This is used to determine the proper visual treatment for collections.
     * @type {string}
     * @memberof Collection
     */
    'collection_type'?: CollectionCollectionTypeEnum;
}

type CollectionTypeEnum = 'collection'
type CollectionNameEnum = 'Favorites'
type CollectionCollectionTypeEnum = 'favorites'


