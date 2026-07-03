<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/card/bento/bento-card](../README.md) / BentoCard

# Class: BentoCard

Defined in: [src/components/card/bento/bento-card.ts:34](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L34)

## Element

bento-card

## Slot

header - Content to be displayed in the card's header/summary area.

## Slot

- Default slot for card content. Slotted `h2` elements receive standardized header styling.

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/bento/bento-card.ts:36](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L36)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`UIAwareElement.styles`

---

### bentoTag

&gt; **bentoTag**: [`BentoBoxType`](../../../../bento-layout/bento-layout.types/BentoBoxType/README.md) = `BENTO_BOX_TYPES.profile`

Defined in: [src/components/card/bento/bento-card.ts:45](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L45)

Uniquely identifies this `BentoCard` via [BENTO\_BOX\_TYPES](../../../../bento-layout/bento-layout.types/BENTO_BOX_TYPES/README.md)

---

### scrollable

&gt; **scrollable**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:52](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L52)

Enables internal vertical scrolling for content.

---

### expanded

&gt; **expanded**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:59](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L59)

Reflects and controls the open state of the card.

---

### enableHover

&gt; **enableHover**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:66](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L66)

Opt-in to the hover elevation/shift effect.

---

### enableFocus

&gt; **enableFocus**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:73](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L73)

Opt-in to the focus-within border/shadow shift effect.

---

### bentoCardTitle

&gt; **bentoCardTitle**: `string` = `""`

Defined in: [src/components/card/bento/bento-card.ts:83](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L83)

An optional `string` which, when set, suppresses the `slot[name="header"]`

---

### spreadContent

&gt; **spreadContent**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:89](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L89)

Whether to spread content over the entire body

---

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:37](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L37)

The BreakpointLabel as determined by _SCREEN_ width against
Breakpoints.BREAKPOINT\_LABELS

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`breakpoint`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#breakpoint)

---

### touchScreen

&gt; `protected` **touchScreen**: `boolean`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:52](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L52)

Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from `:root`
and tests against `"true"`,

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`touchScreen`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#touchscreen)

---

### \_handleToggle()

&gt; `private` **\_handleToggle**(`e`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `void`

Defined in: [src/components/card/bento/bento-card.ts:97](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L97)

Synchronizes the `expanded` property with the state of the `<details>` element
whenever the user interacts with the toggle icon or summary.

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

`e`

</td>
<td>

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

</td>
<td>

The toggle event from the `<details>` element.

</details></td>
</tr>
</tbody>
</table>

#### Returns

`void`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:58](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L58)

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

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:64](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L64)

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

Defined in: [src/components/card/bento/bento-card.ts:101](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/bento/bento-card.ts#L101)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`UIAwareElement.render`
</details></body></html>
