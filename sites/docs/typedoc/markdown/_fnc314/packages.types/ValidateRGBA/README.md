<html><head></head><body>[**@fnc314/sites.docs v3.1.0**](../../../README.md)

---

[@fnc314/sites.docs](../../../README.md) / [@fnc314/packages.types](../README.md) / ValidateRGBA

# Type Alias: ValidateRGBA\<t\>

&gt; **ValidateRGBA**\&lt;`T`\&gt; = `T` _extends_ `` `#${infer Rest}` `` ? [`IsHex`](../IsHex/README.md)\&lt;`Rest`\&gt; _extends_ `true` ? `T` : `"Error: Must be # followed by exactly 8 hex digits"` : `"Error: Must start with #"`

Defined in: [packages/types/src/theme/index.ts:99](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/types/src/theme/index.ts#L99)

## Type Parameters

<table>
<thead>
<tr>
<th align="left">Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` _extends_ `string`

</td>
</tr>
</tbody>
</table>
</t\></body></html>
