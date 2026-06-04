<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/work-experience/work-experience](../work-experience.md) / WorkExperience

# Class: WorkExperience

Defined in: [src/components/work-experience/work-experience.ts:22](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L22)

## Hierarchy

[View Summary](../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
<th>Overrides</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="styles"></a> `styles`

</td>
<td>

`static`

</td>
<td>

`CSSResult`[]

</td>
<td>

`undefined`

</td>
<td>

[lit!css](https://lit.dev/docs/api/styles/#css)

</td>
<td>

`LitElement.styles`

</td>
<td>

[src/components/work-experience/work-experience.ts:24](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L24)

</td>
</tr>
<tr>
<td>

<a id="isnested"></a> `isNested`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
<td>

Whether this is a nested instance

</td>
<td>

‐

</td>
<td>

[src/components/work-experience/work-experience.ts:198](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L198)

</td>
</tr>
<tr>
<td>

<a id="experiencerole"></a> `experienceRole`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`""`

</td>
<td>

The formal role from the WorkExperience instance

</td>
<td>

‐

</td>
<td>

[src/components/work-experience/work-experience.ts:202](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L202)

</td>
</tr>
<tr>
<td>

<a id="experienceorg"></a> `experienceOrg`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`""`

</td>
<td>

The employer formal name

</td>
<td>

‐

</td>
<td>

[src/components/work-experience/work-experience.ts:206](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L206)

</td>
</tr>
<tr>
<td>

<a id="datestart"></a> `dateStart`

</td>
<td>

`public`

</td>
<td>

`WorkDate`

</td>
<td>

`undefined`

</td>
<td>

A WorkDate instance describing employment start date

</td>
<td>

‐

</td>
<td>

[src/components/work-experience/work-experience.ts:213](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L213)

</td>
</tr>
<tr>
<td>

<a id="dateend"></a> `dateEnd`

</td>
<td>

`public`

</td>
<td>

`WorkDate`

</td>
<td>

`undefined`

</td>
<td>

A WorkDate instance describing employment end date

</td>
<td>

‐

</td>
<td>

[src/components/work-experience/work-experience.ts:217](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L217)

</td>
</tr>
<tr>
<td>

<a id="summaries"></a> `summaries`

</td>
<td>

`public`

</td>
<td>

\{ `item`: `string`; \}[]

</td>
<td>

`[]`

</td>
<td>

An array of `{ item: string }` objects describing the responsibilities

</td>
<td>

‐

</td>
<td>

[src/components/work-experience/work-experience.ts:221](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L221)

</td>
</tr>
<tr>
<td>

<a id="jobs"></a> `jobs`

</td>
<td>

`public`

</td>
<td>

`Job`[]

</td>
<td>

`[]`

</td>
<td>

An array of Jobs rendered as nested WorkExperience instances

</td>
<td>

‐

</td>
<td>

[src/components/work-experience/work-experience.ts:225](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L225)

</td>
</tr>
</tbody>
</table>

## Methods

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/work-experience/work-experience.ts:228](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/work-experience/work-experience.ts#L228)

Renders the experience entry, conditionally applying styles based on nesting level.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
