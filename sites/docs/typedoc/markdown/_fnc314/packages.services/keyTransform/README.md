<html><head></head><body>[**@fnc314/sites.docs v3.1.0**](../../../README.md)

---

[@fnc314/sites.docs](../../../README.md) / [@fnc314/packages.services](../README.md) / keyTransform

# Function: keyTransform()

&gt; **keyTransform**(`jsonKey`: `string`, `rgb`: `string`): [`CSSResult`](https://lit.dev/docs/api/styles/#CSSResult)

Defined in: [packages/services/src/theme/utils.ts:132](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/theme/utils.ts#L132)

Converts `jsonKey` and corresponding `rgb` value into a CSS custom property
via [css](https://lit.dev/docs/api/styles/#css) and [unsafeCSS](https://lit.dev/docs/api/styles/#unsafeCSS) functions

## Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
<th align="left">Description</th>
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

The key from the JSON scheme, e.g., `primaryContainer`

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

The RGB color value from the JSON scheme, e.g., `#FF0000`

</td>
</tr>
</tbody>
</table>

## Returns

[`CSSResult`](https://lit.dev/docs/api/styles/#CSSResult)

- A CSSResult containing the custom property definition, e.g., `--md-sys-color-primary-container: #FF0000;`

</body></html>
