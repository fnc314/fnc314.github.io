<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/code/repo/code-repo.types](../README.md) / CodeRepoData

# Interface: CodeRepoData

Defined in: [src/components/code/repo/code-repo.types.ts:28](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.types.ts#L28)

Represents a single project entry loaded from `code.json`.

This interface mirrors the shape used by the `code` data loader and the
components that render project cards in the `code` partial.

## Export

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

[src/components/code/repo/code-repo.types.ts:30](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.types.ts#L30)

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

[src/components/code/repo/code-repo.types.ts:33](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.types.ts#L33)

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

[src/components/code/repo/code-repo.types.ts:36](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.types.ts#L36)

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

[src/components/code/repo/code-repo.types.ts:39](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.types.ts#L39)

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

[src/components/code/repo/code-repo.types.ts:42](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.types.ts#L42)

</td>
</tr>
</tbody>
</table>
</body></html>
