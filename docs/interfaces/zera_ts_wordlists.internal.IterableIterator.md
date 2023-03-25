[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/wordlists](../modules/zera_ts_wordlists.md) / [internal](../modules/zera_ts_wordlists.internal.md) / IterableIterator

# Interface: IterableIterator<T\>

[@zera-ts/wordlists](../modules/zera_ts_wordlists.md).[internal](../modules/zera_ts_wordlists.internal.md).IterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Iterator`](zera_ts_wordlists.internal.Iterator.md)<`T`\>

  ↳ **`IterableIterator`**

## Table of contents

### Methods

- [[iterator]](zera_ts_wordlists.internal.IterableIterator.md#[iterator])
- [next](zera_ts_wordlists.internal.IterableIterator.md#next)
- [return](zera_ts_wordlists.internal.IterableIterator.md#return)
- [throw](zera_ts_wordlists.internal.IterableIterator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<`T`\>

#### Returns

[`IterableIterator`](zera_ts_wordlists.internal.IterableIterator.md)<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:53

___

### next

▸ **next**(`...args`): [`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

[`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](zera_ts_wordlists.internal.Iterator.md).[next](zera_ts_wordlists.internal.Iterator.md#next)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:43

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

[`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](zera_ts_wordlists.internal.Iterator.md).[return](zera_ts_wordlists.internal.Iterator.md#return)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:44

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/zera_ts_wordlists.internal.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](zera_ts_wordlists.internal.Iterator.md).[throw](zera_ts_wordlists.internal.Iterator.md#throw)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:45
