<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.services](../README.md) / StorageService

# Interface: StorageService

Defined in: [packages/services/lib/storage/index.ts:1](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/services/lib/storage/index.ts#L1)

## Methods

### clearData()

&gt; **clearData**(`key`: `string`): `void`

Defined in: [packages/services/lib/storage/index.ts:6](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/services/lib/storage/index.ts#L6)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

---

### getData()

&gt; **getData**(`key`: `string`, `defaultValue`: `string`): \{ `isDefault`: `boolean`; `value`: `string`; \}

Defined in: [packages/services/lib/storage/index.ts:4](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/services/lib/storage/index.ts#L4)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`defaultValue`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

\{ `isDefault`: `boolean`; `value`: `string`; \}

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`isDefault`

</td>
<td>

`boolean`

</td>
<td>

[packages/services/lib/storage/index.ts:4](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/services/lib/storage/index.ts#L4)

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`string`

</td>
<td>

[packages/services/lib/storage/index.ts:4](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/services/lib/storage/index.ts#L4)

</td>
</tr>
</tbody>
</table>

---

### saveData()

&gt; **saveData**(`key`: `string`, `data`: `string`): `void`

Defined in: [packages/services/lib/storage/index.ts:2](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/services/lib/storage/index.ts#L2)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`data`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`
</body></html>
