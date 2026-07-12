<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.types](../README.md) / CodeRepoData

# Interface: CodeRepoData

Defined in: [packages/types/src/code/index.ts:26](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/types/src/code/index.ts#L26)

Represents a single project entry loaded from `code.json`.

This interface mirrors the shape used by the `code` data loader and the
components that render project cards in the `code` partial.

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="description"></a> `description`

</td>
<td>

`string`

</td>
<td>

Short description or summary of the project.

</td>
<td>

[packages/types/src/code/index.ts:28](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/types/src/code/index.ts#L28)

</td>
</tr>
<tr>
<td>

<a id="name"></a> `name`

</td>
<td>

`string`

</td>
<td>

Human-readable project title.

</td>
<td>

[packages/types/src/code/index.ts:31](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/types/src/code/index.ts#L31)

</td>
</tr>
<tr>
<td>

<a id="repo"></a> `repo`

</td>
<td>

`` `fnc314/${string}` ``

</td>
<td>

The bit of [url](#url) which begins with `fnc314/`

</td>
<td>

[packages/types/src/code/index.ts:40](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/types/src/code/index.ts#L40)

</td>
</tr>
<tr>
<td>

<a id="tech"></a> `tech`

</td>
<td>

[`CodeRepoTech`](../CodeRepoTech/README.md)[]

</td>
<td>

Array of technologies used by the project.

</td>
<td>

[packages/types/src/code/index.ts:34](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/types/src/code/index.ts#L34)

</td>
</tr>
<tr>
<td>

<a id="url"></a> `url`

</td>
<td>

`string`

</td>
<td>

Public URL for the project (website or repository).

</td>
<td>

[packages/types/src/code/index.ts:37](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/types/src/code/index.ts#L37)

</td>
</tr>
</tbody>
</table>
</body></html>
