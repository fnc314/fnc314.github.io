<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/card/code/code-card](../README.md) / CodeCard

# Class: CodeCard

Defined in: [src/components/card/code/code-card.ts:14](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/code/code-card.ts#L14)

## Element

code-card

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/code/code-card.ts:16](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/code/code-card.ts#L16)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/card/code/code-card.ts:27](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/code/code-card.ts#L27)

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

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/card/code/code-card.ts:32](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/code/code-card.ts#L32)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
