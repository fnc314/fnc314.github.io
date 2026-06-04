import { type CSSResult, css } from 'lit';

/**
 * Spacing tokens for the Bento Box UI.
 *
 * We provide two distinct sets of tokens to distinguish between
 * inner component space (padding) and outer layout space (margin/gap).
 *
 * @packageDocumentation
 */
export const spacingTokens: CSSResult = css`
  :root {
    --spacing-reset: 0;

    /* Padding Tokens (Inner spacing - Base 8) */
    --spacing-padding-xxs: 0.25rem; /* 4px */
    --spacing-padding-xs: 0.5rem;   /* 8px */
    --spacing-padding-s: 1rem;      /* 16px */
    --spacing-padding-m: 1.5rem;    /* 24px */
    --spacing-padding-l: 2rem;      /* 32px */
    --spacing-padding-xl: 3rem;     /* 48px */

    /*
      Margin Tokens (Outer spacing & Gaps - Base 6.4)
      Offset from padding to create a distinct layout rhythm
    */
    --spacing-margin-xxs: 0.2rem;   /* 3.2px */
    --spacing-margin-xs: 0.4rem;    /* 6.4px */
    --spacing-margin-s: 0.8rem;     /* 12.8px */
    --spacing-margin-m: 1.2rem;     /* 19.2px */
    --spacing-margin-l: 1.6rem;     /* 25.6px */
    --spacing-margin-xl: 2.4rem;    /* 38.4px */
  }
`;