<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.4**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/card/profile/profile-card](../README.md) / ProfileCard

# Class: ProfileCard

Defined in: [src/components/card/profile/profile-card.ts:21](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/profile/profile-card.ts#L21)

## Element

profile-card

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/profile/profile-card.ts:23](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/profile/profile-card.ts#L23)

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

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/card/profile/profile-card.ts:138](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/card/profile/profile-card.ts#L138)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`UIAwareElement.render`
</body></html>
