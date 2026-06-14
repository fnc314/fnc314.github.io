<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/bento-layout/bento-layout](../README.md) / BentoLayout

# Class: BentoLayout

Defined in: [src/components/bento-layout/bento-layout.ts:17](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L17)

## Element

bento-layout

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- `UIAwareElement`

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/bento-layout/bento-layout.ts:19](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L19)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`UIAwareElement.styles`

---

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:38](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/mixins/ui-aware-element/ui-aware-element.ts#L38)

The BreakpointLabel as determined by _SCREEN_ width against
Breakpoints.BREAKPOINT_LABELS

#### Inherited from

`UIAwareElement.breakpoint`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:48](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/mixins/ui-aware-element/ui-aware-element.ts#L48)

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

#### Inherited from

`UIAwareElement.connectedCallback`

---

### disconnectedCallback()

&gt; **disconnectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:54](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/mixins/ui-aware-element/ui-aware-element.ts#L54)

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

#### Inherited from

`UIAwareElement.disconnectedCallback`

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/bento-layout/bento-layout.ts:74](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.ts#L74)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`UIAwareElement.render`

</body></html>
