<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/bento-layout/bento-layout.types](../README.md) / GridPosition

# Type Alias: GridPosition

&gt; **GridPosition** = \{ `breakpoint`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\&lt;[`Breakpoint`](../../../../styles/breakpoints/Breakpoint/README.md), `"mobile"`\&gt;; `row`: [`GridPlacement`](../GridPlacement/README.md); `column`: [`GridPlacement`](../GridPlacement/README.md); `area?`: `string`; \} \| \{ `breakpoint`: `"mobile"`; \}

Defined in: [src/components/bento-layout/bento-layout.types.ts:20](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.types.ts#L20)

A pair of [GridPlacement](../GridPlacement/README.md)s for the row and column
dimensions

## Union Members

### Type Literal

\{ `breakpoint`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\&lt;[`Breakpoint`](../../../../styles/breakpoints/Breakpoint/README.md), `"mobile"`\&gt;; `row`: [`GridPlacement`](../GridPlacement/README.md); `column`: [`GridPlacement`](../GridPlacement/README.md); `area?`: `string`; \}

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`breakpoint`

</td>
<td>

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\&lt;[`Breakpoint`](../../../../styles/breakpoints/Breakpoint/README.md), `"mobile"`\&gt;

</td>
<td>

The breakpoint for this position

</td>
<td>

[src/components/bento-layout/bento-layout.types.ts:22](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.types.ts#L22)

</td>
</tr>
<tr>
<td>

`row`

</td>
<td>

[`GridPlacement`](../GridPlacement/README.md)

</td>
<td>

The row placement

</td>
<td>

[src/components/bento-layout/bento-layout.types.ts:24](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.types.ts#L24)

</td>
</tr>
<tr>
<td>

`column`

</td>
<td>

[`GridPlacement`](../GridPlacement/README.md)

</td>
<td>

The column placement

</td>
<td>

[src/components/bento-layout/bento-layout.types.ts:26](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.types.ts#L26)

</td>
</tr>
<tr>
<td>

`area?`

</td>
<td>

`string`

</td>
<td>

The grid area string

</td>
<td>

[src/components/bento-layout/bento-layout.types.ts:28](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.types.ts#L28)

</td>
</tr>
</tbody>
</table>

---

### Type Literal

\{ `breakpoint`: `"mobile"`; \}

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`breakpoint`

</td>
<td>

`"mobile"`

</td>
<td>

The breakpoint for this position

</td>
<td>

[src/components/bento-layout/bento-layout.types.ts:31](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.types.ts#L31)

</td>
</tr>
</tbody>
</table>
</body></html>
