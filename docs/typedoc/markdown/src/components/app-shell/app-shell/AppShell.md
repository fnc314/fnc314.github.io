<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/app-shell/app-shell](../app-shell.md) / AppShell

# Class: AppShell

Defined in: [src/components/app-shell/app-shell.ts:24](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L24)

## Slot

[app-nav] - Where the [@fnc314/com.fnc314.website!NavComponent](/Users/fnc314/Code/websites/fnc314.github.io/src/components/nav/nav-component.ts) is placed

## Slot

[app-content] - The place for the dynamic application content

## Hierarchy

[View Summary](../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/app-shell/app-shell.ts:26](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L26)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/app-shell/app-shell.ts:146](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L146)

Renders the application shell.
Includes navigation and content slots.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

---

### firstUpdated()

&gt; `protected` **firstUpdated**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: [src/components/app-shell/app-shell.ts:46](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L46)

Lifecycle method called after the first update.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`_changedProperties`

</td>
<td>

`PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Overrides

`LitElement.firstUpdated`

---

### onColorSchemeChange()

&gt; `private` **onColorSchemeChange**(`event`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `void`

Defined in: [src/components/app-shell/app-shell.ts:105](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L105)

Event handler for color scheme changes.
Updates the UI icon, Material theme variables, and meta theme color.

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

`event`

</td>
<td>

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

</td>
<td>

The color scheme configuration change event.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

---

### onAppConfigsChange()

&gt; `private` **onAppConfigsChange**(`_event`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `void`

Defined in: [src/components/app-shell/app-shell.ts:116](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L116)

Syncs the component state with the global application configuration.

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

`_event`

</td>
<td>

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

</td>
<td>

AppConfigsChange event.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/app-shell/app-shell.ts:118](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L118)

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

Defined in: [src/components/app-shell/app-shell.ts:135](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/app-shell/app-shell.ts#L135)

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

</body></html>
