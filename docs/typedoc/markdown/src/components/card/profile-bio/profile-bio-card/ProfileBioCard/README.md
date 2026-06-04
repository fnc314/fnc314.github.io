<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/card/profile-bio/profile-bio-card](../README.md) / ProfileBioCard

# Class: ProfileBioCard

Defined in: [src/components/card/profile-bio/profile-bio-card.ts:17](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/profile-bio/profile-bio-card.ts#L17)

## Element

profile-bio-card

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/card/profile-bio/profile-bio-card.ts:84](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/profile-bio/profile-bio-card.ts#L84)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

## styles

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/card/profile-bio/profile-bio-card.ts:18](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/card/profile-bio/profile-bio-card.ts#L18)

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

`LitElement.styles`
</style></body></html>
