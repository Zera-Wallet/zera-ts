[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/wordlists](../modules/zera_ts_wordlists.md) / [internal](../modules/zera_ts_wordlists.internal.md) / PromiseLike

# Interface: PromiseLike<T\>

[@zera-ts/wordlists](../modules/zera_ts_wordlists.md).[internal](../modules/zera_ts_wordlists.internal.md).PromiseLike

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [then](zera_ts_wordlists.internal.PromiseLike.md#then)

## Methods

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`PromiseLike`](zera_ts_wordlists.internal.PromiseLike.md)<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| [`PromiseLike`](zera_ts_wordlists.internal.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](zera_ts_wordlists.internal.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`PromiseLike`](zera_ts_wordlists.internal.PromiseLike.md)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:1516
