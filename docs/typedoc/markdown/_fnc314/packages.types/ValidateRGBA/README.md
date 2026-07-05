<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.types](../README.md) / ValidateRGBA

# Type Alias: ValidateRGBA\<t\>

&gt; **ValidateRGBA**\&lt;`T`\&gt; = `T` _extends_ `` `#${infer Rest}` `` ? `IsHex`\&lt;`Rest`\&gt; _extends_ `true` ? `T` : `"Error: Must be # followed by exactly 8 hex digits"` : `"Error: Must start with #"`

Defined in: [packages/types/lib/theme/index.ts:104](https://github.com/fnc314/fnc314.github.io/blob/29ad60983e0a139f9149ea685e2e952ced414831/packages/types/lib/theme/index.ts#L104)

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
