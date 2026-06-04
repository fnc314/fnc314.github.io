<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/card/settings/settings-card](../settings-card.md) / SettingsCard

# Class: SettingsCard

Defined in: [src/components/card/settings/settings-card.ts:22](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L22)

## Element

settings-card

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/card/settings/settings-card.ts:78](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L78)

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

Defined in: [src/components/card/settings/settings-card.ts:101](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L101)

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

Defined in: [src/components/card/settings/settings-card.ts:152](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L152)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

## styles

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/settings/settings-card.ts:23](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L23)

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
