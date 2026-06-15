import { WORD_TAG_SIZES } from "@/components/code/repo/code-repo.types";
import { type CSSResult, css, unsafeCSS } from "lit";

/**
 * UNUSED {@link CSSResult} containing a `@property` declaration
 *   within `CSS` to track `@container` queries
 *
 * @type {CSSResult}
 */
export const CodeRepoStylesCustomCSSProperty: CSSResult = css`
  @property --code-repo-word-tag-size {
    /* 1. Use unsafeCSS for strings.
       2. Ensure the resulting CSS has quotes around the syntax value. */
    // syntax: "${unsafeCSS(`${WORD_TAG_SIZES.full} | ${WORD_TAG_SIZES.compact} | ${WORD_TAG_SIZES.condensed}`)}";
    syntax: "<custom-ident>";
    initial-value: ${unsafeCSS(WORD_TAG_SIZES.condensed)};
    inherits: false;
  }

  article {
    --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.full)};
    transition: --code-repo-word-tag-size 5ms ease-in-out;
  }

  @container code-repo-card (max-width: 500px) {
    article {
      --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.compact)};
    }
  }

  @container code-repo-card (max-width: 300px) {
    article {
      --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.condensed)};
    }
  }
`;