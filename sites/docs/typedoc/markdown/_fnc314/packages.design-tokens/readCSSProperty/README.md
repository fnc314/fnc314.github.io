<html><head></head><body>[**@fnc314/sites.docs v3.1.0**](../../../README.md)

---

[@fnc314/sites.docs](../../../README.md) / [@fnc314/packages.design-tokens](../README.md) / readCSSProperty

# Function: readCSSProperty()

&gt; **readCSSProperty**(`property`: `string`, `element?`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null` \| `undefined`, `logComputedPropertyTransaction?`: `boolean`): `string`

Defined in: [src/read-css-property/index.ts:14](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/design-tokens/src/read-css-property/index.ts#L14)

Returns the value of the provided `property`

## Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
<th align="left">Default value</th>
<th align="left">Description</th>
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
