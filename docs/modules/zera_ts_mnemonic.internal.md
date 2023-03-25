[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/mnemonic](zera_ts_mnemonic.md) / internal

# Namespace: internal

[@zera-ts/mnemonic](zera_ts_mnemonic.md).internal

## Table of contents

### Interfaces

- [ArrayBuffer](../interfaces/zera_ts_mnemonic.internal.ArrayBuffer.md)
- [ArrayBufferConstructor](../interfaces/zera_ts_mnemonic.internal.ArrayBufferConstructor.md)
- [ArrayBufferTypes](../interfaces/zera_ts_mnemonic.internal.ArrayBufferTypes.md)
- [ArrayBufferView](../interfaces/zera_ts_mnemonic.internal.ArrayBufferView.md)
- [ArrayLike](../interfaces/zera_ts_mnemonic.internal.ArrayLike.md)
- [Iterable](../interfaces/zera_ts_mnemonic.internal.Iterable.md)
- [IterableIterator](../interfaces/zera_ts_mnemonic.internal.IterableIterator.md)
- [Iterator](../interfaces/zera_ts_mnemonic.internal.Iterator.md)
- [IteratorReturnResult](../interfaces/zera_ts_mnemonic.internal.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/zera_ts_mnemonic.internal.IteratorYieldResult.md)
- [Promise](../interfaces/zera_ts_mnemonic.internal.Promise.md)
- [PromiseConstructor](../interfaces/zera_ts_mnemonic.internal.PromiseConstructor.md)
- [PromiseFulfilledResult](../interfaces/zera_ts_mnemonic.internal.PromiseFulfilledResult.md)
- [PromiseLike](../interfaces/zera_ts_mnemonic.internal.PromiseLike.md)
- [PromiseRejectedResult](../interfaces/zera_ts_mnemonic.internal.PromiseRejectedResult.md)
- [RelativeIndexable](../interfaces/zera_ts_mnemonic.internal.RelativeIndexable.md)
- [SharedArrayBuffer](../interfaces/zera_ts_mnemonic.internal.SharedArrayBuffer.md)
- [SharedArrayBufferConstructor](../interfaces/zera_ts_mnemonic.internal.SharedArrayBufferConstructor.md)
- [Uint8Array](../interfaces/zera_ts_mnemonic.internal.Uint8Array.md)
- [Uint8ArrayConstructor](../interfaces/zera_ts_mnemonic.internal.Uint8ArrayConstructor.md)

### Type Aliases

- [ArrayBufferLike](zera_ts_mnemonic.internal.md#arraybufferlike)
- [Awaited](zera_ts_mnemonic.internal.md#awaited)
- [IteratorResult](zera_ts_mnemonic.internal.md#iteratorresult)
- [PromiseSettledResult](zera_ts_mnemonic.internal.md#promisesettledresult)

### Variables

- [ArrayBuffer](zera_ts_mnemonic.internal.md#arraybuffer)
- [Promise](zera_ts_mnemonic.internal.md#promise)
- [SharedArrayBuffer](zera_ts_mnemonic.internal.md#sharedarraybuffer)
- [Uint8Array](zera_ts_mnemonic.internal.md#uint8array)

## Type Aliases

### ArrayBufferLike

Ƭ **ArrayBufferLike**: [`ArrayBufferTypes`](../interfaces/zera_ts_mnemonic.internal.ArrayBufferTypes.md)[keyof [`ArrayBufferTypes`](../interfaces/zera_ts_mnemonic.internal.ArrayBufferTypes.md)]

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1679

___

### Awaited

Ƭ **Awaited**<`T`\>: `T` extends ``null`` \| `undefined` ? `T` : `T` extends `object` & { `then`: (`onfulfilled`: `F`, ...`args`: `_`) => `any`  } ? `F` extends (`value`: infer V, ...`args`: infer \_) => `any` ? [`Awaited`](zera_ts_mnemonic.internal.md#awaited)<`V`\> : `never` : `T`

Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1542

___

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/zera_ts_mnemonic.internal.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/zera_ts_mnemonic.internal.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:39

___

### PromiseSettledResult

Ƭ **PromiseSettledResult**<`T`\>: [`PromiseFulfilledResult`](../interfaces/zera_ts_mnemonic.internal.PromiseFulfilledResult.md)<`T`\> \| [`PromiseRejectedResult`](../interfaces/zera_ts_mnemonic.internal.PromiseRejectedResult.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2020.promise.d.ts:29

## Variables

### ArrayBuffer

• **ArrayBuffer**: [`ArrayBufferConstructor`](../interfaces/zera_ts_mnemonic.internal.ArrayBufferConstructor.md)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1661

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1686

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:271

___

### Promise

• **Promise**: [`PromiseConstructor`](../interfaces/zera_ts_mnemonic.internal.PromiseConstructor.md)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1522

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:216

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:81

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:175

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2018.promise.d.ts:22

___

### SharedArrayBuffer

• **SharedArrayBuffer**: [`SharedArrayBufferConstructor`](../interfaces/zera_ts_mnemonic.internal.SharedArrayBufferConstructor.md)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:22

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:40

___

### Uint8Array

• **Uint8Array**: [`Uint8ArrayConstructor`](../interfaces/zera_ts_mnemonic.internal.Uint8ArrayConstructor.md)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2125

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2401

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:269

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:283

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2016.array.include.d.ts:46

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2022.array.d.ts:43

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2023.array.d.ts:94

node_modules/.pnpm/@types+node@18.15.9/node_modules/@types/node/globals.d.ts:97
