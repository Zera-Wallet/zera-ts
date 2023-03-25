[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md) / default

# Class: default

[@zera-ts/mnemonic](../modules/zera_ts_mnemonic.md).default

A class representing a BIP39 mnemonic for generating cryptographic seeds.

## Table of contents

### Constructors

- [constructor](zera_ts_mnemonic.default.md#constructor)

### Properties

- [language](zera_ts_mnemonic.default.md#language)
- [mnemonic](zera_ts_mnemonic.default.md#mnemonic)

### Methods

- [getWords](zera_ts_mnemonic.default.md#getwords)
- [isValid](zera_ts_mnemonic.default.md#isvalid)
- [toEntropy](zera_ts_mnemonic.default.md#toentropy)
- [toSeed](zera_ts_mnemonic.default.md#toseed)
- [toString](zera_ts_mnemonic.default.md#tostring)
- [fromEntropy](zera_ts_mnemonic.default.md#fromentropy)
- [fromPhrase](zera_ts_mnemonic.default.md#fromphrase)
- [generate](zera_ts_mnemonic.default.md#generate)

## Constructors

### constructor

• `Private` **new default**(`mnemonic`, `language`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | readonly `string`[] |
| `language` | ``"en"`` \| ``"es"`` |

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:15

## Properties

### language

• `Private` `Readonly` **language**: ``"en"`` \| ``"es"``

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:13

___

### mnemonic

• `Private` `Readonly` **mnemonic**: readonly `string`[]

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:12

## Methods

### getWords

▸ **getWords**(): readonly `string`[]

Returns the mnemonic words as a readonly array of strings.

#### Returns

readonly `string`[]

A readonly array containing the mnemonic words.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:33

___

### isValid

▸ **isValid**(): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<`boolean`\>

Checks if the mnemonic is valid.

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<`boolean`\>

A Promise that resolves to a boolean indicating whether the mnemonic is valid.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:143

___

### toEntropy

▸ **toEntropy**(): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)\>

Converts the mnemonic words back to entropy.

**`Throws`**

Will throw an error if the mnemonic phrase is invalid.

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)\>

A Promise that resolves to a Uint8Array containing the entropy.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:101

___

### toSeed

▸ **toSeed**(`password?`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)\>

Converts the mnemonic words to a seed using an optional password.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `password` | `string` | `""` | An optional password to use when generating the seed. Default is an empty string. |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array)\>

A Promise that resolves to a Uint8Array containing the seed.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:133

___

### toString

▸ **toString**(`separator?`): `string`

Returns the mnemonic phrase as a string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `separator` | `string` | `" "` | Optional separator to use when joining mnemonic words. Default is a single space. |

#### Returns

`string`

The mnemonic phrase as a string.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:25

___

### fromEntropy

▸ `Static` **fromEntropy**(`entropy`, `language?`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`default`](zera_ts_mnemonic.default.md)\>

Creates a ZeraMnemonic instance from a given entropy and language.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `entropy` | [`Uint8Array`](../modules/zera_ts_mnemonic.internal.md#uint8array) | `undefined` | The entropy as a Uint8Array. |
| `language` | ``"en"`` \| ``"es"`` | `"en"` | The language of the mnemonic phrase. Default is English (en). |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`default`](zera_ts_mnemonic.default.md)\>

A Promise that resolves to a ZeraMnemonic instance.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:61

___

### fromPhrase

▸ `Static` **fromPhrase**(`phrase`, `language?`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`default`](zera_ts_mnemonic.default.md)\>

Creates a ZeraMnemonic instance from a given mnemonic phrase and language.

**`Throws`**

Will throw an error if the mnemonic phrase is invalid.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `phrase` | `string` | `undefined` | The mnemonic phrase as a string. |
| `language` | ``"en"`` \| ``"es"`` | `"en"` | The language of the mnemonic phrase. Default is English (en). |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`default`](zera_ts_mnemonic.default.md)\>

A Promise that resolves to a ZeraMnemonic instance.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:44

___

### generate

▸ `Static` **generate**(`strength?`, `language?`): [`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`default`](zera_ts_mnemonic.default.md)\>

Generates a ZeraMnemonic instance with the specified strength and language.

**`Throws`**

Will throw an error if the strength value is invalid.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `strength` | `number` | `128` | The strength of the mnemonic phrase. Default is 128. Must be one of 128, 160, 192, 224, or 256. |
| `language` | ``"en"`` \| ``"es"`` | `"en"` | The language of the mnemonic phrase. Default is English (en). |

#### Returns

[`Promise`](../modules/zera_ts_mnemonic.internal.md#promise)<[`default`](zera_ts_mnemonic.default.md)\>

A Promise that resolves to a ZeraMnemonic instance.

#### Defined in

packages/mnemonic/src/ZeraMnemonic.ts:87
