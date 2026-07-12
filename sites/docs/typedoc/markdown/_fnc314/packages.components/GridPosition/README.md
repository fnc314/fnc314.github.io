<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.components](../README.md) / GridPosition

# Type Alias: GridPosition

&gt; **GridPosition** = \{ `breakpoint`: [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)\&lt;`BreakpointLabel`, `"mobile"`\&gt;; `offsets?`: \{ `col?`: `number` \| `0`; `row?`: `number` \| `0`; \}; `order`: `number`; `span`: [`GridSpan`](../GridSpan/README.md); \} \| \{ `breakpoint`: [`Extract`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)\&lt;`BreakpointLabel`, `"mobile"`\&gt;; `order`: `number`; \}

Defined in: [packages/components/src/bento-layout/bento-layout.types.ts:19](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L19)

The span and order for a given breakpoint

## Union Members

### Type Literal

\{ `breakpoint`: [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)\&lt;`BreakpointLabel`, `"mobile"`\&gt;; `offsets?`: \{ `col?`: `number` \| `0`; `row?`: `number` \| `0`; \}; `order`: `number`; `span`: [`GridSpan`](../GridSpan/README.md); \}

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

[`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)\&lt;`BreakpointLabel`, `"mobile"`\&gt;

</td>
<td>

The breakpoint for this position

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:21](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L21)

</td>
</tr>
<tr>
<td>

`offsets?`

</td>
<td>

\{ `col?`: `number` \| `0`; `row?`: `number` \| `0`; \}

</td>
<td>

Offsets

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:27](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L27)

</td>
</tr>
<tr>
<td>

`offsets.col?`

</td>
<td>

`number` \| `0`

</td>
<td>

‐

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:29](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L29)

</td>
</tr>
<tr>
<td>

`offsets.row?`

</td>
<td>

`number` \| `0`

</td>
<td>

‐

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:28](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L28)

</td>
</tr>
<tr>
<td>

`order`

</td>
<td>

`number`

</td>
<td>

The logical order in the DOM

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:25](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L25)

</td>
</tr>
<tr>
<td>

`span`

</td>
<td>

[`GridSpan`](../GridSpan/README.md)

</td>
<td>

The grid span

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:23](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L23)

</td>
</tr>
</tbody>
</table>

---

### Type Literal

\{ `breakpoint`: [`Extract`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)\&lt;`BreakpointLabel`, `"mobile"`\&gt;; `order`: `number`; \}

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

[`Extract`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)\&lt;`BreakpointLabel`, `"mobile"`\&gt;

</td>
<td>

The breakpoint for this position

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:33](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L33)

</td>
</tr>
<tr>
<td>

`order`

</td>
<td>

`number`

</td>
<td>

The logical order in the DOM

</td>
<td>

[packages/components/src/bento-layout/bento-layout.types.ts:35](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/bento-layout/bento-layout.types.ts#L35)

</td>
</tr>
</tbody>
</table>
</body></html>
