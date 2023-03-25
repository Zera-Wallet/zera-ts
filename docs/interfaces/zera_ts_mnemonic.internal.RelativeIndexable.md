[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md) / [internal](../modules/zera_ts_mnemonic.internal.md) / RelativeIndexable

# Interface: RelativeIndexable<T\>

[@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md).[internal](../modules/zera_ts_mnemonic.internal.md).RelativeIndexable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`RelativeIndexable`**

  ↳ [`Uint8Array`](zera_ts_mnemonic.internal.Uint8Array.md)

## Table of contents

### Methods

- [at](zera_ts_mnemonic.internal.RelativeIndexable.md#at)

## Methods

### at

▸ **at**(`index`): `undefined` \| `T`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `T`

#### Defined in

node_modules/.pnpm/@types+node@18.15.9/node_modules/@types/node/globals.d.ts:91
