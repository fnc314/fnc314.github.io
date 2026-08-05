<html><head></head><body>[**@fnc314/sites.docs v3.1.0**](../../../README.md)

---

[@fnc314/sites.docs](../../../README.md) / [@fnc314/packages.services](../README.md) / StorageService

# Interface: StorageService

Defined in: [packages/services/src/storage/index.ts:1](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/storage/index.ts#L1)

## Methods

### clearData()

&gt; **clearData**(`key`: `string`): `void`

Defined in: [packages/services/src/storage/index.ts:6](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/storage/index.ts#L6)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
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

Defined in: [packages/services/src/storage/index.ts:4](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/storage/index.ts#L4)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
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
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Defined in</th>
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

[packages/services/src/storage/index.ts:4](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/storage/index.ts#L4)

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

[packages/services/src/storage/index.ts:4](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/storage/index.ts#L4)

</td>
</tr>
</tbody>
</table>

---

### saveData()

&gt; **saveData**(`key`: `string`, `data`: `string`): `void`

Defined in: [packages/services/src/storage/index.ts:2](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/storage/index.ts#L2)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
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
