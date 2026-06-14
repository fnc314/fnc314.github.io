<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/code/repo/code-repo](../README.md) / CodeRepo

# Class: CodeRepo

Defined in: [src/components/code/repo/code-repo.ts:21](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.ts#L21)

An instance of a given `GitHub` repository project documented through
[CodeRepoData](../../code-repo.types/CodeRepoData/README.md) objects from `data/code.json`

## Export

CodeRepo

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- `UIAwareElement`

## Other

### codeRepo

&gt; **codeRepo**: [`CodeRepoData`](../../code-repo.types/CodeRepoData/README.md)

Defined in: [src/components/code/repo/code-repo.ts:24](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.ts#L24)

An instance of [CodeRepoData](../../code-repo.types/CodeRepoData/README.md)
to render

---

### wordTagSize

&gt; `protected` **wordTagSize**: [`WordTagSize`](../../code-repo.types/WordTagSize/README.md) = `WORD_TAG_SIZES.full`

Defined in: [src/components/code/repo/code-repo.ts:37](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.ts#L37)

Extraced by onWordTagSizeChange listener bound to the `resize` `Event`

[TransitionEvent](https://developer.mozilla.org/docs/Web/API/TransitionEvent)

---

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:38](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/mixins/ui-aware-element/ui-aware-element.ts#L38)

The BreakpointLabel as determined by _SCREEN_ width against
Breakpoints.BREAKPOINT_LABELS

#### Inherited from

`UIAwareElement.breakpoint`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:48](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/mixins/ui-aware-element/ui-aware-element.ts#L48)

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

`UIAwareElement.connectedCallback`

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/code/repo/code-repo.ts:94](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.ts#L94)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`UIAwareElement.render`

## styles

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/code/repo/code-repo.ts:26](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.ts#L26)

Array of styles to apply to the element. The styles should be defined
using the css tag function, via constructible stylesheets, or
imported from native CSS module scripts.

Note on Content Security Policy:

Element styles are implemented with `<style>` tags when the browser doesn't
support adopted StyleSheets. To use such `<style>` tags with the style-src
CSP directive, the style-src value must either include 'unsafe-inline' or
`nonce-<base64-value>` with `<base64-value>` replaced be a server-generated
nonce.

To provide a nonce to use on generated `<style>` elements, set
`window.litNonce` to a server-generated nonce in your page's HTML, before
loading application code:

```html
<script>
  // Generated and unique per request:
  window.litNonce = "a1b2c3d4";
</script>
```

#### Nocollapse

#### Overrides

`UIAwareElement.styles`

## updates

### firstUpdated()

> `protected` **firstUpdated**(`_changedProperties`: `PropertyValueMap`\<`any`\> \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`PropertyKey`, `unknown`\>): `void`

Defined in: [src/components/code/repo/code-repo.ts:71](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/repo/code-repo.ts#L71)

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

`PropertyValueMap`\<`any`\> \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`PropertyKey`, `unknown`\>

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

`UIAwareElement.firstUpdated`
</style></body></html>
