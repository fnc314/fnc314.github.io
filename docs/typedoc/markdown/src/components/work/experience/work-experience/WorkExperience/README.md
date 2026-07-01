<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.4**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/work/experience/work-experience](../README.md) / WorkExperience

# Class: WorkExperience

Defined in: [src/components/work/experience/work-experience.ts:24](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L24)

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/work/experience/work-experience.ts:26](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L26)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`UIAwareElement.styles`

---

### isNested

&gt; **isNested**: `boolean` = `false`

Defined in: [src/components/work/experience/work-experience.ts:33](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L33)

Whether this is a nested instance

---

### experienceRole

&gt; **experienceRole**: `string` = `""`

Defined in: [src/components/work/experience/work-experience.ts:37](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L37)

The formal role from the WorkExperience instance

---

### experienceOrg

&gt; **experienceOrg**: `string` = `""`

Defined in: [src/components/work/experience/work-experience.ts:41](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L41)

The employer formal name

---

### dateStart

&gt; **dateStart**: [`WorkDate`](#)

Defined in: [src/components/work/experience/work-experience.ts:48](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L48)

A [WorkDate](#) instance describing employment start date

---

### dateEnd

&gt; **dateEnd**: [`WorkDate`](#)

Defined in: [src/components/work/experience/work-experience.ts:52](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L52)

A [WorkDate](#) instance describing employment end date

---

### summaries

&gt; **summaries**: \{ `item`: `string`; \}[] = `[]`

Defined in: [src/components/work/experience/work-experience.ts:60](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L60)

An array of `{ item: string }` objects describing the responsibilities

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`item`

</td>
<td>

`string`

</td>
<td>

AUTO-DOC'd WITH GEMINI
The description of the responsibility or achievement.

</td>
<td>

[src/components/work/experience/work-experience.ts:65](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L65)

</td>
</tr>
</tbody>
</table>

---

### jobs

&gt; **jobs**: [`Job`](#)[] = `[]`

Defined in: [src/components/work/experience/work-experience.ts:70](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L70)

An array of [Job](#)s rendered as nested WorkExperience instances

---

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/work/experience/work-experience.ts:73](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/work/experience/work-experience.ts#L73)

Renders the experience entry, conditionally applying styles based on nesting level.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`UIAwareElement.render`

---

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:38](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L38)

The BreakpointLabel as determined by _SCREEN_ width against
Breakpoints.BREAKPOINT\_LABELS

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`breakpoint`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#breakpoint)

---

### touchScreen

&gt; `protected` **touchScreen**: `boolean`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:53](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L53)

Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from `:root`
and tests against `"true"`,

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`touchScreen`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#touchscreen)

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:59](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L59)

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

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`connectedCallback`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#connectedcallback)

---

### disconnectedCallback()

&gt; **disconnectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:65](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L65)

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

#### Inherited from

[`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md).[`disconnectedCallback`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md#disconnectedcallback)
</body></html>
