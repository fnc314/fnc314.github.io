<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.design-tokens](../README.md) / readCSSProperty

# Function: readCSSProperty()

&gt; **readCSSProperty**(`property`: `string`, `element?`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null` \| `undefined`, `logComputedPropertyTransaction?`: `boolean`): `string`

Defined in: [read-css-property.ts:15](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/design-tokens/lib/read-css-property.ts#L15)

Returns the value of the provided `property`

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`property`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

The particular `CSS` property
of interest

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null` \| `undefined`

</td>
<td>

`undefined`

</td>
<td>

The (possibly missing) target
[HTMLElement](https://developer.mozilla.org/docs/Web/API/HTMLElement) from which computed styles and properties are pulled.
Defaults to "global" `window.document.documentElement`

</td>
</tr>
<tr>
<td>

`logComputedPropertyTransaction`

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
<td>

Removes log suppression allowing
invocations can expose the `property` read from the `element` and the
returned value

</td>
</tr>
</tbody>
</table>

## Returns

`string`

A `string` from `CSS` or an empty `string`
</body></html>
