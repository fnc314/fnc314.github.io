<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/bento-layout/bento-layout](../README.md) / BentoLayout

# Class: BentoLayout

Defined in: [src/components/bento-layout/bento-layout.ts:47](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L47)

## Element

bento-layout

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/bento-layout/bento-layout.ts:49](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L49)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### getSkillsForWordCloud()

&gt; `private` **getSkillsForWordCloud**(): `WordCloudWord`[]

Defined in: [src/components/bento-layout/bento-layout.ts:300](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L300)

Helper for skills

#### Returns

`WordCloudWord`[]

---

### renderBentoBox()

&gt; `private` **renderBentoBox**(`box`: `"work"` \| `"code"` \| `"blog"` \| `"profile-photo-bio"` \| `"settings"` \| `"connect"` \| `"education"` \| `"skills"`, `config`: \{ `columnSpan?`: `number`; `rowSpan?`: `number`; \}): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/bento-layout/bento-layout.ts:314](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L314)

Centralized method to render a bento box card based on its type and configuration.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`box`

</td>
<td>

`"work"` \| `"code"` \| `"blog"` \| `"profile-photo-bio"` \| `"settings"` \| `"connect"` \| `"education"` \| `"skills"`

</td>
<td>

The type of bento box to render.

</td>
</tr>
<tr>
<td>

`config`

</td>
<td>

\{ `columnSpan?`: `number`; `rowSpan?`: `number`; \}

</td>
<td>

The grid configuration for the bento box (columnSpan, rowSpan).

</td>
</tr>
<tr>
<td>

`config.columnSpan?`

</td>
<td>

`number`

</td>
<td>

‐

</td>
</tr>
<tr>
<td>

`config.rowSpan?`

</td>
<td>

`number`

</td>
<td>

‐

</td>
</tr>
</tbody>
</table>

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

A TemplateResult representing the rendered bento box.

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/bento-layout/bento-layout.ts:290](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L290)

Invoked when the component is added to the document's DOM.

In `connectedCallback()` you should setup tasks that should only occur when
the element is connected to the document. The most common of these is
adding event listeners to nodes external to the element, like a keydown
event handler added to the window.

```ts
connectedCallback() {
  super.connectedCallback();
  addEventListener('keydown', this._handleKeydown);
}
```

Typically, anything done in `connectedCallback()` should be undone when the
element is disconnected, in `disconnectedCallback()`.

#### Returns

`void`

#### Overrides

`LitElement.connectedCallback`

---

### disconnectedCallback()

&gt; **disconnectedCallback**(): `void`

Defined in: [src/components/bento-layout/bento-layout.ts:294](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L294)

Invoked when the component is removed from the document's DOM.

This callback is the main signal to the element that it may no longer be
used. `disconnectedCallback()` should ensure that nothing is holding a
reference to the element (such as event listeners added to nodes external
to the element), so that it is free to be garbage collected.

```ts
disconnectedCallback() {
  super.disconnectedCallback();
  window.removeEventListener('keydown', this._handleKeydown);
}
```

An element may be re-connected after being disconnected.

#### Returns

`void`

#### Overrides

`LitElement.disconnectedCallback`

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/bento-layout/bento-layout.ts:464](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L464)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
