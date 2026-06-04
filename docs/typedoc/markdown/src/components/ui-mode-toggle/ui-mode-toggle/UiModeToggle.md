<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/ui-mode-toggle/ui-mode-toggle](../ui-mode-toggle.md) / UiModeToggle

# Class: UiModeToggle

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:41](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/ui-mode-toggle/ui-mode-toggle.ts#L41)

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
to align with the application's Material Design 3 aesthetic.

## Hierarchy

[View Summary](../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### reset()

&gt; **reset**(): `void`

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:265](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/ui-mode-toggle/ui-mode-toggle.ts#L265)

Resets the UI mode toggle to its default settings.

#### Returns

`void`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:194](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/ui-mode-toggle/ui-mode-toggle.ts#L194)

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

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:201](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/ui-mode-toggle/ui-mode-toggle.ts#L201)

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

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:270](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/ui-mode-toggle/ui-mode-toggle.ts#L270)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

#### Overrides

`LitElement.render`

## styles

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/ui-mode-toggle/ui-mode-toggle.ts:42](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/ui-mode-toggle/ui-mode-toggle.ts#L42)

Array of styles to apply to the element. The styles should be defined
using the css tag function, via constructible stylesheets, or
imported from native CSS module scripts.

Note on Content Security Policy:

Element styles are implemented with `<style>` tags when the browser doesn't
support adopted StyleSheets. To use such `<style>` tags with the style-src
CSP directive, the style-src value must either include 'unsafe-inline' or
`nonce-<base64-value>` with `<base64-value>` replaced be a server-generated
nonce.

To provide a nonce to use on generated `<style>` elements, set
`window.litNonce` to a server-generated nonce in your page's HTML, before
loading application code:

```html
<script>
  // Generated and unique per request:
  window.litNonce = "a1b2c3d4";
</script>
```

#### Nocollapse

#### Overrides

`LitElement.styles`
</style></body></html>
