[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md) / [internal](../modules/zera_ts_mnemonic.internal.md) / PromiseConstructor

# Interface: PromiseConstructor

[@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md).[internal](../modules/zera_ts_mnemonic.internal.md).PromiseConstructor

Represents the completion of an asynchronous operation

## Table of contents

### Constructors

- [constructor](zera_ts_mnemonic.internal.PromiseConstructor.md#constructor)

### Properties

- [[species]](zera_ts_mnemonic.internal.PromiseConstructor.md#[species])
- [prototype](zera_ts_mnemonic.internal.PromiseConstructor.md#prototype)

### Methods

- [all](zera_ts_mnemonic.internal.PromiseConstructor.md#all)
- [allSettled](zera_ts_mnemonic.internal.PromiseConstructor.md#allsettled)
- [any](zera_ts_mnemonic.internal.PromiseConstructor.md#any)
- [race](zera_ts_mnemonic.internal.PromiseConstructor.md#race)
- [reject](zera_ts_mnemonic.internal.PromiseConstructor.md#reject)
- [resolve](zera_ts_mnemonic.internal.PromiseConstructor.md#resolve)

## Constructors

### constructor

• **new PromiseConstructor**<`T`\>(`executor`)

Creates a new Promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executor` | (`resolve`: (`value`: `T` \| [`PromiseLike`](zera_ts_mnemonic.internal.PromiseLike.md)<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` | A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error. |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:31

## Properties

### [species]

• `Readonly` **[species]**: [`PromiseConstructor`](zera_ts_mnemonic.internal.PromiseConstructor.md)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:180

___

### prototype

• `Readonly` **prototype**: [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<`any`\>

A reference to the prototype.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:23

## Methods

### all

▸ **all**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](zera_ts_mnemonic.internal.Iterable.md)<`T` \| [`PromiseLike`](zera_ts_mnemonic.internal.PromiseLike.md)<`T`\>\> | An iterable of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>[]\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:225

▸ **all**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:39

___

### allSettled

▸ **allSettled**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2020.promise.d.ts:38

▸ **allSettled**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`PromiseSettledResult`](../modules/zera_ts_mnemonic.internal.md#promisesettledresult)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>[]\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](zera_ts_mnemonic.internal.Iterable.md)<`T` \| [`PromiseLike`](zera_ts_mnemonic.internal.PromiseLike.md)<`T`\>\> | An array of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`PromiseSettledResult`](../modules/zera_ts_mnemonic.internal.md#promisesettledresult)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>[]\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2020.promise.d.ts:46

___

### any

▸ **any**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`[`number`]\>\>

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array or iterable of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`[`number`]\>\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2021.promise.d.ts:40

▸ **any**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](zera_ts_mnemonic.internal.Iterable.md)<`T` \| [`PromiseLike`](zera_ts_mnemonic.internal.PromiseLike.md)<`T`\>\> | An array or iterable of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2021.promise.d.ts:47

___

### race

▸ **race**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`Iterable`](zera_ts_mnemonic.internal.Iterable.md)<`T` \| [`PromiseLike`](zera_ts_mnemonic.internal.PromiseLike.md)<`T`\>\> | An iterable of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:233

▸ **race**<`T`\>(`values`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`[`number`]\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`[`number`]\>\>

A new Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:50

___

### reject

▸ **reject**<`T`\>(`reason?`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<`T`\>

Creates a new rejected promise for the provided reason.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason?` | `any` | The reason the promise was rejected. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<`T`\>

A new rejected Promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:60

___

### resolve

▸ **resolve**(): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<`void`\>

Creates a new resolved promise.

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<`void`\>

A resolved promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:66

▸ **resolve**<`T`\>(`value`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

Creates a new resolved promise for the provided value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | A promise. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

A promise whose internal state matches the provided promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:72

▸ **resolve**<`T`\>(`value`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

Creates a new resolved promise for the provided value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` \| [`PromiseLike`](zera_ts_mnemonic.internal.PromiseLike.md)<`T`\> | A promise. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Awaited`](../modules/zera_ts_mnemonic.internal.md#awaited)<`T`\>\>

A promise whose internal state matches the provided promise.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:78
