<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.4**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/card/skills/skills-card](../README.md) / SkillsCard

# Class: SkillsCard

Defined in: [src/components/card/skills/skills-card.ts:16](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/skills/skills-card.ts#L16)

## Element

skills-card

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/skills/skills-card.ts:18](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/skills/skills-card.ts#L18)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`UIAwareElement.styles`

---

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:38](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L38)

The BreakpointLabel as determined by _SCREEN_ width against
Breakpoints.BREAKPOINT\_LABELS

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`breakpoint`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#breakpoint)

---

### touchScreen

&gt; `protected` **touchScreen**: `boolean`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:53](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L53)

Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from `:root`
and tests against `"true"`,

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`touchScreen`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#touchscreen)

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:59](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L59)

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

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`connectedCallback`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#connectedcallback)

---

### disconnectedCallback()

&gt; **disconnectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:65](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L65)

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

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`disconnectedCallback`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#disconnectedcallback)

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/card/skills/skills-card.ts:37](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/skills/skills-card.ts#L37)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`UIAwareElement.render`
</body></html>
