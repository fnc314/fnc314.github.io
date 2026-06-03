<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/info-section/info-section](../info-section.md) / InfoSection

# Class: InfoSection

Defined in: [src/components/info-section/info-section.ts:30](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/info-section/info-section.ts#L30)

A reusable section component for profile-related content.
Uses container queries to provide a responsive grid layout that adapts to available space.

## API

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

[src/components/info-section/info-section.ts:32](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/info-section/info-section.ts#L32)

</td>
</tr>
<tr>
<td>

<a id="sectiontitle"></a> `sectionTitle`

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

The text shown in the section heading (`<h2>`).
Corresponds to the attribute `section-title`.

## Slot API

<slot name="section-grid-content">: (required)
Container for section body content. Preserves the responsive grid layout.

Example:

```html
<info-section section-title="Experience">
  <div slot="section-grid-content">...your list, cards, or details...</div>
</info-section>
```

</slot></h2></td>

<td>

‐

</td>
<td>

[src/components/info-section/info-section.ts:100](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/info-section/info-section.ts#L100)

</td>
</tr>
</tbody>
</table>

## Methods

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/info-section/info-section.ts:120](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/info-section/info-section.ts#L120)

Renders the section with a header and named content slot.

Content consumers should provide a `<slot name="section-grid-content">` node
inside the `<profile-section>` to take part in the responsive grid layout.

Example:

```html
<info-section section-title="Work Experience">
  <div slot="section-grid-content">...cards...</div>
</info-section>
```

Notes:

- The slot is wrapped in a `div` that creates an inner container query.
- Named slot `section-grid-content` ensures content is placed in the second
  cell of the adaptive section grid.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`
</profile-section></slot></body></html>
