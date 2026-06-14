<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/card/settings/settings-card](../README.md) / SettingsCard

# Class: SettingsCard

Defined in: [src/components/card/settings/settings-card.ts:23](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L23)

## Element

settings-card

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/settings/settings-card.ts:25](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L25)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### formattedDate

&gt; `private` **formattedDate**: `string`

Defined in: [src/components/card/settings/settings-card.ts:99](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L99)

Creates an [Intl.DateTimeFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) and calls [Intl.DateTimeFormat.format](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format)
on [time](#) to render the user presented timestamp

#### Memberof

SettingsCard

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/card/settings/settings-card.ts:111](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L111)

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

Defined in: [src/components/card/settings/settings-card.ts:117](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L117)

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

Defined in: [src/components/card/settings/settings-card.ts:168](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/settings/settings-card.ts#L168)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
