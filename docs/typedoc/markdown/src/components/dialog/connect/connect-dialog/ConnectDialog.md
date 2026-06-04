<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/dialog/connect/connect-dialog](../connect-dialog.md) / ConnectDialog

# Class: ConnectDialog

Defined in: [src/components/dialog/connect/connect-dialog.ts:22](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/connect/connect-dialog.ts#L22)

## Cssprop

[--connect-dialog-content-transition=0.3s] - The animation duration for expanding/collapsing connection details.

## Element

connect-dialog

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/dialog/connect/connect-dialog.ts:24](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/connect/connect-dialog.ts#L24)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### showDialog()

&gt; **showDialog**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

Defined in: [src/components/dialog/connect/connect-dialog.ts:214](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/connect/connect-dialog.ts#L214)

Shows the connect dialog and applies a custom border to the internal container.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

A promise that resolves when the dialog is shown.

---

### hideDialog()

&gt; **hideDialog**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

Defined in: [src/components/dialog/connect/connect-dialog.ts:227](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/connect/connect-dialog.ts#L227)

Maps to [MdDialog](https://github.com/material-components/material-web/tree/main/docs/components/dialog.md)'s close method

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

A [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) resolving when the dialog is dismissed

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/dialog/connect/connect-dialog.ts:255](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/connect/connect-dialog.ts#L255)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
