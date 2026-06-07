<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/bento-layout/bento-layout](../README.md) / BentoLayout

# Class: BentoLayout

Defined in: [src/components/bento-layout/bento-layout.ts:29](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L29)

## Element

bento-layout

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/bento-layout/bento-layout.ts:31](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L31)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/bento-layout/bento-layout.ts:42](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L42)

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

Defined in: [src/components/bento-layout/bento-layout.ts:88](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L88)

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

Defined in: [src/components/bento-layout/bento-layout.ts:143](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L143)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

## updates

### firstUpdated()

&gt; `protected` **firstUpdated**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: [src/components/bento-layout/bento-layout.ts:46](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L46)

Invoked when the element is first updated. Implement to perform one time
work on the element after update.

```ts
firstUpdated() {
  this.renderRoot.getElementById('my-text-area').focus();
}
```

Setting properties inside this method will trigger the element to update
again after this update cycle completes.

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

`_changedProperties`

</td>
<td>

`PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;

</td>
<td>

Map of changed properties with old values

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Overrides

`LitElement.firstUpdated`

</body></html>
