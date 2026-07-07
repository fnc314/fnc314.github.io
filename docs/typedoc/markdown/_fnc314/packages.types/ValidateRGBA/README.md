<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.types](../README.md) / ValidateRGBA

# Type Alias: ValidateRGBA\<t\>

&gt; **ValidateRGBA**\&lt;`T`\&gt; = `T` _extends_ `` `#${infer Rest}` `` ? [`IsHex`](../IsHex/README.md)\&lt;`Rest`\&gt; _extends_ `true` ? `T` : `"Error: Must be # followed by exactly 8 hex digits"` : `"Error: Must start with #"`

Defined in: [packages/types/lib/theme/index.ts:104](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/types/lib/theme/index.ts#L104)

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
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
