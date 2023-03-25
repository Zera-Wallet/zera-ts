[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/wordlists](../modules/zera_ts_wordlists.md) / [internal](../modules/zera_ts_wordlists.internal.md) / Map

# Interface: Map<K, V\>

[@zera-ts/wordlists](../modules/zera_ts_wordlists.md).[internal](../modules/zera_ts_wordlists.internal.md).Map

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Properties

- [[toStringTag]](zera_ts_wordlists.internal.Map.md#[tostringtag])
- [size](zera_ts_wordlists.internal.Map.md#size)

### Methods

- [[iterator]](zera_ts_wordlists.internal.Map.md#[iterator])
- [clear](zera_ts_wordlists.internal.Map.md#clear)
- [delete](zera_ts_wordlists.internal.Map.md#delete)
- [entries](zera_ts_wordlists.internal.Map.md#entries)
- [forEach](zera_ts_wordlists.internal.Map.md#foreach)
- [get](zera_ts_wordlists.internal.Map.md#get)
- [has](zera_ts_wordlists.internal.Map.md#has)
- [keys](zera_ts_wordlists.internal.Map.md#keys)
- [set](zera_ts_wordlists.internal.Map.md#set)
- [values](zera_ts_wordlists.internal.Map.md#values)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

___

### size

• `Readonly` **size**: `number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:46

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

[`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<[`K`, `V`]\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:119

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:21

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### entries

▸ **entries**(): [`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

[`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<[`K`, `V`]\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:124

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: [`Map`](../modules/zera_ts_wordlists.internal.md#map)<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:29

___

### get

▸ **get**(`key`): `undefined` \| `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:34

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:38

___

### keys

▸ **keys**(): [`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<`K`\>

Returns an iterable of keys in the map

#### Returns

[`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<`K`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:129

___

### set

▸ **set**(`key`, `value`): [`Map`](../modules/zera_ts_wordlists.internal.md#map)<`K`, `V`\>

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`Map`](../modules/zera_ts_wordlists.internal.md#map)<`K`, `V`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:42

___

### values

▸ **values**(): [`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<`V`\>

Returns an iterable of values in the map

#### Returns

[`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<`V`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:134
