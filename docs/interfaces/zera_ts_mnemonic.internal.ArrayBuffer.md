[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md) / [internal](../modules/zera_ts_mnemonic.internal.md) / ArrayBuffer

# Interface: ArrayBuffer

[@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md).[internal](../modules/zera_ts_mnemonic.internal.md).ArrayBuffer

Represents a raw buffer of binary data, which is used to store data for the
different typed arrays. ArrayBuffers cannot be read from or written to directly,
but can be passed to a typed array or DataView Object to interpret the raw
buffer as needed.

## Table of contents

### Properties

- [[toStringTag]](zera_ts_mnemonic.internal.ArrayBuffer.md#[tostringtag])
- [byteLength](zera_ts_mnemonic.internal.ArrayBuffer.md#bytelength)

### Methods

- [slice](zera_ts_mnemonic.internal.ArrayBuffer.md#slice)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:272

___

### byteLength

• `Readonly` **byteLength**: `number`

Read-only. The length of the ArrayBuffer (in bytes).

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1665

## Methods

### slice

▸ **slice**(`begin`, `end?`): [`ArrayBuffer`](../modules/zera_ts_mnemonic.internal.md#arraybuffer)

Returns a section of an ArrayBuffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end?` | `number` |

#### Returns

[`ArrayBuffer`](../modules/zera_ts_mnemonic.internal.md#arraybuffer)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1670
