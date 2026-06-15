<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/types/theme/theme](../README.md) / ValidateRGBA

# Type Alias: ValidateRGBA\<t\>

&gt; **ValidateRGBA**\&lt;`T`\&gt; = `T` _extends_ `` `#${infer Rest}` `` ? `IsHex`\&lt;`Rest`\&gt; _extends_ `true` ? `T` : `"Error: Must be # followed by exactly 8 hex digits"` : `"Error: Must start with #"`

Defined in: [src/types/theme/theme.ts:73](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/types/theme/theme.ts#L73)

The final validator constraint

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
