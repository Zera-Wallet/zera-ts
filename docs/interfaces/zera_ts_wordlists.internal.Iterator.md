[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/wordlists](../modules/zera_ts_wordlists.md) / [internal](../modules/zera_ts_wordlists.internal.md) / Iterator

# Interface: Iterator<T, TReturn, TNext\>

[@zera-ts/wordlists](../modules/zera_ts_wordlists.md).[internal](../modules/zera_ts_wordlists.internal.md).Iterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Hierarchy

- **`Iterator`**

  ↳ [`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)

## Table of contents

### Methods

- [next](zera_ts_wordlists.internal.Iterator.md#next)
- [return](zera_ts_wordlists.internal.Iterator.md#return)
- [throw](zera_ts_wordlists.internal.Iterator.md#throw)

## Methods

### next

▸ **next**(`...args`): [`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:43

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:44

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:45
