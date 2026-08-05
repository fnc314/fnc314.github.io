<html><head></head><body>[**@fnc314/sites.docs v3.1.0**](../../../README.md)

---

[@fnc314/sites.docs](../../../README.md) / [@fnc314/packages.services](../README.md) / readScheme

# Variable: readScheme

&gt; `const` **readScheme**: (`jsonSchema`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\&lt;[`ColorSchemeRoles`](../../packages.types/ColorSchemeRoles/README.md), [`ColorString`](../../packages.types/ColorString/README.md)\&gt;) =&gt; [`CSSResult`](https://lit.dev/docs/api/styles/#CSSResult)

Defined in: [packages/services/src/theme/utils.ts:108](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/theme/utils.ts#L108)

Reads a `.json` defined object and produces a [CSSResult](https://lit.dev/docs/api/styles/#CSSResult)

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

`jsonSchema`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\&lt;[`ColorSchemeRoles`](../../packages.types/ColorSchemeRoles/README.md), [`ColorString`](../../packages.types/ColorString/README.md)\&gt;

</td>
<td>

Any `object`

</td>
</tr>
</tbody>
</table>

## Returns

[`CSSResult`](https://lit.dev/docs/api/styles/#CSSResult)

- A [CSSResult](https://lit.dev/docs/api/styles/#CSSResult) of the provided `jsonSchema`

</body></html>
