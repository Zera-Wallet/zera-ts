[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md) / [internal](../modules/zera_ts_mnemonic.internal.md) / SharedArrayBuffer

# Interface: SharedArrayBuffer

[@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md).[internal](../modules/zera_ts_mnemonic.internal.md).SharedArrayBuffer

## Table of contents

### Properties

- [[species]](zera_ts_mnemonic.internal.SharedArrayBuffer.md#[species])
- [[toStringTag]](zera_ts_mnemonic.internal.SharedArrayBuffer.md#[tostringtag])
- [byteLength](zera_ts_mnemonic.internal.SharedArrayBuffer.md#bytelength)

### Methods

- [slice](zera_ts_mnemonic.internal.SharedArrayBuffer.md#slice)

## Properties

### [species]

• `Readonly` **[species]**: [`SharedArrayBuffer`](../modules/zera_ts_mnemonic.internal.md#sharedarraybuffer)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:32

___

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"SharedArrayBuffer"``

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:33

___

### byteLength

• `Readonly` **byteLength**: `number`

Read-only. The length of the ArrayBuffer (in bytes).

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:26

## Methods

### slice

▸ **slice**(`begin`, `end?`): [`SharedArrayBuffer`](../modules/zera_ts_mnemonic.internal.md#sharedarraybuffer)

Returns a section of an SharedArrayBuffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end?` | `number` |

#### Returns

[`SharedArrayBuffer`](../modules/zera_ts_mnemonic.internal.md#sharedarraybuffer)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:31
