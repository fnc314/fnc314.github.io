<html><head></head><body>[**@fnc314/sites.docs v3.1.0**](../../../README.md)

---

[@fnc314/sites.docs](../../../README.md) / [@fnc314/packages.types](../README.md) / IsHex

# Type Alias: IsHex\<t, count\="">

&gt; **IsHex**\&lt;`T`, `Count`\&gt; = `T` _extends_ `` `${ColorSubValue}${infer Rest}` `` ? `IsHex`\&lt;`Rest`, \[`...Count`, `any`\]\&gt; : `T` _extends_ `""` ? `Count`\[`"length"`\] _extends_ `8` ? `true` : `false` : `false`

Defined in: [packages/types/src/theme/index.ts:90](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/types/src/theme/index.ts#L90)

## Type Parameters

<table>
<thead>
<tr>
<th align="left">Type Parameter</th>
<th align="left">Default type</th>
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
