<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.4**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/word/cloud/word-cloud](../README.md) / WordCloud

# Class: WordCloud

Defined in: [src/components/word/cloud/word-cloud.ts:43](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L43)

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

- [`UIAwareElement`](../../../../../mixins/ui-aware-element/ui-aware-element/UIAwareElement/README.md)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/word/cloud/word-cloud.ts:45](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L45)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`UIAwareElement.styles`

---

### words

&gt; **words**: [`WordCloudWord`](#)[] = `[]`

Defined in: [src/components/word/cloud/word-cloud.ts:55](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L55)

The list of words to display in the cloud.

#### Attr

words

---

### instantClear

&gt; **instantClear**: `boolean` = `false`

Defined in: [src/components/word/cloud/word-cloud.ts:63](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L63)

Whether to clear the word cloud instantly when it is no longer visible.
When true, the cloud resets instantly to opacity 0 instead of fading out.

#### Attr

instant-clear

---

### appearance

&gt; **appearance**: `WordCloudAppearance` = `WordCloudAppearances.SEQUENTIAL`

Defined in: [src/components/word/cloud/word-cloud.ts:72](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L72)

Controls the order in which words are animated/displayed.

Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once).

#### Attr

appearance

---

### grouping

&gt; **grouping**: `WordCloudGrouping` = `WordCloudGroupings.UNGROUPED`

Defined in: [src/components/word/cloud/word-cloud.ts:81](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L81)

Controls how words are grouped together within the cloud.

Supported modes: 'category', 'quartile', or 'ungrouped'.

#### Attr

grouping

---

### sorting

&gt; **sorting**: `WordCloudSorting` = `WordCloudSortings.NONE`

Defined in: [src/components/word/cloud/word-cloud.ts:90](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L90)

Controls how words are sorted within their groupings.

Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'.

#### Attr

sorting

---

### delay

&gt; **delay**: `number` \| `"none"` = `"none"`

Defined in: [src/components/word/cloud/word-cloud.ts:99](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L99)

The delay in milliseconds between word appearances when using sequential mode.

Set to "none" to use the component's internal default delays.

#### Attr

delay

---

### threshold

&gt; **threshold**: `number` = `0.1`

Defined in: [src/components/word/cloud/word-cloud.ts:108](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L108)

The intersection observer threshold for visibility detection.

A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation.

#### Attr

threshold

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

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/word/cloud/word-cloud.ts:260](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L260)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`UIAwareElement.render`

## updates

### updated()

&gt; **updated**(`changedProperties`: `PropertyValueMap`\&lt;`WordCloud`\&gt;): `void`

Defined in: [src/components/word/cloud/word-cloud.ts:128](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L128)

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

`UIAwareElement.updated`

---

### firstUpdated()

&gt; **firstUpdated**(): `void`

Defined in: [src/components/word/cloud/word-cloud.ts:159](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/word/cloud/word-cloud.ts#L159)

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

`UIAwareElement.firstUpdated`
</body></html>
