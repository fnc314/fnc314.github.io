<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.services](../README.md) / keyTransform

# Function: keyTransform()

&gt; **keyTransform**(`jsonKey`: `string`, `rgb`: `string`): [`CSSResult`](https://lit.dev/docs/api/styles/#CSSResult)

Defined in: [packages/services/lib/theme/utils.ts:136](https://github.com/fnc314/fnc314.github.io/blob/094ccf5429ad77a6c905bda8c11a637eab1397a6/packages/services/lib/theme/utils.ts#L136)

Converts `jsonKey` and corresponding `rgb` value into a CSS custom property
via [css](https://lit.dev/docs/api/styles/#css) and [unsafeCSS](https://lit.dev/docs/api/styles/#unsafeCSS) functions

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`jsonKey`

</td>
<td>

`string`

</td>
<td>

The key from the JSON scheme, e.g., "primaryContainer"

</td>
</tr>
<tr>
<td>

`rgb`

</td>
<td>

`string`

</td>
<td>

The RGB color value from the JSON scheme, e.g., "#FF0000"

</td>
</tr>
</tbody>
</table>

## Returns

[`CSSResult`](https://lit.dev/docs/api/styles/#CSSResult)

- A CSSResult containing the custom property definition, e.g., "--md-sys-color-primary-container: #FF0000;"

</body></html>
