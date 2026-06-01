<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/dialog/step-up/step-up-dialog](../step-up-dialog.md) / StepUpDialog

# Class: StepUpDialog

Defined in: [src/components/dialog/step-up/step-up-dialog.ts:26](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/step-up/step-up-dialog.ts#L26)

## Element

step-up-dialog

## Slot

headline - The [MdDialog](https://github.com/material-components/material-web/tree/main/docs/components/dialog.md) headline [Element.slot](https://developer.mozilla.org/docs/Web/API/Element/slot)

## Slot

content - The body of the [MdDialog](https://github.com/material-components/material-web/tree/main/docs/components/dialog.md)

## Slot

actions - The area of dialog action buttons

## Fires

stepUpComplete - Dispatched when the user confirms or cancels the action.

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/dialog/step-up/step-up-dialog.ts:28](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/step-up/step-up-dialog.ts#L28)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### dialogStyle

&gt; **dialogStyle**: `StepUpDialogStyle` = `"confirm"`

Defined in: [src/components/dialog/step-up/step-up-dialog.ts:88](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/step-up/step-up-dialog.ts#L88)

Determines which StepUpDialogStyle

---

### dialogContentString

&gt; **dialogContentString**: `string` = `""`

Defined in: [src/components/dialog/step-up/step-up-dialog.ts:95](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/step-up/step-up-dialog.ts#L95)

The central content of the [MdDialog](https://github.com/material-components/material-web/tree/main/docs/components/dialog.md)

---

### showDialog()

&gt; **showDialog**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

Defined in: [src/components/dialog/step-up/step-up-dialog.ts:104](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/step-up/step-up-dialog.ts#L104)

Shows the step-up confirmation dialog.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

A promise that resolves when the dialog is shown.

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/dialog/step-up/step-up-dialog.ts:142](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/dialog/step-up/step-up-dialog.ts#L142)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
