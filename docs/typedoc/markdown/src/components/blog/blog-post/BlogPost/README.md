<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/blog/blog-post](../README.md) / BlogPost

# Class: BlogPost

Defined in: [src/components/blog/blog-post.ts:29](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/blog/blog-post.ts#L29)

## Cssprop

--blog-post-animation - The duration of the animation for `:focus`, `:hover`,
`:focus-within`, and `:focus-visible` states

## Cssprop

--blog-post-primary-text-color - The color of the primary text

## Cssprop

--blog-post-container-color - The color of the container, [@material/web!MdElevatedCard](https://github.com/material-components/material-web/blob/main/labs/card/elevated-card.ts)
and [@material/web!--md-elevated-card-container-color](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-elevated-card.scss#L20)

## See

BlogPostJson

## Export

BlogPost

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/blog/blog-post.ts:31](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/blog/blog-post.ts#L31)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/components/blog/blog-post.ts:197](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/blog/blog-post.ts#L197)

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

Defined in: [src/components/blog/blog-post.ts:202](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/blog/blog-post.ts#L202)

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

Defined in: [src/components/blog/blog-post.ts:207](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/blog/blog-post.ts#L207)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
