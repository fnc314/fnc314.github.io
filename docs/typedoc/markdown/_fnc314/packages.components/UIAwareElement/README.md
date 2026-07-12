<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.components](../README.md) / UIAwareElement

# Abstract Class: UIAwareElement

Defined in: [packages/components/src/mixins/ui-aware-element/ui-aware-element.ts:20](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/mixins/ui-aware-element/ui-aware-element.ts#L20)

An extension of [LitElement](https://lit.dev/docs/api/LitElement/) which encapsulates interactivity
with [@fnc314/packages.services!configsService](../../packages.services/configsService-1/README.md) to expose `darkMode` as an internal `@state`
by leveraging `connectedCallback` and `disconnectedCallbacak` for implementers.
Also exposes `breakpoint` to expose (from `window` resize events) which
[@fnc314/packages.design-tokens!Breakpoints.BreakpointLabel](../../packages.design-tokens/Breakpoints/BreakpointLabel/README.md) is currently applicable _from the screen level_.
The current [@fnc314/packages.design-tokens!Breakpoints.BreakpointLabel](../../packages.design-tokens/Breakpoints/BreakpointLabel/README.md) is determined by [@fnc314/packages.design-tokens!Breakpoints.CSS\_VARIABLE\_BREAKPOINT\_LABEL](../../packages.design-tokens/Breakpoints/CSS_VARIABLE_BREAKPOINT_LABEL/README.md)

UIModeAwareElement

## Hierarchy

[View Summary](../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

### Extended by

- [`BentoLayout`](../BentoLayout/README.md)
- [`BentoCard`](../BentoCard/README.md)
- [`BlogCard`](../BlogCard/README.md)
- [`CodeCard`](../CodeCard/README.md)
- [`EducationCard`](../EducationCard/README.md)
- [`ExperienceCard`](../ExperienceCard/README.md)
- [`ProfileCard`](../ProfileCard/README.md)
- [`SettingsCard`](../SettingsCard/README.md)
- [`SkillsCard`](../SkillsCard/README.md)
- [`CodeRepo`](../CodeRepo/README.md)
- [`ArtifactConnection`](../ArtifactConnection/README.md)
- [`DirectConnection`](../DirectConnection/README.md)
- [`ProfessionalConnection`](../ProfessionalConnection/README.md)
- [`EducationInstitution`](../EducationInstitution/README.md)
- [`BlogEntry`](../BlogEntry/README.md)
- [`UiModeToggle`](../UiModeToggle/README.md)
- [`VersionTag`](../VersionTag/README.md)
- [`WordCloud`](../WordCloud/README.md)
- [`WordTag`](../WordTag/README.md)
- [`WorkExperience`](../WorkExperience/README.md)

## Constructors

### Constructor

&gt; **new UIAwareElement**(): `UIAwareElement`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:527

#### Returns

`UIAwareElement`

#### Inherited from

`LitElement.constructor`

## attributes

### observedAttributes

#### Get Signature

&gt; **get** `static` **observedAttributes**(): `string`[]

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:364

Returns a list of attributes corresponding to the registered properties.

##### Nocollapse

##### Returns

`string`[]

#### Inherited from

`LitElement.observedAttributes`

---

### attributeChangedCallback()

&gt; **attributeChangedCallback**(`name`: `string`, `_old`: `string` \| `null`, `value`: `string` \| `null`): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:597

Synchronizes property values when attributes change.

Specifically, when an attribute is set, the corresponding property is set.
You should rarely need to implement this callback. If this method is
overridden, `super.attributeChangedCallback(name, _old, value)` must be
called.

See [responding to attribute changes](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
on MDN for more information about the `attributeChangedCallback`.

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

`name`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`_old`

</td>
<td>

`string` \| `null`

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`string` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.attributeChangedCallback`

## controllers

### addController()

&gt; **addController**(`controller`: `ReactiveController`): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:542

Registers a `ReactiveController` to participate in the element's reactive
update cycle. The element automatically calls into any registered
controllers during its lifecycle callbacks.

If the element is connected when `addController()` is called, the
controller's `hostConnected()` callback will be immediately called.

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

`controller`

</td>
<td>

`ReactiveController`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.addController`

---

### removeController()

&gt; **removeController**(`controller`: `ReactiveController`): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:547

Removes a `ReactiveController` from the element.

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

`controller`

</td>
<td>

`ReactiveController`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.removeController`

## dev-mode

### disableWarning?

&gt; `static` `optional` **disableWarning?**: (`warningKind`: `WarningKind`) =&gt; `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:241

Disable the given warning category for this class.

This method only exists in development builds, so it should be accessed
with a guard like:

```ts
// Disable for all ReactiveElement subclasses
ReactiveElement.disableWarning?.("migration");

// Disable for only MyElement and subclasses
MyElement.disableWarning?.("migration");
```

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

`warningKind`

</td>
<td>

`WarningKind`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Nocollapse

#### Inherited from

`LitElement.disableWarning`

---

### enabledWarnings?

&gt; `static` `optional` **enabledWarnings?**: `WarningKind`[]

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:205

Read or set all the enabled warning categories for this class.

This property is only used in development builds.

#### Nocollapse

#### Inherited from

`LitElement.enabledWarnings`

---

### enableWarning?

&gt; `static` `optional` **enableWarning?**: (`warningKind`: `WarningKind`) =&gt; `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:223

Enable the given warning category for this class.

This method only exists in development builds, so it should be accessed
with a guard like:

```ts
// Enable for all ReactiveElement subclasses
ReactiveElement.enableWarning?.("migration");

// Enable for only MyElement and subclasses
MyElement.enableWarning?.("migration");
```

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

`warningKind`

</td>
<td>

`WarningKind`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Nocollapse

#### Inherited from

`LitElement.enableWarning`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [packages/components/src/mixins/ui-aware-element/ui-aware-element.ts:63](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/mixins/ui-aware-element/ui-aware-element.ts#L63)

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

Defined in: [packages/components/src/mixins/ui-aware-element/ui-aware-element.ts:69](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/mixins/ui-aware-element/ui-aware-element.ts#L69)

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

## Other

### accessKey

&gt; **accessKey**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17735

The **`HTMLElement.accessKey`** property sets the keystroke which a user can press to jump to a given element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKey)

#### Inherited from

`LitElement.accessKey`

---

### accessKeyLabel

&gt; `readonly` **accessKeyLabel**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17741

The **`HTMLElement.accessKeyLabel`** read-only property returns a string containing the element's browser-assigned access key (if any); otherwise it returns an empty string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKeyLabel)

#### Inherited from

`LitElement.accessKeyLabel`

---

### ariaActiveDescendantElement

&gt; **ariaActiveDescendantElement**: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3242

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaActiveDescendantElement)

#### Inherited from

`LitElement.ariaActiveDescendantElement`

---

### ariaAtomic

&gt; **ariaAtomic**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3244

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)

#### Inherited from

`LitElement.ariaAtomic`

---

### ariaAutoComplete

&gt; **ariaAutoComplete**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3246

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)

#### Inherited from

`LitElement.ariaAutoComplete`

---

### ariaBrailleLabel

&gt; **ariaBrailleLabel**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3248

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel)

#### Inherited from

`LitElement.ariaBrailleLabel`

---

### ariaBrailleRoleDescription

&gt; **ariaBrailleRoleDescription**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3250

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription)

#### Inherited from

`LitElement.ariaBrailleRoleDescription`

---

### ariaBusy

&gt; **ariaBusy**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3252

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)

#### Inherited from

`LitElement.ariaBusy`

---

### ariaChecked

&gt; **ariaChecked**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3254

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)

#### Inherited from

`LitElement.ariaChecked`

---

### ariaColCount

&gt; **ariaColCount**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3256

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)

#### Inherited from

`LitElement.ariaColCount`

---

### ariaColIndex

&gt; **ariaColIndex**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3258

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)

#### Inherited from

`LitElement.ariaColIndex`

---

### ariaColIndexText

&gt; **ariaColIndexText**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3260

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText)

#### Inherited from

`LitElement.ariaColIndexText`

---

### ariaColSpan

&gt; **ariaColSpan**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3262

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)

#### Inherited from

`LitElement.ariaColSpan`

---

### ariaControlsElements

&gt; **ariaControlsElements**: readonly [`Element`](https://developer.mozilla.org/docs/Web/API/Element)[] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3264

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaControlsElements)

#### Inherited from

`LitElement.ariaControlsElements`

---

### ariaCurrent

&gt; **ariaCurrent**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3266

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)

#### Inherited from

`LitElement.ariaCurrent`

---

### ariaDescribedByElements

&gt; **ariaDescribedByElements**: readonly [`Element`](https://developer.mozilla.org/docs/Web/API/Element)[] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3268

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescribedByElements)

#### Inherited from

`LitElement.ariaDescribedByElements`

---

### ariaDescription

&gt; **ariaDescription**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3270

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription)

#### Inherited from

`LitElement.ariaDescription`

---

### ariaDetailsElements

&gt; **ariaDetailsElements**: readonly [`Element`](https://developer.mozilla.org/docs/Web/API/Element)[] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3272

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDetailsElements)

#### Inherited from

`LitElement.ariaDetailsElements`

---

### ariaDisabled

&gt; **ariaDisabled**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3274

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)

#### Inherited from

`LitElement.ariaDisabled`

---

### ariaErrorMessageElements

&gt; **ariaErrorMessageElements**: readonly [`Element`](https://developer.mozilla.org/docs/Web/API/Element)[] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3276

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaErrorMessageElements)

#### Inherited from

`LitElement.ariaErrorMessageElements`

---

### ariaExpanded

&gt; **ariaExpanded**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3278

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)

#### Inherited from

`LitElement.ariaExpanded`

---

### ariaFlowToElements

&gt; **ariaFlowToElements**: readonly [`Element`](https://developer.mozilla.org/docs/Web/API/Element)[] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3280

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaFlowToElements)

#### Inherited from

`LitElement.ariaFlowToElements`

---

### ariaHasPopup

&gt; **ariaHasPopup**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3282

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)

#### Inherited from

`LitElement.ariaHasPopup`

---

### ariaHidden

&gt; **ariaHidden**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3284

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)

#### Inherited from

`LitElement.ariaHidden`

---

### ariaInvalid

&gt; **ariaInvalid**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3286

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaInvalid)

#### Inherited from

`LitElement.ariaInvalid`

---

### ariaKeyShortcuts

&gt; **ariaKeyShortcuts**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3288

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)

#### Inherited from

`LitElement.ariaKeyShortcuts`

---

### ariaLabel

&gt; **ariaLabel**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3290

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)

#### Inherited from

`LitElement.ariaLabel`

---

### ariaLabelledByElements

&gt; **ariaLabelledByElements**: readonly [`Element`](https://developer.mozilla.org/docs/Web/API/Element)[] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3292

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabelledByElements)

#### Inherited from

`LitElement.ariaLabelledByElements`

---

### ariaLevel

&gt; **ariaLevel**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3294

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)

#### Inherited from

`LitElement.ariaLevel`

---

### ariaLive

&gt; **ariaLive**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3296

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)

#### Inherited from

`LitElement.ariaLive`

---

### ariaModal

&gt; **ariaModal**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3298

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)

#### Inherited from

`LitElement.ariaModal`

---

### ariaMultiLine

&gt; **ariaMultiLine**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3300

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)

#### Inherited from

`LitElement.ariaMultiLine`

---

### ariaMultiSelectable

&gt; **ariaMultiSelectable**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3302

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)

#### Inherited from

`LitElement.ariaMultiSelectable`

---

### ariaOrientation

&gt; **ariaOrientation**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3304

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)

#### Inherited from

`LitElement.ariaOrientation`

---

### ariaOwnsElements

&gt; **ariaOwnsElements**: readonly [`Element`](https://developer.mozilla.org/docs/Web/API/Element)[] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3306

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOwnsElements)

#### Inherited from

`LitElement.ariaOwnsElements`

---

### ariaPlaceholder

&gt; **ariaPlaceholder**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3308

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)

#### Inherited from

`LitElement.ariaPlaceholder`

---

### ariaPosInSet

&gt; **ariaPosInSet**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3310

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)

#### Inherited from

`LitElement.ariaPosInSet`

---

### ariaPressed

&gt; **ariaPressed**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3312

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)

#### Inherited from

`LitElement.ariaPressed`

---

### ariaReadOnly

&gt; **ariaReadOnly**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3314

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)

#### Inherited from

`LitElement.ariaReadOnly`

---

### ariaRelevant

&gt; **ariaRelevant**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3316

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant)

#### Inherited from

`LitElement.ariaRelevant`

---

### ariaRequired

&gt; **ariaRequired**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3318

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)

#### Inherited from

`LitElement.ariaRequired`

---

### ariaRoleDescription

&gt; **ariaRoleDescription**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3320

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)

#### Inherited from

`LitElement.ariaRoleDescription`

---

### ariaRowCount

&gt; **ariaRowCount**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3322

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)

#### Inherited from

`LitElement.ariaRowCount`

---

### ariaRowIndex

&gt; **ariaRowIndex**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3324

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)

#### Inherited from

`LitElement.ariaRowIndex`

---

### ariaRowIndexText

&gt; **ariaRowIndexText**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3326

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText)

#### Inherited from

`LitElement.ariaRowIndexText`

---

### ariaRowSpan

&gt; **ariaRowSpan**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3328

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)

#### Inherited from

`LitElement.ariaRowSpan`

---

### ariaSelected

&gt; **ariaSelected**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3330

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)

#### Inherited from

`LitElement.ariaSelected`

---

### ariaSetSize

&gt; **ariaSetSize**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3332

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)

#### Inherited from

`LitElement.ariaSetSize`

---

### ariaSort

&gt; **ariaSort**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3334

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)

#### Inherited from

`LitElement.ariaSort`

---

### ariaValueMax

&gt; **ariaValueMax**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3336

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)

#### Inherited from

`LitElement.ariaValueMax`

---

### ariaValueMin

&gt; **ariaValueMin**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3338

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)

#### Inherited from

`LitElement.ariaValueMin`

---

### ariaValueNow

&gt; **ariaValueNow**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3340

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)

#### Inherited from

`LitElement.ariaValueNow`

---

### ariaValueText

&gt; **ariaValueText**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3342

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)

#### Inherited from

`LitElement.ariaValueText`

---

### assignedSlot

&gt; `readonly` **assignedSlot**: [`HTMLSlotElement`](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:35365

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/assignedSlot)

#### Inherited from

`LitElement.assignedSlot`

---

### ATTRIBUTE\_NODE

&gt; `readonly` **ATTRIBUTE\_NODE**: `2`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26212

#### Inherited from

`LitElement.ATTRIBUTE_NODE`

---

### attributes

&gt; `readonly` **attributes**: [`NamedNodeMap`](https://developer.mozilla.org/docs/Web/API/NamedNodeMap)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13514

The **`Element.attributes`** property returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, not an Array, so it has no Array methods and the Attr nodes' indexes may differ among browsers. To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attributes)

#### Inherited from

`LitElement.attributes`

---

### attributeStyleMap

&gt; `readonly` **attributeStyleMap**: [`StylePropertyMap`](https://developer.mozilla.org/docs/Web/API/StylePropertyMap)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13928

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/attributeStyleMap)

#### Inherited from

`LitElement.attributeStyleMap`

---

### autocapitalize

&gt; **autocapitalize**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17747

The **`autocapitalize`** property of the HTMLElement interface represents the element's capitalization behavior for user input. It is available on all HTML elements, though it doesn't affect all of them, including:

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/autocapitalize)

#### Inherited from

`LitElement.autocapitalize`

---

### autocorrect

&gt; **autocorrect**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17753

The **`autocorrect`** property of the HTMLElement interface controls whether or not autocorrection of editable text is enabled for spelling and/or punctuation errors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/autocorrect)

#### Inherited from

`LitElement.autocorrect`

---

### autofocus

&gt; **autofocus**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:20122

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/autofocus)

#### Inherited from

`LitElement.autofocus`

---

### baseURI

&gt; `readonly` **baseURI**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26041

The read-only **`baseURI`** property of the Node interface returns the absolute base URL of the document containing the node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)

#### Inherited from

`LitElement.baseURI`

---

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [packages/components/src/mixins/ui-aware-element/ui-aware-element.ts:42](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/mixins/ui-aware-element/ui-aware-element.ts#L42)

The [@fnc314/packages.design-tokens!Breakpoints.BreakpointLabel](../../packages.design-tokens/Breakpoints/BreakpointLabel/README.md) as determined by _SCREEN_ width against
[@fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS](../../packages.design-tokens/Breakpoints/BREAKPOINT_LABELS/README.md)

---

### CDATA\_SECTION\_NODE

&gt; `readonly` **CDATA\_SECTION\_NODE**: `4`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26216

node is a CDATASection node.

#### Inherited from

`LitElement.CDATA_SECTION_NODE`

---

### childElementCount

&gt; `readonly` **childElementCount**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27044

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

#### Inherited from

`LitElement.childElementCount`

---

### childNodes

&gt; `readonly` **childNodes**: `NodeListOf`\&lt;`ChildNode`\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26047

The read-only **`childNodes`** property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)

#### Inherited from

`LitElement.childNodes`

---

### children

&gt; `readonly` **children**: [`HTMLCollection`](https://developer.mozilla.org/docs/Web/API/HTMLCollection)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27050

Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)

#### Inherited from

`LitElement.children`

---

### className

&gt; **className**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13527

The **`className`** property of the Element interface gets and sets the value of the class attribute of the specified element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)

#### Inherited from

`LitElement.className`

---

### clientHeight

&gt; `readonly` **clientHeight**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13533

The **`clientHeight`** read-only property of the Element interface is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientHeight)

#### Inherited from

`LitElement.clientHeight`

---

### clientLeft

&gt; `readonly` **clientLeft**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13539

The **`clientLeft`** read-only property of the Element interface returns the width of the left border of an element in pixels. It includes the width of the vertical scrollbar if the text direction of the element is right-to-left and if there is an overflow causing a left vertical scrollbar to be rendered. clientLeft does not include the left margin or the left padding.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientLeft)

#### Inherited from

`LitElement.clientLeft`

---

### clientTop

&gt; `readonly` **clientTop**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13545

The **`clientTop`** read-only property of the Element interface returns the width of the top border of an element in pixels.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientTop)

#### Inherited from

`LitElement.clientTop`

---

### clientWidth

&gt; `readonly` **clientWidth**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13551

The **`clientWidth`** read-only property of the Element interface is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels. It includes padding but excludes borders, margins, and vertical scrollbars (if present).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientWidth)

#### Inherited from

`LitElement.clientWidth`

---

### COMMENT\_NODE

&gt; `readonly` **COMMENT\_NODE**: `8`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26222

node is a Comment node.

#### Inherited from

`LitElement.COMMENT_NODE`

---

### contentEditable

&gt; **contentEditable**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13936

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/contentEditable)

#### Inherited from

`LitElement.contentEditable`

---

### currentCSSZoom

&gt; `readonly` **currentCSSZoom**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13557

The **`currentCSSZoom`** read-only property of the Element interface provides the "effective" CSS zoom of an element, taking into account the zoom applied to the element and all its parent elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/currentCSSZoom)

#### Inherited from

`LitElement.currentCSSZoom`

---

### customElementRegistry

&gt; `readonly` **customElementRegistry**: [`CustomElementRegistry`](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13558

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`customElementRegistry`](../BentoLayout/README.md#customelementregistry)

---

### darkMode

&gt; `protected` **darkMode**: `boolean`

Defined in: [packages/components/src/mixins/ui-aware-element/ui-aware-element.ts:28](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/mixins/ui-aware-element/ui-aware-element.ts#L28)

---

### dataset

&gt; `readonly` **dataset**: [`DOMStringMap`](https://developer.mozilla.org/docs/Web/API/DOMStringMap)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:20124

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dataset)

#### Inherited from

`LitElement.dataset`

---

### dir

&gt; **dir**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17759

The **`HTMLElement.dir`** property indicates the text writing directionality of the content of the current element. It reflects the element's dir attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dir)

#### Inherited from

`LitElement.dir`

---

### DOCUMENT\_FRAGMENT\_NODE

&gt; `readonly` **DOCUMENT\_FRAGMENT\_NODE**: `11`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26228

node is a DocumentFragment node.

#### Inherited from

`LitElement.DOCUMENT_FRAGMENT_NODE`

---

### DOCUMENT\_NODE

&gt; `readonly` **DOCUMENT\_NODE**: `9`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26224

node is a document.

#### Inherited from

`LitElement.DOCUMENT_NODE`

---

### DOCUMENT\_POSITION\_CONTAINED\_BY

&gt; `readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `16`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26239

Set when other is a descendant of node.

#### Inherited from

`LitElement.DOCUMENT_POSITION_CONTAINED_BY`

---

### DOCUMENT\_POSITION\_CONTAINS

&gt; `readonly` **DOCUMENT\_POSITION\_CONTAINS**: `8`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26237

Set when other is an ancestor of node.

#### Inherited from

`LitElement.DOCUMENT_POSITION_CONTAINS`

---

### DOCUMENT\_POSITION\_DISCONNECTED

&gt; `readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `1`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26231

Set when node and other are not in the same tree.

#### Inherited from

`LitElement.DOCUMENT_POSITION_DISCONNECTED`

---

### DOCUMENT\_POSITION\_FOLLOWING

&gt; `readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `4`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26235

Set when other is following node.

#### Inherited from

`LitElement.DOCUMENT_POSITION_FOLLOWING`

---

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

&gt; `readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `32`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26240

#### Inherited from

`LitElement.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`

---

### DOCUMENT\_POSITION\_PRECEDING

&gt; `readonly` **DOCUMENT\_POSITION\_PRECEDING**: `2`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26233

Set when other is preceding node.

#### Inherited from

`LitElement.DOCUMENT_POSITION_PRECEDING`

---

### DOCUMENT\_TYPE\_NODE

&gt; `readonly` **DOCUMENT\_TYPE\_NODE**: `10`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26226

node is a doctype.

#### Inherited from

`LitElement.DOCUMENT_TYPE_NODE`

---

### draggable

&gt; **draggable**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17765

The **`draggable`** property of the HTMLElement interface gets and sets a Boolean primitive indicating if the element is draggable.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/draggable)

#### Inherited from

`LitElement.draggable`

---

### ELEMENT\_NODE

&gt; `readonly` **ELEMENT\_NODE**: `1`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26211

node is an element.

#### Inherited from

`LitElement.ELEMENT_NODE`

---

### enterKeyHint

&gt; **enterKeyHint**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13938

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint)

#### Inherited from

`LitElement.enterKeyHint`

---

### ENTITY\_NODE

&gt; `readonly` **ENTITY\_NODE**: `6`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26218

#### Inherited from

`LitElement.ENTITY_NODE`

---

### ENTITY\_REFERENCE\_NODE

&gt; `readonly` **ENTITY\_REFERENCE\_NODE**: `5`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26217

#### Inherited from

`LitElement.ENTITY_REFERENCE_NODE`

---

### firstChild

&gt; `readonly` **firstChild**: `ChildNode` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26053

The read-only **`firstChild`** property of the Node interface returns the node's first child in the tree, or null if the node has no children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`firstChild`](../BentoLayout/README.md#firstchild)

---

### firstElementChild

&gt; `readonly` **firstElementChild**: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27056

Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`firstElementChild`](../BentoLayout/README.md#firstelementchild)

---

### hidden

&gt; **hidden**: `boolean` \| `"until-found"`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17771

The HTMLElement property **`hidden`** reflects the value of the element's hidden attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidden)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`hidden`](../BentoLayout/README.md#hidden)

---

### id

&gt; **id**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13564

The **`id`** property of the Element interface represents the element's identifier, reflecting the id global attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/id)

#### Inherited from

`LitElement.id`

---

### inert

&gt; **inert**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17777

The HTMLElement property **`inert`** reflects the value of the element's inert attribute. It is a boolean value that, when present, makes the browser "ignore" user input events for the element, including focus events and events from assistive technologies. The browser may also ignore page search and text selection in the element. This can be useful when building UIs such as modals where you would want to "trap" the focus inside the modal when it's visible.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inert)

#### Inherited from

`LitElement.inert`

---

### innerHTML

&gt; **innerHTML**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13570

The **`innerHTML`** property of the Element interface gets or sets the HTML or XML markup contained within the element, omitting any shadow roots in both cases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)

#### Inherited from

`LitElement.innerHTML`

---

### innerText

&gt; **innerText**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17783

The **`innerText`** property of the HTMLElement interface represents the rendered text content of a node and its descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/innerText)

#### Inherited from

`LitElement.innerText`

---

### inputMode

&gt; **inputMode**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13940

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inputMode)

#### Inherited from

`LitElement.inputMode`

---

### isConnected

&gt; `readonly` **isConnected**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26059

The read-only **`isConnected`** property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to a Document object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)

#### Inherited from

`LitElement.isConnected`

---

### isContentEditable

&gt; `readonly` **isContentEditable**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13942

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/isContentEditable)

#### Inherited from

`LitElement.isContentEditable`

---

### lang

&gt; **lang**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17789

The **`lang`** property of the HTMLElement interface indicates the base language of an element's attribute values and text content, in the form of a BCP 47 language tag. It reflects the element's lang attribute; the xml:lang attribute does not affect this property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/lang)

#### Inherited from

`LitElement.lang`

---

### lastChild

&gt; `readonly` **lastChild**: `ChildNode` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26065

The read-only **`lastChild`** property of the Node interface returns the last child of the node, or null if there are no child nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`lastChild`](../BentoLayout/README.md#lastchild)

---

### lastElementChild

&gt; `readonly` **lastElementChild**: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27062

Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`lastElementChild`](../BentoLayout/README.md#lastelementchild)

---

### localName

&gt; `readonly` **localName**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13576

The **`Element.localName`** read-only property returns the local part of the qualified name of an element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/localName)

#### Inherited from

`LitElement.localName`

---

### namespaceURI

&gt; `readonly` **namespaceURI**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13582

The **`Element.namespaceURI`** read-only property returns the namespace URI of the element, or null if the element is not in a namespace.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/namespaceURI)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`namespaceURI`](../BentoLayout/README.md#namespaceuri)

---

### nextElementSibling

&gt; `readonly` **nextElementSibling**: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26380

Returns the first following sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/nextElementSibling)

#### Inherited from

`LitElement.nextElementSibling`

---

### nextSibling

&gt; `readonly` **nextSibling**: `ChildNode` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26071

The read-only **`nextSibling`** property of the Node interface returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`nextSibling`](../BentoLayout/README.md#nextsibling)

---

### nodeName

&gt; `readonly` **nodeName**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26077

The read-only **`nodeName`** property of Node returns the name of the current node as a string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)

#### Inherited from

`LitElement.nodeName`

---

### nodeType

&gt; `readonly` **nodeType**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26083

The read-only **`nodeType`** property of a Node interface is an integer that identifies what the node is. It distinguishes different kinds of nodes from each other, such as elements, text, and comments.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)

#### Inherited from

`LitElement.nodeType`

---

### nodeValue

&gt; **nodeValue**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26089

The **`nodeValue`** property of the Node interface returns or sets the value of the current node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`nodeValue`](../BentoLayout/README.md#nodevalue)

---

### nonce

&gt; **nonce**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:20126

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/nonce)

#### Inherited from

`LitElement.nonce`

---

### NOTATION\_NODE

&gt; `readonly` **NOTATION\_NODE**: `12`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26229

#### Inherited from

`LitElement.NOTATION_NODE`

---

### offsetHeight

&gt; `readonly` **offsetHeight**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17795

The **`offsetHeight`** read-only property of the HTMLElement interface returns the height of an element, including vertical padding and borders, as an integer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetHeight)

#### Inherited from

`LitElement.offsetHeight`

---

### offsetLeft

&gt; `readonly` **offsetLeft**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17801

The **`offsetLeft`** read-only property of the HTMLElement interface returns the number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetLeft)

#### Inherited from

`LitElement.offsetLeft`

---

### offsetParent

&gt; `readonly` **offsetParent**: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17807

The **`HTMLElement.offsetParent`** read-only property returns a reference to the element which is the closest (nearest in the containment hierarchy) positioned ancestor element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetParent)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`offsetParent`](../BentoLayout/README.md#offsetparent)

---

### offsetTop

&gt; `readonly` **offsetTop**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17813

The **`offsetTop`** read-only property of the HTMLElement interface returns the distance from the outer border of the current element (including its margin) to the top padding edge of the offsetParent, the closest positioned ancestor element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetTop)

#### Inherited from

`LitElement.offsetTop`

---

### offsetWidth

&gt; `readonly` **offsetWidth**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17819

The **`offsetWidth`** read-only property of the HTMLElement interface returns the layout width of an element as an integer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetWidth)

#### Inherited from

`LitElement.offsetWidth`

---

### onabort

&gt; **onabort**: ((`this`: `GlobalEventHandlers`, `ev`: [`UIEvent`](https://developer.mozilla.org/docs/Web/API/UIEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16764

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Inherited from

`LitElement.onabort`

---

### onanimationcancel

&gt; **onanimationcancel**: ((`this`: `GlobalEventHandlers`, `ev`: [`AnimationEvent`](https://developer.mozilla.org/docs/Web/API/AnimationEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16766

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

#### Inherited from

`LitElement.onanimationcancel`

---

### onanimationend

&gt; **onanimationend**: ((`this`: `GlobalEventHandlers`, `ev`: [`AnimationEvent`](https://developer.mozilla.org/docs/Web/API/AnimationEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16768

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

`LitElement.onanimationend`

---

### onanimationiteration

&gt; **onanimationiteration**: ((`this`: `GlobalEventHandlers`, `ev`: [`AnimationEvent`](https://developer.mozilla.org/docs/Web/API/AnimationEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16770

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

`LitElement.onanimationiteration`

---

### onanimationstart

&gt; **onanimationstart**: ((`this`: `GlobalEventHandlers`, `ev`: [`AnimationEvent`](https://developer.mozilla.org/docs/Web/API/AnimationEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16772

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

`LitElement.onanimationstart`

---

### onauxclick

&gt; **onauxclick**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16774

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

#### Inherited from

`LitElement.onauxclick`

---

### onbeforeinput

&gt; **onbeforeinput**: ((`this`: `GlobalEventHandlers`, `ev`: [`InputEvent`](https://developer.mozilla.org/docs/Web/API/InputEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16776

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)

#### Inherited from

`LitElement.onbeforeinput`

---

### onbeforematch

&gt; **onbeforematch**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16778

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)

#### Inherited from

`LitElement.onbeforematch`

---

### onbeforetoggle

&gt; **onbeforetoggle**: ((`this`: `GlobalEventHandlers`, `ev`: [`ToggleEvent`](https://developer.mozilla.org/docs/Web/API/ToggleEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16780

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

#### Inherited from

`LitElement.onbeforetoggle`

---

### onblur

&gt; **onblur**: ((`this`: `GlobalEventHandlers`, `ev`: [`FocusEvent`](https://developer.mozilla.org/docs/Web/API/FocusEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16782

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)

#### Inherited from

`LitElement.onblur`

---

### oncancel

&gt; **oncancel**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16784

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

#### Inherited from

`LitElement.oncancel`

---

### oncanplay

&gt; **oncanplay**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16786

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

#### Inherited from

`LitElement.oncanplay`

---

### oncanplaythrough

&gt; **oncanplaythrough**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16788

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

#### Inherited from

`LitElement.oncanplaythrough`

---

### onchange

&gt; **onchange**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16790

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

#### Inherited from

`LitElement.onchange`

---

### onclick

&gt; **onclick**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16792

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)

#### Inherited from

`LitElement.onclick`

---

### onclose

&gt; **onclose**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16794

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

#### Inherited from

`LitElement.onclose`

---

### oncommand

&gt; **oncommand**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16796

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/command_event)

#### Inherited from

`LitElement.oncommand`

---

### oncontextlost

&gt; **oncontextlost**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16798

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)

#### Inherited from

`LitElement.oncontextlost`

---

### oncontextmenu

&gt; **oncontextmenu**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16800

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

#### Inherited from

`LitElement.oncontextmenu`

---

### oncontextrestored

&gt; **oncontextrestored**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16802

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)

#### Inherited from

`LitElement.oncontextrestored`

---

### oncopy

&gt; **oncopy**: ((`this`: `GlobalEventHandlers`, `ev`: [`ClipboardEvent`](https://developer.mozilla.org/docs/Web/API/ClipboardEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16804

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)

#### Inherited from

`LitElement.oncopy`

---

### oncuechange

&gt; **oncuechange**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16806

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

#### Inherited from

`LitElement.oncuechange`

---

### oncut

&gt; **oncut**: ((`this`: `GlobalEventHandlers`, `ev`: [`ClipboardEvent`](https://developer.mozilla.org/docs/Web/API/ClipboardEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16808

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)

#### Inherited from

`LitElement.oncut`

---

### ondblclick

&gt; **ondblclick**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16810

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

#### Inherited from

`LitElement.ondblclick`

---

### ondrag

&gt; **ondrag**: ((`this`: `GlobalEventHandlers`, `ev`: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16812

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

#### Inherited from

`LitElement.ondrag`

---

### ondragend

&gt; **ondragend**: ((`this`: `GlobalEventHandlers`, `ev`: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16814

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

#### Inherited from

`LitElement.ondragend`

---

### ondragenter

&gt; **ondragenter**: ((`this`: `GlobalEventHandlers`, `ev`: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16816

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

#### Inherited from

`LitElement.ondragenter`

---

### ondragleave

&gt; **ondragleave**: ((`this`: `GlobalEventHandlers`, `ev`: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16818

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

#### Inherited from

`LitElement.ondragleave`

---

### ondragover

&gt; **ondragover**: ((`this`: `GlobalEventHandlers`, `ev`: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16820

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

#### Inherited from

`LitElement.ondragover`

---

### ondragstart

&gt; **ondragstart**: ((`this`: `GlobalEventHandlers`, `ev`: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16822

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

#### Inherited from

`LitElement.ondragstart`

---

### ondrop

&gt; **ondrop**: ((`this`: `GlobalEventHandlers`, `ev`: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16824

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

#### Inherited from

`LitElement.ondrop`

---

### ondurationchange

&gt; **ondurationchange**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16826

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

#### Inherited from

`LitElement.ondurationchange`

---

### onemptied

&gt; **onemptied**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16828

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

#### Inherited from

`LitElement.onemptied`

---

### onended

&gt; **onended**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16830

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

#### Inherited from

`LitElement.onended`

---

### onerror

&gt; **onerror**: `OnErrorEventHandler`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16832

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

#### Inherited from

`LitElement.onerror`

---

### onfocus

&gt; **onfocus**: ((`this`: `GlobalEventHandlers`, `ev`: [`FocusEvent`](https://developer.mozilla.org/docs/Web/API/FocusEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16834

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)

#### Inherited from

`LitElement.onfocus`

---

### onformdata

&gt; **onformdata**: ((`this`: `GlobalEventHandlers`, `ev`: [`FormDataEvent`](https://developer.mozilla.org/docs/Web/API/FormDataEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16836

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

#### Inherited from

`LitElement.onformdata`

---

### onfullscreenchange

&gt; **onfullscreenchange**: ((`this`: [`Element`](https://developer.mozilla.org/docs/Web/API/Element), `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13584

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)

#### Inherited from

`LitElement.onfullscreenchange`

---

### onfullscreenerror

&gt; **onfullscreenerror**: ((`this`: [`Element`](https://developer.mozilla.org/docs/Web/API/Element), `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13586

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event)

#### Inherited from

`LitElement.onfullscreenerror`

---

### ongotpointercapture

&gt; **ongotpointercapture**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16838

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Inherited from

`LitElement.ongotpointercapture`

---

### oninput

&gt; **oninput**: ((`this`: `GlobalEventHandlers`, `ev`: [`InputEvent`](https://developer.mozilla.org/docs/Web/API/InputEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16840

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)

#### Inherited from

`LitElement.oninput`

---

### oninvalid

&gt; **oninvalid**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16842

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

#### Inherited from

`LitElement.oninvalid`

---

### onkeydown

&gt; **onkeydown**: ((`this`: `GlobalEventHandlers`, `ev`: [`KeyboardEvent`](https://developer.mozilla.org/docs/Web/API/KeyboardEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16844

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

#### Inherited from

`LitElement.onkeydown`

---

### ~~onkeypress~~

&gt; **onkeypress**: ((`this`: `GlobalEventHandlers`, `ev`: [`KeyboardEvent`](https://developer.mozilla.org/docs/Web/API/KeyboardEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16850

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

#### Inherited from

`LitElement.onkeypress`

---

### onkeyup

&gt; **onkeyup**: ((`this`: `GlobalEventHandlers`, `ev`: [`KeyboardEvent`](https://developer.mozilla.org/docs/Web/API/KeyboardEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16852

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

#### Inherited from

`LitElement.onkeyup`

---

### onload

&gt; **onload**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16854

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)

#### Inherited from

`LitElement.onload`

---

### onloadeddata

&gt; **onloadeddata**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16856

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

#### Inherited from

`LitElement.onloadeddata`

---

### onloadedmetadata

&gt; **onloadedmetadata**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16858

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

#### Inherited from

`LitElement.onloadedmetadata`

---

### onloadstart

&gt; **onloadstart**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16860

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

#### Inherited from

`LitElement.onloadstart`

---

### onlostpointercapture

&gt; **onlostpointercapture**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16862

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)

#### Inherited from

`LitElement.onlostpointercapture`

---

### onmousedown

&gt; **onmousedown**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16864

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

#### Inherited from

`LitElement.onmousedown`

---

### onmouseenter

&gt; **onmouseenter**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16866

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

#### Inherited from

`LitElement.onmouseenter`

---

### onmouseleave

&gt; **onmouseleave**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16868

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

#### Inherited from

`LitElement.onmouseleave`

---

### onmousemove

&gt; **onmousemove**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16870

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

#### Inherited from

`LitElement.onmousemove`

---

### onmouseout

&gt; **onmouseout**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16872

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

#### Inherited from

`LitElement.onmouseout`

---

### onmouseover

&gt; **onmouseover**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16874

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

#### Inherited from

`LitElement.onmouseover`

---

### onmouseup

&gt; **onmouseup**: ((`this`: `GlobalEventHandlers`, `ev`: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16876

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

#### Inherited from

`LitElement.onmouseup`

---

### onpaste

&gt; **onpaste**: ((`this`: `GlobalEventHandlers`, `ev`: [`ClipboardEvent`](https://developer.mozilla.org/docs/Web/API/ClipboardEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16878

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

#### Inherited from

`LitElement.onpaste`

---

### onpause

&gt; **onpause**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16880

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

#### Inherited from

`LitElement.onpause`

---

### onplay

&gt; **onplay**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16882

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

#### Inherited from

`LitElement.onplay`

---

### onplaying

&gt; **onplaying**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16884

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

#### Inherited from

`LitElement.onplaying`

---

### onpointercancel

&gt; **onpointercancel**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16886

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

#### Inherited from

`LitElement.onpointercancel`

---

### onpointerdown

&gt; **onpointerdown**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16888

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

#### Inherited from

`LitElement.onpointerdown`

---

### onpointerenter

&gt; **onpointerenter**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16890

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

#### Inherited from

`LitElement.onpointerenter`

---

### onpointerleave

&gt; **onpointerleave**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16892

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

#### Inherited from

`LitElement.onpointerleave`

---

### onpointermove

&gt; **onpointermove**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16894

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

#### Inherited from

`LitElement.onpointermove`

---

### onpointerout

&gt; **onpointerout**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16896

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

#### Inherited from

`LitElement.onpointerout`

---

### onpointerover

&gt; **onpointerover**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16898

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

#### Inherited from

`LitElement.onpointerover`

---

### onpointerrawupdate

&gt; **onpointerrawupdate**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16904

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerrawupdate_event)

#### Inherited from

`LitElement.onpointerrawupdate`

---

### onpointerup

&gt; **onpointerup**: ((`this`: `GlobalEventHandlers`, `ev`: [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16906

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

#### Inherited from

`LitElement.onpointerup`

---

### onprogress

&gt; **onprogress**: ((`this`: `GlobalEventHandlers`, `ev`: [`ProgressEvent`](https://developer.mozilla.org/docs/Web/API/ProgressEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16908

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

#### Inherited from

`LitElement.onprogress`

---

### onratechange

&gt; **onratechange**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16910

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

#### Inherited from

`LitElement.onratechange`

---

### onreset

&gt; **onreset**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16912

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

#### Inherited from

`LitElement.onreset`

---

### onresize

&gt; **onresize**: ((`this`: `GlobalEventHandlers`, `ev`: [`UIEvent`](https://developer.mozilla.org/docs/Web/API/UIEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16914

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

#### Inherited from

`LitElement.onresize`

---

### onscroll

&gt; **onscroll**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16916

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

#### Inherited from

`LitElement.onscroll`

---

### onscrollend

&gt; **onscrollend**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16918

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

#### Inherited from

`LitElement.onscrollend`

---

### onsecuritypolicyviolation

&gt; **onsecuritypolicyviolation**: ((`this`: `GlobalEventHandlers`, `ev`: [`SecurityPolicyViolationEvent`](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16920

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

#### Inherited from

`LitElement.onsecuritypolicyviolation`

---

### onseeked

&gt; **onseeked**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16922

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

#### Inherited from

`LitElement.onseeked`

---

### onseeking

&gt; **onseeking**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16924

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

#### Inherited from

`LitElement.onseeking`

---

### onselect

&gt; **onselect**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16926

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

#### Inherited from

`LitElement.onselect`

---

### onselectionchange

&gt; **onselectionchange**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16928

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

#### Inherited from

`LitElement.onselectionchange`

---

### onselectstart

&gt; **onselectstart**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16930

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

#### Inherited from

`LitElement.onselectstart`

---

### onslotchange

&gt; **onslotchange**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16932

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

#### Inherited from

`LitElement.onslotchange`

---

### onstalled

&gt; **onstalled**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16934

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

#### Inherited from

`LitElement.onstalled`

---

### onsubmit

&gt; **onsubmit**: ((`this`: `GlobalEventHandlers`, `ev`: [`SubmitEvent`](https://developer.mozilla.org/docs/Web/API/SubmitEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16936

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

#### Inherited from

`LitElement.onsubmit`

---

### onsuspend

&gt; **onsuspend**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16938

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

#### Inherited from

`LitElement.onsuspend`

---

### ontimeupdate

&gt; **ontimeupdate**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16940

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

#### Inherited from

`LitElement.ontimeupdate`

---

### ontoggle

&gt; **ontoggle**: ((`this`: `GlobalEventHandlers`, `ev`: [`ToggleEvent`](https://developer.mozilla.org/docs/Web/API/ToggleEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16942

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)

#### Inherited from

`LitElement.ontoggle`

---

### ontouchcancel?

&gt; `optional` **ontouchcancel?**: ((`this`: `GlobalEventHandlers`, `ev`: [`TouchEvent`](https://developer.mozilla.org/docs/Web/API/TouchEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16944

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

#### Inherited from

`LitElement.ontouchcancel`

---

### ontouchend?

&gt; `optional` **ontouchend?**: ((`this`: `GlobalEventHandlers`, `ev`: [`TouchEvent`](https://developer.mozilla.org/docs/Web/API/TouchEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16946

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

#### Inherited from

`LitElement.ontouchend`

---

### ontouchmove?

&gt; `optional` **ontouchmove?**: ((`this`: `GlobalEventHandlers`, `ev`: [`TouchEvent`](https://developer.mozilla.org/docs/Web/API/TouchEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16948

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

#### Inherited from

`LitElement.ontouchmove`

---

### ontouchstart?

&gt; `optional` **ontouchstart?**: ((`this`: `GlobalEventHandlers`, `ev`: [`TouchEvent`](https://developer.mozilla.org/docs/Web/API/TouchEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16950

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

#### Inherited from

`LitElement.ontouchstart`

---

### ontransitioncancel

&gt; **ontransitioncancel**: ((`this`: `GlobalEventHandlers`, `ev`: [`TransitionEvent`](https://developer.mozilla.org/docs/Web/API/TransitionEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16952

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

#### Inherited from

`LitElement.ontransitioncancel`

---

### ontransitionend

&gt; **ontransitionend**: ((`this`: `GlobalEventHandlers`, `ev`: [`TransitionEvent`](https://developer.mozilla.org/docs/Web/API/TransitionEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16954

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

`LitElement.ontransitionend`

---

### ontransitionrun

&gt; **ontransitionrun**: ((`this`: `GlobalEventHandlers`, `ev`: [`TransitionEvent`](https://developer.mozilla.org/docs/Web/API/TransitionEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16956

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

#### Inherited from

`LitElement.ontransitionrun`

---

### ontransitionstart

&gt; **ontransitionstart**: ((`this`: `GlobalEventHandlers`, `ev`: [`TransitionEvent`](https://developer.mozilla.org/docs/Web/API/TransitionEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16958

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

#### Inherited from

`LitElement.ontransitionstart`

---

### onvolumechange

&gt; **onvolumechange**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16960

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

#### Inherited from

`LitElement.onvolumechange`

---

### onwaiting

&gt; **onwaiting**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16962

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

#### Inherited from

`LitElement.onwaiting`

---

### ~~onwebkitanimationend~~

&gt; **onwebkitanimationend**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16968

#### Deprecated

This is a legacy alias of `onanimationend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

`LitElement.onwebkitanimationend`

---

### ~~onwebkitanimationiteration~~

&gt; **onwebkitanimationiteration**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16974

#### Deprecated

This is a legacy alias of `onanimationiteration`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

`LitElement.onwebkitanimationiteration`

---

### ~~onwebkitanimationstart~~

&gt; **onwebkitanimationstart**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16980

#### Deprecated

This is a legacy alias of `onanimationstart`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

`LitElement.onwebkitanimationstart`

---

### ~~onwebkittransitionend~~

&gt; **onwebkittransitionend**: ((`this`: `GlobalEventHandlers`, `ev`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16986

#### Deprecated

This is a legacy alias of `ontransitionend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

`LitElement.onwebkittransitionend`

---

### onwheel

&gt; **onwheel**: ((`this`: `GlobalEventHandlers`, `ev`: [`WheelEvent`](https://developer.mozilla.org/docs/Web/API/WheelEvent)) =&gt; `any`) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:16988

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

#### Inherited from

`LitElement.onwheel`

---

### outerHTML

&gt; **outerHTML**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13592

The **`outerHTML`** attribute of the Element interface gets or sets the HTML or XML markup of the element and its descendants, omitting any shadow roots in both cases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)

#### Inherited from

`LitElement.outerHTML`

---

### outerText

&gt; **outerText**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17825

The **`outerText`** property of the HTMLElement interface returns the same value as HTMLElement.innerText. When used as a setter it replaces the whole current node with the given text (this differs from innerText, which replaces the content inside the current node).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/outerText)

#### Inherited from

`LitElement.outerText`

---

### ownerDocument

&gt; `readonly` **ownerDocument**: [`Document`](https://developer.mozilla.org/docs/Web/API/Document)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13593

The read-only **`ownerDocument`** property of the Node interface returns the top-level document object of the node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)

#### Inherited from

`LitElement.ownerDocument`

---

### parentElement

&gt; `readonly` **parentElement**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26101

The read-only **`parentElement`** property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element. Node.parentNode on the other hand returns any kind of parent, regardless of its type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`parentElement`](../BentoLayout/README.md#parentelement)

---

### parentNode

&gt; `readonly` **parentNode**: `ParentNode` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26107

The read-only **`parentNode`** property of the Node interface returns the parent of the specified node in the DOM tree.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`parentNode`](../BentoLayout/README.md#parentnode)

---

### popover

&gt; **popover**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17831

The **`popover`** property of the HTMLElement interface gets and sets an element's popover state via JavaScript ("auto", "hint", or "manual"), and can be used for feature detection.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/popover)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`popover`](../BentoLayout/README.md#popover)

---

### prefix

&gt; `readonly` **prefix**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13606

The **`Element.prefix`** read-only property returns the namespace prefix of the specified element, or null if no prefix is specified.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/prefix)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`prefix`](../BentoLayout/README.md#prefix)

---

### previousElementSibling

&gt; `readonly` **previousElementSibling**: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26386

Returns the first preceding sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/previousElementSibling)

#### Inherited from

`LitElement.previousElementSibling`

---

### previousSibling

&gt; `readonly` **previousSibling**: `ChildNode` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26113

The read-only **`previousSibling`** property of the Node interface returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`previousSibling`](../BentoLayout/README.md#previoussibling)

---

### PROCESSING\_INSTRUCTION\_NODE

&gt; `readonly` **PROCESSING\_INSTRUCTION\_NODE**: `7`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26220

node is a ProcessingInstruction node.

#### Inherited from

`LitElement.PROCESSING_INSTRUCTION_NODE`

---

### role

&gt; **role**: `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3344

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/role)

#### Inherited from

`LitElement.role`

---

### scrollHeight

&gt; `readonly` **scrollHeight**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13612

The **`scrollHeight`** read-only property of the Element interface is a measurement of the height of an element's content, including content not visible on the screen due to overflow.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollHeight)

#### Inherited from

`LitElement.scrollHeight`

---

### scrollLeft

&gt; **scrollLeft**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13618

The **`scrollLeft`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its left edge. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)

#### Inherited from

`LitElement.scrollLeft`

---

### scrollTop

&gt; **scrollTop**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13624

The **`scrollTop`** property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its top edge. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTop)

#### Inherited from

`LitElement.scrollTop`

---

### scrollWidth

&gt; `readonly` **scrollWidth**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13630

The **`scrollWidth`** read-only property of the Element interface is a measurement of the width of an element's content, including content not visible on the screen due to overflow.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollWidth)

#### Inherited from

`LitElement.scrollWidth`

---

### shadowRoot

&gt; `readonly` **shadowRoot**: [`ShadowRoot`](https://developer.mozilla.org/docs/Web/API/ShadowRoot) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13636

The **`Element.shadowRoot`** read-only property represents the shadow root hosted by the element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/shadowRoot)

#### Inherited from

[`BentoLayout`](../BentoLayout/README.md).[`shadowRoot`](../BentoLayout/README.md#shadowroot)

---

### slot

&gt; **slot**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13642

The **`slot`** property of the Element interface returns the name of the shadow DOM slot the element is inserted in.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/slot)

#### Inherited from

`LitElement.slot`

---

### spellcheck

&gt; **spellcheck**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17837

The **`spellcheck`** property of the HTMLElement interface represents a boolean value that controls the spell-checking hint. It is available on all HTML elements, though it doesn't affect all of them.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/spellcheck)

#### Inherited from

`LitElement.spellcheck`

---

### tabIndex

&gt; **tabIndex**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:20128

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/tabIndex)

#### Inherited from

`LitElement.tabIndex`

---

### tagName

&gt; `readonly` **tagName**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13648

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

#### Inherited from

`LitElement.tagName`

---

### TEXT\_NODE

&gt; `readonly` **TEXT\_NODE**: `3`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26214

node is a Text node.

#### Inherited from

`LitElement.TEXT_NODE`

---

### title

&gt; **title**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17843

The **`HTMLElement.title`** property represents the title of the element: the text usually displayed in a 'tooltip' popup when the mouse is over the node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/title)

#### Inherited from

`LitElement.title`

---

### touchScreen

&gt; `protected` **touchScreen**: `boolean`

Defined in: [packages/components/src/mixins/ui-aware-element/ui-aware-element.ts:57](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/mixins/ui-aware-element/ui-aware-element.ts#L57)

Reads [@fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN](../../packages.design-tokens/TouchScreen/CSS_VARIABLE_TOUCH_SCREEN/README.md) from `:root`
and tests against `"true"`,

---

### translate

&gt; **translate**: `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17849

The **`translate`** property of the HTMLElement interface indicates whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/translate)

#### Inherited from

`LitElement.translate`

---

### writingSuggestions

&gt; **writingSuggestions**: `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17855

The **`writingSuggestions`** property of the HTMLElement interface is a string indicating if browser-provided writing suggestions should be enabled under the scope of the element or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/writingSuggestions)

#### Inherited from

`LitElement.writingSuggestions`

---

### \_$litElement$

&gt; `static` **\_$litElement$**: `boolean`

Defined in: node\_modules/.pnpm/lit-element@4.2.2/node\_modules/lit-element/development/lit-element.d.ts:84

#### Inherited from

`LitElement._$litElement$`

---

### \_initializers?

&gt; `static` `optional` **\_initializers?**: `Initializer`[]

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:276

#### Inherited from

`LitElement._initializers`

---

### \[metadata\]

&gt; `static` **\[metadata\]**: `object` &amp; [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\&lt;`PropertyKey`, `unknown`\&gt;

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:435

#### Inherited from

`LitElement.[metadata]`

---

### finalized

&gt; `protected` `static` **finalized**: `true` \| `undefined`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:290

Marks class as having been finalized, which includes creating properties
from `static properties`, but does _not_ include all properties created
from decorators.

#### Nocollapse

#### Inherited from

`LitElement.finalized`

---

### styles

&gt; `static` **styles**: [`CSSResult`](https://lit.dev/docs/api/styles/#CSSResult)[] = `[]`

Defined in: [packages/components/src/mixins/ui-aware-element/ui-aware-element.ts:25](https://github.com/fnc314/fnc314.github.io/blob/382a425c5d6173823ecd4263148231cb7990379c/packages/components/src/mixins/ui-aware-element/ui-aware-element.ts#L25)

Default (empty) styles; concrete subclasses override with their own
[@lit/reactive-element!css](https://lit.dev/docs/api/styles/#css)-authored [@lit/reactive-element!CSSResult](https://lit.dev/docs/api/styles/#CSSResult)s.

#### Overrides

`LitElement.styles`

---

### classList

#### Get Signature

&gt; **get** **classList**(): [`DOMTokenList`](https://developer.mozilla.org/docs/Web/API/DOMTokenList)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13520

The read-only **`classList`** property of the Element interface contains a live DOMTokenList collection representing the class attribute of the element. This can then be used to manipulate the class list.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/classList)

##### Returns

[`DOMTokenList`](https://developer.mozilla.org/docs/Web/API/DOMTokenList)

#### Set Signature

&gt; **set** **classList**(`value`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13521

##### Parameters

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

`value`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Inherited from

`LitElement.classList`

---

### part

#### Get Signature

&gt; **get** **part**(): [`DOMTokenList`](https://developer.mozilla.org/docs/Web/API/DOMTokenList)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13599

The read-only **`part`** property of the Element interface contains a DOMTokenList object representing the part identifier(s) of the element. It reflects the element's part content attribute. These can be used to style parts of a shadow DOM, via the ::part pseudo-element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/part)

##### Returns

[`DOMTokenList`](https://developer.mozilla.org/docs/Web/API/DOMTokenList)

#### Set Signature

&gt; **set** **part**(`value`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13600

##### Parameters

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

`value`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Inherited from

`LitElement.part`

---

### style

#### Get Signature

&gt; **get** **style**(): [`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13930

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/style)

##### Returns

[`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)

#### Set Signature

&gt; **set** **style**(`cssText`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13931

##### Parameters

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

`cssText`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Inherited from

`LitElement.style`

---

### textContent

#### Get Signature

&gt; **get** **textContent**(): `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13913

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

##### Returns

`string`

#### Set Signature

&gt; **set** **textContent**(`value`: `string` \| `null`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13914

The **`textContent`** property of the Node interface represents the text content of the node and its descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

##### Parameters

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

`value`

</td>
<td>

`string` \| `null`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Inherited from

`LitElement.textContent`

---

### addEventListener()

#### Call Signature

&gt; **addEventListener**\&lt;`K`\&gt;(`type`: `K`, `listener`: (`this`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), `ev`: `HTMLElementEventMap`\[`K`\]) =&gt; `any`, `options?`: `boolean` \| `AddEventListenerOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17886

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementEventMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`type`

</td>
<td>

`K`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`this`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), `ev`: `HTMLElementEventMap`\[`K`\]) =&gt; `any`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`boolean` \| `AddEventListenerOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.addEventListener`

#### Call Signature

&gt; **addEventListener**(`type`: `string`, `listener`: `EventListenerOrEventListenerObject`, `options?`: `boolean` \| `AddEventListenerOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17887

##### Parameters

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

`type`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`EventListenerOrEventListenerObject`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`boolean` \| `AddEventListenerOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.addEventListener`

---

### after()

&gt; **after**(...`nodes`: (`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:10657

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/after)

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

...`nodes`

</td>
<td>

(`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.after`

---

### animate()

&gt; **animate**(`keyframes`: `Keyframe`[] \| `PropertyIndexedKeyframes` \| `null`, `options?`: `number` \| `KeyframeAnimationOptions`): [`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3556

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animate)

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

`keyframes`

</td>
<td>

`Keyframe`[] \| `PropertyIndexedKeyframes` \| `null`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`number` \| `KeyframeAnimationOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)

#### Inherited from

`LitElement.animate`

---

### append()

&gt; **append**(...`nodes`: (`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27070

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)

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

...`nodes`

</td>
<td>

(`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.append`

---

### appendChild()

&gt; **appendChild**\&lt;`T`\&gt;(`node`: `T`): `T`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26125

The **`appendChild()`** method of the Node interface adds a node to the end of the list of children of a specified parent node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` _extends_ [`Node`](https://developer.mozilla.org/docs/Web/API/Node)

</td>
</tr>
</tbody>
</table>

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

`node`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T`

#### Inherited from

`LitElement.appendChild`

---

### attachInternals()

&gt; **attachInternals**(): [`ElementInternals`](https://developer.mozilla.org/docs/Web/API/ElementInternals)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17861

The **`HTMLElement.attachInternals()`** method returns an ElementInternals object. This method allows a custom element to participate in HTML forms. The ElementInternals interface provides utilities for working with these elements in the same way you would work with any standard HTML form element, and also exposes the Accessibility Object Model to the element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/attachInternals)

#### Returns

[`ElementInternals`](https://developer.mozilla.org/docs/Web/API/ElementInternals)

#### Inherited from

`LitElement.attachInternals`

---

### attachShadow()

&gt; **attachShadow**(`init`: `ShadowRootInit`): [`ShadowRoot`](https://developer.mozilla.org/docs/Web/API/ShadowRoot)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13654

The **`Element.attachShadow()`** method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attachShadow)

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

`init`

</td>
<td>

`ShadowRootInit`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ShadowRoot`](https://developer.mozilla.org/docs/Web/API/ShadowRoot)

#### Inherited from

`LitElement.attachShadow`

---

### before()

&gt; **before**(...`nodes`: (`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:10665

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/before)

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

...`nodes`

</td>
<td>

(`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.before`

---

### blur()

&gt; **blur**(): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:20130

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/blur)

#### Returns

`void`

#### Inherited from

`LitElement.blur`

---

### checkVisibility()

&gt; **checkVisibility**(`options?`: `CheckVisibilityOptions`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13660

The **`checkVisibility()`** method of the Element interface checks whether the element is visible.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/checkVisibility)

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

`options?`

</td>
<td>

`CheckVisibilityOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.checkVisibility`

---

### click()

&gt; **click**(): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17867

The **`HTMLElement.click()`** method simulates a mouse click on an element. When called on an element, the element's click event is fired (unless its disabled attribute is set).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/click)

#### Returns

`void`

#### Inherited from

`LitElement.click`

---

### cloneNode()

&gt; **cloneNode**(`subtree?`: `boolean`): [`Node`](https://developer.mozilla.org/docs/Web/API/Node)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26131

The **`cloneNode()`** method of the Node interface returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in the node is also cloned or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)

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

`subtree?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Node`](https://developer.mozilla.org/docs/Web/API/Node)

#### Inherited from

`LitElement.cloneNode`

---

### closest()

#### Call Signature

&gt; **closest**\&lt;`K`\&gt;(`selector`: `K`): `HTMLElementTagNameMap`\[`K`\] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13666

The **`closest()`** method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/closest)

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selector`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLElementTagNameMap`\[`K`\] \| `null`

##### Inherited from

`LitElement.closest`

#### Call Signature

&gt; **closest**\&lt;`K`\&gt;(`selector`: `K`): `SVGElementTagNameMap`\[`K`\] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13667

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `SVGElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selector`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`SVGElementTagNameMap`\[`K`\] \| `null`

##### Inherited from

`LitElement.closest`

#### Call Signature

&gt; **closest**\&lt;`K`\&gt;(`selector`: `K`): `MathMLElementTagNameMap`\[`K`\] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13668

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `MathMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selector`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`MathMLElementTagNameMap`\[`K`\] \| `null`

##### Inherited from

`LitElement.closest`

#### Call Signature

&gt; **closest**\&lt;`E`\&gt;(`selectors`: `string`): `E` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13669

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`E` _extends_ [`Element`](https://developer.mozilla.org/docs/Web/API/Element)

</td>
<td>

[`Element`](https://developer.mozilla.org/docs/Web/API/Element)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`E` \| `null`

##### Inherited from

`LitElement.closest`

---

### compareDocumentPosition()

&gt; **compareDocumentPosition**(`other`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node)): `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26137

The **`compareDocumentPosition()`** method of the Node interface reports the position of its argument node relative to the node on which it is called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)

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

`other`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node)

</td>
</tr>
</tbody>
</table>

#### Returns

`number`

#### Inherited from

`LitElement.compareDocumentPosition`

---

### computedStyleMap()

&gt; **computedStyleMap**(): [`StylePropertyMapReadOnly`](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13675

The **`computedStyleMap()`** method of the Element interface returns a StylePropertyMapReadOnly interface which provides a read-only representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/computedStyleMap)

#### Returns

[`StylePropertyMapReadOnly`](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly)

#### Inherited from

`LitElement.computedStyleMap`

---

### contains()

&gt; **contains**(`other`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26143

The **`contains()`** method of the Node interface returns a boolean value indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children (childNodes), one of the children's direct children, and so on.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)

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

`other`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.contains`

---

### dispatchEvent()

&gt; **dispatchEvent**(`event`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:14386

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

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

`event`

</td>
<td>

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.dispatchEvent`

---

### focus()

&gt; **focus**(`options?`: `FocusOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:20132

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/focus)

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

`options?`

</td>
<td>

`FocusOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.focus`

---

### getAnimations()

&gt; **getAnimations**(`options?`: `GetAnimationsOptions`): [`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:3558

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAnimations)

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

`options?`

</td>
<td>

`GetAnimationsOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Animation`](https://developer.mozilla.org/docs/Web/API/Animation)[]

#### Inherited from

`LitElement.getAnimations`

---

### getAttribute()

&gt; **getAttribute**(`qualifiedName`: `string`): `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13681

The **`getAttribute()`** method of the Element interface returns the value of a specified attribute on the element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttribute)

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

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`string` \| `null`

#### Inherited from

`LitElement.getAttribute`

---

### getAttributeNames()

&gt; **getAttributeNames**(): `string`[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13693

The **`getAttributeNames()`** method of the Element interface returns the attribute names of the element as an Array of strings. If the element has no attributes it returns an empty array.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNames)

#### Returns

`string`[]

#### Inherited from

`LitElement.getAttributeNames`

---

### getAttributeNode()

&gt; **getAttributeNode**(`qualifiedName`: `string`): [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13699

Returns the specified attribute of the specified element, as an Attr node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNode)

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

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

#### Inherited from

`LitElement.getAttributeNode`

---

### getAttributeNodeNS()

&gt; **getAttributeNodeNS**(`namespace`: `string` \| `null`, `localName`: `string`): [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13705

The **`getAttributeNodeNS()`** method of the Element interface returns the namespaced Attr node of an element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNodeNS)

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

#### Inherited from

`LitElement.getAttributeNodeNS`

---

### getAttributeNS()

&gt; **getAttributeNS**(`namespace`: `string` \| `null`, `localName`: `string`): `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13687

The **`getAttributeNS()`** method of the Element interface returns the string value of the attribute with the specified namespace and name. If the named attribute does not exist, the value returned will either be null or "" (the empty string); see Notes for details.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNS)

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`string` \| `null`

#### Inherited from

`LitElement.getAttributeNS`

---

### getBoundingClientRect()

&gt; **getBoundingClientRect**(): [`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13711

The **`Element.getBoundingClientRect()`** method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getBoundingClientRect)

#### Returns

[`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect)

#### Inherited from

`LitElement.getBoundingClientRect`

---

### getClientRects()

&gt; **getClientRects**(): [`DOMRectList`](https://developer.mozilla.org/docs/Web/API/DOMRectList)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13717

The **`getClientRects()`** method of the Element interface returns a collection of DOMRect objects that indicate the bounding rectangles for each CSS border box in a client.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getClientRects)

#### Returns

[`DOMRectList`](https://developer.mozilla.org/docs/Web/API/DOMRectList)

#### Inherited from

`LitElement.getClientRects`

---

### getElementsByClassName()

&gt; **getElementsByClassName**(`classNames`: `string`): `HTMLCollectionOf`\&lt;[`Element`](https://developer.mozilla.org/docs/Web/API/Element)\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13723

The Element method **`getElementsByClassName()`** returns a live HTMLCollection which contains every descendant element which has the specified class name or names.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByClassName)

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

`classNames`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`HTMLCollectionOf`\&lt;[`Element`](https://developer.mozilla.org/docs/Web/API/Element)\&gt;

#### Inherited from

`LitElement.getElementsByClassName`

---

### getElementsByTagName()

#### Call Signature

&gt; **getElementsByTagName**\&lt;`K`\&gt;(`qualifiedName`: `K`): `HTMLCollectionOf`\&lt;`HTMLElementTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13729

The **`Element.getElementsByTagName()`** method returns a live HTMLCollection of elements with the given tag name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagName)

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`qualifiedName`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;`HTMLElementTagNameMap`\[`K`\]\&gt;

##### Inherited from

`LitElement.getElementsByTagName`

#### Call Signature

&gt; **getElementsByTagName**\&lt;`K`\&gt;(`qualifiedName`: `K`): `HTMLCollectionOf`\&lt;`SVGElementTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13730

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `SVGElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`qualifiedName`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;`SVGElementTagNameMap`\[`K`\]\&gt;

##### Inherited from

`LitElement.getElementsByTagName`

#### Call Signature

&gt; **getElementsByTagName**\&lt;`K`\&gt;(`qualifiedName`: `K`): `HTMLCollectionOf`\&lt;`MathMLElementTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13731

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `MathMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`qualifiedName`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;`MathMLElementTagNameMap`\[`K`\]\&gt;

##### Inherited from

`LitElement.getElementsByTagName`

#### Call Signature

&gt; **getElementsByTagName**\&lt;`K`\&gt;(`qualifiedName`: `K`): `HTMLCollectionOf`\&lt;`HTMLElementDeprecatedTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13733

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementDeprecatedTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`qualifiedName`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;`HTMLElementDeprecatedTagNameMap`\[`K`\]\&gt;

##### Deprecated

##### Inherited from

`LitElement.getElementsByTagName`

#### Call Signature

&gt; **getElementsByTagName**(`qualifiedName`: `string`): `HTMLCollectionOf`\&lt;[`Element`](https://developer.mozilla.org/docs/Web/API/Element)\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13734

##### Parameters

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

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;[`Element`](https://developer.mozilla.org/docs/Web/API/Element)\&gt;

##### Inherited from

`LitElement.getElementsByTagName`

---

### getElementsByTagNameNS()

#### Call Signature

&gt; **getElementsByTagNameNS**(`namespaceURI`: `"http://www.w3.org/1999/xhtml"`, `localName`: `string`): `HTMLCollectionOf`\&lt;[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13740

The **`Element.getElementsByTagNameNS()`** method returns a live HTMLCollection of elements with the given tag name belonging to the given namespace. It is similar to Document.getElementsByTagNameNS, except that its search is restricted to descendants of the specified element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagNameNS)

##### Parameters

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

`namespaceURI`

</td>
<td>

`"http://www.w3.org/1999/xhtml"`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\&gt;

##### Inherited from

`LitElement.getElementsByTagNameNS`

#### Call Signature

&gt; **getElementsByTagNameNS**(`namespaceURI`: `"http://www.w3.org/2000/svg"`, `localName`: `string`): `HTMLCollectionOf`\&lt;[`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13741

##### Parameters

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

`namespaceURI`

</td>
<td>

`"http://www.w3.org/2000/svg"`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;[`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)\&gt;

##### Inherited from

`LitElement.getElementsByTagNameNS`

#### Call Signature

&gt; **getElementsByTagNameNS**(`namespaceURI`: `"http://www.w3.org/1998/Math/MathML"`, `localName`: `string`): `HTMLCollectionOf`\&lt;[`MathMLElement`](https://developer.mozilla.org/docs/Web/API/MathMLElement)\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13742

##### Parameters

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

`namespaceURI`

</td>
<td>

`"http://www.w3.org/1998/Math/MathML"`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;[`MathMLElement`](https://developer.mozilla.org/docs/Web/API/MathMLElement)\&gt;

##### Inherited from

`LitElement.getElementsByTagNameNS`

#### Call Signature

&gt; **getElementsByTagNameNS**(`namespace`: `string` \| `null`, `localName`: `string`): `HTMLCollectionOf`\&lt;[`Element`](https://developer.mozilla.org/docs/Web/API/Element)\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13743

##### Parameters

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLCollectionOf`\&lt;[`Element`](https://developer.mozilla.org/docs/Web/API/Element)\&gt;

##### Inherited from

`LitElement.getElementsByTagNameNS`

---

### getHTML()

&gt; **getHTML**(`options?`: `GetHTMLOptions`): `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13749

The **`getHTML()`** method of the Element interface is used to serialize an element's DOM to an HTML string.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getHTML)

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

`options?`

</td>
<td>

`GetHTMLOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

#### Inherited from

`LitElement.getHTML`

---

### getRootNode()

&gt; **getRootNode**(`options?`: `GetRootNodeOptions`): [`Node`](https://developer.mozilla.org/docs/Web/API/Node)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26149

The **`getRootNode()`** method of the Node interface returns the context object's root, which optionally includes the shadow root if it is available.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)

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

`options?`

</td>
<td>

`GetRootNodeOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Node`](https://developer.mozilla.org/docs/Web/API/Node)

#### Inherited from

`LitElement.getRootNode`

---

### hasAttribute()

&gt; **hasAttribute**(`qualifiedName`: `string`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13755

The **`Element.hasAttribute()`** method returns a Boolean value indicating whether the specified element has the specified attribute or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttribute)

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

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.hasAttribute`

---

### hasAttributeNS()

&gt; **hasAttributeNS**(`namespace`: `string` \| `null`, `localName`: `string`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13761

The **`hasAttributeNS()`** method of the Element interface returns a boolean value indicating whether the current element has the specified attribute with the specified namespace.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributeNS)

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.hasAttributeNS`

---

### hasAttributes()

&gt; **hasAttributes**(): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13767

The **`hasAttributes()`** method of the Element interface returns a boolean value indicating whether the current element has any attributes or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributes)

#### Returns

`boolean`

#### Inherited from

`LitElement.hasAttributes`

---

### hasChildNodes()

&gt; **hasChildNodes**(): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26155

The **`hasChildNodes()`** method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)

#### Returns

`boolean`

#### Inherited from

`LitElement.hasChildNodes`

---

### hasPointerCapture()

&gt; **hasPointerCapture**(`pointerId`: `number`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13773

The **`hasPointerCapture()`** method of the Element interface checks whether the element on which it is invoked has pointer capture for the pointer identified by the given pointer ID.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasPointerCapture)

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

`pointerId`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.hasPointerCapture`

---

### hidePopover()

#### Call Signature

&gt; **hidePopover**(): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17873

The **`hidePopover()`** method of the HTMLElement interface hides a popover element (i.e., one that has a valid popover attribute) by removing it from the top layer and styling it with display: none.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidePopover)

##### Returns

`void`

##### Inherited from

`LitElement.hidePopover`

#### Call Signature

&gt; **hidePopover**(): `void`

Defined in: node\_modules/.pnpm/@material+web@2.4.1/node\_modules/@material/web/menu/internal/controllers/surfacePositionController.d.ts:17

##### Returns

`void`

##### Inherited from

`LitElement.hidePopover`

---

### insertAdjacentElement()

&gt; **insertAdjacentElement**(`where`: `InsertPosition`, `element`: [`Element`](https://developer.mozilla.org/docs/Web/API/Element)): [`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13779

The **`insertAdjacentElement()`** method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentElement)

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

`where`

</td>
<td>

`InsertPosition`

</td>
</tr>
<tr>
<td>

`element`

</td>
<td>

[`Element`](https://developer.mozilla.org/docs/Web/API/Element)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Element`](https://developer.mozilla.org/docs/Web/API/Element) \| `null`

#### Inherited from

`LitElement.insertAdjacentElement`

---

### insertAdjacentHTML()

&gt; **insertAdjacentHTML**(`position`: `InsertPosition`, `string`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13785

The **`insertAdjacentHTML()`** method of the Element interface parses the specified input as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML)

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

`position`

</td>
<td>

`InsertPosition`

</td>
</tr>
<tr>
<td>

`string`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.insertAdjacentHTML`

---

### insertAdjacentText()

&gt; **insertAdjacentText**(`where`: `InsertPosition`, `data`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13791

The **`insertAdjacentText()`** method of the Element interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentText)

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

`where`

</td>
<td>

`InsertPosition`

</td>
</tr>
<tr>
<td>

`data`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.insertAdjacentText`

---

### insertBefore()

&gt; **insertBefore**\&lt;`T`\&gt;(`node`: `T`, `child`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`): `T`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26161

The **`insertBefore()`** method of the Node interface inserts a node before a reference node as a child of a specified parent node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` _extends_ [`Node`](https://developer.mozilla.org/docs/Web/API/Node)

</td>
</tr>
</tbody>
</table>

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

`node`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

`child`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`T`

#### Inherited from

`LitElement.insertBefore`

---

### isDefaultNamespace()

&gt; **isDefaultNamespace**(`namespace`: `string` \| `null`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26167

The **`isDefaultNamespace()`** method of the Node interface accepts a namespace URI as an argument. It returns a boolean value that is true if the namespace is the default namespace on the given node and false if not. The default namespace can be retrieved with Node.lookupNamespaceURI() by passing null as the argument.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.isDefaultNamespace`

---

### isEqualNode()

&gt; **isEqualNode**(`otherNode`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26173

The **`isEqualNode()`** method of the Node interface tests whether two nodes are equal. Two nodes are equal when they have the same type, defining characteristics (for elements, this would be their ID, number of children, and so forth), its attributes match, and so on. The specific set of data points that must match varies depending on the types of the nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)

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

`otherNode`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.isEqualNode`

---

### isSameNode()

&gt; **isSameNode**(`otherNode`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26179

The **`isSameNode()`** method of the Node interface is a legacy alias the for the === strict equality operator. That is, it tests whether two nodes are the same (in other words, whether they reference the same object).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)

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

`otherNode`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.isSameNode`

---

### lookupNamespaceURI()

&gt; **lookupNamespaceURI**(`prefix`: `string` \| `null`): `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26185

The **`lookupNamespaceURI()`** method of the Node interface takes a prefix as parameter and returns the namespace URI associated with it on the given node if found (and null if not). This method's existence allows Node objects to be passed as a namespace resolver to XPathEvaluator.createExpression() and XPathEvaluator.evaluate().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)

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

`prefix`

</td>
<td>

`string` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`string` \| `null`

#### Inherited from

`LitElement.lookupNamespaceURI`

---

### lookupPrefix()

&gt; **lookupPrefix**(`namespace`: `string` \| `null`): `string` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26191

The **`lookupPrefix()`** method of the Node interface returns a string containing the prefix for a given namespace URI, if present, and null if not. When multiple prefixes are possible, the first prefix is returned.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`string` \| `null`

#### Inherited from

`LitElement.lookupPrefix`

---

### matches()

#### Call Signature

&gt; **matches**\&lt;`K`\&gt;(`selectors`: `K`): `this is HTMLElementTagNameMap[K]`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13797

The **`matches()`** method of the Element interface tests whether the element would be selected by the specified CSS selector.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`this is HTMLElementTagNameMap[K]`

##### Inherited from

`LitElement.matches`

#### Call Signature

&gt; **matches**\&lt;`K`\&gt;(`selectors`: `K`): `this is SVGElementTagNameMap[K]`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13798

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `SVGElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`this is SVGElementTagNameMap[K]`

##### Inherited from

`LitElement.matches`

#### Call Signature

&gt; **matches**\&lt;`K`\&gt;(`selectors`: `K`): `this is MathMLElementTagNameMap[K]`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13799

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `MathMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`this is MathMLElementTagNameMap[K]`

##### Inherited from

`LitElement.matches`

#### Call Signature

&gt; **matches**(`selectors`: `string`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13800

##### Parameters

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

`selectors`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Inherited from

`LitElement.matches`

---

### moveBefore()

&gt; **moveBefore**(`node`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node), `child`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27072

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/moveBefore)

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

`node`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node)

</td>
</tr>
<tr>
<td>

`child`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node) \| `null`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.moveBefore`

---

### normalize()

&gt; **normalize**(): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26197

The **`normalize()`** method of the Node interface puts the specified node and all of its sub-tree into a normalized form. In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)

#### Returns

`void`

#### Inherited from

`LitElement.normalize`

---

### prepend()

&gt; **prepend**(...`nodes`: (`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27080

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)

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

...`nodes`

</td>
<td>

(`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.prepend`

---

### querySelector()

#### Call Signature

&gt; **querySelector**\&lt;`K`\&gt;(`selectors`: `K`): `HTMLElementTagNameMap`\[`K`\] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27086

Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLElementTagNameMap`\[`K`\] \| `null`

##### Inherited from

`LitElement.querySelector`

#### Call Signature

&gt; **querySelector**\&lt;`K`\&gt;(`selectors`: `K`): `SVGElementTagNameMap`\[`K`\] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27087

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `SVGElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`SVGElementTagNameMap`\[`K`\] \| `null`

##### Inherited from

`LitElement.querySelector`

#### Call Signature

&gt; **querySelector**\&lt;`K`\&gt;(`selectors`: `K`): `MathMLElementTagNameMap`\[`K`\] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27088

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `MathMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`MathMLElementTagNameMap`\[`K`\] \| `null`

##### Inherited from

`LitElement.querySelector`

#### Call Signature

&gt; **querySelector**\&lt;`K`\&gt;(`selectors`: `K`): `HTMLElementDeprecatedTagNameMap`\[`K`\] \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27090

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementDeprecatedTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`HTMLElementDeprecatedTagNameMap`\[`K`\] \| `null`

##### Deprecated

##### Inherited from

`LitElement.querySelector`

#### Call Signature

&gt; **querySelector**\&lt;`E`\&gt;(`selectors`: `string`): `E` \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27091

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`E` _extends_ [`Element`](https://developer.mozilla.org/docs/Web/API/Element)

</td>
<td>

[`Element`](https://developer.mozilla.org/docs/Web/API/Element)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`E` \| `null`

##### Inherited from

`LitElement.querySelector`

---

### querySelectorAll()

#### Call Signature

&gt; **querySelectorAll**\&lt;`K`\&gt;(`selectors`: `K`): `NodeListOf`\&lt;`HTMLElementTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27097

Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`NodeListOf`\&lt;`HTMLElementTagNameMap`\[`K`\]\&gt;

##### Inherited from

`LitElement.querySelectorAll`

#### Call Signature

&gt; **querySelectorAll**\&lt;`K`\&gt;(`selectors`: `K`): `NodeListOf`\&lt;`SVGElementTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27098

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `SVGElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`NodeListOf`\&lt;`SVGElementTagNameMap`\[`K`\]\&gt;

##### Inherited from

`LitElement.querySelectorAll`

#### Call Signature

&gt; **querySelectorAll**\&lt;`K`\&gt;(`selectors`: `K`): `NodeListOf`\&lt;`MathMLElementTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27099

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `MathMLElementTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`NodeListOf`\&lt;`MathMLElementTagNameMap`\[`K`\]\&gt;

##### Inherited from

`LitElement.querySelectorAll`

#### Call Signature

&gt; **querySelectorAll**\&lt;`K`\&gt;(`selectors`: `K`): `NodeListOf`\&lt;`HTMLElementDeprecatedTagNameMap`\[`K`\]\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27101

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementDeprecatedTagNameMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Returns

`NodeListOf`\&lt;`HTMLElementDeprecatedTagNameMap`\[`K`\]\&gt;

##### Deprecated

##### Inherited from

`LitElement.querySelectorAll`

#### Call Signature

&gt; **querySelectorAll**\&lt;`E`\&gt;(`selectors`: `string`): `NodeListOf`\&lt;`E`\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27102

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`E` _extends_ [`Element`](https://developer.mozilla.org/docs/Web/API/Element)

</td>
<td>

[`Element`](https://developer.mozilla.org/docs/Web/API/Element)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`selectors`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`NodeListOf`\&lt;`E`\&gt;

##### Inherited from

`LitElement.querySelectorAll`

---

### releasePointerCapture()

&gt; **releasePointerCapture**(`pointerId`: `number`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13806

The **`releasePointerCapture()`** method of the Element interface releases (stops) pointer capture that was previously set for a specific (PointerEvent) pointer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/releasePointerCapture)

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

`pointerId`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.releasePointerCapture`

---

### remove()

&gt; **remove**(): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:10671

Removes node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/remove)

#### Returns

`void`

#### Inherited from

`LitElement.remove`

---

### removeAttribute()

&gt; **removeAttribute**(`qualifiedName`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13812

The Element method **`removeAttribute()`** removes the attribute with the specified name from the element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttribute)

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

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.removeAttribute`

---

### removeAttributeNode()

&gt; **removeAttributeNode**(`attr`: [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)): [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13824

The **`removeAttributeNode()`** method of the Element interface removes the specified Attr node from the element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNode)

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

`attr`

</td>
<td>

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)

#### Inherited from

`LitElement.removeAttributeNode`

---

### removeAttributeNS()

&gt; **removeAttributeNS**(`namespace`: `string` \| `null`, `localName`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13818

The **`removeAttributeNS()`** method of the Element interface removes the specified attribute with the specified namespace from an element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNS)

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
<tr>
<td>

`localName`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.removeAttributeNS`

---

### removeChild()

&gt; **removeChild**\&lt;`T`\&gt;(`child`: `T`): `T`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26203

The **`removeChild()`** method of the Node interface removes a child node from the DOM and returns the removed node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` _extends_ [`Node`](https://developer.mozilla.org/docs/Web/API/Node)

</td>
</tr>
</tbody>
</table>

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

`child`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T`

#### Inherited from

`LitElement.removeChild`

---

### removeEventListener()

#### Call Signature

&gt; **removeEventListener**\&lt;`K`\&gt;(`type`: `K`, `listener`: (`this`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), `ev`: `HTMLElementEventMap`\[`K`\]) =&gt; `any`, `options?`: `boolean` \| `EventListenerOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17888

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K` _extends_ keyof `HTMLElementEventMap`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`type`

</td>
<td>

`K`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`this`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), `ev`: `HTMLElementEventMap`\[`K`\]) =&gt; `any`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`boolean` \| `EventListenerOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.removeEventListener`

#### Call Signature

&gt; **removeEventListener**(`type`: `string`, `listener`: `EventListenerOrEventListenerObject`, `options?`: `boolean` \| `EventListenerOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17889

##### Parameters

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

`type`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`EventListenerOrEventListenerObject`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`boolean` \| `EventListenerOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.removeEventListener`

---

### replaceChild()

&gt; **replaceChild**\&lt;`T`\&gt;(`node`: [`Node`](https://developer.mozilla.org/docs/Web/API/Node), `child`: `T`): `T`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:26209

The **`replaceChild()`** method of the Node interface replaces a child node within the given (parent) node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` _extends_ [`Node`](https://developer.mozilla.org/docs/Web/API/Node)

</td>
</tr>
</tbody>
</table>

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

`node`

</td>
<td>

[`Node`](https://developer.mozilla.org/docs/Web/API/Node)

</td>
</tr>
<tr>
<td>

`child`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T`

#### Inherited from

`LitElement.replaceChild`

---

### replaceChildren()

&gt; **replaceChildren**(...`nodes`: (`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:27110

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)

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

...`nodes`

</td>
<td>

(`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.replaceChildren`

---

### replaceWith()

&gt; **replaceWith**(...`nodes`: (`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:10679

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/replaceWith)

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

...`nodes`

</td>
<td>

(`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[]

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.replaceWith`

---

### requestFullscreen()

&gt; **requestFullscreen**(`options?`: `FullscreenOptions`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13830

The **`Element.requestFullscreen()`** method issues an asynchronous request to make the element be displayed in fullscreen mode.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestFullscreen)

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

`options?`

</td>
<td>

`FullscreenOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

#### Inherited from

`LitElement.requestFullscreen`

---

### requestPointerLock()

&gt; **requestPointerLock**(`options?`: `PointerLockOptions`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13836

The **`requestPointerLock()`** method of the Element interface lets you asynchronously ask for the pointer to be locked on the given element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestPointerLock)

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

`options?`

</td>
<td>

`PointerLockOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`void`\&gt;

#### Inherited from

`LitElement.requestPointerLock`

---

### scroll()

#### Call Signature

&gt; **scroll**(`options?`: `ScrollToOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13842

The **`scroll()`** method of the Element interface scrolls the element to a particular set of coordinates inside a given element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scroll)

##### Parameters

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

`options?`

</td>
<td>

`ScrollToOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.scroll`

#### Call Signature

&gt; **scroll**(`x`: `number`, `y`: `number`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13843

##### Parameters

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

`x`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`y`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.scroll`

---

### scrollBy()

#### Call Signature

&gt; **scrollBy**(`options?`: `ScrollToOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13849

The **`scrollBy()`** method of the Element interface scrolls an element by the given amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollBy)

##### Parameters

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

`options?`

</td>
<td>

`ScrollToOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.scrollBy`

#### Call Signature

&gt; **scrollBy**(`x`: `number`, `y`: `number`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13850

##### Parameters

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

`x`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`y`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.scrollBy`

---

### scrollIntoView()

&gt; **scrollIntoView**(`arg?`: `boolean` \| `ScrollIntoViewOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13856

The Element interface's **`scrollIntoView()`** method scrolls the element's ancestor containers such that the element on which scrollIntoView() is called is visible to the user.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)

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

`arg?`

</td>
<td>

`boolean` \| `ScrollIntoViewOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.scrollIntoView`

---

### scrollTo()

#### Call Signature

&gt; **scrollTo**(`options?`: `ScrollToOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13862

The **`scrollTo()`** method of the Element interface scrolls to a particular set of coordinates inside a given element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTo)

##### Parameters

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

`options?`

</td>
<td>

`ScrollToOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.scrollTo`

#### Call Signature

&gt; **scrollTo**(`x`: `number`, `y`: `number`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13863

##### Parameters

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

`x`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`y`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.scrollTo`

---

### setAttribute()

&gt; **setAttribute**(`qualifiedName`: `string`, `value`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13869

The **`setAttribute()`** method of the Element interface sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttribute)

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

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.setAttribute`

---

### setAttributeNode()

&gt; **setAttributeNode**(`attr`: [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)): [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13881

The **`setAttributeNode()`** method of the Element interface adds a new Attr node to the specified element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNode)

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

`attr`

</td>
<td>

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

#### Inherited from

`LitElement.setAttributeNode`

---

### setAttributeNodeNS()

&gt; **setAttributeNodeNS**(`attr`: [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)): [`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13887

The **`setAttributeNodeNS()`** method of the Element interface adds a new namespaced Attr node to an element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNodeNS)

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

`attr`

</td>
<td>

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Attr`](https://developer.mozilla.org/docs/Web/API/Attr) \| `null`

#### Inherited from

`LitElement.setAttributeNodeNS`

---

### setAttributeNS()

&gt; **setAttributeNS**(`namespace`: `string` \| `null`, `qualifiedName`: `string`, `value`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13875

The **`setAttributeNS()`** method of the Element interface adds a new attribute or changes the value of an attribute with the given namespace and name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNS)

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

`namespace`

</td>
<td>

`string` \| `null`

</td>
</tr>
<tr>
<td>

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.setAttributeNS`

---

### setHTMLUnsafe()

&gt; **setHTMLUnsafe**(`html`: `string`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13893

The **`setHTMLUnsafe()`** method of the Element interface is used to parse HTML input into a DocumentFragment, optionally filtering out unwanted elements and attributes, and those that don't belong in the context, and then using it to replace the element's subtree in the DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setHTMLUnsafe)

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

`html`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.setHTMLUnsafe`

---

### setPointerCapture()

&gt; **setPointerCapture**(`pointerId`: `number`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13899

The **`setPointerCapture()`** method of the Element interface is used to designate a specific element as the capture target of future pointer events. Subsequent events for the pointer will be targeted at the capture element until capture is released (via Element.releasePointerCapture() or the pointerup event is fired).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture)

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

`pointerId`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.setPointerCapture`

---

### showPopover()

#### Call Signature

&gt; **showPopover**(`options?`: `ShowPopoverOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17879

The **`showPopover()`** method of the HTMLElement interface shows a popover element (i.e., one that has a valid popover attribute) by adding it to the top layer.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/showPopover)

##### Parameters

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

`options?`

</td>
<td>

`ShowPopoverOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.showPopover`

#### Call Signature

&gt; **showPopover**(): `void`

Defined in: node\_modules/.pnpm/@material+web@2.4.1/node\_modules/@material/web/menu/internal/controllers/surfacePositionController.d.ts:16

##### Returns

`void`

##### Inherited from

`LitElement.showPopover`

---

### toggleAttribute()

&gt; **toggleAttribute**(`qualifiedName`: `string`, `force?`: `boolean`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13905

The **`toggleAttribute()`** method of the Element interface toggles a Boolean attribute (removing it if it is present and adding it if it is not present) on the given element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/toggleAttribute)

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

`qualifiedName`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`force?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`LitElement.toggleAttribute`

---

### togglePopover()

#### Call Signature

&gt; **togglePopover**(`options?`: `boolean` \| `TogglePopoverOptions`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:17885

The **`togglePopover()`** method of the HTMLElement interface toggles a popover element (i.e., one that has a valid popover attribute) between the hidden and showing states.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/togglePopover)

##### Parameters

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

`options?`

</td>
<td>

`boolean` \| `TogglePopoverOptions`

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Inherited from

`LitElement.togglePopover`

#### Call Signature

&gt; **togglePopover**(`force`: `boolean`): `void`

Defined in: node\_modules/.pnpm/@material+web@2.4.1/node\_modules/@material/web/menu/internal/controllers/surfacePositionController.d.ts:18

##### Parameters

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

`force`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

`LitElement.togglePopover`

---

### ~~webkitMatchesSelector()~~

&gt; **webkitMatchesSelector**(`selectors`: `string`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:13911

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

`selectors`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Deprecated

This is a legacy alias of `matches`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)

#### Inherited from

`LitElement.webkitMatchesSelector`

---

### addInitializer()

&gt; `static` **addInitializer**(`initializer`: `Initializer`): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:275

Adds an initializer function to the class that is called during instance
construction.

This is useful for code that runs against a `ReactiveElement`
subclass, such as a decorator, that needs to do work for each
instance, such as setting up a `ReactiveController`.

```ts
const myDecorator = (target: typeof ReactiveElement, key: string) =&gt; {
  target.addInitializer((instance: ReactiveElement) =&gt; {
    // This is run during construction of the element
    new MyController(instance);
  });
}
```

Decorating a field will then cause each instance to run an initializer
that adds a controller:

```ts
class MyElement extends LitElement {
  @myDecorator foo;
}
```

Initializers are stored per-constructor. Adding an initializer to a
subclass does not add it to a superclass. Since initializers are run in
constructors, initializers will run in order of the class hierarchy,
starting with superclasses and progressing to the instance's class.

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

`initializer`

</td>
<td>

`Initializer`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Nocollapse

#### Inherited from

`LitElement.addInitializer`

---

### finalize()

&gt; `protected` `static` **finalize**(): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:459

Finishes setting up the class so that it's ready to be registered
as a custom element and instantiated.

This method is called by the ReactiveElement.observedAttributes getter.
If you override the observedAttributes getter, you must either call
super.observedAttributes to trigger finalization, or call finalize()
yourself.

#### Returns

`void`

#### Nocollapse

#### Inherited from

`LitElement.finalize`

## properties

### elementProperties

&gt; `static` **elementProperties**: `PropertyDeclarationMap`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:298

Memoized list of all element properties, including any superclass
properties. Created lazily on user subclasses when finalizing the class.

#### Nocollapse

#### Inherited from

`LitElement.elementProperties`

---

### properties

&gt; `static` **properties**: `PropertyDeclarations`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:324

User-supplied object that maps property names to `PropertyDeclaration`
objects containing options for configuring reactive properties. When
a reactive property is set the element will update and render.

By default properties are public fields, and as such, they should be
considered as primarily settable by element users, either via attribute or
the property itself.

Generally, properties that are changed by the element should be private or
protected fields and should use the `state: true` option. Properties
marked as `state` do not reflect from the corresponding attribute

However, sometimes element code does need to set a public property. This
should typically only be done in response to user interaction, and an event
should be fired informing the user; for example, a checkbox sets its
`checked` property when clicked and fires a `changed` event. Mutating
public properties should typically not be done for non-primitive (object or
array) properties. In other cases when an element needs to manage state, a
private property set with the `state: true` option should be used. When
needed, state properties can be initialized via public properties to
facilitate complex interactions.

#### Nocollapse

#### Inherited from

`LitElement.properties`

---

### createProperty()

&gt; `static` **createProperty**(`name`: `PropertyKey`, `options?`: [`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)\&lt;`unknown`, `unknown`\&gt;): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:391

Creates a property accessor on the element prototype if one does not exist
and stores a [`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration) for the property with the
given options. The property setter calls the property's `hasChanged`
property option or uses a strict identity check to determine whether or not
to request an update.

This method may be overridden to customize properties; however,
when doing so, it's important to call `super.createProperty` to ensure
the property is setup correctly. This method calls
`getPropertyDescriptor` internally to get a descriptor to install.
To customize what properties do when they are get or set, override
`getPropertyDescriptor`. To customize the options for a property,
implement `createProperty` like this:

```ts
static createProperty(name, options) {
  options = Object.assign(options, {myOption: true});
  super.createProperty(name, options);
}
```

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

`name`

</td>
<td>

`PropertyKey`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)\&lt;`unknown`, `unknown`\&gt;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Nocollapse

#### Inherited from

`LitElement.createProperty`

---

### getPropertyDescriptor()

&gt; `protected` `static` **getPropertyDescriptor**(`name`: `PropertyKey`, `key`: `string` \| `symbol`, `options`: [`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)): `PropertyDescriptor` \| `undefined`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:419

Returns a property descriptor to be defined on the given named property.
If no descriptor is returned, the property will not become an accessor.
For example,

```ts
class MyElement extends LitElement {
  static getPropertyDescriptor(name, key, options) {
    const defaultDescriptor = super.getPropertyDescriptor(name, key, options);
    const setter = defaultDescriptor.set;
    return {
      get: defaultDescriptor.get,
      set(value) {
        setter.call(this, value);
        // custom action.
      },
      configurable: true,
      enumerable: true,
    };
  }
}
```

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

`name`

</td>
<td>

`PropertyKey`

</td>
</tr>
<tr>
<td>

`key`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)

</td>
</tr>
</tbody>
</table>

#### Returns

`PropertyDescriptor` \| `undefined`

#### Nocollapse

#### Inherited from

`LitElement.getPropertyDescriptor`

---

### getPropertyOptions()

&gt; `static` **getPropertyOptions**(`name`: `PropertyKey`): [`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)\&lt;`unknown`, `unknown`\&gt;

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:434

Returns the property options associated with the given property.
These options are defined with a `PropertyDeclaration` via the `properties`
object or the `@property` decorator and are registered in
`createProperty(...)`.

Note, this method should be considered "final" and not overridden. To
customize the options for a given property, override
[`createProperty`](../BentoLayout/README.md#createproperty).

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

`name`

</td>
<td>

`PropertyKey`

</td>
</tr>
</tbody>
</table>

#### Returns

[`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)\&lt;`unknown`, `unknown`\&gt;

#### Nocollapse

#### Final

#### Inherited from

`LitElement.getPropertyOptions`

## rendering

### renderOptions

&gt; `readonly` **renderOptions**: `RenderOptions`

Defined in: node\_modules/.pnpm/lit-element@4.2.2/node\_modules/lit-element/development/lit-element.d.ts:88

#### Inherited from

`LitElement.renderOptions`

---

### renderRoot

&gt; `readonly` **renderRoot**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| [`DocumentFragment`](https://developer.mozilla.org/docs/Web/API/DocumentFragment)

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:491

Node or ShadowRoot into which element DOM should be rendered. Defaults
to an open shadowRoot.

#### Inherited from

[`SettingsCard`](../SettingsCard/README.md).[`renderRoot`](../SettingsCard/README.md#renderroot)

---

### shadowRootOptions

&gt; `static` **shadowRootOptions**: `ShadowRootInit`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:470

Options used when calling `attachShadow`. Set this property to customize
the options for the shadowRoot; for example, to create a closed
shadowRoot: `{mode: 'closed'}`.

Note, these options are used in `createRenderRoot`. If this method
is customized, options should be respected if possible.

#### Nocollapse

#### Inherited from

`LitElement.shadowRootOptions`

---

### createRenderRoot()

&gt; `protected` **createRenderRoot**(): [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| [`DocumentFragment`](https://developer.mozilla.org/docs/Web/API/DocumentFragment)

Defined in: node\_modules/.pnpm/lit-element@4.2.2/node\_modules/lit-element/development/lit-element.d.ts:93

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| [`DocumentFragment`](https://developer.mozilla.org/docs/Web/API/DocumentFragment)

#### Inherited from

`LitElement.createRenderRoot`

---

### render()

&gt; `protected` **render**(): `unknown`

Defined in: node\_modules/.pnpm/lit-element@4.2.2/node\_modules/lit-element/development/lit-element.d.ts:150

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

`unknown`

#### Inherited from

`LitElement.render`

## styles

### elementStyles

&gt; `static` **elementStyles**: `CSSResultOrNative`[]

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:331

Memoized list of all element styles.
Created lazily on user subclasses when finalizing the class.

#### Nocollapse

#### Inherited from

`LitElement.elementStyles`

---

### finalizeStyles()

&gt; `protected` `static` **finalizeStyles**(`styles?`: `CSSResultGroup`): `CSSResultOrNative`[]

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:485

Takes the styles the user supplied via the `static styles` property and
returns the array of styles to apply to the element.
Override this method to integrate into a style management system.

Styles are deduplicated preserving the _last_ instance in the list. This
is a performance optimization to avoid duplicated styles that can occur
especially when composing via subclassing. The last item is kept to try
to preserve the cascade order with the assumption that it's most important
that last added styles override previous styles.

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

`styles?`

</td>
<td>

`CSSResultGroup`

</td>
</tr>
</tbody>
</table>

#### Returns

`CSSResultOrNative`[]

#### Nocollapse

#### Inherited from

`LitElement.finalizeStyles`

## updates

### hasUpdated

&gt; **hasUpdated**: `boolean`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:509

Is set to `true` after the first update. The element code cannot assume
that `renderRoot` exists before the element `hasUpdated`.

#### Inherited from

`LitElement.hasUpdated`

---

### isUpdatePending

&gt; **isUpdatePending**: `boolean`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:503

True if there is a pending update as a result of calling `requestUpdate()`.
Should only be read.

#### Inherited from

`LitElement.isUpdatePending`

---

### updateComplete

#### Get Signature

&gt; **get** **updateComplete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`boolean`\&gt;

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:692

Returns a Promise that resolves when the element has completed updating.
The Promise value is a boolean that is `true` if the element completed the
update without triggering another update. The Promise result is `false` if
a property was set inside `updated()`. If the Promise is rejected, an
exception was thrown during the update.

To await additional asynchronous work, override the `getUpdateComplete`
method. For example, it is sometimes useful to await a rendered element
before fulfilling this Promise. To do this, first await
`super.getUpdateComplete()`, then any subsequent state.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`boolean`\&gt;

A promise of a boolean that resolves to true if the update completed
without triggering another update.

#### Inherited from

`LitElement.updateComplete`

---

### enableUpdating()

&gt; `protected` **enableUpdating**(`_requestedUpdate`: `boolean`): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:577

Note, this method should be considered final and not overridden. It is
overridden on the element instance with a function that triggers the first
update.

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

`_requestedUpdate`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.enableUpdating`

---

### firstUpdated()

&gt; `protected` **firstUpdated**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:763

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

#### Inherited from

`LitElement.firstUpdated`

---

### getUpdateComplete()

&gt; `protected` **getUpdateComplete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`boolean`\&gt;

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:716

Override point for the `updateComplete` promise.

It is not safe to override the `updateComplete` getter directly due to a
limitation in TypeScript which means it is not possible to call a
superclass getter (e.g. `super.updateComplete.then(...)`) when the target
language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
This method should be overridden instead. For example:

```ts
class MyElement extends LitElement {
  override async getUpdateComplete() {
    const result = await super.getUpdateComplete();
    await this._myChild.updateComplete;
    return result;
  }
}
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`boolean`\&gt;

A promise of a boolean that resolves to true if the update completed
without triggering another update.

#### Inherited from

`LitElement.getUpdateComplete`

---

### performUpdate()

&gt; `protected` **performUpdate**(): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:652

Performs an element update. Note, if an exception is thrown during the
update, `firstUpdated` and `updated` will not be called.

Call `performUpdate()` to immediately process a pending update. This should
generally not be needed, but it can be done in rare cases when you need to
update synchronously.

#### Returns

`void`

#### Inherited from

`LitElement.performUpdate`

---

### requestUpdate()

&gt; **requestUpdate**(`name?`: `PropertyKey`, `oldValue?`: `unknown`, `options?`: [`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)\&lt;`unknown`, `unknown`\&gt;, `useNewValue?`: `boolean`, `newValue?`: `unknown`): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:619

Requests an update which is processed asynchronously. This should be called
when an element should update based on some state not triggered by setting
a reactive property. In this case, pass no arguments. It should also be
called when manually implementing a property setter. In this case, pass the
property `name` and `oldValue` to ensure that any configured property
options are honored.

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

`name?`

</td>
<td>

`PropertyKey`

</td>
<td>

name of requesting property

</td>
</tr>
<tr>
<td>

`oldValue?`

</td>
<td>

`unknown`

</td>
<td>

old value of requesting property

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`PropertyDeclaration`](https://lit.dev/docs/api/ReactiveElement/#PropertyDeclaration)\&lt;`unknown`, `unknown`\&gt;

</td>
<td>

property options to use instead of the previously
configured options

</td>
</tr>
<tr>
<td>

`useNewValue?`

</td>
<td>

`boolean`

</td>
<td>

if true, the newValue argument is used instead of
reading the property value. This is important to use if the reactive
property is a standard private accessor, as opposed to a plain
property, since private members can't be dynamically read by name.

</td>
</tr>
<tr>
<td>

`newValue?`

</td>
<td>

`unknown`

</td>
<td>

the new value of the property. This is only used if
`useNewValue` is true.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.requestUpdate`

---

### scheduleUpdate()

&gt; `protected` **scheduleUpdate**(): `void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`unknown`\&gt;

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:641

Schedules an element update. You can override this method to change the
timing of updates by returning a Promise. The update will await the
returned Promise, and you should resolve the Promise to allow the update
to proceed. If this method is overridden, `super.scheduleUpdate()`
must be called.

For instance, to schedule updates to occur just before the next frame:

```ts
override protected async scheduleUpdate(): Promise<unknown> {
  await new Promise((resolve) =&gt; requestAnimationFrame(() =&gt; resolve()));
  super.scheduleUpdate();
}
```

#### Returns

`void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\&lt;`unknown`\&gt;

#### Inherited from

`LitElement.scheduleUpdate`

---

### shouldUpdate()

&gt; `protected` **shouldUpdate**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `boolean`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:725

Controls whether or not `update()` should be called when the element requests
an update. By default, this method always returns `true`, but this can be
customized to control when to update.

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

`boolean`

#### Inherited from

`LitElement.shouldUpdate`

---

### update()

&gt; `protected` **update**(`changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: node\_modules/.pnpm/lit-element@4.2.2/node\_modules/lit-element/development/lit-element.d.ts:101

Updates the element. This method reflects property values to attributes
and calls `render` to render DOM via lit-html. Setting properties inside
this method will _not_ trigger another update.

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

Map of changed properties with old values

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`LitElement.update`

---

### updated()

&gt; `protected` **updated**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:746

Invoked whenever the element is updated. Implement to perform
post-updating tasks via DOM APIs, for example, focusing an element.

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

#### Inherited from

`LitElement.updated`

---

### willUpdate()

&gt; `protected` **willUpdate**(`_changedProperties`: `PropertyValueMap`\&lt;`any`\&gt; \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\&lt;`PropertyKey`, `unknown`\&gt;): `void`

Defined in: node\_modules/.pnpm/@lit+reactive-element@2.1.2/node\_modules/@lit/reactive-element/development/reactive-element.d.ts:674

Invoked before `update()` to compute values needed during the update.

Implement `willUpdate` to compute property values that depend on other
properties and are used in the rest of the update process.

```ts
willUpdate(changedProperties) {
  // only need to check changed properties for an expensive computation.
  if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
    this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
  }
}

render() {
  return html`SHA: ${this.sha}`;
}
```

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

#### Inherited from

`LitElement.willUpdate`
</unknown></body></html>
