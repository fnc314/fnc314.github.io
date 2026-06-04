<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/dialog/configs/configs-dialog](../configs-dialog.md) / ConfigsDialog

# Class: ConfigsDialog

Defined in: [src/components/dialog/configs/configs-dialog.ts:61](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/configs/configs-dialog.ts#L61)

## Element

configs-dialog

## Fires

fab.change - Dispatched when a FAB's position or style is modified.

## Fires

color_scheme.change - Dispatched when the UI theme, mode, or contrast is changed.

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/dialog/configs/configs-dialog.ts:63](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/configs/configs-dialog.ts#L63)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### showDialog()

&gt; **showDialog**(`formContent?`: `FormContent`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

Defined in: [src/components/dialog/configs/configs-dialog.ts:404](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/configs/configs-dialog.ts#L404)

Shows the configuration dialog.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`formContent`

</td>
<td>

`FormContent`

</td>
<td>

`"ui-mode"`

</td>
<td>

The initial section to display in the dialog. Defaults to "ui-mode".

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

A promise that resolves when the dialog is shown.

---

### hideDialog()

&gt; **hideDialog**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

Defined in: [src/components/dialog/configs/configs-dialog.ts:415](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/configs/configs-dialog.ts#L415)

Hides the configuration dialog.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

A promise that resolves when the dialog is closed.

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/dialog/configs/configs-dialog.ts:475](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/configs/configs-dialog.ts#L475)

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

Defined in: [src/components/dialog/configs/configs-dialog.ts:484](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/configs/configs-dialog.ts#L484)

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

Defined in: [src/components/dialog/configs/configs-dialog.ts:736](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/configs/configs-dialog.ts#L736)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
