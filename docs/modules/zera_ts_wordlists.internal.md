[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/wordlists](zera_ts_wordlists.md) / internal

# Namespace: internal

[@zera-ts/wordlists](zera_ts_wordlists.md).internal

## Table of contents

### Interfaces

- [Iterable](../interfaces/zera_ts_wordlists.internal.Iterable.md)
- [IterableIterator](../interfaces/zera_ts_wordlists.internal.IterableIterator.md)
- [Iterator](../interfaces/zera_ts_wordlists.internal.Iterator.md)
- [IteratorReturnResult](../interfaces/zera_ts_wordlists.internal.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/zera_ts_wordlists.internal.IteratorYieldResult.md)
- [Map](../interfaces/zera_ts_wordlists.internal.Map.md)
- [MapConstructor](../interfaces/zera_ts_wordlists.internal.MapConstructor.md)
- [Promise](../interfaces/zera_ts_wordlists.internal.Promise.md)
- [PromiseConstructor](../interfaces/zera_ts_wordlists.internal.PromiseConstructor.md)
- [PromiseFulfilledResult](../interfaces/zera_ts_wordlists.internal.PromiseFulfilledResult.md)
- [PromiseLike](../interfaces/zera_ts_wordlists.internal.PromiseLike.md)
- [PromiseRejectedResult](../interfaces/zera_ts_wordlists.internal.PromiseRejectedResult.md)

### Type Aliases

- [Awaited](zera_ts_wordlists.internal.md#awaited)
- [IteratorResult](zera_ts_wordlists.internal.md#iteratorresult)
- [PromiseSettledResult](zera_ts_wordlists.internal.md#promisesettledresult)

### Variables

- [Map](zera_ts_wordlists.internal.md#map)
- [Promise](zera_ts_wordlists.internal.md#promise)

## Type Aliases

### Awaited

Ƭ **Awaited**<`T`\>: `T` extends ``null`` \| `undefined` ? `T` : `T` extends `object` & { `then`: (`onfulfilled`: `F`, ...`args`: `_`) => `any`  } ? `F` extends (`value`: infer V, ...`args`: infer \_) => `any` ? [`Awaited`](zera_ts_wordlists.internal.md#awaited)<`V`\> : `never` : `T`

Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1542

___

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/zera_ts_wordlists.internal.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/zera_ts_wordlists.internal.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:39

___

### PromiseSettledResult

Ƭ **PromiseSettledResult**<`T`\>: [`PromiseFulfilledResult`](../interfaces/zera_ts_wordlists.internal.PromiseFulfilledResult.md)<`T`\> \| [`PromiseRejectedResult`](../interfaces/zera_ts_wordlists.internal.PromiseRejectedResult.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2020.promise.d.ts:29

## Variables

### Map

• **Map**: [`MapConstructor`](../interfaces/zera_ts_wordlists.internal.MapConstructor.md)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:19

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:54

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:117

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:136

___

### Promise

• **Promise**: [`PromiseConstructor`](../interfaces/zera_ts_wordlists.internal.PromiseConstructor.md)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1522

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:216

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:81

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:175

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2018.promise.d.ts:22
