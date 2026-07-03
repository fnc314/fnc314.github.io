<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/ui-mode-toggle/ui-mode-toggle](../README.md) / UiModeToggle

# Class: UiModeToggle

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:41](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/ui-mode-toggle/ui-mode-toggle.ts#L41)

## Element

ui-mode-toggle

## Fires

color_scheme.change - Dispatched when the UI mode (light/dark/system) or color scheme contrast is changed,
propagating the new `AppConfigs["colorScheme"]` details.

## Fires

colorschemechange - Event from `dark-mode-toggle` when the scheme changes.

## Fires

permanentcolorscheme - Event from `dark-mode-toggle` when the persistence changes.

## Remarks

The component applies custom styling to the encapsulated `dark-mode-toggle` using CSS parts
to align with the application"s Material Design 3 aesthetic.

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`UIAwareElement`](../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:43](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/ui-mode-toggle/ui-mode-toggle.ts#L43)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`UIAwareElement.styles`

---

### reset()

&gt; **reset**(): `void`

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:154](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/ui-mode-toggle/ui-mode-toggle.ts#L154)

Resets the UI mode toggle to its default settings.

#### Returns

`void`

---

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:37](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L37)

The BreakpointLabel as determined by _SCREEN_ width against
Breakpoints.BREAKPOINT\_LABELS

#### Inherited from

[`UIAwareElement`](../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`breakpoint`](../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#breakpoint)

---

### touchScreen

&gt; `protected` **touchScreen**: `boolean`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:52](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L52)

Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from `:root`
and tests against `"true"`,

#### Inherited from

[`UIAwareElement`](../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`touchScreen`](../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#touchscreen)

---

### \_ready

&gt; `private` **\_ready**: `boolean` = `false`

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:69](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/ui-mode-toggle/ui-mode-toggle.ts#L69)

Guards against the synthetic `colorschemechange` / `permanentcolorscheme`
events that `dark-mode-toggle` dispatches at the end of its
`connectedCallback` (which runs _during_ this element's first render).
Reacting to that echo would mutate reactive state mid-update — triggering
Lit's `change-in-update` warning — and would clobber a `SYSTEM` preference
with the resolved light/dark value. We only honor these events once the
first render has completed (i.e. after a genuine user toggle).

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:159](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/ui-mode-toggle/ui-mode-toggle.ts#L159)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

#### Overrides

`UIAwareElement.render`

## updates

### firstUpdated()

&gt; `protected` **firstUpdated**(): `void`

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:71](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/ui-mode-toggle/ui-mode-toggle.ts#L71)

Invoked when the element is first updated. Implement to perform one time
work on the element after update.

```ts
firstUpdated() {
  this.renderRoot.getElementById('my-text-area').focus();
}
```

Setting properties inside this method will trigger the element to update
again after this update cycle completes.

#### Returns

`void`

#### Overrides

`UIAwareElement.firstUpdated`
</body></html>
