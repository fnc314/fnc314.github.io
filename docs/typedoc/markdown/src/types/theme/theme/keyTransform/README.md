<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/types/theme/theme](../README.md) / keyTransform

# Function: keyTransform()

&gt; **keyTransform**(`jsonKey`: `string`, `rgb`: `string`): `CSSResult`

Defined in: [src/types/theme/theme.ts:188](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/types/theme/theme.ts#L188)

Converts [jsonKey](#keytransform) and corresponding [rgb](#keytransform) value into a CSS custom property
via [lit!css](https://lit.dev/docs/api/styles/#css) and lit!unsafeCSS functions

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

`CSSResult`

- A CSSResult containing the custom property definition, e.g., "--md-sys-color-primary-container: #FF0000;"
</body></html>
