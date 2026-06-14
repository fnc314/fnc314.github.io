<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/word/word-cloud/word-cloud](../README.md) / WordCloud

# Class: WordCloud

Defined in: [src/components/word/word-cloud/word-cloud.ts:41](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L41)

A component that renders a cloud of words with various sorting and grouping options.

## Element

word-cloud

## Cssprop

[--word-cloud-animation=150ms] - Duration of the entrance animation for each word.

## Cssprop

[--word-cloud-animation-reduced=1ms] - Duration of the entrance animation when prefers-reduced-motion is active.

## Cssprop

[--word-cloud-first-quartile-font-size=1.75rem] - Font size for words in the first weight quartile (highest weight).

## Cssprop

[--word-cloud-first-quartile-line-height=1.75rem] - Line height for words in the first weight quartile.

## Cssprop

[--word-cloud-second-quartile-font-size=1.5rem] - Font size for words in the second weight quartile.

## Cssprop

[--word-cloud-second-quartile-line-height=1.5rem] - Line height for words in the second weight quartile.

## Cssprop

[--word-cloud-third-quartile-font-size=1.25rem] - Font size for words in the third weight quartile.

## Cssprop

[--word-cloud-third-quartile-line-height=1.25rem] - Line height for words in the third weight quartile.

## Cssprop

[--word-cloud-fourth-quartile-font-size=1rem] - Font size for words in the fourth weight quartile (lowest weight).

## Cssprop

[--word-cloud-fourth-quartile-line-height=1rem] - Line height for words in the fourth weight quartile.

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/word/word-cloud/word-cloud.ts:43](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L43)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### words

&gt; **words**: [`WordCloudWord`](#)[] = `[]`

Defined in: [src/components/word/word-cloud/word-cloud.ts:211](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L211)

The list of words to display in the cloud.

#### Attr

words

---

### instantClear

&gt; **instantClear**: `boolean` = `false`

Defined in: [src/components/word/word-cloud/word-cloud.ts:219](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L219)

Whether to clear the word cloud instantly when it is no longer visible.
When true, the cloud resets instantly to opacity 0 instead of fading out.

#### Attr

instant-clear

---

### appearance

&gt; **appearance**: `WordCloudAppearance` = `WordCloudAppearances.SEQUENTIAL`

Defined in: [src/components/word/word-cloud/word-cloud.ts:228](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L228)

Controls the order in which words are animated/displayed.

Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once).

#### Attr

appearance

---

### grouping

&gt; **grouping**: `WordCloudGrouping` = `WordCloudGroupings.UNGROUPED`

Defined in: [src/components/word/word-cloud/word-cloud.ts:237](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L237)

Controls how words are grouped together within the cloud.

Supported modes: 'category', 'quartile', or 'ungrouped'.

#### Attr

grouping

---

### sorting

&gt; **sorting**: `WordCloudSorting` = `WordCloudSortings.NONE`

Defined in: [src/components/word/word-cloud/word-cloud.ts:246](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L246)

Controls how words are sorted within their groupings.

Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'.

#### Attr

sorting

---

### delay

&gt; **delay**: `number` \| `"none"` = `"none"`

Defined in: [src/components/word/word-cloud/word-cloud.ts:255](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L255)

The delay in milliseconds between word appearances when using sequential mode.

Set to "none" to use the component's internal default delays.

#### Attr

delay

---

### threshold

&gt; **threshold**: `number` = `0.1`

Defined in: [src/components/word/word-cloud/word-cloud.ts:264](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L264)

The intersection observer threshold for visibility detection.

A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation.

#### Attr

threshold

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/word/word-cloud/word-cloud.ts:279](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L279)

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

Defined in: [src/components/word/word-cloud/word-cloud.ts:319](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L319)

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

Defined in: [src/components/word/word-cloud/word-cloud.ts:416](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L416)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

## updates

### updated()

&gt; **updated**(`changedProperties`: `PropertyValueMap`\&lt;`WordCloud`\&gt;): `void`

Defined in: [src/components/word/word-cloud/word-cloud.ts:284](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L284)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`changedProperties`

</td>
<td>

`PropertyValueMap`\&lt;`WordCloud`\&gt;

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Overrides

`LitElement.updated`

---

### firstUpdated()

&gt; **firstUpdated**(): `void`

Defined in: [src/components/word/word-cloud/word-cloud.ts:315](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/word/word-cloud/word-cloud.ts#L315)

Invoked when the element is first updated. Implement to perform one time
work on the element after update.

```ts
firstUpdated() {
  this.renderRoot.getElementById('my-text-area').focus();
}
```

Setting properties inside this method will trigger the element to update
again after this update cycle completes.

#### Returns

`void`

#### Overrides

`LitElement.firstUpdated`

</body></html>
