<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/work-experience/work-experience](../work-experience.md) / WorkExperience

# Class: WorkExperience

Defined in: [src/components/work-experience/work-experience.ts:21](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L21)

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

[src/components/work-experience/work-experience.ts:23](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L23)

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

[src/components/work-experience/work-experience.ts:197](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L197)

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

[src/components/work-experience/work-experience.ts:201](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L201)

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

[src/components/work-experience/work-experience.ts:205](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L205)

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

[src/components/work-experience/work-experience.ts:212](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L212)

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

[src/components/work-experience/work-experience.ts:216](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L216)

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

[src/components/work-experience/work-experience.ts:220](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L220)

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

[src/components/work-experience/work-experience.ts:224](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L224)

</td>
</tr>
</tbody>
</table>

## Methods

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/work-experience/work-experience.ts:227](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/work-experience/work-experience.ts#L227)

Renders the experience entry, conditionally applying styles based on nesting level.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
