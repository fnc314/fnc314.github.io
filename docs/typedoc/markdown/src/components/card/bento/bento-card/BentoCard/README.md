<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/card/bento/bento-card](../README.md) / BentoCard

# Class: BentoCard

Defined in: [src/components/card/bento/bento-card.ts:32](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L32)

## Element

bento-card

## Slot

header - Content to be displayed in the card's header/summary area.

## Slot

- Default slot for card content. Slotted `h2` elements receive standardized header styling.

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/bento/bento-card.ts:34](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L34)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### scrollable

&gt; **scrollable**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:40](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L40)

Enables internal vertical scrolling for content.

---

### expanded

&gt; **expanded**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:47](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L47)

Reflects and controls the open state of the card.

---

### enableHover

&gt; **enableHover**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:54](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L54)

Opt-in to the hover elevation/shift effect.

---

### enableFocus

&gt; **enableFocus**: `boolean` = `false`

Defined in: [src/components/card/bento/bento-card.ts:61](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L61)

Opt-in to the focus-within border/shadow shift effect.

---

### bentoCardTitle

&gt; **bentoCardTitle**: `string` = `""`

Defined in: [src/components/card/bento/bento-card.ts:71](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L71)

An optional `string` which, when set, suppresses the `slot[name="header"]`

---

### \_handleToggle()

&gt; `private` **\_handleToggle**(`e`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `void`

Defined in: [src/components/card/bento/bento-card.ts:79](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L79)

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

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/card/bento/bento-card.ts:83](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/bento/bento-card.ts#L83)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</details></body></html>
