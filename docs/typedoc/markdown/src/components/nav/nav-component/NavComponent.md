<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/nav/nav-component](../nav-component.md) / NavComponent

# Class: NavComponent

Defined in: [src/components/nav/nav-component.ts:18](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L18)

A navigation component that renders primary tabs synchronized with the application's URL hash routes.

## Element

nav-component

## Cssprop

[--nav-component-icon-animation=225ms] - The duration of the icon's fill and color transition.

## Cssprop

[--nav-component-icon-animation-reduced=1ms] - The duration of the icon's transition when motion is reduced.

## Hierarchy

[View Summary](../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/nav/nav-component.ts:20](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L20)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### \_activeTabIndex

&gt; `private` **\_activeTabIndex**: `number` = `0`

Defined in: [src/components/nav/nav-component.ts:118](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L118)

Track the active index as state

---

### #tabIndexAndRouteFromHash()

&gt; `private` **#tabIndexAndRouteFromHash**(): \{ `index`: `number`; `route`: `Route`; \}

Defined in: [src/components/nav/nav-component.ts:161](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L161)

Reads [Location.hash](https://developer.mozilla.org/docs/Web/API/Location/hash) and returns an object containing the Route and indexing [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### Returns

\{ `index`: `number`; `route`: `Route`; \}

{ index: number, route: Route }

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`index`

</td>
<td>

`number`

</td>
<td>

[src/components/nav/nav-component.ts:161](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L161)

</td>
</tr>
<tr>
<td>

`route`

</td>
<td>

`Route`

</td>
<td>

[src/components/nav/nav-component.ts:161](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L161)

</td>
</tr>
</tbody>
</table>

---

### #handleHashChange()

&gt; `private` **#handleHashChange**(): `void`

Defined in: [src/components/nav/nav-component.ts:172](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L172)

Syncs internal state with the URL hash.

#### Returns

`void`

---

### #updateTabState()

&gt; `private` **#updateTabState**(`index`: `number`): `void`

Defined in: [src/components/nav/nav-component.ts:202](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L202)

Updates the visual state of tabs and panels based on the index.

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

`index`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

---

### #updateCarousel()

&gt; `private` **#updateCarousel**(`index`: `number`): `void`

Defined in: [src/components/nav/nav-component.ts:218](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L218)

Updates external DOM via style manipulations and blind queries

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

`index`

</td>
<td>

`number`

</td>
<td>

The current [\_activeTabIndex](#_activetabindex)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

---

### #onTabChange()

&gt; `private` **#onTabChange**(`event`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `void`

Defined in: [src/components/nav/nav-component.ts:249](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L249)

Handles user clicks on tabs. Updates URL and UI.

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

The emitted [Event](https://developer.mozilla.org/docs/Web/API/Event) from the HTML

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

---

### #renderTabs()

&gt; `private` **#renderTabs**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/nav/nav-component.ts:282](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L282)

Creates a [TemplateResult](https://lit.dev/docs/api/templates/#TemplateResult) consisting of [@material/web!MdTabs](https://github.com/material-components/material-web/blob/main/docs/components/tabs.md), [@material/web!MdPrimaryTab](https://github.com/material-components/material-web/blob/main/docs/components/tabs.md), and [@material/web!MdIcon](https://github.com/material-components/material-web/tree/main/docs/components/icon.md)s

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/nav/nav-component.ts:144](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L144)

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

Defined in: [src/components/nav/nav-component.ts:152](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L152)

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

Defined in: [src/components/nav/nav-component.ts:318](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L318)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

## updates

### firstUpdated()

&gt; `protected` **firstUpdated**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: [src/components/nav/nav-component.ts:273](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/nav/nav-component.ts#L273)

Invoked when the element is first updated. Implement to perform one time
work on the element after update.

```ts
firstUpdated() {
  this.renderRoot.getElementById('my-text-area').focus();
}
```

Setting properties inside this method will trigger the element to update
again after this update cycle completes.

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

`_changedProperties`

</td>
<td>

`PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;

</td>
<td>

Map of changed properties with old values

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Overrides

`LitElement.firstUpdated`

</body></html>
