<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.types](../README.md) / IsHex

# Type Alias: IsHex\<t, count\="">

&gt; **IsHex**\&lt;`T`, `Count`\&gt; = `T` _extends_ `` `${ColorSubValue}${infer Rest}` `` ? `IsHex`\&lt;`Rest`, \[`...Count`, `any`\]\&gt; : `T` _extends_ `""` ? `Count`\[`"length"`\] _extends_ `8` ? `true` : `false` : `false`

Defined in: [packages/types/lib/theme/index.ts:96](https://github.com/fnc314/fnc314.github.io/blob/094ccf5429ad77a6c905bda8c11a637eab1397a6/packages/types/lib/theme/index.ts#L96)

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` _extends_ `string`

</td>
<td>

‐

</td>
</tr>
<tr>
<td>

`Count` _extends_ `any`[]

</td>
<td>

\[\]

</td>
</tr>
</tbody>
</table>
</t,></body></html>
