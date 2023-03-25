[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md) / [internal](../modules/zera_ts_mnemonic.internal.md) / Uint8ArrayConstructor

# Interface: Uint8ArrayConstructor

[@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md).[internal](../modules/zera_ts_mnemonic.internal.md).Uint8ArrayConstructor

## Table of contents

### Constructors

- [constructor](zera_ts_mnemonic.internal.Uint8ArrayConstructor.md#constructor)

### Properties

- [BYTES\_PER\_ELEMENT](zera_ts_mnemonic.internal.Uint8ArrayConstructor.md#bytes_per_element)
- [prototype](zera_ts_mnemonic.internal.Uint8ArrayConstructor.md#prototype)

### Methods

- [from](zera_ts_mnemonic.internal.Uint8ArrayConstructor.md#from)
- [of](zera_ts_mnemonic.internal.Uint8ArrayConstructor.md#of)

## Constructors

### constructor

• **new Uint8ArrayConstructor**(`length`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2371

• **new Uint8ArrayConstructor**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferLike`](../modules/zera_ts_mnemonic.internal.md#arraybufferlike) \| [`ArrayLike`](zera_ts_mnemonic.internal.ArrayLike.md)<`number`\> |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2372

• **new Uint8ArrayConstructor**(`buffer`, `byteOffset?`, `length?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`ArrayBufferLike`](../modules/zera_ts_mnemonic.internal.md#arraybufferlike) |
| `byteOffset?` | `number` |
| `length?` | `number` |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2373

• **new Uint8ArrayConstructor**(`elements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`Iterable`](zera_ts_mnemonic.internal.Iterable.md)<`number`\> |

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:286

• **new Uint8ArrayConstructor**()

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:24

## Properties

### BYTES\_PER\_ELEMENT

• `Readonly` **BYTES\_PER\_ELEMENT**: `number`

The size in bytes of each element in the array.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2378

___

### prototype

• `Readonly` **prototype**: [`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2370

## Methods

### from

▸ **from**(`arrayLike`): [`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

Creates an array from an array-like or iterable object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`ArrayLike`](zera_ts_mnemonic.internal.ArrayLike.md)<`number`\> | An array-like or iterable object to convert to an array. |

#### Returns

[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2390

▸ **from**<`T`\>(`arrayLike`, `mapfn`, `thisArg?`): [`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

Creates an array from an array-like or iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`ArrayLike`](zera_ts_mnemonic.internal.ArrayLike.md)<`T`\> | An array-like or iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `number` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2398

▸ **from**(`arrayLike`, `mapfn?`, `thisArg?`): [`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

Creates an array from an array-like or iterable object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`Iterable`](zera_ts_mnemonic.internal.Iterable.md)<`number`\> | An array-like or iterable object to convert to an array. |
| `mapfn?` | (`v`: `number`, `k`: `number`) => `number` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:294

___

### of

▸ **of**(`...items`): [`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

Returns a new array from a set of elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `number`[] | A set of elements to include in the new array object. |

#### Returns

[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2384
