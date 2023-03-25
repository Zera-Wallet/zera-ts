[zera-ts](../README.md) / [Modules](../modules.md) / [@zera-ts/bytes](../modules/zera_ts_bytes.md) / [internal](../modules/zera_ts_bytes.internal.md) / Uint8Array

# Interface: Uint8Array

[@zera-ts/bytes](../modules/zera_ts_bytes.md).[internal](../modules/zera_ts_bytes.internal.md).Uint8Array

A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
requested number of bytes could not be allocated an exception is raised.

## Hierarchy

- [`RelativeIndexable`](zera_ts_bytes.internal.RelativeIndexable.md)<`number`\>

  ↳ **`Uint8Array`**

## Indexable

▪ [index: `number`]: `number`

## Table of contents

### Properties

- [BYTES\_PER\_ELEMENT](zera_ts_bytes.internal.Uint8Array.md#bytes_per_element)
- [[toStringTag]](zera_ts_bytes.internal.Uint8Array.md#[tostringtag])
- [buffer](zera_ts_bytes.internal.Uint8Array.md#buffer)
- [byteLength](zera_ts_bytes.internal.Uint8Array.md#bytelength)
- [byteOffset](zera_ts_bytes.internal.Uint8Array.md#byteoffset)
- [length](zera_ts_bytes.internal.Uint8Array.md#length)

### Methods

- [[iterator]](zera_ts_bytes.internal.Uint8Array.md#[iterator])
- [at](zera_ts_bytes.internal.Uint8Array.md#at)
- [copyWithin](zera_ts_bytes.internal.Uint8Array.md#copywithin)
- [entries](zera_ts_bytes.internal.Uint8Array.md#entries)
- [every](zera_ts_bytes.internal.Uint8Array.md#every)
- [fill](zera_ts_bytes.internal.Uint8Array.md#fill)
- [filter](zera_ts_bytes.internal.Uint8Array.md#filter)
- [find](zera_ts_bytes.internal.Uint8Array.md#find)
- [findIndex](zera_ts_bytes.internal.Uint8Array.md#findindex)
- [findLast](zera_ts_bytes.internal.Uint8Array.md#findlast)
- [findLastIndex](zera_ts_bytes.internal.Uint8Array.md#findlastindex)
- [forEach](zera_ts_bytes.internal.Uint8Array.md#foreach)
- [includes](zera_ts_bytes.internal.Uint8Array.md#includes)
- [indexOf](zera_ts_bytes.internal.Uint8Array.md#indexof)
- [join](zera_ts_bytes.internal.Uint8Array.md#join)
- [keys](zera_ts_bytes.internal.Uint8Array.md#keys)
- [lastIndexOf](zera_ts_bytes.internal.Uint8Array.md#lastindexof)
- [map](zera_ts_bytes.internal.Uint8Array.md#map)
- [reduce](zera_ts_bytes.internal.Uint8Array.md#reduce)
- [reduceRight](zera_ts_bytes.internal.Uint8Array.md#reduceright)
- [reverse](zera_ts_bytes.internal.Uint8Array.md#reverse)
- [set](zera_ts_bytes.internal.Uint8Array.md#set)
- [slice](zera_ts_bytes.internal.Uint8Array.md#slice)
- [some](zera_ts_bytes.internal.Uint8Array.md#some)
- [sort](zera_ts_bytes.internal.Uint8Array.md#sort)
- [subarray](zera_ts_bytes.internal.Uint8Array.md#subarray)
- [toLocaleString](zera_ts_bytes.internal.Uint8Array.md#tolocalestring)
- [toString](zera_ts_bytes.internal.Uint8Array.md#tostring)
- [valueOf](zera_ts_bytes.internal.Uint8Array.md#valueof)
- [values](zera_ts_bytes.internal.Uint8Array.md#values)

## Properties

### BYTES\_PER\_ELEMENT

• `Readonly` **BYTES\_PER\_ELEMENT**: `number`

The size in bytes of each element in the array.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2129

___

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"Uint8Array"``

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:284

___

### buffer

• `Readonly` **buffer**: [`ArrayBufferLike`](../modules/zera_ts_bytes.internal.md#arraybufferlike)

The ArrayBuffer instance referenced by the array.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2134

___

### byteLength

• `Readonly` **byteLength**: `number`

The length in bytes of the array.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2139

___

### byteOffset

• `Readonly` **byteOffset**: `number`

The offset in bytes of the array.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2144

___

### length

• `Readonly` **length**: `number`

The length of the array.

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2243

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<`number`\>

#### Returns

[`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<`number`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:270

___

### at

▸ **at**(`index`): `undefined` \| `number`

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| `number`

#### Inherited from

[RelativeIndexable](zera_ts_bytes.internal.RelativeIndexable.md).[at](zera_ts_bytes.internal.RelativeIndexable.md#at)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2022.array.d.ts:48

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2155

___

### entries

▸ **entries**(): [`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<[`number`, `number`]\>

Returns an array of key, value pairs for every entry in the array

#### Returns

[`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<[`number`, `number`]\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:274

___

### every

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2165

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2175

___

### filter

▸ **filter**(`predicate`, `thisArg?`): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `any` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2184

___

### find

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `number`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2195

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2206

___

### findLast

▸ **findLast**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the last element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => value is S | findLast calls predicate once for each element of the array, in descending order, until it finds one where predicate returns true. If such an element is found, findLast immediately returns that element value. Otherwise, findLast returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2023.array.d.ts:104

▸ **findLast**(`predicate`, `thisArg?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2023.array.d.ts:105

___

### findLastIndex

▸ **findLastIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `unknown` | findLastIndex calls predicate once for each element of the array, in descending order, until it finds one where predicate returns true. If such an element is found, findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2023.array.d.ts:116

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2215

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2016.array.include.d.ts:52

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2223

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2230

___

### keys

▸ **keys**(): [`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<`number`\>

Returns an list of keys in the array

#### Returns

[`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<`number`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:278

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2238

___

### map

▸ **map**(`callbackfn`, `thisArg?`): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `number` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2253

___

### reduce

▸ **reduce**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `number` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2265

▸ **reduce**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2266

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2278

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `number` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2290

▸ **reduceRight**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2291

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2303

___

### reverse

▸ **reverse**(): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Reverses the elements in an Array.

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2308

___

### set

▸ **set**(`array`, `offset?`): `void`

Sets a value or an array of values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | [`ArrayLike`](zera_ts_bytes.internal.ArrayLike.md)<`number`\> | A typed or untyped array of values to set. |
| `offset?` | `number` | The index in the current array at which the values are to be written. |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2315

___

### slice

▸ **slice**(`start?`, `end?`): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Returns a section of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning of the specified portion of the array. |
| `end?` | `number` | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2322

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2332

___

### sort

▸ **sort**(`compareFn?`): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2343

___

### subarray

▸ **subarray**(`begin?`, `end?`): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin?` | `number` | The index of the beginning of the array. |
| `end?` | `number` | The index of the end of the array. |

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2351

___

### toLocaleString

▸ **toLocaleString**(): `string`

Converts a number to a string by using the current locale.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2356

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2361

___

### valueOf

▸ **valueOf**(): [`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

Returns the primitive value of the specified object.

#### Returns

[`Uint8Array`](../modules/zera_ts_bytes.internal.md#uint8array)

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es5.d.ts:2364

___

### values

▸ **values**(): [`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<`number`\>

Returns an list of values in the array

#### Returns

[`IterableIterator`](zera_ts_bytes.internal.IterableIterator.md)<`number`\>

#### Defined in

node_modules/.pnpm/typescript@5.0.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:282
