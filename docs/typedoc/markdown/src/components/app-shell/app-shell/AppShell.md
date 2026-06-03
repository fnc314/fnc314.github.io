<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/app-shell/app-shell](../app-shell.md) / AppShell

# Class: AppShell

Defined in: [src/components/app-shell/app-shell.ts:39](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L39)

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

Defined in: [src/components/app-shell/app-shell.ts:41](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L41)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/app-shell/app-shell.ts:346](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L346)

Renders the application shell.
Includes navigation and content slots, global dialogs, and floating action buttons.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

---

### firstUpdated()

&gt; `protected` **firstUpdated**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: [src/components/app-shell/app-shell.ts:216](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L216)

Lifecycle method called after the first update.
Initializes state from the configuration service and applies initial FAB positions.

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

Map of changed properties.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Overrides

`LitElement.firstUpdated`

---

### updated()

&gt; `protected` **updated**(`changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: [src/components/app-shell/app-shell.ts:231](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L231)

Lifecycle method called after every update.
Performs manual Shadow DOM adjustments for specific Material Web component styles
that cannot be easily reached via CSS Custom Properties.

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

`changedProperties`

</td>
<td>

`PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;

</td>
<td>

Map of changed properties.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Overrides

`LitElement.updated`

---

### appConfigs

&gt; `private` **appConfigs**: `AppConfigs`

Defined in: [src/components/app-shell/app-shell.ts:127](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L127)

The current global application configuration state.

---

### \_uiModeIcon

&gt; `private` **\_uiModeIcon**: `"dark_mode"` \| `"light_mode"` \| `"routine"`

Defined in: [src/components/app-shell/app-shell.ts:131](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L131)

The icon associated with the current color scheme mode.

---

### configsDialog

&gt; `private` **configsDialog**: [`ConfigsDialog`](../../dialog/configs/configs-dialog/ConfigsDialog.md)

Defined in: [src/components/app-shell/app-shell.ts:135](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L135)

Reference to the configuration dialog.

---

### fabMenu

&gt; `private` **fabMenu**: [`FabMenu`](../../fab-menu/fab-menu/FabMenu.md)

Defined in: [src/components/app-shell/app-shell.ts:139](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L139)

Reference to the FAB menu component.

---

### settingsFabConfig

&gt; `private` **settingsFabConfig**: `FabConfig`

Defined in: [src/components/app-shell/app-shell.ts:143](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L143)

The configuration for the settings FAB.

---

### connectDialog

&gt; `private` **connectDialog**: [`ConnectDialog`](../../dialog/connect/connect-dialog/ConnectDialog.md)

Defined in: [src/components/app-shell/app-shell.ts:147](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L147)

Reference to the connect dialog.

---

### connectFab

&gt; `private` **connectFab**: [`MdFab`](https://github.com/material-components/material-web/tree/main/docs/components/fab.md)

Defined in: [src/components/app-shell/app-shell.ts:154](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L154)

Reference to the connect FAB.
This is an MdFab component.

---

### onFabChange()

&gt; `private` **onFabChange**(`fab`: `"settings"` \| `"connect"`, `fabConfig`: `FabConfig`): `void`

Defined in: [src/components/app-shell/app-shell.ts:170](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L170)

Updates the state and DOM representation of a FAB when its configuration changes.

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

`fab`

</td>
<td>

`"settings"` \| `"connect"`

</td>
<td>

Which FAB is being updated ('settings' or 'connect').

</td>
</tr>
<tr>
<td>

`fabConfig`

</td>
<td>

`FabConfig`

</td>
<td>

The new configuration settings for the FAB.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

---

### onColorSchemeChange()

&gt; `private` **onColorSchemeChange**(`event`: `ColorSchemeConfigChange`): `void`

Defined in: [src/components/app-shell/app-shell.ts:248](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L248)

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

`ColorSchemeConfigChange`

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

&gt; `private` **onAppConfigsChange**(`event`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `void`

Defined in: [src/components/app-shell/app-shell.ts:259](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L259)

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

`event`

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

---

### uiModeIcon()

&gt; `private` **uiModeIcon**(`colorScheme`: `ColorSchemeConfigs`): `"dark_mode"` \| `"light_mode"` \| `"routine"`

Defined in: [src/components/app-shell/app-shell.ts:293](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L293)

Maps a color scheme name to a Material icon name.

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

`colorScheme`

</td>
<td>

`ColorSchemeConfigs`

</td>
<td>

The current color scheme configuration.

</td>
</tr>
</tbody>
</table>

#### Returns

`"dark_mode"` \| `"light_mode"` \| `"routine"`

The string identifier for the MdIcon.

---

### \_handleDialogOpened()

&gt; `private` **\_handleDialogOpened**(): `void`

Defined in: [src/components/app-shell/app-shell.ts:305](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L305)

Tracks open dialogs to manage body scroll locking.

#### Returns

`void`

---

### \_handleDialogClosed()

&gt; `private` **\_handleDialogClosed**(): `void`

Defined in: [src/components/app-shell/app-shell.ts:312](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L312)

Tracks closed dialogs to manage body scroll restoration.

#### Returns

`void`

---

### \_onFabMenuItemClick()

&gt; `private` **\_onFabMenuItemClick**(`formContent`: `FormContent`): `void`

Defined in: [src/components/app-shell/app-shell.ts:325](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L325)

Handles clicks on FAB menu items.
Closes the menu and opens the configuration dialog with the requested content.

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

`formContent`

</td>
<td>

`FormContent`

</td>
<td>

The type of configuration form to display.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

---

### \_getFabLabel()

&gt; `private` **\_getFabLabel**(`fab`: `string`, `config`: `FabConfig`): `string`

Defined in: [src/components/app-shell/app-shell.ts:337](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L337)

Generates the label string for a FAB based on its configuration style.

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

`fab`

</td>
<td>

`string`

</td>
<td>

The FAB identifier.

</td>
</tr>
<tr>
<td>

`config`

</td>
<td>

`FabConfig`

</td>
<td>

The FAB configuration.

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

The label string or an empty string if the style is icon-only.

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/app-shell/app-shell.ts:263](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L263)

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

Defined in: [src/components/app-shell/app-shell.ts:281](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/app-shell/app-shell.ts#L281)

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
