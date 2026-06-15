<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/word/tag/word-tag](../README.md) / WordTag

# Class: WordTag

Defined in: [src/components/word/tag/word-tag.ts:34](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/tag/word-tag.ts#L34)

## Cssprop

[--word-tag-color=--md-sys-color-on-primary-container] - The text and border color

## Cssprop

[--word-tag-background-color=--md-sys-color-primary-container] - The background color

## Cssprop

[--word-tag-font-family=--md-ref-typeface-brand] - The font family

## Cssprop

[--word-tag-font-size=--md-typescale-body-large-font-size] - The font size

## Cssprop

[--word-tag-font-weight=--md-ref-typeface-weight-regular] - The font weight

## Cssprop

[--word-tag-line-height=--md-typescale-body-large-lingt-height] - The line height

## Cssprop

[--word-tag-border-radius=--md-sys-shape-corner-small] - The corner radius (for all corners)

## Cssprop

[--word-tag-gap=--spaces-gap-xs] - The `gap` between `word` and any `slot`-ed icon

## Slot

icon - The optional space available for, and positioned by, the [variant](#variant) property

## Export

WordTag

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- `UIAwareElement`

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/word/tag/word-tag.ts:36](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/tag/word-tag.ts#L36)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`UIAwareElement.styles`

---

### variant

&gt; **variant**: [`WordTagVariant`](../../word-tag.types/WordTagVariant/README.md) = `"text-only"`

Defined in: [src/components/word/tag/word-tag.ts:117](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/tag/word-tag.ts#L117)

The version of the layout to render

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

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/word/tag/word-tag.ts:170](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/tag/word-tag.ts#L170)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

#### Overrides

`UIAwareElement.render`

</body></html>
