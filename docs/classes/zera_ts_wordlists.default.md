[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/wordlists](../modules/zera_ts_wordlists.md) / default

# Class: default

[@zera-ts/wordlists](../modules/zera_ts_wordlists.md).default

Class representing a wordlist for a specific language.

## Table of contents

### Constructors

- [constructor](zera_ts_wordlists.default.md#constructor)

### Properties

- [language](zera_ts_wordlists.default.md#language)
- [words](zera_ts_wordlists.default.md#words)
- [wordlistCache](zera_ts_wordlists.default.md#wordlistcache)

### Methods

- [get](zera_ts_wordlists.default.md#get)
- [loadLanguage](zera_ts_wordlists.default.md#loadlanguage)
- [validateWordlist](zera_ts_wordlists.default.md#validatewordlist)

## Constructors

### constructor

• `Private` **new default**(`language`, `words`)

Private constructor for creating a new ZeraWordlist instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | ``"en"`` \| ``"es"`` | The language of the wordlist. |
| `words` | readonly `string`[] | A readonly array of words for the wordlist. |

#### Defined in

packages/wordlists/src/ZeraWordlist.ts:24

## Properties

### language

• `Readonly` **language**: ``"en"`` \| ``"es"``

#### Defined in

packages/wordlists/src/ZeraWordlist.ts:15

___

### words

• `Readonly` **words**: readonly `string`[]

#### Defined in

packages/wordlists/src/ZeraWordlist.ts:16

___

### wordlistCache

▪ `Static` `Private` **wordlistCache**: [`Map`](../modules/zera_ts_wordlists.internal.md#map)<``"en"`` \| ``"es"``, [`default`](zera_ts_wordlists.default.md)\>

#### Defined in

packages/wordlists/src/ZeraWordlist.ts:17

## Methods

### get

▸ `Static` **get**(`language?`): [`Promise`](../modules/zera_ts_wordlists.internal.md#promise)<[`default`](zera_ts_wordlists.default.md)\>

Retrieves the wordlist for a specified language.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `language` | ``"en"`` \| ``"es"`` | `"en"` | The language of the desired wordlist. |

#### Returns

[`Promise`](../modules/zera_ts_wordlists.internal.md#promise)<[`default`](zera_ts_wordlists.default.md)\>

A Promise that resolves with the ZeraWordlist instance for the specified language.

#### Defined in

packages/wordlists/src/ZeraWordlist.ts:34

___

### loadLanguage

▸ `Static` `Private` **loadLanguage**(`language`): [`Promise`](../modules/zera_ts_wordlists.internal.md#promise)<`string`[]\>

Loads the wordlist data for a specified language.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | ``"en"`` \| ``"es"`` | The language of the wordlist to load. |

#### Returns

[`Promise`](../modules/zera_ts_wordlists.internal.md#promise)<`string`[]\>

A Promise that resolves with an array of words for the specified language.

#### Defined in

packages/wordlists/src/ZeraWordlist.ts:52

___

### validateWordlist

▸ `Static` **validateWordlist**(`wordlist`): `boolean`

Validates a wordlist by checking its length and uniqueness of words.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wordlist` | [`default`](zera_ts_wordlists.default.md) | The wordlist to validate. |

#### Returns

`boolean`

A boolean indicating whether the wordlist is valid or not.

#### Defined in

packages/wordlists/src/ZeraWordlist.ts:73
